(function () {
  const syllabusApi = window.Syllabus;

  if (!syllabusApi) {
    throw new Error('Syllabus API failed to load before topic page startup.');
  }

  const {
    buildTopicDetailData,
    renderLayerTree,
    filterLayerTree,
    layersToMarkdown,
    downloadMarkdown,
    renderStatusLegend,
    renderTopicStatusPicker,
    subscribeToTopicStatusChanges,
    getTopicResources,
    addTopicResource,
    removeTopicResource,
    subscribeToTopicResourceChanges,
    applyPageTheme,
    setAllLayersOpen
  } = syllabusApi;

  const params = new URLSearchParams(window.location.search);
  const topicId = params.get('topic');
  let detail = buildTopicDetailData(topicId);

  const root = document.getElementById('root');
  const searchInput = document.getElementById('search');
  const exportButton = document.getElementById('export-button');
  const collapseButton = document.getElementById('collapse-button');
  const backLink = document.getElementById('back-link');
  const heroTitle = document.getElementById('hero-title');
  const heroSummary = document.getElementById('hero-summary');
  const topicBrief = document.getElementById('topic-brief');
  const heroGrid = document.getElementById('hero-grid');
  const breadcrumbs = document.getElementById('breadcrumbs');
  const metaBar = document.getElementById('meta-bar');
  const topicStatusPicker = document.getElementById('topic-status-picker');
  const statusLegend = document.getElementById('status-legend');
  const resourceTools = document.getElementById('resource-tools');
  const resourceForm = document.getElementById('resource-form');
  const resourceLabelInput = document.getElementById('resource-label');
  const resourceUrlInput = document.getElementById('resource-url');
  const resourceSavedList = document.getElementById('resource-saved-list');
  const scrollTopBtn = document.getElementById('scroll-top');
  let allExpanded = false;

  function updateMeta(stats) {
    document.getElementById('meta-layers').textContent = `${stats.layers} layers`;
    document.getElementById('meta-sections').textContent = `${stats.sections} sections`;
    document.getElementById('meta-topics').textContent = `${stats.topics} topics`;
  }

  function renderBreadcrumbs(items) {
    breadcrumbs.innerHTML = '';

    items.forEach((item, index) => {
      if (index > 0) {
        const sep = document.createElement('span');
        sep.className = 'crumb-sep';
        sep.textContent = '›';
        breadcrumbs.appendChild(sep);
      }

      const node = item.href ? document.createElement('a') : document.createElement('span');
      node.className = item.href ? 'crumb-link' : '';
      node.textContent = item.label;
      if (item.href) {
        node.href = item.href;
      }
      breadcrumbs.appendChild(node);
    });
  }

  function renderHeroCards(cards) {
    heroGrid.innerHTML = '';

    cards.forEach(card => {
      const cardEl = document.createElement('div');
      cardEl.className = 'hero-card';

      const label = document.createElement('div');
      label.className = 'hero-card-label';
      label.textContent = card.label;

      const value = document.createElement('div');
      value.className = 'hero-card-value';
      value.textContent = card.value;

      cardEl.appendChild(label);
      cardEl.appendChild(value);
      heroGrid.appendChild(cardEl);
    });
  }

  function renderTopicBrief(lines) {
    topicBrief.innerHTML = '';

    (lines || []).forEach(line => {
      const item = document.createElement('div');
      item.className = 'topic-brief-line';

      const label = document.createElement('div');
      label.className = 'topic-brief-label';
      label.textContent = line.label;

      const text = document.createElement('div');
      text.className = 'topic-brief-text';
      text.textContent = line.text;

      item.appendChild(label);
      item.appendChild(text);
      topicBrief.appendChild(item);
    });
  }

  function renderNotFound() {
    document.title = 'Topic Not Found — AI Agent Systems';
    breadcrumbs.innerHTML = '';
    heroTitle.textContent = 'Topic not found';
    heroSummary.textContent = 'The requested topic route did not resolve to a valid syllabus node. Go back to the overview and pick a topic directly from the taxonomy.';
    topicBrief.innerHTML = '';
    heroGrid.innerHTML = '';
    metaBar.style.display = 'none';
    searchInput.style.display = 'none';
    resourceTools.hidden = true;
    root.innerHTML = '<div class="not-found"><h1>Invalid topic link</h1><p>This usually means the route was edited manually or the topic identifier no longer exists in the current shared syllabus data.</p></div>';
  }

  function exportMarkdown() {
    const markdown = layersToMarkdown(`${detail.entry.text} — Topic Detail`, detail.layers, [
      `Primary path: ${detail.entry.layer.title} / ${detail.entry.section.title}`,
      detail.summary,
      ...detail.brief.map(line => `${line.label}: ${line.text}`)
    ]);
    downloadMarkdown(`${detail.entry.text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'topic'}_detail.md`, markdown);
  }

  function refreshStatusUI() {
    if (!detail) {
      return;
    }

    renderTopicStatusPicker(topicStatusPicker, detail.entry.id);
    renderStatusLegend(statusLegend, {
      noteText: `Status colors track your progress. Environment colors follow the ${detail.theme.label} classification.`
    });
  }

  function renderSavedResources() {
    if (!detail) {
      return;
    }

    const savedResources = getTopicResources(detail.entry.id);
    resourceSavedList.innerHTML = '';

    if (!savedResources.length) {
      const empty = document.createElement('div');
      empty.className = 'resource-empty';
      empty.textContent = 'No personal links saved yet.';
      resourceSavedList.appendChild(empty);
      return;
    }

    savedResources.forEach(resource => {
      const item = document.createElement('div');
      item.className = 'resource-saved-item';

      const link = document.createElement('a');
      link.className = 'resource-saved-link';
      link.href = resource.url;
      link.target = '_blank';
      link.rel = 'noreferrer noopener';
      link.textContent = resource.label;

      const removeButton = document.createElement('button');
      removeButton.type = 'button';
      removeButton.className = 'resource-remove';
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        removeTopicResource(detail.entry.id, resource.id);
      });

      item.appendChild(link);
      item.appendChild(removeButton);
      resourceSavedList.appendChild(item);
    });
  }

  function mountResourceTools() {
    if (!detail) {
      resourceTools.hidden = true;
      return;
    }

    const resourcesLayer = root.querySelector('.l[data-layer-title="resources"] .l-inner');
    if (!resourcesLayer) {
      resourceTools.hidden = true;
      return;
    }

    resourceTools.hidden = false;
    resourcesLayer.appendChild(resourceTools);
  }

  function renderDetailTree() {
    detail = buildTopicDetailData(topicId);
    renderTopicBrief(detail.brief);
    renderHeroCards(detail.heroCards);
    renderLayerTree(root, detail.layers, { openAll: false, openFirstLayer: false });
    mountResourceTools();
    updateMeta(detail.stats);

    if (searchInput.value) {
      filterLayerTree(root, searchInput.value);
    } else if (allExpanded) {
      setAllLayersOpen(root, true);
    }
  }

  function updateFloatingControls() {
    const showScrollTop = window.scrollY > 400;
    scrollTopBtn.classList.toggle('visible', showScrollTop);
    collapseButton.classList.toggle('with-scroll-top', showScrollTop);
  }

  if (!detail) {
    renderNotFound();
  } else {
    document.title = `${detail.entry.text} — AI Agent Systems`;
    applyPageTheme(detail.theme);
    backLink.href = `index.html#topic-${detail.entry.id}`;
    heroTitle.textContent = detail.entry.text;
    heroSummary.textContent = detail.summary;
    renderBreadcrumbs(detail.breadcrumbs);
    renderHeroCards(detail.heroCards);
    renderDetailTree();
    refreshStatusUI();
    renderSavedResources();
    subscribeToTopicStatusChanges(refreshStatusUI);
    subscribeToTopicResourceChanges(event => {
      if (event.changedTopicId !== detail.entry.id) {
        return;
      }

      renderDetailTree();
      renderSavedResources();
    });

    searchInput.addEventListener('input', event => {
      filterLayerTree(root, event.target.value);
    });

    exportButton.addEventListener('click', exportMarkdown);

    collapseButton.addEventListener('click', () => {
      allExpanded = !allExpanded;
      setAllLayersOpen(root, allExpanded);
      collapseButton.textContent = allExpanded ? 'Collapse all' : 'Expand all';
    });

    resourceForm.addEventListener('submit', event => {
      event.preventDefault();
      resourceUrlInput.setCustomValidity('');

      const addedResource = addTopicResource(detail.entry.id, resourceLabelInput.value, resourceUrlInput.value);
      if (!addedResource) {
        resourceUrlInput.setCustomValidity('Enter a valid label and URL.');
        resourceUrlInput.reportValidity();
        return;
      }

      resourceLabelInput.value = '';
      resourceUrlInput.value = '';
      resourceLabelInput.focus();
    });
  }

  window.addEventListener('scroll', () => {
    updateFloatingControls();
  }, { passive: true });

  requestAnimationFrame(updateFloatingControls);

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}());

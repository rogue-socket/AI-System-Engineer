(function () {
  const syllabusApi = window.Syllabus;
  const startupApi = window.__SyllabusStartup || {};

  if (typeof startupApi.hasFailure === 'function' && startupApi.hasFailure()) {
    return;
  }

  if (!syllabusApi || !syllabusApi.data || typeof syllabusApi.renderLayerTree !== 'function' || typeof syllabusApi.filterLayerTree !== 'function' || typeof syllabusApi.wireHashFocus !== 'function') {
    if (typeof startupApi.failStartup === 'function') {
      startupApi.failStartup('Overview page failed to load.', 'The shared syllabus runtime is missing or incomplete on the overview page.');
      return;
    }

    throw new Error('Syllabus core API failed to load before index page startup.');
  }

  const {
    data,
    getStats,
    renderLayerTree,
    filterLayerTree,
    wireHashFocus,
    layersToMarkdown,
    downloadMarkdown,
    renderStatusLegend,
    subscribeToTopicStatusChanges,
    applyPageTheme,
    setAllLayersOpen
  } = syllabusApi;

  const root = document.getElementById('root');
  const searchInput = document.getElementById('search');
  const exportButton = document.getElementById('export-button');
  const statusLegend = document.getElementById('status-legend');
  const collapseButton = document.getElementById('collapse-button');
  const scrollTopBtn = document.getElementById('scroll-top');

  function updateMeta(stats) {
    document.getElementById('meta-layers').textContent = `${stats.layers} layers`;
    document.getElementById('meta-sections').textContent = `${stats.sections} sections`;
    document.getElementById('meta-topics').textContent = `${stats.topics} topics`;
  }

  function exportMarkdown() {
    const stats = getStats(data);
    const markdown = layersToMarkdown('AI Agent Systems — Syllabus', data, [
      `${stats.layers} layers · ${stats.sections} sections · ${stats.topics} topics`
    ]);
    downloadMarkdown('ai_agent_systems_syllabus.md', markdown);
  }

  function refreshStatusLegend() {
    renderStatusLegend(statusLegend, {
      noteText: 'Classification colors come from the layer taxonomy. Status colors are personal progress markers saved in your browser.'
    });
  }

  function hasAnyOpenItems() {
    return !!root.querySelector('.l.open, .sec.open');
  }

  function updateCollapseButtonState() {
    const anyOpen = hasAnyOpenItems();
    collapseButton.textContent = anyOpen ? 'Collapse all' : 'Expand all';
    collapseButton.setAttribute(
      'aria-label',
      anyOpen ? 'Collapse all layers and sections' : 'Expand all layers and sections'
    );
  }

  function updateFloatingControls() {
    const showScrollTop = window.scrollY > 400;
    scrollTopBtn.classList.toggle('visible', showScrollTop);
    collapseButton.classList.toggle('with-scroll-top', showScrollTop);
    updateCollapseButtonState();
  }

  applyPageTheme({ color: '#111111', bg: '#F3F4F6' });
  renderLayerTree(root, data, { anchorIds: true });
  updateMeta(getStats(data));
  wireHashFocus();
  refreshStatusLegend();
  subscribeToTopicStatusChanges(refreshStatusLegend);

  setAllLayersOpen(root, false);
  updateCollapseButtonState();

  exportButton.addEventListener('click', exportMarkdown);

  collapseButton.addEventListener('click', () => {
    setAllLayersOpen(root, !hasAnyOpenItems());
    updateCollapseButtonState();
  });

  root.addEventListener('click', event => {
    if (event.target.closest('.l-h, .sec-h')) {
      requestAnimationFrame(updateCollapseButtonState);
    }
  });

  window.addEventListener('scroll', () => {
    updateFloatingControls();
  }, { passive: true });

  searchInput.addEventListener('input', event => {
    filterLayerTree(root, event.target.value);
    updateCollapseButtonState();
  });

  window.addEventListener('hashchange', () => {
    requestAnimationFrame(updateCollapseButtonState);
  });

  requestAnimationFrame(updateFloatingControls);

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}());

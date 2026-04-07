(function () {
  const contentApi = window.__SyllabusContent || {};
  const { buildStructuredData, cloneTopic, dedupeStrings, topicText } = contentApi;

  if (!buildStructuredData || !cloneTopic || !dedupeStrings || !topicText) {
    throw new Error('Syllabus content failed to load before syllabus core.');
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  function createTopicId(layer, section, topic, layerIndex, sectionIndex, topicIndex) {
    // Allow visible topic labels to evolve without breaking stored progress or deep links.
    const idSource = topic.idSlug || topic.text;

    return [
      String(layer.id).padStart(2, '0'),
      slugify(layer.title),
      slugify(section.title),
      slugify(idSource),
      layerIndex,
      sectionIndex,
      topicIndex
    ].join('--');
  }

  function hydrateStructuredData(layers) {
    return layers.map((layer, layerIndex) => ({
      ...layer,
      layerIndex,
      anchorId: `l-${layerIndex}`,
      sections: layer.sections.map((section, sectionIndex) => {
        const sectionPrerequisites = dedupeStrings(section.prerequisites || []);

        return {
          ...section,
          prerequisites: sectionPrerequisites,
          sectionIndex,
          anchorId: `sec-${layerIndex}-${sectionIndex}`,
          sourceRefs: (section.sourceRefs || []).map(ref => ({ ...ref })),
          topics: section.topics.map((topic, topicIndex) => {
            const normalized = cloneTopic(topic);
            const id = createTopicId(layer, section, normalized, layerIndex, sectionIndex, topicIndex);
            const prerequisites = dedupeStrings([
              ...sectionPrerequisites,
              ...(normalized.prerequisites || []),
              ...section.topics.slice(Math.max(0, topicIndex - 2), topicIndex).map(topicText)
            ]).filter(prerequisite => prerequisite !== normalized.text).slice(0, 4);

            return {
              ...normalized,
              prerequisites,
              id,
              anchorId: `topic-${id}`,
              layerIndex,
              sectionIndex,
              topicIndex
            };
          })
        };
      })
    }));
  }

  const data = hydrateStructuredData(buildStructuredData());
  const TOPIC_STATUS_STORAGE_KEY = 'ai-agent-syllabus-topic-status-v1';
  const TOPIC_RESOURCE_STORAGE_KEY = 'ai-agent-syllabus-topic-resources-v1';
  const TOPIC_STATUS_ORDER = ['default', 'need-visit', 'learning', 'done'];
  const TOPIC_STATUS_DEFS = [
    { key: 'default', label: 'Default', shortLabel: 'Default', description: 'Not yet classified' },
    { key: 'need-visit', label: 'Need to visit', shortLabel: 'Need to visit', description: 'Planned for a later pass' },
    { key: 'learning', label: 'Learning', shortLabel: 'Learning', description: 'Currently studying' },
    { key: 'done', label: 'Done', shortLabel: 'Done', description: 'Finished or comfortable' }
  ];

  function sanitizeTopicStatus(status) {
    return TOPIC_STATUS_ORDER.includes(status) ? status : 'default';
  }

  function readStoredTopicStatuses() {
    try {
      const stored = window.localStorage.getItem(TOPIC_STATUS_STORAGE_KEY);
      if (!stored) {
        return {};
      }

      const parsed = JSON.parse(stored);
      if (!parsed || typeof parsed !== 'object') {
        return {};
      }

      return Object.fromEntries(
        Object.entries(parsed)
          .map(([topicId, status]) => [topicId, sanitizeTopicStatus(status)])
          .filter(([, status]) => status !== 'default')
      );
    } catch {
      return {};
    }
  }

  let topicStatuses = readStoredTopicStatuses();
  const topicStatusListeners = new Set();

  function writeStoredTopicStatuses() {
    try {
      window.localStorage.setItem(TOPIC_STATUS_STORAGE_KEY, JSON.stringify(topicStatuses));
    } catch {
      // Ignore storage write failures and continue with in-memory state.
    }
  }

  function getTopicStatusMeta(status) {
    return TOPIC_STATUS_DEFS.find(item => item.key === sanitizeTopicStatus(status)) || TOPIC_STATUS_DEFS[0];
  }

  function getTopicStatus(topicId) {
    return sanitizeTopicStatus(topicStatuses[topicId]);
  }

  function getNextTopicStatus(status) {
    const currentIndex = TOPIC_STATUS_ORDER.indexOf(sanitizeTopicStatus(status));
    return TOPIC_STATUS_ORDER[(currentIndex + 1) % TOPIC_STATUS_ORDER.length];
  }

  function syncTopicStatusUI(scope = document) {
    if (!scope || !scope.querySelectorAll) {
      return;
    }

    scope.querySelectorAll('.topic-token[data-topic-id]').forEach(token => {
      const status = getTopicStatus(token.dataset.topicId);
      const meta = getTopicStatusMeta(status);
      token.dataset.status = status;
      token.title = `${meta.label}: ${meta.description}`;
    });

    scope.querySelectorAll('.topic-status-control[data-topic-id]').forEach(button => {
      const status = getTopicStatus(button.dataset.topicId);
      const meta = getTopicStatusMeta(status);
      const nextMeta = getTopicStatusMeta(getNextTopicStatus(status));
      button.dataset.status = status;
      button.setAttribute('aria-label', `${meta.label}. Click to change status to ${nextMeta.label}.`);
      button.title = `${meta.label}. Click to change status to ${nextMeta.label}.`;
    });

    scope.querySelectorAll('.status-choice[data-topic-id]').forEach(button => {
      const currentStatus = getTopicStatus(button.dataset.topicId);
      const isActive = currentStatus === button.dataset.status;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function notifyTopicStatusListeners(changedTopicId) {
    if (typeof document !== 'undefined') {
      syncTopicStatusUI(document);
    }

    const snapshot = { ...topicStatuses };
    topicStatusListeners.forEach(listener => {
      listener({ changedTopicId, statuses: snapshot });
    });
  }

  function setTopicStatus(topicId, status) {
    if (!topicId) {
      return 'default';
    }

    const nextStatus = sanitizeTopicStatus(status);
    if (nextStatus === 'default') {
      delete topicStatuses[topicId];
    } else {
      topicStatuses[topicId] = nextStatus;
    }

    writeStoredTopicStatuses();
    notifyTopicStatusListeners(topicId);
    return nextStatus;
  }

  function cycleTopicStatus(topicId) {
    return setTopicStatus(topicId, getNextTopicStatus(getTopicStatus(topicId)));
  }

  function subscribeToTopicStatusChanges(listener) {
    topicStatusListeners.add(listener);
    return () => topicStatusListeners.delete(listener);
  }

  function normalizeResourceUrl(url) {
    const value = String(url || '').trim();
    if (!value) {
      return null;
    }

    const normalized = /^https?:\/\//i.test(value) ? value : `https://${value}`;

    try {
      const parsed = new URL(normalized);
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        return null;
      }
      return parsed.toString();
    } catch {
      return null;
    }
  }

  function sanitizeTopicResource(resource) {
    if (!resource || typeof resource !== 'object') {
      return null;
    }

    const url = normalizeResourceUrl(resource.url);
    const label = String(resource.label || '').trim();
    if (!url || !label) {
      return null;
    }

    return {
      id: String(resource.id || `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`),
      label,
      url
    };
  }

  function cloneTopicResources(resources = []) {
    return resources.map(resource => ({ ...resource }));
  }

  function readStoredTopicResources() {
    try {
      const stored = window.localStorage.getItem(TOPIC_RESOURCE_STORAGE_KEY);
      if (!stored) {
        return {};
      }

      const parsed = JSON.parse(stored);
      if (!parsed || typeof parsed !== 'object') {
        return {};
      }

      return Object.fromEntries(
        Object.entries(parsed)
          .map(([topicId, resources]) => [
            topicId,
            Array.isArray(resources)
              ? resources.map(sanitizeTopicResource).filter(Boolean)
              : []
          ])
          .filter(([, resources]) => resources.length)
      );
    } catch {
      return {};
    }
  }

  let topicResources = readStoredTopicResources();
  const topicResourceListeners = new Set();

  function writeStoredTopicResources() {
    try {
      window.localStorage.setItem(TOPIC_RESOURCE_STORAGE_KEY, JSON.stringify(topicResources));
    } catch {
      // Ignore storage write failures and continue with in-memory state.
    }
  }

  function getTopicResources(topicId) {
    return cloneTopicResources(topicResources[topicId] || []);
  }

  function notifyTopicResourceListeners(changedTopicId) {
    const snapshot = Object.fromEntries(
      Object.entries(topicResources).map(([topicId, resources]) => [topicId, cloneTopicResources(resources)])
    );

    topicResourceListeners.forEach(listener => {
      listener({
        changedTopicId,
        resources: getTopicResources(changedTopicId),
        allResources: snapshot
      });
    });
  }

  function addTopicResource(topicId, label, url) {
    if (!topicId) {
      return null;
    }

    const normalizedUrl = normalizeResourceUrl(url);
    const normalizedLabel = String(label || '').trim();
    if (!normalizedUrl || !normalizedLabel) {
      return null;
    }

    const existing = getTopicResources(topicId);
    const duplicate = existing.find(resource => resource.url === normalizedUrl);
    if (duplicate) {
      return duplicate;
    }

    const nextResource = {
      id: `resource_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
      label: normalizedLabel,
      url: normalizedUrl
    };

    topicResources[topicId] = [...existing, nextResource];
    writeStoredTopicResources();
    notifyTopicResourceListeners(topicId);
    return nextResource;
  }

  function removeTopicResource(topicId, resourceId) {
    if (!topicId || !resourceId) {
      return false;
    }

    const existing = getTopicResources(topicId);
    const nextResources = existing.filter(resource => resource.id !== resourceId);
    if (nextResources.length === existing.length) {
      return false;
    }

    if (nextResources.length) {
      topicResources[topicId] = nextResources;
    } else {
      delete topicResources[topicId];
    }

    writeStoredTopicResources();
    notifyTopicResourceListeners(topicId);
    return true;
  }

  function subscribeToTopicResourceChanges(listener) {
    topicResourceListeners.add(listener);
    return () => topicResourceListeners.delete(listener);
  }

  function hexToRgba(hex, alpha) {
    const normalized = String(hex || '').replace('#', '').trim();
    const short = normalized.length === 3;
    const expanded = short
      ? normalized.split('').map(char => `${char}${char}`).join('')
      : normalized;

    if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
      return `rgba(17, 17, 17, ${alpha})`;
    }

    const int = Number.parseInt(expanded, 16);
    const red = (int >> 16) & 255;
    const green = (int >> 8) & 255;
    const blue = int & 255;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function applyPageTheme(theme = {}) {
    if (typeof document === 'undefined') {
      return;
    }

    const color = theme.color || '#111111';
    const bg = theme.bg || '#F3F4F6';
    document.body.style.setProperty('--page-theme', color);
    document.body.style.setProperty('--page-tint', bg);
    document.body.style.setProperty('--page-accent', hexToRgba(color, 0.09));
    document.body.style.setProperty('--theme-line', hexToRgba(color, 0.18));
  }

  const topicEntries = [];
  const topicEntryMap = new Map();
  const topicEntryTextMap = new Map();
  const sectionEntryMap = new Map();

  data.forEach((layer, layerIndex) => {
    layer.sections.forEach((section, sectionIndex) => {
      const key = `${layerIndex}:${sectionIndex}`;
      const entries = section.topics.map((topic, topicIndex) => {
        const entry = {
          id: topic.id,
          text: topic.text,
          isNew: topic.isNew,
          topic,
          layer,
          section,
          layerIndex,
          sectionIndex,
          topicIndex
        };
        topicEntries.push(entry);
        topicEntryMap.set(entry.id, entry);
        if (!topicEntryTextMap.has(entry.text)) {
          topicEntryTextMap.set(entry.text, entry);
        }
        return entry;
      });
      sectionEntryMap.set(key, entries);
    });
  });

  const allTopicIds = topicEntries.map(entry => entry.id);

  function getTopicStatusCounts(topicIds = allTopicIds) {
    return TOPIC_STATUS_ORDER.map(status => ({
      status,
      count: topicIds.reduce((total, topicId) => total + (getTopicStatus(topicId) === status ? 1 : 0), 0)
    }));
  }

  function getStats(layers) {
    return layers.reduce((stats, layer) => {
      stats.layers += 1;
      stats.sections += layer.sections.length;
      stats.topics += layer.sections.reduce((total, section) => total + section.topics.length, 0);
      return stats;
    }, { layers: 0, sections: 0, topics: 0 });
  }

  function getSectionEntries(layerIndex, sectionIndex) {
    return sectionEntryMap.get(`${layerIndex}:${sectionIndex}`) || [];
  }

  function getTopicEntryById(topicId) {
    return topicEntryMap.get(topicId) || null;
  }

  function getTopicEntryByText(text) {
    return topicEntryTextMap.get(text) || null;
  }

  function getTopicHref(topicId) {
    return `topic.html?topic=${encodeURIComponent(topicId)}`;
  }

  function getIndexAnchorHref(topicId) {
    return `index.html#topic-${topicId}`;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getRenderablePrerequisites(prerequisites = []) {
    return dedupeStrings(prerequisites).slice(0, 4).map(text => {
      const entry = getTopicEntryByText(text);
      return {
        text,
        href: entry ? getTopicHref(entry.id) : null,
        topicId: entry ? entry.id : null
      };
    });
  }

  function getRenderableTopic(topic) {
    if (typeof topic === 'string') {
      return {
        kind: 'default',
        text: topic,
        description: '',
        prompt: '',
        actionLabel: '',
        isNew: false,
        href: null,
        anchorId: null,
        current: false,
        topicId: null,
        status: 'default',
        prerequisites: [],
        prerequisiteNote: ''
      };
    }

    const topicId = topic.id || topic.topicId || null;
    const prerequisites = getRenderablePrerequisites(topic.prerequisites || []);
    return {
      kind: topic.kind || 'default',
      text: topic.text,
      description: topic.description || '',
      prompt: topic.prompt || '',
      actionLabel: topic.actionLabel || '',
      isNew: !!topic.isNew,
      href: topic.href || (topic.id ? getTopicHref(topic.id) : null),
      anchorId: topic.anchorId || (topic.id ? `topic-${topic.id}` : null),
      current: !!topic.current,
      topicId,
      status: topicId ? getTopicStatus(topicId) : 'default',
      prerequisites,
      prerequisiteNote: topicId && !prerequisites.length ? 'Entry point for this section' : ''
    };
  }

  function getRenderableMetaPair(renderable) {
    if (!renderable || renderable.kind !== 'default' || renderable.href || renderable.prerequisites.length || renderable.prerequisiteNote) {
      return null;
    }

    const match = renderable.text.match(/^([^:]{2,48})\s*:\s+(.+)$/);
    if (!match) {
      return null;
    }

    return {
      label: match[1].trim(),
      value: match[2].trim()
    };
  }

  function fallbackCopyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    let copied = false;
    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }

    document.body.removeChild(textarea);
    return copied;
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text)
        .then(() => true)
        .catch(() => fallbackCopyTextToClipboard(text));
    }

    return Promise.resolve(fallbackCopyTextToClipboard(text));
  }

  function renderTopicToken(renderable, options = {}) {
    const wrapper = document.createElement('div');
    wrapper.className = 'topic-token';
    wrapper.dataset.text = [renderable.text, renderable.description, renderable.prompt].filter(Boolean).join(' ').toLowerCase();
    wrapper.dataset.prereqs = renderable.prerequisites.map(item => item.text.toLowerCase()).join(' ');
    wrapper.dataset.status = renderable.status;
    if (renderable.topicId) {
      wrapper.dataset.topicId = renderable.topicId;
    }
    if (options.anchorIds && renderable.anchorId) {
      wrapper.id = renderable.anchorId;
    }

    if (renderable.kind === 'prompt') {
      wrapper.classList.add('prompt-token');

      const head = document.createElement('div');
      head.className = 'prompt-head';

      const info = document.createElement('div');
      info.className = 'prompt-info';

      const label = document.createElement('div');
      label.className = 'prompt-label';
      label.textContent = renderable.text;
      info.appendChild(label);

      if (renderable.description) {
        const description = document.createElement('div');
        description.className = 'prompt-description';
        description.textContent = renderable.description;
        info.appendChild(description);
      }

      const copyButton = document.createElement('button');
      copyButton.type = 'button';
      copyButton.className = 'prompt-copy-button';
      copyButton.textContent = renderable.actionLabel || 'Copy prompt';
      const defaultLabel = copyButton.textContent;
      let resetTimer = null;

      copyButton.addEventListener('click', () => {
        copyTextToClipboard(renderable.prompt).then(copied => {
          window.clearTimeout(resetTimer);
          copyButton.dataset.state = copied ? 'copied' : 'error';
          copyButton.textContent = copied ? 'Copied' : 'Copy failed';
          resetTimer = window.setTimeout(() => {
            copyButton.dataset.state = '';
            copyButton.textContent = defaultLabel;
          }, 1600);
        });
      });

      head.appendChild(info);
      head.appendChild(copyButton);
      wrapper.appendChild(head);

      const body = document.createElement('pre');
      body.className = 'prompt-body';
      body.textContent = renderable.prompt;
      wrapper.appendChild(body);

      return wrapper;
    }

    const head = document.createElement('div');
    head.className = 'topic-head';
    const node = renderable.href ? document.createElement('a') : document.createElement('span');
    node.className = `${renderable.isNew ? 't-new' : 't'}${renderable.href ? ' t-link' : ''}${renderable.current ? ' t-current' : ''}`;
    if (renderable.href) {
      node.href = renderable.href;
    }

    if (renderable.isNew) {
      const dot = document.createElement('span');
      dot.className = 't-new-dot';
      node.appendChild(dot);
      node.appendChild(document.createTextNode(renderable.text));
    } else {
      node.textContent = renderable.text;
    }

    head.appendChild(node);

    if (renderable.topicId && options.showStatusControls !== false) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'topic-status-control';
      button.dataset.topicId = renderable.topicId;
      button.dataset.status = renderable.status;
      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        cycleTopicStatus(renderable.topicId);
      });
      head.appendChild(button);
    }

    wrapper.appendChild(head);

    if (options.showPrerequisites !== false && (renderable.prerequisites.length || renderable.prerequisiteNote)) {
      const prerequisites = document.createElement('div');
      prerequisites.className = 'topic-prereqs';

      const label = document.createElement('span');
      label.className = 'topic-prereq-label';
      label.textContent = 'Prereqs';
      prerequisites.appendChild(label);

      if (renderable.prerequisites.length) {
        renderable.prerequisites.forEach(item => {
          const prerequisiteNode = item.href ? document.createElement('a') : document.createElement('span');
          prerequisiteNode.className = item.href ? 'topic-prereq topic-prereq-link' : 'topic-prereq';
          prerequisiteNode.textContent = item.text;
          if (item.href) {
            prerequisiteNode.href = item.href;
          }
          prerequisites.appendChild(prerequisiteNode);
        });
      } else if (renderable.prerequisiteNote) {
        const note = document.createElement('span');
        note.className = 'topic-prereq-empty';
        note.textContent = renderable.prerequisiteNote;
        prerequisites.appendChild(note);
      }

      wrapper.appendChild(prerequisites);
    }

    return wrapper;
  }

  function renderMetaTable(metaRows) {
    const table = document.createElement('table');
    table.className = 'meta-table';

    const body = document.createElement('tbody');
    metaRows.forEach(rowItem => {
      const row = document.createElement('tr');
      row.className = 'meta-row';
      row.dataset.text = `${rowItem.metaPair.label} ${rowItem.metaPair.value}`.toLowerCase();

      const labelCell = document.createElement('th');
      labelCell.scope = 'row';
      labelCell.textContent = rowItem.metaPair.label;

      const valueCell = document.createElement('td');
      valueCell.textContent = rowItem.metaPair.value;

      row.appendChild(labelCell);
      row.appendChild(valueCell);
      body.appendChild(row);
    });

    table.appendChild(body);
    return table;
  }

  function setLayerOpenState(layerEl, isOpen) {
    layerEl.classList.toggle('open', isOpen);
    const control = layerEl.querySelector('.l-h');
    if (control) {
      control.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }

  function setSectionOpenState(sectionEl, isOpen) {
    sectionEl.classList.toggle('open', isOpen);
    const control = sectionEl.querySelector('.sec-h');
    if (control) {
      control.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }

  function renderLayerTree(root, layers, options = {}) {
    root.innerHTML = '';

    layers.forEach((layer, layerIndex) => {
      const totalTopics = layer.sections.reduce((count, section) => count + section.topics.length, 0);
      const shouldDefaultOpenLayer = options.openAll || (options.openFirstLayer !== false && layerIndex === 0);
      const layerEl = document.createElement('div');
      layerEl.className = 'l';
      layerEl.id = layer.anchorId || `l-${layer.id}`;
      layerEl.style.setProperty('--layer-color', layer.color || '#111111');
      layerEl.style.setProperty('--layer-bg', layer.bg || '#FFFFFF');
      layerEl.style.setProperty('--layer-shadow', hexToRgba(layer.color || '#111111', 0.08));
      layerEl.dataset.layerTitle = (layer.title || '').toLowerCase();
      layerEl.dataset.layerScope = (layer.scope || '').toLowerCase();
      layerEl.dataset.layerKind = (layer.kind || '').toLowerCase();
      layerEl.dataset.defaultOpen = shouldDefaultOpenLayer ? 'true' : 'false';

      if (shouldDefaultOpenLayer) {
        setLayerOpenState(layerEl, true);
      }

      const layerHeader = document.createElement('button');
      layerHeader.type = 'button';
      layerHeader.className = 'l-h';
      layerHeader.setAttribute('aria-expanded', shouldDefaultOpenLayer ? 'true' : 'false');
      layerHeader.innerHTML = `<span class="l-accent" style="background:${escapeHtml(layer.color || '#111')}"></span>
        <span class="l-n">${escapeHtml(String(layer.id).padStart(2, '0'))}</span>
        <span class="l-copy">
          <span class="l-t">${escapeHtml(layer.title || '')}</span>
          <span class="l-s">${escapeHtml(layer.scope || '')}</span>
        </span>
        <span class="l-meta">${escapeHtml(String(layer.sections.length))} sec · ${escapeHtml(String(totalTopics))} topics</span>
        <span class="l-arrow">▶</span>`;
      layerHeader.addEventListener('click', () => {
        setLayerOpenState(layerEl, !layerEl.classList.contains('open'));
      });
      layerEl.appendChild(layerHeader);

      const layerBody = document.createElement('div');
      layerBody.className = 'l-b';
      layerBody.id = `${layerEl.id}-body`;
      layerHeader.setAttribute('aria-controls', layerBody.id);
      const layerInner = document.createElement('div');
      layerInner.className = 'l-inner';

      layer.sections.forEach((section, sectionIndex) => {
        const shouldDefaultOpenSection = options.openAll || (options.openFirstLayer !== false && layerIndex === 0);
        const sectionEl = document.createElement('div');
        sectionEl.className = 'sec';
        sectionEl.id = section.anchorId;
        sectionEl.dataset.sectionTitle = (section.title || '').toLowerCase();
        sectionEl.dataset.defaultOpen = shouldDefaultOpenSection ? 'true' : 'false';

        if (shouldDefaultOpenSection) {
          setSectionOpenState(sectionEl, true);
        }

        const sectionHeader = document.createElement('button');
        sectionHeader.type = 'button';
        sectionHeader.className = 'sec-h';
        sectionHeader.setAttribute('aria-expanded', shouldDefaultOpenSection ? 'true' : 'false');
        sectionHeader.innerHTML = `<span class="sec-arrow">▶</span>
          <span class="sec-t">${escapeHtml(section.title || '')}</span>
          <span class="sec-c">${escapeHtml(String(section.topics.length))}</span>`;
        sectionHeader.addEventListener('click', event => {
          event.stopPropagation();
          setSectionOpenState(sectionEl, !sectionEl.classList.contains('open'));
        });
        sectionEl.appendChild(sectionHeader);

        const sectionBody = document.createElement('div');
        sectionBody.className = 'sec-b';
        sectionBody.id = `${section.anchorId}-body`;
        sectionHeader.setAttribute('aria-controls', sectionBody.id);
        const sectionInner = document.createElement('div');
        sectionInner.className = 'sec-inner';
        const renderables = section.topics.map(getRenderableTopic);
        const metaRows = renderables
          .map(renderable => ({ renderable, metaPair: getRenderableMetaPair(renderable) }))
          .filter(item => item.metaPair);
        const useMetaTable = metaRows.length >= 2;

        if (useMetaTable) {
          sectionInner.appendChild(renderMetaTable(metaRows));
        }

        const topicRenderables = useMetaTable
          ? renderables.filter(renderable => !getRenderableMetaPair(renderable))
          : renderables;

        if (topicRenderables.length) {
          const topicsEl = document.createElement('div');
          topicsEl.className = 'topics';

          topicRenderables.forEach(renderable => {
            topicsEl.appendChild(renderTopicToken(renderable, options));
          });

          sectionInner.appendChild(topicsEl);
        }

        sectionBody.appendChild(sectionInner);
        sectionEl.appendChild(sectionBody);
        layerInner.appendChild(sectionEl);
      });

      layerBody.appendChild(layerInner);
      layerEl.appendChild(layerBody);
      root.appendChild(layerEl);
    });

    syncTopicStatusUI(root.ownerDocument || document);
  }

  function filterLayerTree(root, query) {
    const value = query.toLowerCase().trim();

    root.querySelectorAll('.l').forEach(layerEl => {
      const layerTitle = layerEl.dataset.layerTitle || '';
      const layerScope = layerEl.dataset.layerScope || '';
      const layerKind = layerEl.dataset.layerKind || '';
      let layerHit = false;

      layerEl.querySelectorAll('.sec').forEach(sectionEl => {
        const sectionTitle = sectionEl.dataset.sectionTitle || '';
        const titleHit = !value || sectionTitle.includes(value) || layerTitle.includes(value) || layerScope.includes(value) || layerKind.includes(value);
        let sectionHit = false;

        sectionEl.querySelectorAll('.topic-token, .meta-row').forEach(itemEl => {
          const text = itemEl.dataset.text || '';
          const prereqs = itemEl.dataset.prereqs || '';
          const hit = !value || titleHit || text.includes(value) || prereqs.includes(value);
          itemEl.classList.toggle('faded', !hit && !!value);
          if (hit) {
            sectionHit = true;
          }
        });

        sectionEl.classList.toggle('faded', !sectionHit && !!value);
        if (value) {
          setSectionOpenState(sectionEl, sectionHit);
        } else {
          setSectionOpenState(sectionEl, sectionEl.dataset.defaultOpen === 'true');
        }

        if (sectionHit) {
          layerHit = true;
        }
      });

      layerEl.classList.toggle('faded', !layerHit && !!value);
      if (value) {
        setLayerOpenState(layerEl, layerHit);
      } else {
        setLayerOpenState(layerEl, layerEl.dataset.defaultOpen === 'true');
      }
    });
  }

  function focusTreeTarget(targetId) {
    if (!targetId) {
      return false;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      return false;
    }

    const section = target.closest('.sec');
    const layer = target.closest('.l');
    if (layer) {
      setLayerOpenState(layer, true);
    }
    if (section) {
      setSectionOpenState(section, true);
    }

    target.scrollIntoView({ block: 'center' });
    return true;
  }

  function applyHashFocus() {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, '').trim());
    if (!hash) {
      return;
    }
    focusTreeTarget(hash);
  }

  function wireHashFocus() {
    window.addEventListener('hashchange', applyHashFocus);
    requestAnimationFrame(applyHashFocus);
  }

  function layersToMarkdown(title, layers, summaryLines = []) {
    let md = `# ${title}\n\n`;

    summaryLines.forEach(line => {
      md += `> ${line}\n`;
    });

    if (summaryLines.length) {
      md += '\n';
    }

    layers.forEach(layer => {
      const layerHeading = typeof layer.id === 'number' ? `${layer.id}. ${layer.title}` : layer.title;
      md += `## ${layerHeading}\n\n`;
      if (layer.kind || layer.scope) {
        md += `> ${[layer.kind, layer.scope].filter(Boolean).join(' · ')}\n\n`;
      }

      layer.sections.forEach(section => {
        md += `### ${section.title}\n\n`;
        if (section.prerequisites && section.prerequisites.length) {
          md += `> Prerequisites: ${section.prerequisites.join(' · ')}\n\n`;
        }
        section.topics.forEach(topic => {
          const renderable = getRenderableTopic(topic);
          if (renderable.kind === 'prompt') {
            md += `${renderable.text}\n\n`;
            if (renderable.description) {
              md += `> ${renderable.description}\n\n`;
            }
            md += '```text\n';
            md += `${renderable.prompt.replace(/\n+$/g, '')}\n`;
            md += '```\n\n';
            return;
          }

          md += renderable.href
            ? `- [${renderable.text}](${renderable.href})${renderable.isNew ? ' *(new)*' : ''}\n`
            : `- ${renderable.text}${renderable.isNew ? ' *(new)*' : ''}\n`;
          if (renderable.prerequisites.length) {
            md += `  - Prerequisites: ${renderable.prerequisites.map(item => item.text).join(' · ')}\n`;
          }
        });
        md += '\n';
      });
    });

    return md;
  }

  function downloadMarkdown(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function renderStatusLegend(container, options = {}) {
    if (!container) {
      return;
    }

    const noteText = options.noteText || 'Click the status marker beside any topic to cycle its learning status.';
    const counts = getTopicStatusCounts(options.topicIds || allTopicIds);
    container.innerHTML = '';

    const note = document.createElement('div');
    note.className = 'status-note';
    note.textContent = noteText;
    container.appendChild(note);

    const items = document.createElement('div');
    items.className = 'status-items';

    counts.forEach(item => {
      const meta = getTopicStatusMeta(item.status);
      const pill = document.createElement('div');
      pill.className = 'status-item';
      pill.dataset.status = item.status;
      pill.innerHTML = `<span class="status-swatch"></span><span class="status-label">${escapeHtml(meta.shortLabel)}</span><span class="status-count">${escapeHtml(String(item.count))}</span>`;
      items.appendChild(pill);
    });

    container.appendChild(items);
  }

  function renderTopicStatusPicker(container, topicId) {
    if (!container || !topicId) {
      return;
    }

    container.innerHTML = '';
    const currentStatus = getTopicStatus(topicId);

    const label = document.createElement('div');
    label.className = 'status-picker-label';
    label.textContent = 'Mark this topic';
    container.appendChild(label);

    const picker = document.createElement('div');
    picker.className = 'status-picker';

    TOPIC_STATUS_DEFS.forEach(meta => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'status-choice';
      button.dataset.topicId = topicId;
      button.dataset.status = meta.key;
      button.innerHTML = `<span class="status-swatch"></span><span>${escapeHtml(meta.label)}</span>`;
      button.classList.toggle('is-active', currentStatus === meta.key);
      button.setAttribute('aria-pressed', currentStatus === meta.key ? 'true' : 'false');
      button.addEventListener('click', () => {
        setTopicStatus(topicId, meta.key);
      });
      picker.appendChild(button);
    });

    container.appendChild(picker);
    syncTopicStatusUI(container.ownerDocument || document);
  }

  function setAllLayersOpen(root, isOpen) {
    root.querySelectorAll('.l').forEach(function (layerEl) {
      setLayerOpenState(layerEl, isOpen);
      layerEl.querySelectorAll('.sec').forEach(function (sectionEl) {
        setSectionOpenState(sectionEl, isOpen);
      });
    });
  }

  window.__SyllabusCore = {
    data,
    topicEntries,
    getStats,
    getTopicStatus,
    setTopicStatus,
    cycleTopicStatus,
    subscribeToTopicStatusChanges,
    getTopicResources,
    addTopicResource,
    removeTopicResource,
    subscribeToTopicResourceChanges,
    syncTopicStatusUI,
    renderStatusLegend,
    renderTopicStatusPicker,
    applyPageTheme,
    renderLayerTree,
    filterLayerTree,
    wireHashFocus,
    layersToMarkdown,
    downloadMarkdown,
    getTopicHref,
    getIndexAnchorHref,
    getTopicEntryById,
    getTopicEntryByText,
    getSectionEntries,
    setAllLayersOpen
  };
}());


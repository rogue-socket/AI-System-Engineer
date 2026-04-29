(function () {
  const contentApi = window.__SyllabusContent || {};
  const coreApi = window.__SyllabusCore || {};
  const startupApi = window.__SyllabusStartup || {};
  const rawData = contentApi.rawData;
  const topicEntries = coreApi.topicEntries;
  const data = coreApi.data;

  if (!Array.isArray(rawData) || !Array.isArray(topicEntries) || !Array.isArray(data)) {
    throw new Error('Syllabus validation failed to load after the shared data/core modules.');
  }

  const errors = [];
  const warnings = [];
  const seenTopicIds = new Set();
  const topicIds = new Set();
  const topicTexts = new Set();
  const rawLayerMap = new Map(rawData.map(function (layer) {
    return [layer.title, layer];
  }));

  function pushError(message) {
    errors.push(message);
  }

  function pushWarning(message) {
    warnings.push(message);
  }

  topicEntries.forEach(function (entry) {
    const text = String(entry.text || '').trim();
    const id = String(entry.id || '').trim();

    if (!text) {
      pushError('A structured topic entry is missing visible text.');
      return;
    }

    topicTexts.add(text);

    if (!id) {
      pushError('Topic "' + text + '" is missing a generated topic id.');
      return;
    }

    if (seenTopicIds.has(id)) {
      pushError('Duplicate topic id detected: ' + id + '.');
      return;
    }

    seenTopicIds.add(id);
    topicIds.add(id);
  });

  data.forEach(function (layer) {
    layer.sections.forEach(function (section) {
      (section.sourceRefs || []).forEach(function (ref) {
        const rawLayer = rawLayerMap.get(ref.layerTitle);
        if (!rawLayer) {
          pushError('Source lineage points at missing raw layer "' + ref.layerTitle + '" from section "' + section.title + '".');
          return;
        }

        const rawSection = rawLayer.sections.find(function (candidate) {
          return candidate.title === ref.sectionTitle;
        });

        if (!rawSection) {
          pushError('Source lineage points at missing raw section "' + ref.layerTitle + ' > ' + ref.sectionTitle + '" from section "' + section.title + '".');
        }
      });
    });
  });

  function validateOverrideMap(globalName, label) {
    const overrides = window[globalName];
    if (!overrides || typeof overrides !== 'object') {
      return;
    }

    Object.keys(overrides).forEach(function (key) {
      if (!topicIds.has(key) && !topicTexts.has(key)) {
        pushWarning(label + ' key "' + key + '" does not match any current topic id or visible topic text.');
      }
    });
  }

  validateOverrideMap('TopicBriefOverrides', 'TopicBriefOverrides');
  validateOverrideMap('TopicPromptOverrides', 'TopicPromptOverrides');

  function getValidationReport() {
    return {
      isValid: errors.length === 0,
      errors: errors.slice(),
      warnings: warnings.slice()
    };
  }

  const report = Object.freeze(getValidationReport());

  function validateReferencedTitles() {
    var refs = window.__SyllabusReferencedTitles;
    if (!refs || !refs.length) {
      return [];
    }

    var layerTitleSet = {};
    var sectionTitleSet = {};
    var sectionLayerCombos = [];

    data.forEach(function (layer) {
      layerTitleSet[layer.title] = true;
      layer.sections.forEach(function (section) {
        sectionTitleSet[section.title] = true;
        sectionLayerCombos.push(section.title + ' ' + layer.title);
      });
    });

    var staleRefs = [];

    refs.forEach(function (ref) {
      if (ref.kind === 'layer' && !layerTitleSet[ref.title]) {
        staleRefs.push(ref.source + ': layer "' + ref.title + '" does not match any current layer title.');
      } else if (ref.kind === 'section' && !sectionTitleSet[ref.title]) {
        staleRefs.push(ref.source + ': section "' + ref.title + '" does not match any current section title.');
      } else if (ref.kind === 'section-pattern') {
        var matched = sectionLayerCombos.some(function (combo) {
          return ref.pattern.test(combo);
        });
        if (!matched) {
          staleRefs.push(ref.source + ': pattern ' + ref.pattern + ' does not match any current section/layer combination.');
        }
      }
    });

    if (staleRefs.length && window.console && typeof window.console.warn === 'function') {
      window.console.warn('Syllabus referenced-title validation warnings:\n- ' + staleRefs.join('\n- '));
    }

    return staleRefs;
  }

  window.__SyllabusValidation = {
    report: report,
    getValidationReport: getValidationReport,
    validateReferencedTitles: validateReferencedTitles
  };

  if (warnings.length && window.console && typeof window.console.warn === 'function') {
    window.console.warn('Syllabus validation warnings:\n- ' + warnings.join('\n- '));
  }

  if (errors.length) {
    if (typeof startupApi.failStartup === 'function') {
      startupApi.failStartup('Syllabus data validation failed.', errors);
      return;
    }

    throw new Error('Syllabus validation failed:\n- ' + errors.join('\n- '));
  }
}());
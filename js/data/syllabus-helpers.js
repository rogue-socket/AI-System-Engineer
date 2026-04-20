(function () {
  const datasetApi = window.__SyllabusDataset || {};
  const { rawData } = datasetApi;

  if (!rawData) {
    throw new Error('Syllabus dataset failed to load before syllabus content helpers.');
  }

  function topicText(topic) {
    return typeof topic === 'string' ? topic : topic.text;
  }

  function getText(topic) {
    return topicText(topic);
  }

  function isNew() {
    return false;
  }

  function normalizeTopic(topic, extra) {
    return {
      ...(topic && typeof topic === 'object' ? topic : {}),
      text: topicText(topic),
      isNew: isNew(topic),
      ...(extra || {})
    };
  }

  function cloneTopic(topic) {
    return normalizeTopic(topic);
  }

  function newTopic(text, extra) {
    return { text, ...(extra || {}) };
  }

  const rawLayerMap = Object.fromEntries(rawData.map(function (layer) {
    return [layer.title, layer];
  }));

  function getRawSection(layerTitle, sectionTitle) {
    return rawLayerMap[layerTitle].sections.find(function (section) {
      return section.title === sectionTitle;
    });
  }

  function copyTopics(layerTitle, sectionTitle, filterFn) {
    const predicate = filterFn || function () { return true; };
    return getRawSection(layerTitle, sectionTitle).topics.filter(predicate).map(cloneTopic);
  }

  function dedupeStrings(values) {
    const seen = new Set();
    return values.filter(function (value) {
      const key = String(value || '').trim();
      if (!key || seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  function dedupeTopics(topics) {
    const seen = new Set();
    return topics
      .map(cloneTopic)
      .filter(function (topic) {
        const key = topic.text;
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      })
      .map(function (topic) {
        return { ...topic };
      });
  }

  function copySection(layerTitle, sectionTitle, overrides) {
    const options = overrides || {};
    return {
      title: options.title || sectionTitle,
      prerequisites: dedupeStrings(options.prerequisites || []),
      topics: options.topics ? dedupeTopics(options.topics) : copyTopics(layerTitle, sectionTitle, options.filter || function () { return true; }),
      sourceRefs: (options.sourceRefs || [{ layerTitle, sectionTitle, synthetic: false }]).map(function (ref) {
        return { ...ref };
      })
    };
  }

  function syntheticSection(title, topics, options) {
    const settings = options || {};
    return {
      title,
      prerequisites: dedupeStrings(settings.prerequisites || []),
      topics: dedupeTopics(topics),
      sourceRefs: (settings.sourceRefs || []).map(function (ref) {
        return { ...ref, synthetic: true };
      })
    };
  }

  window.__SyllabusContent = {
    rawData,
    getText,
    isNew,
    topicText,
    normalizeTopic,
    cloneTopic,
    newTopic,
    dedupeStrings,
    dedupeTopics,
    copyTopics,
    copySection,
    syntheticSection
  };
}());

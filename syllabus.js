(function () {
  const contentApi = window.__SyllabusContent || {};
  const coreApi = window.__SyllabusCore || {};
  const detailApi = window.__SyllabusTopicDetail || {};
  const startupApi = window.__SyllabusStartup || {};
  const validationApi = window.__SyllabusValidation || {};

  if (!contentApi.rawData || !coreApi.data) {
    if (typeof startupApi.failStartup === 'function') {
      startupApi.failStartup('Shared syllabus runtime failed to load.', 'The content or core modules did not initialize in the expected order.');
      return;
    }

    throw new Error('Syllabus content/core modules failed to load in the expected order.');
  }

  const syllabusApi = {
    rawData: contentApi.rawData,
    data: coreApi.data,
    getText: contentApi.getText,
    isNew: contentApi.isNew,
    getStats: coreApi.getStats,
    getTopicStatus: coreApi.getTopicStatus,
    setTopicStatus: coreApi.setTopicStatus,
    cycleTopicStatus: coreApi.cycleTopicStatus,
    subscribeToTopicStatusChanges: coreApi.subscribeToTopicStatusChanges,
    getTopicResources: coreApi.getTopicResources,
    addTopicResource: coreApi.addTopicResource,
    removeTopicResource: coreApi.removeTopicResource,
    subscribeToTopicResourceChanges: coreApi.subscribeToTopicResourceChanges,
    syncTopicStatusUI: coreApi.syncTopicStatusUI,
    renderStatusLegend: coreApi.renderStatusLegend,
    renderTopicStatusPicker: coreApi.renderTopicStatusPicker,
    applyPageTheme: coreApi.applyPageTheme,
    renderLayerTree: coreApi.renderLayerTree,
    filterLayerTree: coreApi.filterLayerTree,
    wireHashFocus: coreApi.wireHashFocus,
    layersToMarkdown: coreApi.layersToMarkdown,
    downloadMarkdown: coreApi.downloadMarkdown,
    getTopicHref: coreApi.getTopicHref,
    getIndexAnchorHref: coreApi.getIndexAnchorHref,
    getTopicEntryById: coreApi.getTopicEntryById,
    setAllLayersOpen: coreApi.setAllLayersOpen
  };

  if (typeof detailApi.buildTopicDetailData === 'function') {
    syllabusApi.buildTopicDetailData = detailApi.buildTopicDetailData;
  }

  if (typeof validationApi.getValidationReport === 'function') {
    syllabusApi.getValidationReport = validationApi.getValidationReport;
  }

  window.Syllabus = syllabusApi;
}());

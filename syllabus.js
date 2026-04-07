(function () {
  const contentApi = window.__SyllabusContent || {};
  const coreApi = window.__SyllabusCore || {};
  const detailApi = window.__SyllabusTopicDetail || {};

  if (!contentApi.rawData || !coreApi.data || !detailApi.buildTopicDetailData) {
    throw new Error('Syllabus modules failed to load in the expected order.');
  }

  window.Syllabus = {
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
    buildTopicDetailData: detailApi.buildTopicDetailData,
    setAllLayersOpen: coreApi.setAllLayersOpen
  };
}());

(function () {
  const contentApi = window.__SyllabusContent || {};
  const coreApi = window.__SyllabusCore || {};
  const sharedApi = window.__SyllabusDetailShared || {};
  const briefApi = window.__SyllabusTopicBrief || {};
  const promptApi = window.__SyllabusTopicPrompt || {};
  const resourceApi = window.__SyllabusTopicResources || {};
  const { dedupeStrings } = contentApi;
  const { topicEntries, getStats, getTopicResources, getIndexAnchorHref, getTopicEntryById, getTopicEntryByText, getSectionEntries } = coreApi;
  const { uniqueStrings, uniqueEntries, formatEntryPath, entryTopic, sectionLinkTopic, getPreviousContextEntries, getNextContextEntries, getRelatedEntries, pickEntriesByRefs, findRawOccurrencesByText, buildTopicSummary } = sharedApi;
  const { buildTopicBrief } = briefApi;
  const { buildTopicStudyPrompt } = promptApi;
  const { buildSuggestedTopicResources } = resourceApi;

  if (!dedupeStrings || !topicEntries || !getStats || !getTopicResources || !getIndexAnchorHref || !getTopicEntryById || !getTopicEntryByText || !getSectionEntries || !uniqueStrings || !uniqueEntries || !formatEntryPath || !entryTopic || !sectionLinkTopic || !getPreviousContextEntries || !getNextContextEntries || !getRelatedEntries || !pickEntriesByRefs || !findRawOccurrencesByText || !buildTopicSummary || !buildTopicBrief || !buildTopicStudyPrompt || !buildSuggestedTopicResources) {
    throw new Error('Topic detail dependencies failed to load before the topic detail builder.');
  }
  function buildTopicDetailData(topicId) {
    const entry = getTopicEntryById(topicId);
    if (!entry) {
      return null;
    }

    const prerequisiteTopics = dedupeStrings(entry.topic.prerequisites || []).map(text => {
      const prerequisiteEntry = getTopicEntryByText(text);
      return prerequisiteEntry ? entryTopic(prerequisiteEntry, { path: true }) : text;
    });
    const siblings = getSectionEntries(entry.layerIndex, entry.sectionIndex).filter(item => item.id !== entry.id);
    const learnFirst = getPreviousContextEntries(entry, 8);
    const learnNext = getNextContextEntries(entry, 8);
    const exactStructuredMatches = topicEntries.filter(item => item.text === entry.text && item.id !== entry.id);
    const rawMatches = findRawOccurrencesByText(entry.text);
    const crossLayerConnections = getRelatedEntries(entry, { limit: 12, minScore: 6 }).filter(item => item.layerIndex !== entry.layerIndex);
    const suggestedResources = buildSuggestedTopicResources(entry);
    const savedResources = getTopicResources(entry.id);

    const practiceLinks = uniqueEntries([
      ...getRelatedEntries(entry, { limit: 5, minScore: 2, layerTitles: ['Evaluation, Observability & Applications'] }),
      ...getRelatedEntries(entry, { limit: 5, minScore: 2, layerTitles: ['Infrastructure & Deployment', 'Agency & Tool Use'] }),
      ...getRelatedEntries(entry, { limit: 4, minScore: 2, layerTitles: ['Safety, Security & Governance'] }),
      ...pickEntriesByRefs([
        { layerTitle: 'Evaluation, Observability & Applications', sectionTitles: ['Evaluation frameworks', 'Performance engineering'] },
        { layerTitle: 'Infrastructure & Deployment', sectionTitles: ['Model serving', 'Data infrastructure'] },
        { layerTitle: 'Safety, Security & Governance', sectionTitles: ['Defense mechanisms'] }
      ], 10, 2)
    ]).filter(item => item.id !== entry.id).slice(0, 10);

    const operationalLinks = uniqueEntries([
      ...getRelatedEntries(entry, { limit: 8, minScore: 2, layerTitles: ['Agency & Tool Use', 'Infrastructure & Deployment', 'Evaluation, Observability & Applications'] }),
      ...pickEntriesByRefs([
        { layerTitle: 'Agency & Tool Use', sectionTitles: ['Tool design discipline', 'Information tools', 'Action tools'] },
        { layerTitle: 'Infrastructure & Deployment', sectionTitles: ['Model serving', 'Data infrastructure'] },
        { layerTitle: 'Evaluation, Observability & Applications', sectionTitles: ['Application patterns'] }
      ], 10, 2)
    ]).filter(item => item.id !== entry.id).slice(0, 10);

    const relatedLayerTitles = uniqueStrings(crossLayerConnections.map(item => item.layer.title)).slice(0, 3);
    const summary = buildTopicSummary(entry, siblings, relatedLayerTitles);
    const brief = buildTopicBrief(entry, { siblings, relatedLayerTitles });
    const studyPrompt = buildTopicStudyPrompt(entry, {
      brief,
      summary,
      siblings,
      relatedLayerTitles,
      crossLayerConnections,
      practiceLinks,
      operationalLinks
    });

    const taxonomyLayer = {
      id: 4,
      kind: 'Taxonomy',
      scope: 'Where this topic lives in the syllabus',
      title: 'Taxonomy',
      color: entry.layer.color,
      bg: entry.layer.bg,
      sections: [
        {
          title: 'Primary placement',
          topics: [
            `Layer: ${entry.layer.title}`,
            `Kind: ${entry.layer.kind}`,
            `Scope: ${entry.layer.scope}`,
            `Section: ${entry.section.title}`,
            `Position: ${entry.topicIndex + 1} of ${entry.section.topics.length} in this section`,
            { text: 'Open this topic inside the main syllabus', href: getIndexAnchorHref(entry.id) }
          ]
        },
        {
          title: 'Source lineage',
          topics: [
            ...(entry.section.sourceRefs.length
              ? entry.section.sourceRefs.map(ref => `${ref.synthetic ? 'Synthesized from' : 'Copied from'} ${ref.layerTitle} > ${ref.sectionTitle}`)
              : ['No source lineage metadata recorded for this section']),
            rawMatches.length ? `Raw source occurrences: ${rawMatches.length}` : 'Raw source occurrences: 0 (topic introduced in the structured taxonomy)'
          ]
        },
        {
          title: 'Other placements',
          topics: exactStructuredMatches.length
            ? exactStructuredMatches.map(item => entryTopic(item, { path: true }))
            : ['No duplicate label elsewhere in the structured syllabus']
        }
      ]
    };

    const syllabusLayer = {
      id: 1,
      kind: 'Syllabus',
      scope: 'How to study this topic in context',
      title: 'Syllabus',
      color: '#378ADD',
      bg: '#E6F1FB',
      sections: [
        {
          title: 'Prerequisites',
          topics: prerequisiteTopics.length
            ? prerequisiteTopics
            : ['This topic opens a section or starts a new branch of the syllabus']
        },
        {
          title: 'Study first',
          topics: learnFirst.length
            ? learnFirst.map(item => entryTopic(item))
            : ['This topic is already near the front of its local sequence']
        },
        {
          title: 'Study alongside',
          topics: siblings.length
            ? siblings.map(item => entryTopic(item))
            : ['This section has no sibling topics']
        },
        {
          title: 'Study next',
          topics: learnNext.length
            ? learnNext.map(item => entryTopic(item))
            : ['No later local topics were found in this path']
        },
        {
          title: 'Practice and validation',
          topics: practiceLinks.length
            ? practiceLinks.map(item => entryTopic(item, { path: true }))
            : ['No validation-oriented links were identified for this topic']
        }
      ]
    };

    const structureLayer = {
      id: 2,
      kind: 'Structure',
      scope: 'How this topic connects across the overall system',
      title: 'Structure',
      color: '#EF9F27',
      bg: '#FAEEDA',
      sections: [
        {
          title: 'Parent section anatomy',
          topics: getSectionEntries(entry.layerIndex, entry.sectionIndex).map(item => entryTopic(item, { current: item.id === entry.id }))
        },
        {
          title: 'Layer structure',
          topics: entry.layer.sections.map(section => sectionLinkTopic(entry.layer, section, section.sectionIndex === entry.sectionIndex))
        },
        {
          title: 'Cross-layer connections',
          topics: crossLayerConnections.length
            ? crossLayerConnections.map(item => entryTopic(item, { path: true }))
            : ['No cross-layer connections exceeded the matching threshold']
        },
        {
          title: 'Operational and application surface',
          topics: operationalLinks.length
            ? operationalLinks.map(item => entryTopic(item, { path: true }))
            : ['No operational or application links were identified for this topic']
        }
      ]
    };
    const promptLayer = {
      id: 3,
      kind: 'Prompt',
      scope: 'Copy-paste study prompt for an external LLM',
      title: 'Prompt',
      color: '#111111',
      bg: '#F3F4F6',
      sections: [
        {
          title: 'Copy and use',
          topics: [
            {
              kind: 'prompt',
              text: 'Tailored study prompt',
              description: `Use this with ChatGPT or another LLM to learn ${entry.text} in the exact context of this page.`,
              prompt: studyPrompt,
              actionLabel: 'Copy prompt'
            }
          ]
        }
      ]
    };

    const resourcesLayer = {
      id: 5,
      kind: 'Resources',
      scope: 'Where to learn more and keep personal references for this topic',
      title: 'Resources',
      color: '#888780',
      bg: '#F1EFE8',
      sections: [
        {
          title: 'Recommended sources',
          topics: suggestedResources.length
            ? suggestedResources.map(resource => ({ text: resource.label, href: resource.url }))
            : ['No generated resources were available for this topic']
        },
        {
          title: 'Your saved links',
          topics: savedResources.length
            ? savedResources.map(resource => ({ text: resource.label, href: resource.url }))
            : ['Use the add-resource form below to save personal links for this topic']
        }
      ]
    };

    const layers = [syllabusLayer, structureLayer, promptLayer, taxonomyLayer, resourcesLayer];
    const detailStats = getStats(layers);

    return {
      entry,
      layers,
      brief,
      stats: detailStats,
      theme: {
        color: entry.layer.color,
        bg: entry.layer.bg,
        label: entry.layer.title
      },
      summary,
      breadcrumbs: [
        { label: 'Syllabus', href: 'index.html' },
        { label: entry.layer.title, href: `index.html#${entry.layer.anchorId}` },
        { label: entry.section.title, href: `index.html#${entry.section.anchorId}` },
        { label: entry.text }
      ],
      heroCards: [
        { label: 'Primary path', value: `${entry.layer.title} / ${entry.section.title}` },
        { label: 'Section position', value: `${entry.topicIndex + 1} of ${entry.section.topics.length}` },
        { label: 'Prerequisites', value: prerequisiteTopics.length ? `${prerequisiteTopics.length} mapped` : 'Section entry point' },
        { label: 'Occurrences', value: `${exactStructuredMatches.length + 1} structured · ${rawMatches.length} raw` },
        { label: 'Connected topics', value: `${crossLayerConnections.length + siblings.length} mapped links` },
        { label: 'Resources', value: `${suggestedResources.length} suggested · ${savedResources.length} saved` }
      ]
    };

  }
  window.__SyllabusTopicDetail = {
    buildTopicDetailData
  };

  var refs = window.__SyllabusReferencedTitles = window.__SyllabusReferencedTitles || [];
  refs.push(
    { source: 'topic-detail', kind: 'layer', title: 'Evaluation, Observability & Applications' },
    { source: 'topic-detail', kind: 'layer', title: 'Infrastructure & Deployment' },
    { source: 'topic-detail', kind: 'layer', title: 'Agency & Tool Use' },
    { source: 'topic-detail', kind: 'layer', title: 'Safety, Security & Governance' },
    { source: 'topic-detail', kind: 'section', title: 'Evaluation frameworks' },
    { source: 'topic-detail', kind: 'section', title: 'Performance engineering' },
    { source: 'topic-detail', kind: 'section', title: 'Model serving' },
    { source: 'topic-detail', kind: 'section', title: 'Data infrastructure' },
    { source: 'topic-detail', kind: 'section', title: 'Defense mechanisms' },
    { source: 'topic-detail', kind: 'section', title: 'Tool design discipline' },
    { source: 'topic-detail', kind: 'section', title: 'Information tools' },
    { source: 'topic-detail', kind: 'section', title: 'Action tools' },
    { source: 'topic-detail', kind: 'section', title: 'Application patterns' }
  );
}());

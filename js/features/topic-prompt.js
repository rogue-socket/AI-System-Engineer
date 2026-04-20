(function () {
  const contentApi = window.__SyllabusContent || {};
  const sharedApi = window.__SyllabusDetailShared || {};
  const briefApi = window.__SyllabusTopicBrief || {};
  const promptConfigApi = window.__SyllabusTopicPromptConfig || {};
  const { dedupeStrings } = contentApi;
  const { uniqueStrings, joinNaturalLanguage, formatEntryPath, buildTopicSummary } = sharedApi;
  const { topicPromptSectionFocusRules, topicPromptTitleFocusRules } = promptConfigApi;
  const {
    buildTopicBrief,
    getTopicBriefGuide,
    getTopicBriefKind,
    getTopicBriefComparisonParts,
    mentalModelTopicBriefGuide,
    modelTopicBriefGuide,
    promptTopicBriefGuide,
    retrievalTopicBriefGuide,
    toolUseTopicBriefGuide,
    multiAgentTopicBriefGuide,
    runtimeTopicBriefGuide,
    evaluationTopicBriefGuide,
    safetyTopicBriefGuide,
    threatFailureTopicBriefGuide,
    policyControlTopicBriefGuide,
    identityTrustTopicBriefGuide,
    protocolStandardsTopicBriefGuide,
    runtimeDurabilityTopicBriefGuide,
    detectionMeasurementTopicBriefGuide
  } = briefApi;

  if (!dedupeStrings || !uniqueStrings || !joinNaturalLanguage || !formatEntryPath || !buildTopicSummary || !buildTopicBrief || !getTopicBriefGuide || !getTopicBriefKind || !getTopicBriefComparisonParts || !topicPromptSectionFocusRules || !topicPromptTitleFocusRules) {
    throw new Error('Topic prompt dependencies failed to load.');
  }
  const topicPromptOverrides = window.TopicPromptOverrides || Object.freeze({});

  function cleanTopicPromptPart(text) {
    return String(text || '')
      .replace(/^[\s,;:/()\-]+|[\s,;:/()\-]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getTopicPromptNamedVariants(text, comparisonParts = []) {
    if (comparisonParts.length > 1) {
      return [];
    }

    const variants = [];
    const outsideParentheses = text.replace(/\([^()]*\)/g, ' ').replace(/\s+/g, ' ').trim();

    if (/\s\/\s/.test(outsideParentheses)) {
      outsideParentheses.split(/\s*\/\s*/).forEach(part => {
        variants.push(cleanTopicPromptPart(part));
      });
    }

    Array.from(text.matchAll(/\(([^()]+)\)/g)).forEach(match => {
      const content = match[1].trim();
      if (!content || /^advanced\s*\/\s*research$/i.test(content)) {
        return;
      }

      if (content.includes(',') || /\s\/\s/.test(content)) {
        content.split(/\s*,\s*|\s*\/\s*/).forEach(part => {
          variants.push(cleanTopicPromptPart(part));
        });
      }
    });

    const uniqueVariants = uniqueStrings(variants).filter(part => part && part.toLowerCase() !== text.toLowerCase());
    return uniqueVariants.length > 1 ? uniqueVariants.slice(0, 6) : [];
  }

  function getTopicPromptExtraFocusAreas(entry) {
    const sectionText = `${entry.section.title} ${entry.layer.title}`;

    return uniqueStrings([
      ...topicPromptSectionFocusRules
        .filter(rule => rule.pattern.test(sectionText))
        .map(rule => rule.instruction),
      ...topicPromptTitleFocusRules
        .filter(rule => rule.pattern.test(entry.text))
        .map(rule => rule.instruction)
    ]);
  }

  function getTopicPromptFocusAreas(entry, guide, briefKind, comparisonParts, namedVariants) {
    const focusAreas = [];
    const isPromptConcept = /prompt/i.test(entry.text) && !/prompt injection/i.test(entry.text);

    switch (briefKind) {
      case 'comparison':
        focusAreas.push(`Build an explicit compare-and-contrast explanation of ${joinNaturalLanguage(comparisonParts.length ? comparisonParts : [entry.text])}, including decision criteria, trade-offs, and common mix-ups.`);
        break;
      case 'decision-lens':
        focusAreas.push('Give explicit decision rules, boundary conditions, and examples of when this topic is the right lever versus a distraction.');
        break;
      case 'training-method':
        focusAreas.push('Cover the training objective, data requirements, compute or cost implications, evaluation strategy, and how this differs from inference-time or orchestration changes.');
        break;
      case 'memory-operations':
        focusAreas.push('Cover write policy, read policy, freshness, retention, provenance, conflict resolution, and how engineers measure memory quality in practice.');
        break;
      case 'policy-control':
        focusAreas.push('Cover approval points, policy boundaries, least-privilege decisions, auditability, escalation rules, and what a controlled rollout looks like.');
        break;
      case 'detection-measurement':
        focusAreas.push('Cover what signals matter, how to measure them, what false positives and false negatives look like, and how to validate claims with evidence.');
        break;
      case 'identity-trust':
        focusAreas.push('Cover authentication, authorization, delegation, provenance, trust boundaries, and failure containment.');
        break;
      case 'protocol-standards':
        focusAreas.push('Cover message semantics, transport and session choices, capability discovery, interoperability trade-offs, and how handoffs actually work.');
        break;
      case 'runtime-durability':
        focusAreas.push('Cover state, retries, idempotency, recovery, deployment topology, observability, and rollback under production constraints.');
        break;
      case 'threat-failure':
        focusAreas.push('Cover the threat model, exploit path, blast radius, mitigations, monitoring signals, and realistic red-team scenarios.');
        break;
      case 'system-decomposition':
        focusAreas.push('Explain the system boundary this topic draws, how the parts interact, and what breaks when teams blur those boundaries.');
        break;
      default:
        break;
    }

    if (guide === mentalModelTopicBriefGuide) {
      focusAreas.push('Explain the architectural framing this topic gives the learner and the design mistakes that happen when teams classify the problem incorrectly.');
    }
    if (guide === modelTopicBriefGuide) {
      focusAreas.push('Explain the model-side mechanics, limits, and downstream implications for agent behavior, latency, or quality.');
    }
    if (guide === promptTopicBriefGuide || isPromptConcept) {
      focusAreas.push('Include concrete prompt examples, prompt failure cases, and how the wording interacts with the broader context assembled around the model.');
    }
    if (guide === retrievalTopicBriefGuide) {
      focusAreas.push('Explain the retrieval or storage flow, grounding implications, freshness issues, and how quality is evaluated.');
    }
    if (guide === toolUseTopicBriefGuide && !isPromptConcept) {
      focusAreas.push('Explain schemas, orchestration, permissions, side effects, retries, and validation of tool results.');
    }
    if (guide === multiAgentTopicBriefGuide) {
      focusAreas.push('Explain role separation, delegation, handoffs, coordination cost, and failure propagation across agents.');
    }
    if (guide === runtimeTopicBriefGuide || guide === runtimeDurabilityTopicBriefGuide) {
      focusAreas.push('Explain deployment shape, scale, latency, statefulness, cost, reliability, and the operational trade-offs engineers have to make.');
    }
    if (guide === evaluationTopicBriefGuide || guide === detectionMeasurementTopicBriefGuide) {
      focusAreas.push('Explain instrumentation, baselines, success criteria, and how to test or observe this topic in a real system.');
    }
    if (guide === safetyTopicBriefGuide || guide === threatFailureTopicBriefGuide || guide === policyControlTopicBriefGuide || guide === identityTrustTopicBriefGuide) {
      focusAreas.push('Explain the threat surface or control surface, the defensive layers that matter, and what a review checklist should look like.');
    }
    if (guide === protocolStandardsTopicBriefGuide) {
      focusAreas.push('Explain how interoperability changes architecture decisions, vendor lock-in, and the operational semantics of coordination.');
    }
    if (namedVariants.length > 1) {
      focusAreas.push(`Explain the named variants or products individually: ${joinNaturalLanguage(namedVariants)}. Then extract the shared pattern, the important differences, and the selection criteria that connect them.`);
    }

    return uniqueStrings([
      ...focusAreas,
      ...getTopicPromptExtraFocusAreas(entry)
    ]).slice(0, 6);
  }

  function getTopicPromptOutputRequirements(guide, briefKind, namedVariants) {
    const requirements = [
      'Use clear headings and short subsections.',
      `Include at least one ${briefKind === 'comparison' || namedVariants.length > 1 ? 'comparison table or decision matrix' : 'comparison table or decision matrix'}.`,
      'Include one practical end-to-end example grounded in real agent systems.',
      'Separate fundamentals, trade-offs, failure modes, and implementation guidance.',
      'If a prerequisite matters, explain it inline briefly instead of assuming I already know it.',
      'If vendor, framework, or product details are fast-moving, separate the durable concept from the time-sensitive implementation specifics.'
    ];

    if (guide === threatFailureTopicBriefGuide || guide === safetyTopicBriefGuide || guide === policyControlTopicBriefGuide || guide === identityTrustTopicBriefGuide) {
      requirements.push('Include a mitigation checklist or review checklist that an engineering team could actually use.');
    }

    if (guide === runtimeTopicBriefGuide || guide === runtimeDurabilityTopicBriefGuide || guide === protocolStandardsTopicBriefGuide) {
      requirements.push('Include a simple architecture, request path, or runtime flow walkthrough in prose.');
    }

    if (guide === evaluationTopicBriefGuide || guide === detectionMeasurementTopicBriefGuide) {
      requirements.push('Include concrete metrics, traces, or test cases instead of speaking only at the principle level.');
    }

    return uniqueStrings(requirements);
  }

  function buildTopicStudyPrompt(entry, context = {}) {
    const override = topicPromptOverrides[entry.id] || topicPromptOverrides[entry.text];
    if (typeof override === 'string') {
      return override;
    }
    if (override && typeof override.prompt === 'string') {
      return override.prompt;
    }

    const guide = getTopicBriefGuide(entry);
    const briefKind = getTopicBriefKind(entry);
    const comparisonParts = getTopicBriefComparisonParts(entry.text);
    const namedVariants = getTopicPromptNamedVariants(entry.text, comparisonParts);
    const summary = context.summary || buildTopicSummary(entry, context.siblings || [], context.relatedLayerTitles || []);
    const brief = context.brief || buildTopicBrief(entry, context);
    const prerequisites = dedupeStrings(entry.topic.prerequisites || []).slice(0, 5);
    const siblingNames = uniqueStrings((context.siblings || []).map(item => item.text).filter(text => text && text !== entry.text)).slice(0, 4);
    const crossLayerPaths = uniqueStrings((context.crossLayerConnections || []).map(formatEntryPath)).slice(0, 5);
    const operationalPaths = uniqueStrings((context.operationalLinks || []).map(formatEntryPath)).slice(0, 4);
    const practicePaths = uniqueStrings((context.practiceLinks || []).map(formatEntryPath)).slice(0, 4);
    const focusAreas = getTopicPromptFocusAreas(entry, guide, briefKind, comparisonParts, namedVariants);
    const outputRequirements = getTopicPromptOutputRequirements(guide, briefKind, namedVariants);

    return [
      'You are an expert tutor in AI agent systems, LLM engineering, and production AI architecture.',
      '',
      `Teach me the topic "${entry.text}" in the specific context of AI agent systems.`,
      '',
      'Keep the lesson centered on this exact topic page, not on the entire syllabus in the abstract.',
      '',
      'Page context:',
      `- Primary syllabus path: ${entry.layer.title} > ${entry.section.title}`,
      `- Topic summary: ${summary}`,
      ...brief.map(line => `- ${line.label}: ${line.text}`),
      '',
      'Connect back to these prerequisite concepts when useful:',
      ...(prerequisites.length
        ? prerequisites.map(text => `- ${text}`)
        : ['- Treat this topic as a local entry point and explain important prerequisites inline when they become necessary.']),
      '',
      'Use these nearby topics for contrast or boundary-setting:',
      ...(siblingNames.length
        ? siblingNames.map(text => `- ${text}`)
        : ['- There are no strong same-section contrasts here, so create useful contrasts from adjacent concepts when needed.']),
      '',
      'Weave in these cross-layer connections where relevant:',
      ...(crossLayerPaths.length
        ? crossLayerPaths.map(text => `- ${text}`)
        : ['- No high-confidence cross-layer links were mapped for this page, so add broader system links only when they genuinely clarify the topic.']),
      '',
      'Reference these operational or application angles when giving examples:',
      ...(operationalPaths.length
        ? operationalPaths.map(text => `- ${text}`)
        : ['- Use realistic agent-system examples instead of generic chatbot examples.']),
      '',
      'Mention these practice, evaluation, or validation angles when discussing quality or correctness:',
      ...(practicePaths.length
        ? practicePaths.map(text => `- ${text}`)
        : ['- Include at least one concrete way to test, validate, or observe this topic in practice.']),
      '',
      'When teaching, do all of the following:',
      '- Start with a precise definition of the topic in AI-agent terms, not a generic encyclopedia definition.',
      `- Explain why it matters specifically in ${entry.layer.title} and in the ${entry.section.title} part of the stack.`,
      '- Break the topic into its key mechanics, internal pieces, workflow role, and design decisions.',
      '- Keep the explanation anchored to this exact topic page instead of drifting into a reusable generic tutorial.',
      ...focusAreas.map(item => `- ${item}`),
      '- Call out common misconceptions, anti-patterns, and failure modes.',
      '- Explain how an engineer would decide when to use this topic, when not to use it, and what adjacent concepts they should learn next.',
      '- End with a concise mental model, 5 review questions, and 3 hands-on exercises.',
      '',
      'Output requirements:',
      ...outputRequirements.map(item => `- ${item}`),
      '',
      'Start the lesson now.'
    ].join('\n');
  }
  window.__SyllabusTopicPrompt = {
    buildTopicStudyPrompt
  };
}());

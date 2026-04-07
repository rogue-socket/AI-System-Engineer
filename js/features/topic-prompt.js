(function () {
  const contentApi = window.__SyllabusContent || {};
  const sharedApi = window.__SyllabusDetailShared || {};
  const briefApi = window.__SyllabusTopicBrief || {};
  const { dedupeStrings } = contentApi;
  const { uniqueStrings, joinNaturalLanguage, formatEntryPath, buildTopicSummary } = sharedApi;
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

  if (!dedupeStrings || !uniqueStrings || !joinNaturalLanguage || !formatEntryPath || !buildTopicSummary || !buildTopicBrief || !getTopicBriefGuide || !getTopicBriefKind || !getTopicBriefComparisonParts) {
    throw new Error('Topic prompt dependencies failed to load.');
  }
  const topicPromptOverrides = window.TopicPromptOverrides || Object.freeze({});

  const topicPromptSectionFocusRules = [
    {
      pattern: /whole-system map|design trade-offs/i,
      instruction: 'Keep the explanation architectural and decision-oriented. Make the boundary lines explicit, show the cost of choosing the wrong system shape, and use concrete system-design examples rather than generic theory.'
    },
    {
      pattern: /model\/runtime vocabulary|agent\/system vocabulary/i,
      instruction: 'Define the terms crisply, show the mix-ups engineers make in practice, and explain how the distinction changes implementation decisions.'
    },
    {
      pattern: /core transformer architecture|architecture patterns & extensions|architecture extensions/i,
      instruction: 'Explain the internal mechanism, the bottleneck it addresses, the compute or latency trade-off, and the downstream effect on inference behavior.'
    },
    {
      pattern: /model families|reasoning & thinking models|multimodal & vision models|voice & audio models|tool-calling & code models|open-weight model ecosystem/i,
      instruction: 'Treat this as a concrete model or product landscape topic: explain the named models or families, their capability surface, major strengths, major limitations, and how teams choose among them for agent workloads.'
    },
    {
      pattern: /prompt engineering|production prompt management|prompt & interface design/i,
      instruction: 'Cover instruction structure, variable slots, output contracts, failure modes, testing strategy, and how teams version, review, and roll back prompt artifacts in production.'
    },
    {
      pattern: /retrieval techniques|chunking & indexing|rag architectures|knowledge stores|knowledge quality/i,
      instruction: 'Cover the end-to-end retrieval path from ingestion and indexing through query rewriting, ranking, context assembly, grounding, and evaluation.'
    },
    {
      pattern: /agent architectures|reasoning paradigms|reflection, critique & repair|planning & control|meta-cognition/i,
      instruction: 'Cover the control loop, intermediate state, stop criteria, verification steps, and the tasks where this pattern improves reliability versus just adding latency.'
    },
    {
      pattern: /tool interfaces|information tools|action tools|meta tooling|interaction patterns|agentic browsers/i,
      instruction: 'Cover the call contract, execution path, side-effect boundary, permission model, retries, and how the agent verifies tool results before trusting or executing them.'
    },
    {
      pattern: /frameworks|workflow systems/i,
      instruction: 'Cover the programming model, orchestration primitive, state management, observability story, deployment fit, and when a team should adopt or avoid this framework or workflow substrate.'
    },
    {
      pattern: /protocol convergence & standards|interoperability & standards/i,
      instruction: 'Cover capability discovery, message semantics, session model, transport choices, interoperability boundaries, and how real handoffs work across systems.'
    },
    {
      pattern: /model infrastructure|system infrastructure|deployment patterns|scaling & operations|mlops & llmops|api design for ai services|agent finops & cost economics/i,
      instruction: 'Cover the production architecture, latency and cost trade-offs, rollout and rollback model, multi-tenant concerns, and what the operating team has to own.'
    },
    {
      pattern: /agent-specific threats|safety mechanisms|governance & compliance|alignment|privacy & data protection|identity, trust & authorization/i,
      instruction: 'Cover the concrete failure or abuse path, the boundary being protected, the controls that matter, and how engineers review, test, and monitor the defense.'
    },
    {
      pattern: /evaluation|observability|debugging & testing|performance engineering|ci\/cd for ai systems|specification vs emergence gap/i,
      instruction: 'Cover metrics, instrumentation, representative test cases, failure analysis, and how this topic changes release or rollout decisions.'
    },
    {
      pattern: /developer & engineering agents|enterprise & business agents|research & domain agents|consumer & personal agents|human-agent teaming|physical ai/i,
      instruction: 'Cover the end-user workflow, success criteria, domain constraints, failure costs, and what changes when the topic is used in production for that audience.'
    }
  ];

  const topicPromptTitleFocusRules = [
    {
      pattern: /prompt injection/i,
      instruction: 'Distinguish direct, indirect, retrieved-content, and tool-output injection paths, then cover containment strategies such as instruction-data separation, least privilege, sandboxing, and output validation.'
    },
    {
      pattern: /oauth|authentication/i,
      instruction: 'Spell out the actors, scopes, token lifecycle, consent or delegation flow, refresh and expiry handling, and the difference between authentication, authorization, and acting on behalf of a user.'
    },
    {
      pattern: /langchain|langgraph/i,
      instruction: 'Explain LangChain and LangGraph separately: abstraction layer versus stateful graph orchestration, how they fit together, and when teams should use one, both, or neither.'
    },
    {
      pattern: /llm gateway|litellm|portkey|kong ai gateway/i,
      instruction: 'Explain the gateway control plane in concrete terms: provider normalization, auth brokering, routing, budgeting, observability, fallback, and policy enforcement.'
    },
    {
      pattern: /\bGPT-4o\b|\bGPT-4V\b|\bClaude\b|\bGemini\b|\bQwen\b|\bLlama\b|\bPixtral\b|\bInternVL\b|\bLLaVA\b|\bIdefics\b|\bCogVLM\b|\bFlorence-2\b|\bDeepSeek\b|\bPhi-4\b|\bCodestral\b|\bStarCoder\b|\bCodeGemma\b|\bCommand R\b|\bKimi\b|\bMarco-o1\b|\bSkywork-o1\b/i,
      instruction: 'Give each named model or family a short profile covering modality or task fit, major strengths, major limits, latency or cost considerations, and where it fits in agent systems.'
    },
    {
      pattern: /vector databases|pinecone|weaviate|qdrant|milvus|pgvector|elasticsearch|opensearch/i,
      instruction: 'Compare the named storage options on indexing model, filtering, hybrid search support, multi-tenancy, deployment model, and operational trade-offs.'
    },
    {
      pattern: /\bMCP\b|\bA2A\b|\bOpenAPI\b|\bAsyncAPI\b/i,
      instruction: 'Explain the protocol roles, capability model, transport or session story, and where interoperability still breaks in practice.'
    },
    {
      pattern: /rag vs fine-tuning vs long context/i,
      instruction: 'Use a decision matrix based on freshness, behavior change, latency, cost, maintenance burden, and evaluation difficulty. Make the trade-offs concrete rather than abstract.'
    }
  ];

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

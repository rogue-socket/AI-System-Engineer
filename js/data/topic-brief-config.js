(function () {
  const defaultTopicBriefGuide = {
    roleLabel: 'a systems engineering concept for production AI',
    purpose: 'how to design, build, or operate a specific piece of an agent system under real constraints',
    used: 'production agent systems where models, tools, memory, and orchestration must work together under load',
    unlock: 'a concrete design lever or architectural decision point',
    analogy: 'the engineering discipline of choosing the right component, understanding its failure modes, and knowing when to swap it out',
    withoutCase: 'the system works in demos but breaks under production traffic, adversarial inputs, or cost constraints',
    withCase: 'the system gains a specific, testable improvement in reliability, latency, cost, or correctness',
    exampleScenario: 'a team shipping an LLM-backed feature that must survive real users, real latency budgets, and real cost ceilings'
  };

  const modelInternalsTopicBriefGuide = {
    roleLabel: 'a model-internals concept that directly affects system design',
    purpose: 'how a specific transformer or model-level mechanism constrains your architecture, latency, memory, or cost',
    used: 'model selection, inference budgeting, serving architecture, and performance tuning decisions',
    unlock: 'better predictions about how model behavior changes under different serving conditions',
    analogy: 'understanding engine internals not to rebuild the engine but to know which fuel, RPM, and load profile it handles best',
    withoutCase: 'teams treat the model as a black box and misdiagnose latency, memory, or quality issues',
    withCase: 'teams can predict model behavior under different batch sizes, sequence lengths, and hardware constraints',
    exampleScenario: 'a team debugging why latency spikes at long context lengths or why memory usage grows non-linearly'
  };

  const modelSelectionTopicBriefGuide = {
    roleLabel: 'a model selection decision point',
    purpose: 'how to choose between models given specific constraints on cost, latency, quality, and deployment environment',
    used: 'architecture decisions, model routing policies, cost optimization, and capability-gap analysis',
    unlock: 'better model-task fit without overpaying for capability you do not use',
    analogy: 'choosing the right vehicle for the job — a delivery van, not a semi truck, when you are moving boxes across town',
    withoutCase: 'teams default to the biggest model and overpay, or pick the cheapest and under-deliver',
    withCase: 'teams match model capability to task requirements with explicit trade-off reasoning',
    exampleScenario: 'a team deciding whether a coding task needs GPT-4 class reasoning or if a 7B model with good tool-call training suffices'
  };

  const inferenceTopicBriefGuide = {
    roleLabel: 'an inference optimization technique',
    purpose: 'how to serve models faster, cheaper, or at higher throughput without sacrificing quality beyond acceptable bounds',
    used: 'model serving, latency-sensitive endpoints, cost reduction, and high-throughput batch processing',
    unlock: 'specific latency or cost improvements with quantified trade-offs against quality',
    analogy: 'engine tuning — you can trade fuel efficiency for power, but you need to know the exact curve',
    withoutCase: 'serving costs scale linearly with traffic and latency stays unacceptably high for interactive use',
    withCase: 'the same model serves 2-10x more requests at lower latency with bounded quality degradation',
    exampleScenario: 'a team trying to serve a 70B model on 2 GPUs instead of 8 without unacceptable quality loss'
  };

  const promptTopicBriefGuide = {
    roleLabel: 'a production prompt engineering practice',
    purpose: 'how to manage prompts as versioned, tested, observable artifacts rather than ad-hoc strings',
    used: 'prompt lifecycle management, regression testing, A/B experiments, and incident response for prompt-related regressions',
    unlock: 'reproducible, testable prompt behavior with rollback capability',
    analogy: 'treating prompts like configuration-as-code — versioned, reviewed, tested, and deployed through a pipeline',
    withoutCase: 'prompt changes go live untested and regressions surface as user complaints days later',
    withCase: 'prompt changes are caught by regression suites before reaching production, with fast rollback when they are not',
    exampleScenario: 'a team managing 50+ prompts across staging and production with weekly iteration cycles'
  };

  const reasoningTopicBriefGuide = {
    roleLabel: 'an agent reasoning or control pattern',
    purpose: 'how the agent plans, reflects, allocates compute, and chooses its next action under uncertainty and resource constraints',
    used: 'multi-step agent tasks, planning loops, self-correction, and hard decisions that one LLM call cannot solve',
    unlock: 'more deliberate behavior with explicit cost-quality trade-offs per reasoning step',
    analogy: 'an engineer deciding whether to think harder, ask for help, run a test, or ship what they have — each option has a cost',
    withoutCase: 'the agent reacts locally, loses the thread, wastes tokens on dead-end reasoning, or stops too early',
    withCase: 'the agent allocates reasoning effort where it matters and stops when further thinking yields diminishing returns',
    exampleScenario: 'a coding agent that must decide whether to plan more, execute now, or ask for clarification on an ambiguous task'
  };

  const metacognitionTopicBriefGuide = {
    roleLabel: 'a metacognition and calibration mechanism',
    purpose: 'how an agent estimates confidence, detects uncertainty, and decides whether to act, abstain, verify, or escalate',
    used: 'high-stakes tool calls, abstention logic, stop conditions, verification loops, and escalation to humans',
    unlock: 'calibrated action — the agent acts when confident and escalates when it should, instead of guessing uniformly',
    analogy: 'a surgeon deciding whether they have enough information to proceed, need another scan, or should call in a specialist',
    withoutCase: 'the agent pushes ahead when it should pause, or hesitates when the answer is clear — both waste resources and trust',
    withCase: 'the agent separates high-confidence from low-confidence situations and acts proportionally',
    exampleScenario: 'an agent that must decide whether to execute a database migration or escalate to a human DBA'
  };

  const retrievalTopicBriefGuide = {
    roleLabel: 'a retrieval and knowledge-grounding technique',
    purpose: 'how the agent finds, ranks, and injects external knowledge at the moment of need with explicit precision-recall trade-offs',
    used: 'RAG pipelines, enterprise search, support agents, research agents, and any system where the model needs facts it was not trained on',
    unlock: 'higher retrieval precision without proportional latency or cost increase',
    analogy: 'a librarian who knows which shelf, which index, and which page — not one who reads every book hoping to find the answer',
    withoutCase: 'the agent guesses from stale training data or drowns the context window in irrelevant chunks',
    withCase: 'the agent retrieves fewer, better chunks and answers with stronger grounding and source attribution',
    exampleScenario: 'a support agent answering policy questions from a 10,000-document knowledge base with sub-second latency requirements'
  };

  const toolUseTopicBriefGuide = {
    roleLabel: 'a tool design or integration pattern',
    purpose: 'how agents interact with external tools, APIs, and systems safely, reliably, and with explicit error handling',
    used: 'function-calling agents, API integrations, browser automation, code execution, and any agent that produces side effects',
    unlock: 'reliable tool use with bounded failure modes instead of unconstrained side effects',
    analogy: 'designing a power tool with safety guards, clear operating instructions, and predictable failure behavior',
    withoutCase: 'the agent calls tools with malformed inputs, retries non-idempotent actions, or produces side effects it cannot undo',
    withCase: 'tool calls are schema-validated, idempotent where needed, and produce errors the model can interpret and recover from',
    exampleScenario: 'an agent that books meetings, sends emails, and modifies databases — where a bad tool call has real-world consequences'
  };

  const protocolTopicBriefGuide = {
    roleLabel: 'a protocol or interoperability standard for agents',
    purpose: 'how agent systems discover capabilities, exchange requests, and integrate through shared contracts instead of bespoke glue',
    used: 'tool ecosystems, multi-vendor environments, agent platforms, and cross-team integrations',
    unlock: 'portable tool and agent integrations that work across runtimes without per-vendor adapters',
    analogy: 'HTTP and REST gave us portable web services — agent protocols aim to do the same for tool and agent interop',
    withoutCase: 'every integration is a custom adapter that breaks when either side changes, and tool discovery requires hardcoded catalogs',
    withCase: 'tools and agents can discover, negotiate, and invoke each other through shared standards with version-aware contracts',
    exampleScenario: 'a team connecting their agent to 20 different tools without writing 20 custom integrations'
  };

  const multiAgentTopicBriefGuide = {
    roleLabel: 'a multi-agent coordination pattern',
    purpose: 'how work is split across agents, orchestrated, and kept coherent — with explicit accounting for coordination overhead',
    used: 'systems where no single agent can hold all context, where specialization matters, or where parallel execution is needed',
    unlock: 'specialization and parallelism, at the cost of coordination overhead and debugging complexity',
    analogy: 'a team of specialists is powerful but expensive to coordinate — the org chart itself becomes a source of bugs',
    withoutCase: 'a single overloaded agent becomes a bottleneck, or multiple agents burn tokens on coordination instead of work',
    withCase: 'agents specialize on narrow roles with clean handoff contracts, and the orchestrator handles routing efficiently',
    exampleScenario: 'a pipeline with planning, research, writing, and review agents — where the coordination cost must justify the specialization benefit'
  };

  const frameworkTopicBriefGuide = {
    roleLabel: 'an agent framework or SDK',
    purpose: 'what the framework provides, what assumptions it bakes in, and where it constrains you',
    used: 'platform selection, prototyping, production builds, and team standardization decisions',
    unlock: 'faster development at the cost of framework lock-in and opinionated abstractions',
    analogy: 'choosing a web framework — you trade flexibility for velocity, and the framework opinions become your constraints',
    withoutCase: 'teams reinvent orchestration glue or pick tools without understanding the constraints they impose',
    withCase: 'teams make framework choices with clear-eyed understanding of what they gain and what they give up',
    exampleScenario: 'a team choosing between LangGraph, OpenAI Agents SDK, and PydanticAI for a new agent product'
  };

  const runtimeTopicBriefGuide = {
    roleLabel: 'a production infrastructure or deployment concern',
    purpose: 'how to serve, scale, harden, and operate agent systems under real workload with explicit reliability and cost trade-offs',
    used: 'production APIs, model serving, deployment pipelines, cost management, and operational reliability',
    unlock: 'production-grade reliability instead of demo-grade fragility',
    analogy: 'the difference between code that runs on your laptop and a service that survives Black Friday traffic',
    withoutCase: 'the system works in development but fails under concurrent load, variable latency, or sustained traffic',
    withCase: 'the system handles production traffic with bounded latency, cost, and failure rates',
    exampleScenario: 'a customer-facing agent API that must maintain p99 < 2s under 1000 concurrent requests'
  };

  const costTopicBriefGuide = {
    roleLabel: 'a cost engineering practice for AI systems',
    purpose: 'how to measure, attribute, budget, and optimize the spend of agent systems at the token, task, and pipeline level',
    used: 'FinOps, budget planning, model routing, cost attribution, and ROI analysis for agent deployments',
    unlock: 'cost visibility and control instead of surprise bills',
    analogy: 'cloud FinOps applied to AI — you cannot optimize what you cannot measure, and token spend is the new compute spend',
    withoutCase: 'agent costs grow faster than understanding, and teams cannot attribute spend to specific tasks or decisions',
    withCase: 'teams can budget per task, attribute costs per turn, and make routing decisions based on cost-quality curves',
    exampleScenario: 'an organization running 50 agent pipelines trying to understand why their monthly LLM bill tripled'
  };

  const safetyTopicBriefGuide = {
    roleLabel: 'a safety or security mechanism for agents',
    purpose: 'how to bound, audit, and control agent behavior so autonomy stays within acceptable risk tolerance',
    used: 'tool-using agents, enterprise deployments, regulated settings, and any agent that produces real-world side effects',
    unlock: 'safer delegation with explicit failure modes instead of hope-based security',
    analogy: 'defense in depth — every layer assumes the layer above it has been compromised',
    withoutCase: 'the agent has more capability than the controls can justify, and a single prompt injection bypasses all safety',
    withCase: 'multiple independent safety layers mean no single failure compromises the system',
    exampleScenario: 'an agent with database write access, email sending, and payment processing — where a compromised prompt has real consequences'
  };

  const threatTopicBriefGuide = {
    roleLabel: 'a threat or attack vector against agent systems',
    purpose: 'how a specific attack works, what it exploits, and what defenses reduce the risk to acceptable levels',
    used: 'threat modeling, red teaming, security review, and architecture decisions for agent systems with external inputs',
    unlock: 'specific, actionable threat awareness instead of vague security anxiety',
    analogy: 'OWASP for agents — named attacks with known mitigations, not abstract security advice',
    withoutCase: 'the team discovers the attack vector only after an incident, and the mitigation is a rushed patch',
    withCase: 'the team models the threat before deployment and builds defenses into the architecture from the start',
    exampleScenario: 'an agent that processes user-uploaded documents, where any document could contain injection payloads'
  };

  const governanceTopicBriefGuide = {
    roleLabel: 'a governance or compliance practice for agent systems',
    purpose: 'how organizations classify risk, audit deployed agents, and maintain accountability across agent lifecycles',
    used: 'enterprise governance, audits, regulated deployments, and standards compliance for agent systems',
    unlock: 'defensible operating posture for agent deployment instead of ad-hoc controls',
    analogy: 'the same governance discipline applied to cloud services and data pipelines, now extended to autonomous agents',
    withoutCase: 'agent deployments are ungoverned experiments that cannot survive audit, incident review, or regulatory scrutiny',
    withCase: 'agents are inventoried, audited, and governed with the same rigor as other production systems',
    exampleScenario: 'an enterprise deploying 30 agent applications that must satisfy SOC2, GDPR, and internal AI governance policies'
  };

  const privacyTopicBriefGuide = {
    roleLabel: 'a privacy and data protection mechanism for agents',
    purpose: 'how sensitive data is minimized, protected, and controlled across agent context, memory, and inference pipelines',
    used: 'regulated environments, personal data workflows, healthcare, finance, and any agent that touches PII',
    unlock: 'privacy-preserving agent architectures instead of post-hoc PII scrubbing',
    analogy: 'privacy by design — the same principle that shaped GDPR-compliant data pipelines, now applied to agent memory and context',
    withoutCase: 'PII leaks through agent context windows, memory stores, and tool call logs with no systematic control',
    withCase: 'sensitive data flows through defined channels with detection, redaction, and access control at each stage',
    exampleScenario: 'a customer support agent that must answer questions about accounts without persisting PII in memory or logs'
  };

  const evaluationTopicBriefGuide = {
    roleLabel: 'an evaluation or measurement practice for AI systems',
    purpose: 'how to measure whether the system actually works, detect regressions, and make evidence-based shipping decisions',
    used: 'release gates, regression testing, experimentation, benchmarking, and continuous quality monitoring',
    unlock: 'evidence-driven improvement instead of vibes-based shipping',
    analogy: 'the test suite for your AI — except the assertions are fuzzy, the inputs are adversarial, and the baseline drifts',
    withoutCase: 'regressions surface as user complaints, and teams cannot tell whether a change helped or hurt',
    withCase: 'teams detect quality changes before users do and make shipping decisions backed by measured evidence',
    exampleScenario: 'a team updating a prompt and needing proof it did not regress faithfulness, latency, or cost before shipping'
  };

  const observabilityTopicBriefGuide = {
    roleLabel: 'an observability practice for agent systems',
    purpose: 'how to trace, log, and monitor agent behavior at the step level with enough detail to debug failures and attribute costs',
    used: 'production debugging, cost attribution, performance monitoring, and incident analysis for agent runs',
    unlock: 'full visibility into multi-step agent behavior instead of black-box input-output logging',
    analogy: 'distributed tracing for microservices, but the spans are LLM calls, tool invocations, and reasoning steps',
    withoutCase: 'agent failures are black boxes — you see the input and the wrong output but nothing in between',
    withCase: 'every agent step is a traceable span with latency, cost, token count, and decision context',
    exampleScenario: 'debugging why an agent took 45 seconds and $0.80 to answer a question that should take 3 seconds and $0.02'
  };

  const applicationTopicBriefGuide = {
    roleLabel: 'an agent application pattern',
    purpose: 'how general agent primitives become concrete, domain-specific architectures with specific quality bars and failure modes',
    used: 'product design, domain adaptation, and build-vs-buy decisions for agent-powered features',
    unlock: 'concrete architecture patterns for specific domains instead of generic agent abstractions',
    analogy: 'the difference between knowing how databases work and knowing how to design a schema for an e-commerce catalog',
    withoutCase: 'teams apply generic agent patterns to domains with specific constraints and discover the mismatch in production',
    withCase: 'teams design domain-specific agent architectures that account for the domain-specific failure modes from the start',
    exampleScenario: 'a team building a coding agent and needing to decide on sandboxing, eval strategy, and context management specific to code'
  };

  const identityTopicBriefGuide = {
    roleLabel: 'an identity and authentication mechanism for agents',
    purpose: 'how agents prove identity, carry delegated authority, and maintain trust chains across systems',
    used: 'OAuth integrations, API access, multi-system workflows, and enterprise agent deployments with access control requirements',
    unlock: 'scoped, auditable agent access instead of ambient credentials or shared service accounts',
    analogy: 'the principle of least privilege applied to autonomous software — agents get exactly the permissions they need, for exactly the duration they need them',
    withoutCase: 'agents use overprivileged service accounts and a compromised agent gains access to everything the account can reach',
    withCase: 'agents carry scoped tokens with explicit expiry, and credential compromise is bounded to a single task scope',
    exampleScenario: 'an agent that needs to read from Salesforce, write to Jira, and send Slack messages — each with different user-delegated permissions'
  };

  const trainingTopicBriefGuide = {
    roleLabel: 'a model adaptation or training technique',
    purpose: 'how to change model behavior through weight updates when prompting alone is not enough, with explicit cost-quality-time trade-offs',
    used: 'domain adaptation, behavior alignment, capability gaps that prompting cannot close, and specialized model training',
    unlock: 'durable behavior changes baked into the model instead of fragile prompt scaffolding',
    analogy: 'the difference between giving someone better instructions and actually training them — one is cheap and reversible, the other is expensive and persistent',
    withoutCase: 'teams keep patching behavior with longer prompts when the model genuinely lacks the capability or alignment',
    withCase: 'teams fine-tune when the cost-quality curve justifies it, producing models that need less runtime scaffolding',
    exampleScenario: 'a team whose domain-specific extraction task fails at 60% accuracy with prompting and needs 90%+ to be useful'
  };

  // --- Rule arrays for matching guides to topics ---

  const layerTopicBriefGuides = {
    'Foundation Models': modelInternalsTopicBriefGuide,
    'Reasoning & Intelligence': reasoningTopicBriefGuide,
    'Memory & Knowledge': retrievalTopicBriefGuide,
    'Agency & Tool Use': toolUseTopicBriefGuide,
    'Multi-Agent Systems': multiAgentTopicBriefGuide,
    'Infrastructure & Deployment': runtimeTopicBriefGuide,
    'Safety, Security & Governance': safetyTopicBriefGuide,
    'Evaluation, Observability & Applications': evaluationTopicBriefGuide
  };

  const topicBriefSectionRules = [
    { pattern: /model internals|model selection|inference|structured output|embedding|reasoning models/i, guide: modelInternalsTopicBriefGuide },
    { pattern: /prompt/i, guide: promptTopicBriefGuide },
    { pattern: /retrieval|rag|chunking|indexing|knowledge|memory/i, guide: retrievalTopicBriefGuide },
    { pattern: /agent loop|planning|reasoning pattern|reflection|metacognition|agent architecture/i, guide: reasoningTopicBriefGuide },
    { pattern: /tool design|information tools|action tools|meta tooling|interaction pattern/i, guide: toolUseTopicBriefGuide },
    { pattern: /protocol|standard/i, guide: protocolTopicBriefGuide },
    { pattern: /multi-agent|orchestration|coordination|framework|failure modes/i, guide: multiAgentTopicBriefGuide },
    { pattern: /model serving|production hardening|caching|data infrastructure|deployment|api design/i, guide: runtimeTopicBriefGuide },
    { pattern: /cost engineering|finops/i, guide: costTopicBriefGuide },
    { pattern: /fine-tuning|adaptation|training/i, guide: trainingTopicBriefGuide },
    { pattern: /evaluation|observability|debugging|testing|performance|ci\/cd/i, guide: evaluationTopicBriefGuide },
    { pattern: /application/i, guide: applicationTopicBriefGuide },
    { pattern: /threat/i, guide: threatTopicBriefGuide },
    { pattern: /defense|safety/i, guide: safetyTopicBriefGuide },
    { pattern: /governance|compliance/i, guide: governanceTopicBriefGuide },
    { pattern: /privacy|data protection/i, guide: privacyTopicBriefGuide },
    { pattern: /identity|authentication/i, guide: identityTopicBriefGuide }
  ];

  const topicBriefKindRules = [
    { pattern: /\bvs\b|trade-off|when each|when it|decision framework|selection criteria/i, kind: 'comparison' },
    { pattern: /fine-tun|LoRA|QLoRA|RLHF|DPO|synthetic data|model merging|continual learning/i, kind: 'training-method' },
    { pattern: /memory promotion|memory pruning|memory compression|memory versioning|cache invalidation|freshness|staleness/i, kind: 'memory-operations' },
    { pattern: /approval|guardrails|permission|kill switch|oversight|bounded loops|allowlist|deny-by-default|sandboxing|least privilege/i, kind: 'policy-control' },
    { pattern: /injection|hijacking|poisoning|exfiltration|credential theft|supply chain|misuse|excessive agency/i, kind: 'threat-failure' },
    { pattern: /oauth|credential|mTLS|delegated auth|scoped permission|trust chain|machine identity/i, kind: 'identity-trust' },
    { pattern: /MCP|A2A|protocol bridging|transport|session pattern|agent card|manifest|OpenAPI/i, kind: 'protocol-standards' },
    { pattern: /deterministic replay|resume-from-failure|event sourcing|state persistence|persistent agent|long-running/i, kind: 'runtime-durability' },
    { pattern: /cost ceiling|token budget|cost attribution|cost-per-task|ROI|FinOps|cost accounting/i, kind: 'cost-engineering' }
  ];

  const topicBriefGuideRules = [
    { pattern: /fine-tun|LoRA|QLoRA|RLHF|DPO|synthetic data|model merging|continual learning/i, guide: trainingTopicBriefGuide },
    { pattern: /memory promotion|memory pruning|memory compression|memory versioning|cache invalidation|freshness|staleness/i, guide: retrievalTopicBriefGuide },
    { pattern: /approval|guardrails|permission|kill switch|oversight|bounded loops|allowlist|deny-by-default|sandboxing|least privilege/i, guide: safetyTopicBriefGuide },
    { pattern: /injection|hijacking|poisoning|exfiltration|credential theft|supply chain|misuse|excessive agency/i, guide: threatTopicBriefGuide },
    { pattern: /oauth|credential|mTLS|delegated auth|scoped permission|trust chain|machine identity/i, guide: identityTopicBriefGuide },
    { pattern: /MCP|A2A|protocol bridging|transport|session pattern|agent card|manifest|OpenAPI/i, guide: protocolTopicBriefGuide },
    { pattern: /deterministic replay|resume-from-failure|event sourcing|state persistence|persistent agent|long-running/i, guide: runtimeTopicBriefGuide },
    { pattern: /cost ceiling|token budget|cost attribution|cost-per-task|ROI|FinOps|cost accounting/i, guide: costTopicBriefGuide },
    { pattern: /\bvs\b|trade-off|when each|when it|decision framework|selection criteria/i, guide: defaultTopicBriefGuide }
  ];

  const topicBriefExactOverrides = [];

  const topicBriefTargetedGuideRules = [
    { pattern: /eval|benchmark|leaderboard/i, guide: evaluationTopicBriefGuide }
  ];

  const topicBriefSectionOverrides = [
    { layerTitle: 'Foundation Models', sectionTitle: 'Model selection', guide: modelSelectionTopicBriefGuide },
    { layerTitle: 'Foundation Models', sectionTitle: 'Inference optimization', guide: inferenceTopicBriefGuide },
    { layerTitle: 'Foundation Models', sectionTitle: 'Prompt engineering for production', guide: promptTopicBriefGuide },
    { layerTitle: 'Reasoning & Intelligence', sectionTitle: 'Metacognition', guide: metacognitionTopicBriefGuide },
    { layerTitle: 'Reasoning & Intelligence', sectionTitle: 'Agent architectures', guide: reasoningTopicBriefGuide },
    { layerTitle: 'Agency & Tool Use', sectionTitle: 'Protocols and standards', guide: protocolTopicBriefGuide },
    { layerTitle: 'Agency & Tool Use', sectionTitle: 'Agent identity and authentication', guide: identityTopicBriefGuide },
    { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Frameworks', guide: frameworkTopicBriefGuide },
    { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Failure modes at scale', kind: 'threat-failure', guide: threatTopicBriefGuide },
    { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'Cost engineering', guide: costTopicBriefGuide },
    { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'Fine-tuning and adaptation', guide: trainingTopicBriefGuide },
    { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Threat landscape', guide: threatTopicBriefGuide },
    { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Governance and compliance', guide: governanceTopicBriefGuide },
    { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Privacy and data protection', guide: privacyTopicBriefGuide },
    { layerTitle: 'Evaluation, Observability & Applications', sectionTitle: 'Observability', guide: observabilityTopicBriefGuide },
    { layerTitle: 'Evaluation, Observability & Applications', sectionTitle: 'Application patterns', guide: applicationTopicBriefGuide }
  ];

  window.__SyllabusTopicBriefConfig = Object.freeze({
    // Primary guides
    defaultTopicBriefGuide,
    modelInternalsTopicBriefGuide,
    modelSelectionTopicBriefGuide,
    inferenceTopicBriefGuide,
    promptTopicBriefGuide,
    reasoningTopicBriefGuide,
    metacognitionTopicBriefGuide,
    retrievalTopicBriefGuide,
    toolUseTopicBriefGuide,
    protocolTopicBriefGuide,
    multiAgentTopicBriefGuide,
    frameworkTopicBriefGuide,
    runtimeTopicBriefGuide,
    costTopicBriefGuide,
    safetyTopicBriefGuide,
    threatTopicBriefGuide,
    governanceTopicBriefGuide,
    privacyTopicBriefGuide,
    evaluationTopicBriefGuide,
    observabilityTopicBriefGuide,
    applicationTopicBriefGuide,
    identityTopicBriefGuide,
    trainingTopicBriefGuide,
    // Backward-compatible aliases for rendering code (topic-brief.js, topic-prompt.js)
    mentalModelTopicBriefGuide: defaultTopicBriefGuide,
    modelRuntimeVocabularyTopicBriefGuide: modelInternalsTopicBriefGuide,
    agentSystemVocabularyTopicBriefGuide: defaultTopicBriefGuide,
    modelTopicBriefGuide: modelInternalsTopicBriefGuide,
    controlValidationTopicBriefGuide: safetyTopicBriefGuide,
    multiAgentIncentivesTopicBriefGuide: multiAgentTopicBriefGuide,
    mlopsLifecycleTopicBriefGuide: runtimeTopicBriefGuide,
    finOpsTopicBriefGuide: costTopicBriefGuide,
    specificationGapTopicBriefGuide: evaluationTopicBriefGuide,
    humanTeamingTopicBriefGuide: applicationTopicBriefGuide,
    alignmentTopicBriefGuide: safetyTopicBriefGuide,
    privacyDataProtectionTopicBriefGuide: privacyTopicBriefGuide,
    studyRouteTopicBriefGuide: defaultTopicBriefGuide,
    distinctionTopicBriefGuide: defaultTopicBriefGuide,
    systemDecompositionTopicBriefGuide: defaultTopicBriefGuide,
    trainingMethodTopicBriefGuide: trainingTopicBriefGuide,
    memoryOperationsTopicBriefGuide: retrievalTopicBriefGuide,
    policyControlTopicBriefGuide: safetyTopicBriefGuide,
    identityTrustTopicBriefGuide: identityTopicBriefGuide,
    runtimeDurabilityTopicBriefGuide: runtimeTopicBriefGuide,
    threatFailureTopicBriefGuide: threatTopicBriefGuide,
    detectionMeasurementTopicBriefGuide: evaluationTopicBriefGuide,
    protocolStandardsTopicBriefGuide: protocolTopicBriefGuide,
    // Rule arrays
    layerTopicBriefGuides,
    topicBriefSectionRules,
    topicBriefKindRules,
    topicBriefGuideRules,
    topicBriefExactOverrides,
    topicBriefTargetedGuideRules,
    topicBriefSectionOverrides
  });
}());

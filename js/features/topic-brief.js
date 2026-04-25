(function () {
  const sharedApi = window.__SyllabusDetailShared || {};
  const briefConfigApi = window.__SyllabusTopicBriefConfig || {};
  const { joinNaturalLanguage, uniqueStrings } = sharedApi;
  const {
    defaultTopicBriefGuide,
    mentalModelTopicBriefGuide,
    modelRuntimeVocabularyTopicBriefGuide,
    agentSystemVocabularyTopicBriefGuide,
    modelTopicBriefGuide,
    promptTopicBriefGuide,
    reasoningTopicBriefGuide,
    metacognitionTopicBriefGuide,
    retrievalTopicBriefGuide,
    toolUseTopicBriefGuide,
    controlValidationTopicBriefGuide,
    multiAgentTopicBriefGuide,
    frameworkTopicBriefGuide,
    multiAgentIncentivesTopicBriefGuide,
    runtimeTopicBriefGuide,
    mlopsLifecycleTopicBriefGuide,
    finOpsTopicBriefGuide,
    evaluationTopicBriefGuide,
    specificationGapTopicBriefGuide,
    applicationTopicBriefGuide,
    humanTeamingTopicBriefGuide,
    safetyTopicBriefGuide,
    alignmentTopicBriefGuide,
    privacyDataProtectionTopicBriefGuide,
    governanceTopicBriefGuide,
    studyRouteTopicBriefGuide,
    distinctionTopicBriefGuide,
    systemDecompositionTopicBriefGuide,
    trainingMethodTopicBriefGuide,
    memoryOperationsTopicBriefGuide,
    policyControlTopicBriefGuide,
    identityTrustTopicBriefGuide,
    runtimeDurabilityTopicBriefGuide,
    threatFailureTopicBriefGuide,
    detectionMeasurementTopicBriefGuide,
    protocolStandardsTopicBriefGuide,
    layerTopicBriefGuides,
    topicBriefSectionRules,
    topicBriefKindRules,
    topicBriefGuideRules,
    topicBriefExactOverrides,
    topicBriefTargetedGuideRules,
    topicBriefSectionOverrides
  } = briefConfigApi;

  if (!joinNaturalLanguage || !uniqueStrings || !defaultTopicBriefGuide || !topicBriefKindRules || !topicBriefSectionOverrides) {
    throw new Error('Topic brief dependencies failed to load before topic brief logic.');
  }

  const topicBriefSpecificGuideRules = [
    {
      sectionTitle: 'Frameworks',
      pattern: /langchain|langgraph/i,
      guide: {
        roleLabel: 'a framework choice about chain abstractions and graph-based orchestration',
        purpose: 'how agents are modeled as tool-calling chains and explicit state graphs with checkpoints',
        used: 'tool-calling assistants, branching workflows, and durable agent graphs',
        unlock: 'explicit control flow and checkpointed state instead of hidden prompt chains',
        exampleScenario: 'a tool-using agent that needs branching, checkpoints, and resumable execution'
      }
    },
    {
      sectionTitle: 'Frameworks',
      pattern: /llamaindex|haystack/i,
      guide: {
        roleLabel: 'a retrieval and knowledge-framework topic',
        purpose: 'how a framework handles ingestion, indexing, retrieval, and context assembly around knowledge-heavy agents',
        used: 'document-grounded assistants, RAG pipelines, and citation-heavy knowledge workflows',
        unlock: 'faster construction of retrieval stacks without hand-wiring every ingestion and ranking step',
        exampleScenario: 'a knowledge assistant that must ingest documents, retrieve evidence, and assemble context reliably'
      }
    },
    {
      sectionTitle: 'Frameworks',
      pattern: /autogen|crewai|agency swarm/i,
      guide: {
        roleLabel: 'a multi-agent coordination framework topic',
        purpose: 'how specialized agents are grouped into teams, roles, and handoff patterns with shared orchestration primitives',
        used: 'role-based agent teams, delegated workflows, and supervisor-subagent systems',
        unlock: 'structured delegation instead of inventing role routing and handoffs from scratch',
        exampleScenario: 'a multi-agent workflow with planners, specialists, reviewers, and escalations'
      }
    },
    {
      sectionTitle: 'Frameworks',
      pattern: /openai agents sdk|google adk|semantic kernel|pydanticai/i,
      guide: {
        roleLabel: 'a provider-native or typed agent-SDK topic',
        purpose: 'how an SDK models agents, tools, handoffs, and runtime policy with strong provider integration or typed contracts',
        used: 'teams that want official adapters, typed tool schemas, and opinionated runtime primitives',
        unlock: 'faster delivery with cleaner tool contracts and less runtime glue code',
        exampleScenario: 'a team standardizing agent runtime patterns around a typed or provider-native SDK'
      }
    },
    {
      sectionTitle: 'Frameworks',
      pattern: /dify/i,
      guide: {
        roleLabel: 'a low-code agent platform topic',
        purpose: 'how prompts, flows, tools, and app publishing are managed through a visual or admin-oriented agent platform',
        used: 'internal copilots, app-builder workflows, and teams that need faster assembly than a code-first stack',
        unlock: 'lower-code delivery and faster operator iteration on agent apps',
        exampleScenario: 'an internal AI application assembled through visual flows, prompt management, and tool connectors'
      }
    },
    {
      sectionTitle: 'Frameworks',
      pattern: /vercel ai sdk|mastra/i,
      guide: {
        roleLabel: 'an app-layer AI SDK topic',
        purpose: 'how streaming model responses, tool calls, and agent behaviors are wired into user-facing applications and product backends',
        used: 'web applications, product surfaces, and full-stack AI features with streaming UX',
        unlock: 'cleaner integration between agent runtime behavior and application-layer delivery',
        exampleScenario: 'a product team shipping a user-facing AI workflow with streaming UI and server-side orchestration'
      }
    },
    {
      sectionTitle: 'Frameworks',
      pattern: /smolagents|agno/i,
      guide: {
        roleLabel: 'a lightweight code-first agent-library topic',
        purpose: 'how simple agent loops, tool use, and planning are packaged with less framework ceremony than a full platform stack',
        used: 'small teams, rapid prototypes, and code-centric automations that need low overhead',
        unlock: 'faster experimentation without pulling in a large orchestration platform',
        exampleScenario: 'a small automation agent built directly in code with tools and a light execution loop'
      }
    },
    {
      sectionTitle: 'Reasoning paradigms',
      pattern: /chain-of-thought|least-to-most|skeleton-of-thought/i,
      guide: {
        roleLabel: 'a stepwise reasoning pattern',
        purpose: 'how the model breaks a problem into explicit intermediate steps or staged subproblems before answering',
        used: 'math, logic, structured analysis, and tasks where one-shot answers skip important intermediate work',
        unlock: 'more reliable multi-step reasoning with clearer intermediate structure',
        exampleScenario: 'an agent solving a task where the intermediate reasoning structure matters as much as the final answer'
      }
    },
    {
      sectionTitle: 'Reasoning paradigms',
      pattern: /tree-of-thought|graph-of-thought/i,
      guide: {
        roleLabel: 'a search-based reasoning pattern',
        purpose: 'how the agent explores several candidate branches or partial states instead of following one linear reasoning trace',
        used: 'planning, search-heavy problems, and tasks that benefit from branching and backtracking',
        unlock: 'controlled exploration of several solution paths before committing to one',
        exampleScenario: 'a planning task with several plausible branches where early commitment would hide better paths'
      }
    },
    {
      sectionTitle: 'Reasoning paradigms',
      pattern: /react|program-of-thought|tool-assisted reasoning/i,
      guide: {
        roleLabel: 'a tool-grounded reasoning pattern',
        purpose: 'how reasoning is tied to tool calls, code execution, or external evidence rather than remaining purely verbal',
        used: 'tool-using agents, code interpreters, and workflows where reasoning must stay grounded in live results',
        unlock: 'reasoning that can inspect reality, not just describe what should happen',
        exampleScenario: 'an agent that alternates between reasoning and tool use while solving a live task'
      }
    },
    {
      sectionTitle: 'Reasoning paradigms',
      pattern: /self-consistency|debate reasoning|verifier-guided reasoning|verification\s*&\s*self-verification/i,
      guide: {
        roleLabel: 'a verification-oriented reasoning pattern',
        purpose: 'how multiple candidate answers, critiques, or verifier signals are used to judge whether a reasoning path is sound',
        used: 'hard questions, ensemble-style reasoning, and tasks where a single trace is too brittle to trust',
        unlock: 'better answer selection through comparison, critique, or verification instead of blind commitment to one path',
        exampleScenario: 'a difficult reasoning task where several candidate solutions need to be compared before finalizing one'
      }
    },
    {
      sectionTitle: 'Reflection, critique & repair',
      pattern: /reflection loops|self-critique|self-evaluation|iterative refinement|reflexion|critique agents|trajectory critique and repair|plan repair after failure|post-action review loops/i,
      guide: {
        roleLabel: 'a self-review and repair pattern',
        purpose: 'how an agent critiques its own output or trajectory, diagnoses failure, and revises the next attempt instead of repeating the same plan',
        used: 'iterative writing, coding loops, tool-recovery workflows, and agents that must learn from partial failure inside one run',
        unlock: 'structured self-correction rather than blind repetition after a bad result',
        exampleScenario: 'an agent revising a plan or output after a tool failure, critique, or weak first draft'
      }
    },
    {
      sectionTitle: 'Planning & control',
      pattern: /task decomposition|hierarchical planning|planner-executor separation/i,
      guide: {
        roleLabel: 'a planning and decomposition topic',
        purpose: 'how a task is split into subgoals, ordered stages, or planner-executor boundaries before execution begins',
        used: 'long-horizon agents, workflow orchestration, and pipelines that should not overload one loop with every role at once',
        unlock: 'clearer task structure and cleaner separation between deciding and doing',
        exampleScenario: 'a multi-step agent that must break work into stages before execution starts'
      }
    },
    {
      sectionTitle: 'Planning & control',
      pattern: /finite-state \/ rule-based controllers|llm-based controllers|agent loop design/i,
      guide: {
        roleLabel: 'a controller-design topic',
        purpose: 'how the agent loop decides the next move through fixed rules, state machines, or model-driven control logic',
        used: 'runtime control loops, orchestration layers, and bounded-autonomy systems that need explicit next-step logic',
        unlock: 'more deliberate control over when the agent thinks, acts, pauses, or hands off',
        exampleScenario: 'an agent runtime that must decide which state, tool, or reviewer comes next'
      }
    },
    {
      sectionTitle: 'Planning & control',
      pattern: /replanning \/ plan repair|execution monitoring and watchdogs|goal prioritization|constraint satisfaction|stop conditions and escalation criteria|budget-aware planning/i,
      guide: {
        roleLabel: 'an execution-monitoring or plan-adaptation topic',
        purpose: 'how progress is checked, constraints are respected, and plans are repaired or reprioritized as the environment changes',
        used: 'long-running jobs, budget-limited workflows, and tool-using agents operating under changing evidence',
        unlock: 'plans that stay valid under new constraints instead of collapsing after the first deviation from the happy path',
        exampleScenario: 'an agent that must keep a plan feasible while tools fail, budgets tighten, or priorities shift'
      }
    },
    {
      sectionTitle: 'Meta-cognition',
      pattern: /confidence monitoring|calibration proxies|epistemic vs aleatoric uncertainty|out-of-distribution|confidence signals/i,
      guide: {
        roleLabel: 'an uncertainty-estimation topic',
        purpose: 'what signals the agent can use to estimate confidence when correctness is not directly observable',
        used: 'abstention logic, escalation thresholds, verification triggers, and high-risk tool use under uncertainty',
        unlock: 'confidence estimates that can actually steer behavior rather than only decorate outputs',
        exampleScenario: 'an agent deciding how much evidence it really has before answering or acting'
      }
    },
    {
      sectionTitle: 'Meta-cognition',
      pattern: /knowing-when-to-stop|task completion detection|selective prediction|abstention|self-checking with external verification|confidence-gated action execution|resource-bounded reasoning|planning horizon awareness|metacognitive prompting strategies|introspective tool-use decisions/i,
      guide: {
        roleLabel: 'a stop, abstention, or escalation-control topic',
        purpose: 'how the agent decides whether to answer, act, verify again, or escalate based on uncertainty and task state',
        used: 'stop conditions, escalation logic, verification loops, and agents that should not push ahead blindly',
        unlock: 'cleaner decisions about when to finish, hesitate, or ask for help',
        exampleScenario: 'an agent choosing whether to complete the task now, verify one more thing, or escalate to a human'
      }
    },
    {
      sectionTitle: 'API design for AI services',
      pattern: /streaming response design|webhook patterns|long-running task apis/i,
      guide: {
        roleLabel: 'an API delivery-pattern topic',
        purpose: 'how AI services stream partial results, hand work off asynchronously, and keep clients informed while jobs are still running',
        used: 'chat streaming, background jobs, callback-based workflows, and agent tasks that outlive one request',
        unlock: 'cleaner delivery of long or variable-latency work without forcing every caller into a blocking request',
        exampleScenario: 'an AI service that must acknowledge work quickly and deliver progress or completion later'
      }
    },
    {
      sectionTitle: 'API design for AI services',
      pattern: /rate limiting strategies|token-based rate limiting vs request-based|backpressure and queue-based request handling|timeout design/i,
      guide: {
        roleLabel: 'an API traffic-control topic',
        purpose: 'how request volume, token volume, queue pressure, and time budgets are controlled before an AI service saturates',
        used: 'public APIs, multi-tenant services, bursty traffic, and model-backed endpoints with variable latency',
        unlock: 'stable behavior under load instead of collapse during spikes',
        exampleScenario: 'an AI endpoint protecting itself from burst traffic while still serving priority work predictably'
      }
    },
    {
      sectionTitle: 'API design for AI services',
      pattern: /api versioning|request and response schemas|error handling and retry contracts|idempotency keys/i,
      guide: {
        roleLabel: 'an API contract and recovery topic',
        purpose: 'how clients and services agree on schemas, retries, idempotency, and versioned behavior as prompts or models change',
        used: 'production client integrations, long-lived APIs, and model-rollout programs that cannot break callers every release',
        unlock: 'safer evolution of AI endpoints without duplicate side effects or brittle client behavior',
        exampleScenario: 'a client-facing AI API that must change its internals without breaking existing integrations'
      }
    },
    {
      sectionTitle: 'API design for AI services',
      pattern: /authentication and authorization for ai apis|multi-tenant api isolation|api gateway patterns|health check and readiness probes/i,
      guide: {
        roleLabel: 'an API boundary and isolation topic',
        purpose: 'how identity, tenancy, gateways, and readiness checks define the operational boundary around an AI service',
        used: 'multi-tenant AI platforms, secured endpoints, gateway layers, and services that need clear ownership boundaries',
        unlock: 'cleaner isolation, safer exposure, and better operational hygiene at the service edge',
        exampleScenario: 'a shared AI platform separating tenants, enforcing auth, and proving readiness before traffic is admitted'
      }
    },
    {
      sectionTitle: 'Scaling & operations',
      pattern: /horizontal scaling|auto-scaling|multi-region deployment|graceful degradation/i,
      guide: {
        roleLabel: 'a fleet-operations topic',
        purpose: 'how a large population of agents is scaled, placed, and degraded gracefully across regions and workloads',
        used: 'distributed fleets, queued workloads, and services that need capacity planning beyond one runtime instance',
        unlock: 'capacity and resilience at fleet scale instead of one-node stability only',
        exampleScenario: 'an agent service that must survive traffic spikes, regional failures, and uneven demand'
      }
    },
    {
      sectionTitle: 'Scaling & operations',
      pattern: /agent lifecycle management|health checks & heartbeats|version management|canary deployments|configuration management|agent dependency management/i,
      guide: {
        roleLabel: 'a runtime lifecycle and change-management topic',
        purpose: 'how agents are versioned, rolled out, configured, monitored for liveness, and kept consistent as the service changes over time',
        used: 'production operations, canary rollouts, config changes, and runtime health management for live agent systems',
        unlock: 'safer operational change with clearer health signals and rollback paths',
        exampleScenario: 'a live agent platform shipping runtime changes without losing track of health, config, or version state'
      }
    },
    {
      sectionTitle: 'Agentic browsers',
      pattern: /browser-as-runtime|browser-native agent products|operator \/ computer-use paradigms/i,
      guide: {
        roleLabel: 'a browser-runtime topic',
        purpose: 'how the browser becomes the execution surface where an agent reads interfaces and carries out work across real web applications',
        used: 'computer-use agents, browser-native products, and web workflows where APIs are incomplete or unavailable',
        unlock: 'direct access to the real interaction surface instead of API-only automation',
        exampleScenario: 'an agent navigating a live web product to complete work the same way a human operator would'
      }
    },
    {
      sectionTitle: 'Agentic browsers',
      pattern: /dom interaction models|accessibility tree interaction|vision-based web agents|headless vs visual browser agents|reusable browser skills/i,
      guide: {
        roleLabel: 'a web-interaction topic',
        purpose: 'how an agent perceives and manipulates pages through DOM structure, accessibility trees, visual cues, and reusable action patterns',
        used: 'navigation, form filling, resilient web automation, and web-task recovery after layout changes',
        unlock: 'more robust interaction than brittle coordinate-click automation',
        exampleScenario: 'a browser agent that must keep working as page structure, labels, or visual layout change'
      }
    },
    {
      sectionTitle: 'Agentic browsers',
      pattern: /browser sandboxing|credential & session isolation|web agent benchmarks/i,
      guide: {
        roleLabel: 'a browser safety and isolation topic',
        purpose: 'how sessions, credentials, sandboxes, and evaluation boundaries are managed when agents operate inside browsers',
        used: 'credentialed browser agents, isolated sessions, and browser-evaluation programs that need clear blast-radius control',
        unlock: 'safer web automation with better containment of session and credential risk',
        exampleScenario: 'a browser agent running with real credentials while the team tries to keep session risk bounded and testable'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^Web search$/i,
      guide: {
        roleLabel: 'a web-discovery tool topic',
        purpose: 'how an agent finds fresh external information through search queries, ranking, and result selection before deeper retrieval begins',
        used: 'research agents, current-events lookups, troubleshooting flows, and any task that starts with open-ended discovery on the public web',
        unlock: 'faster discovery of relevant sources before the agent commits to reading or acting on any one page',
        exampleScenario: 'an agent starting from a vague question and needing to find candidate sources before it can drill down'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^Web scraping$/i,
      guide: {
        roleLabel: 'a web-extraction tool topic',
        purpose: 'how an agent turns live web pages into structured or semi-structured data it can actually reason over instead of only reading raw page text',
        used: 'price monitoring, competitor tracking, document collection, and workflows that need specific fields pulled from web content',
        unlock: 'repeatable extraction from messy web pages instead of brittle copy-paste style retrieval',
        exampleScenario: 'an agent collecting specific facts from several pages after search has already identified the likely sources'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^APIs & REST$/i,
      guide: {
        roleLabel: 'a structured system-read topic',
        purpose: 'how an agent queries external systems through documented endpoints with typed parameters and predictable response contracts',
        used: 'SaaS integrations, internal service lookups, and workflows where the cleanest source of truth lives behind an API instead of a page or document',
        unlock: 'more reliable access to current external state than ad hoc scraping or guessing from context',
        exampleScenario: 'an agent reading live account, inventory, or workflow state from a system that already exposes a proper API'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^File ingestion \(PDF, CSV, DOCX\)$/i,
      guide: {
        roleLabel: 'a document-ingestion topic',
        purpose: 'how an agent reads uploaded files, parses their structure, and prepares their contents for retrieval, extraction, or analysis',
        used: 'enterprise document workflows, spreadsheet analysis, contract review, and user-upload driven assistants',
        unlock: 'turning raw user files into machine-usable context instead of treating them as opaque attachments',
        exampleScenario: 'an assistant that must accept uploaded reports or spreadsheets and make them usable for downstream analysis'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^Code interpreters$/i,
      guide: {
        roleLabel: 'a computational analysis tool topic',
        purpose: 'how an agent executes code in a bounded runtime to inspect data, transform files, run calculations, or verify intermediate results',
        used: 'data analysis, chart generation, file transformation, and tasks where the agent needs an executable workspace instead of pure text reasoning',
        unlock: 'grounded computation and reproducible intermediate work instead of only verbal problem solving',
        exampleScenario: 'an agent that needs to run Python or another interpreter to analyze a dataset rather than estimate the answer from text alone'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^Database queries$/i,
      guide: {
        roleLabel: 'a structured data-access topic',
        purpose: 'how an agent reads relational or warehouse data through explicit queries, filters, and schemas instead of browsing documents',
        used: 'analytics, reporting, operational lookups, and business workflows where the source of truth is structured data at rest',
        unlock: 'precise access to tabular state with stronger filters and aggregation than document retrieval alone can provide',
        exampleScenario: 'an agent answering operational questions by querying a database rather than relying on stale reports or summaries'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^Knowledge base Q&A$/i,
      guide: {
        roleLabel: 'a knowledge-interface topic',
        purpose: 'how an agent asks focused questions against an internal knowledge base and returns grounded answers with the retrieval system hidden behind a simpler interface',
        used: 'support assistants, enterprise search products, and internal copilots where users want answers rather than direct control over the retrieval stack',
        unlock: 'a higher-level question-answer interface over retrieval systems that would otherwise feel too technical for end users',
        exampleScenario: 'an internal assistant answering policy or product questions from a curated knowledge base without exposing the retrieval plumbing'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^Screenshot \/ screen capture tools$/i,
      guide: {
        roleLabel: 'a visual capture tool topic',
        purpose: 'how an agent captures screen or image state so it can inspect interfaces, error states, or visual documents that are not otherwise accessible as clean text',
        used: 'browser debugging, UI inspection, multimodal troubleshooting, and workflows where the visual state matters as much as the underlying HTML or metadata',
        unlock: 'access to evidence that exists only in rendered pixels or screen state rather than structured text',
        exampleScenario: 'an agent diagnosing a UI issue by capturing the rendered screen before deciding what to inspect next'
      }
    },
    {
      sectionTitle: 'Information tools',
      pattern: /^OCR & document AI$/i,
      guide: {
        roleLabel: 'a document-vision extraction topic',
        purpose: 'how an agent converts scanned pages, images, and complex documents into readable structure with layout-aware text extraction and field detection',
        used: 'invoice processing, form extraction, scanned-archive workflows, and assistants handling documents that were never born digital',
        unlock: 'usable text and structure from visual documents that standard file parsing cannot read cleanly',
        exampleScenario: 'an agent extracting fields and text from scanned forms before handing the result to downstream validation or review steps'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^Code execution \(sandboxed\)$/i,
      guide: {
        roleLabel: 'a sandboxed execution topic',
        purpose: 'how an agent runs code inside a constrained runtime when it needs computation, transformation, or validation that prose alone cannot provide',
        used: 'data processing, scripted checks, file transformation, and tool-using workflows that need a bounded compute surface',
        unlock: 'real executable work without immediately exposing the host environment to unrestricted code',
        exampleScenario: 'an agent that needs to run code against task data while keeping the execution boundary isolated from the main system'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^File system operations$/i,
      guide: {
        roleLabel: 'a local-state mutation topic',
        purpose: 'how an agent reads, writes, moves, or deletes files and directories as part of a workflow that changes local working state',
        used: 'coding agents, document pipelines, artifact generation, and automations that materialize outputs on disk',
        unlock: 'direct manipulation of working artifacts instead of only describing what should be changed',
        exampleScenario: 'an agent editing files, generating outputs, or reorganizing a workspace as part of task execution'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^Shell \/ CLI automation$/i,
      guide: {
        roleLabel: 'a command-runner automation topic',
        purpose: 'how an agent invokes shell commands and scripts to drive existing developer or ops tooling instead of reimplementing those capabilities from scratch',
        used: 'build pipelines, diagnostics, package management, system checks, and any workflow already exposed through a command-line interface',
        unlock: 'reuse of mature automation surfaces that already exist in CLI form',
        exampleScenario: 'an agent orchestrating an existing toolchain by running commands, inspecting outputs, and deciding the next step'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^Browser automation$/i,
      guide: {
        roleLabel: 'a scripted web-action topic',
        purpose: 'how an agent drives a browser through explicit page actions, selectors, and navigation steps to complete web tasks programmatically',
        used: 'testing, form workflows, web operations, and tasks where the target system is primarily exposed through a web interface',
        unlock: 'repeatable interaction with web applications beyond read-only inspection',
        exampleScenario: 'an agent completing a structured web task by driving a browser step by step through the page flow'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^Computer use \/ GUI agents$/i,
      guide: {
        roleLabel: 'a desktop interaction topic',
        purpose: 'how an agent acts through graphical interfaces when the real workflow depends on clicks, menus, windows, and desktop state rather than clean APIs',
        used: 'legacy software, desktop operations, and environments where computer-use behavior must approximate a human operator using the screen directly',
        unlock: 'access to workflows that are otherwise trapped inside GUI-only systems',
        exampleScenario: 'an agent controlling a legacy desktop application that has no usable API but still must be operated reliably'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^Email & calendar APIs$/i,
      guide: {
        roleLabel: 'a communication-side-effect topic',
        purpose: 'how an agent sends messages, schedules events, and changes collaborative coordination state through communication-system APIs',
        used: 'meeting coordination, outreach automation, reminders, and workflows where the agent interacts directly with inboxes and calendars',
        unlock: 'action on real communication channels rather than only drafting content for a human to send later',
        exampleScenario: 'an agent that turns a workflow decision into a scheduled meeting, sent update, or calendar change'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^Form filling$/i,
      guide: {
        roleLabel: 'a structured submission topic',
        purpose: 'how an agent maps collected task data into UI or document forms that must be completed accurately for the workflow to proceed',
        used: 'application processing, back-office workflows, browser tasks, and any system where structured submission is the action surface',
        unlock: 'faster completion of repetitive structured workflows with less manual re-entry',
        exampleScenario: 'an agent taking already-known task data and submitting it into a required form without a human retyping every field'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^Voice & telephony agents$/i,
      guide: {
        roleLabel: 'a real-time voice-action topic',
        purpose: 'how an agent takes actions through calls, spoken interaction, and telephony systems where timing, turn-taking, and audio channels matter',
        used: 'call automation, voice support, appointment handling, and workflows that happen live over audio rather than text',
        unlock: 'agent workflows that can operate in real-time spoken channels instead of only asynchronous text environments',
        exampleScenario: 'an agent handling a phone-based task where it must listen, respond, and act while the conversation is still in progress'
      }
    },
    {
      sectionTitle: 'Action tools',
      pattern: /^Image \/ video generation tools$/i,
      guide: {
        roleLabel: 'a media-generation action topic',
        purpose: 'how an agent triggers image or video generation systems to produce visual assets as a concrete downstream output of the workflow',
        used: 'creative pipelines, marketing workflows, content automation, and products where the agent produces media rather than only text or data changes',
        unlock: 'direct creation of visual deliverables inside the agent loop',
        exampleScenario: 'an agent that turns a content brief or product workflow into generated visual assets ready for review'
      }
    },
    {
      sectionTitle: 'Evaluation',
      pattern: /automated benchmarks|swe-bench|webarena|agentbench|bfcl|toolbench|end-to-end agent evals|multi-turn evals/i,
      guide: {
        roleLabel: 'an evaluation-benchmark topic',
        purpose: 'how a benchmark, eval suite, or multi-step test protocol turns agent behavior into comparable scores',
        used: 'model selection, regression gates, leaderboard interpretation, and release review for agent systems',
        unlock: 'comparability across versions without relying on anecdotes or one-off demos',
        exampleScenario: 'a team deciding whether a new model or workflow deserves promotion based on benchmark evidence'
      }
    },
    {
      sectionTitle: 'Evaluation',
      pattern: /human evaluation|task success rate|hallucination detection|faithfulness scoring|relevance scoring|adversarial testing|a\/b testing agents/i,
      guide: {
        roleLabel: 'an outcome-metric evaluation topic',
        purpose: 'which signal the team measures and how that metric approximates real-world quality, risk, or user value',
        used: 'task evals, product-quality reviews, regression gates, and experimentation programs that need a defensible success signal',
        unlock: 'metrics that connect agent behavior to actual outcomes instead of vague impressions',
        exampleScenario: 'a team defining the score that will decide whether a behavior change was a real improvement'
      }
    },
    {
      sectionTitle: 'Observability',
      pattern: /distributed tracing|step-level logging|cost tracking|latency monitoring|token usage dashboards|agent audit logs|opentelemetry|arize|phoenix|braintrust/i,
      guide: {
        roleLabel: 'an observability-runtime topic',
        purpose: 'how traces, logs, cost, latency, and step-level telemetry reveal what the agent actually did at runtime',
        used: 'incident response, debugging, capacity analysis, and production monitoring for live agent systems',
        unlock: 'step-level visibility into execution instead of guessing from the final answer alone',
        exampleScenario: 'a production incident where the team needs to reconstruct the prompts, tools, and timings behind a bad result'
      }
    },
    {
      sectionTitle: 'Debugging & testing',
      pattern: /prompt debugging|tool call debugging|deterministic replay|failure analysis|unit tests|integration tests|regression testing|chaos engineering|snapshot testing|mock tool servers|agent simulation environments/i,
      guide: {
        roleLabel: 'a testing and debugging topic',
        purpose: 'how agent behavior is reproduced, isolated, and challenged in controlled environments before changes ship',
        used: 'test suites, replay tools, mocks, simulation environments, and failure-analysis workflows for agent systems',
        unlock: 'repeatable diagnosis and safer iteration on prompts, tools, and orchestration logic',
        exampleScenario: 'a team reproducing an agent failure locally so they can test several fixes without touching production'
      }
    },
    {
      sectionTitle: 'Performance engineering',
      pattern: /latency optimization|cost optimization|semantic caching|parallel execution|batching|model routing|prompt compression|context pruning/i,
      guide: {
        roleLabel: 'a performance-engineering topic',
        purpose: 'which lever reduces latency, cost, or context pressure without collapsing task quality',
        used: 'throughput tuning, serving optimization, and cost-quality trade-off work for agent systems',
        unlock: 'better unit economics and faster responses under the same quality bar',
        exampleScenario: 'a team trying to cut latency or spend without degrading task success'
      }
    },
    {
      sectionTitle: 'CI/CD for AI systems',
      pattern: /prompt testing in ci pipelines|model regression checks|eval-gated deployments|prompt diff and review workflows|automated eval suites in pull requests|staging environments|shadow mode and dark launches|rollback strategies for model updates|canary releases with eval thresholds|integration testing for tool-calling agents|contract testing for llm outputs|eval dashboards in ci/i,
      guide: {
        roleLabel: 'a release-governance topic for AI systems',
        purpose: 'how prompt, model, and workflow changes are tested, staged, gated, and rolled back inside the delivery pipeline',
        used: 'CI pipelines, staged rollouts, regression gates, and release engineering for AI-backed features',
        unlock: 'faster iteration with stronger release safety around behavior changes that are otherwise hard to see',
        exampleScenario: 'a team promoting a prompt or model change through CI, staging, canaries, and rollback gates'
      }
    },
    {
      sectionTitle: 'Agent design patterns',
      pattern: /router pattern|map-reduce pattern|supervisor pattern|planner-executor pattern|retriever-reader pattern|assembly line pattern|blackboard pattern/i,
      guide: {
        roleLabel: 'an orchestration design-pattern topic',
        purpose: 'how work is routed, split, sequenced, or supervised across reusable agent components',
        used: 'router pipelines, fan-out workflows, supervisor systems, assembly-line processing, and shared-workspace coordination',
        unlock: 'repeatable orchestration structure instead of bespoke prompt spaghetti',
        exampleScenario: 'a team deciding how work should be distributed and recombined across several agent steps or roles'
      }
    },
    {
      sectionTitle: 'Agent design patterns',
      pattern: /critic \/ verifier pattern|generator-evaluator loop|watchdog pattern|externalized scratchpad \/ working-state pattern/i,
      guide: {
        roleLabel: 'a review, verification, or working-state pattern',
        purpose: 'how one step critiques, monitors, or externalizes the state of another so the workflow stays inspectable and correctable',
        used: 'critic loops, watchdogs, generator-evaluator flows, and workflows that need explicit working state instead of hidden context',
        unlock: 'clearer quality control and more inspectable intermediate state inside the loop',
        exampleScenario: 'an agent workflow that needs explicit review or externalized working state before trusting the next step'
      }
    },
    {
      sectionTitle: 'Agent architectures',
      pattern: /react agents|plan-and-execute agents|reflection agents|tool-using agents|subagent patterns|mixture-of-agents|skeleton planner/i,
      guide: {
        roleLabel: 'an agent-operating-model topic',
        purpose: 'what control loop, delegation pattern, or planning surface defines this style of agent',
        used: 'architecture selection for assistants, planners, reflective agents, and delegated tool-using systems',
        unlock: 'cleaner choice among operating loops instead of treating all agents as the same runtime pattern',
        exampleScenario: 'a team choosing which agent loop shape best fits a new product or workflow'
      }
    },
    {
      sectionTitle: 'Agent architectures',
      pattern: /generalist agents|world models|compound ai systems|cognitive architectures/i,
      guide: {
        roleLabel: 'a broad agent-architecture framing topic',
        purpose: 'how agent capability is organized at a system level, whether through generalist behavior, internal world structure, or multi-component composition',
        used: 'high-level architecture debates, research framing, and system-design choices about how much structure should live around the model',
        unlock: 'clearer reasoning about what kind of agent system is actually being built',
        exampleScenario: 'a team deciding how much structure, specialization, or world-modeling should sit around the core model'
      }
    },
    {
      sectionTitle: 'Control & validation',
      pattern: /human-in-the-loop|approval workflows|human-on-the-loop|full autonomy|adaptive autonomy levels/i,
      guide: {
        roleLabel: 'an approval and autonomy-control topic',
        purpose: 'where people or policies explicitly decide whether an agent may continue, act, or escalate under bounded autonomy',
        used: 'approval flows, HITL systems, adaptive-autonomy settings, and risky tool-use workflows',
        unlock: 'autonomy that expands only when the approval surface is explicit',
        exampleScenario: 'an agent that can prepare work automatically but must cross explicit approval gates before taking action'
      }
    },
    {
      sectionTitle: 'Control & validation',
      pattern: /objective -> execution -> validation loops|validation checkpoint architecture|goal decomposition with validation gates|rollback-on-failure|compensating actions|schema-driven output validation/i,
      guide: {
        roleLabel: 'a workflow-validation topic',
        purpose: 'how objectives, checkpoints, output schemas, and rollback logic are used to prove a step really succeeded before the workflow moves on',
        used: 'multi-step automations, schema-constrained outputs, side-effecting tools, and workflows with compensating actions',
        unlock: 'cleaner proof of completion and safer recovery after failure',
        exampleScenario: 'a side-effecting workflow that must confirm each step before declaring the overall task done'
      }
    },
    {
      sectionTitle: 'Failure modes at scale',
      pattern: /coordination collapse|cascade failures across agent hops|communication overhead explosion|context window exhaustion|conflicting sub-goal resolution failures/i,
      guide: {
        roleLabel: 'a multi-agent coordination-failure topic',
        purpose: 'how multi-agent execution breaks when agents block one another, fan out too aggressively, or lose usable context across hops',
        used: 'orchestrated agent teams, long chains of handoffs, and distributed workflows under real workload',
        unlock: 'earlier detection of coordination pathologies before they turn into runaway cost or stuck work',
        exampleScenario: 'a multi-agent system that looks elegant on paper until coordination overhead or blocking behavior dominates runtime'
      }
    },
    {
      sectionTitle: 'Failure modes at scale',
      pattern: /authority ambiguity|deference loops|silent failure|goal drift|herding behavior|hallucination amplification/i,
      guide: {
        roleLabel: 'a decision-ownership or drift-failure topic',
        purpose: 'how responsibility, priorities, or success signals become ambiguous across several agents over time',
        used: 'supervisor-subagent systems, delegated workflows, and long-running pipelines where progress reports can drift away from reality',
        unlock: 'clearer ownership and earlier detection of false completion or degraded decision quality',
        exampleScenario: 'a delegated agent workflow where reported progress no longer matches real task completion'
      }
    },
    {
      sectionTitle: 'Failure modes at scale',
      pattern: /trust chain breakdown|emergent adversarial dynamics/i,
      guide: {
        roleLabel: 'a trust-chain or adversarial multi-agent failure topic',
        purpose: 'how compromised agents or hostile dynamics spread risk through the rest of a cooperative agent network',
        used: 'federated agent systems, delegated pipelines, and cross-organizational coordination with shared trust assumptions',
        unlock: 'better containment of bad actors and broken trust edges inside the network',
        exampleScenario: 'a multi-agent pipeline where one compromised or adversarial participant can poison downstream work'
      }
    },
    {
      sectionTitle: 'Developer & engineering agents',
      pattern: /coding agents|agentic coding|code review agents|devops \/ sre agents|testing & qa agents|documentation generation agents|database migration agents|security scanning agents/i,
      guide: {
        roleLabel: 'an engineering-workflow application topic',
        purpose: 'how agents support code, infrastructure, testing, documentation, or database operations inside software teams',
        used: 'developer tooling, CI pipelines, incident response, review workflows, and repository maintenance',
        unlock: 'faster engineering loops while keeping human review and operational boundaries visible',
        exampleScenario: 'an engineering team using agents to draft changes, run checks, and surface reviewable work'
      }
    },
    {
      sectionTitle: 'Enterprise & business agents',
      pattern: /customer support agents|automation \/ rpa agents|sales & marketing agents|supply chain agents|hr & recruiting agents|meeting summarization agents|procurement agents/i,
      guide: {
        roleLabel: 'a business-operations application topic',
        purpose: 'how agents triage requests, gather records, draft outputs, and move routine operational work through business workflows',
        used: 'support queues, back-office automations, meeting follow-up, procurement flows, and operational coordination work',
        unlock: 'faster case handling and lower drag on repetitive operational tasks',
        exampleScenario: 'an operations team using agents to move tickets or cases forward before a person handles the exceptions'
      }
    },
    {
      sectionTitle: 'Enterprise & business agents',
      pattern: /data analysis agents|financial agents|legal agents|compliance & audit agents/i,
      guide: {
        roleLabel: 'a professional-analysis application topic',
        purpose: 'how agents support analysis, drafting, and decision support in domains with higher judgment, evidence, or compliance demands',
        used: 'analyst workflows, finance reviews, legal preparation, and compliance evidence gathering',
        unlock: 'bringing model assistance into expert workflows without treating them as generic chat tasks',
        exampleScenario: 'a professional workflow where the agent prepares evidence or draft work but the human still owns the binding decision'
      }
    },
    {
      sectionTitle: 'Research & domain agents',
      pattern: /research agents|scientific discovery agents|drug discovery agents|materials science agents|climate & environmental agents|academic writing & literature review agents/i,
      guide: {
        roleLabel: 'a research and scientific-workflow application topic',
        purpose: 'how agents search literature, synthesize evidence, generate hypotheses, or manage experimental knowledge in research-heavy domains',
        used: 'R&D, literature review, evidence synthesis, and scientific planning workflows',
        unlock: 'higher research throughput with better evidence management and hypothesis generation support',
        exampleScenario: 'a research team using agents to collect sources, summarize findings, and propose next investigative steps'
      }
    },
    {
      sectionTitle: 'Research & domain agents',
      pattern: /healthcare agents|education agents/i,
      guide: {
        roleLabel: 'a regulated or high-stakes domain-application topic',
        purpose: 'how agents support human professionals in domains where explanations, oversight, and error cost matter as much as raw capability',
        used: 'clinical documentation, tutoring, educational support, and other workflows with strong human-accountability requirements',
        unlock: 'more useful assistance in high-stakes settings without pretending the agent can own the full decision alone',
        exampleScenario: 'a human expert using an agent for preparation, summarization, or support inside a tightly governed workflow'
      }
    },
    {
      sectionTitle: 'Consumer & personal agents',
      pattern: /personal assistants|shopping & comparison agents|travel planning agents|lifestyle & productivity agents/i,
      guide: {
        roleLabel: 'a personal-assistance application topic',
        purpose: 'how agents coordinate planning, lookup, comparison, and lightweight task management on behalf of one user',
        used: 'consumer assistants, itinerary planning, purchase comparison, and day-to-day personal coordination',
        unlock: 'more coherent help across several small personal tasks instead of one-off chat answers',
        exampleScenario: 'a personal assistant helping one user compare options, plan next steps, and keep details organized'
      }
    },
    {
      sectionTitle: 'Consumer & personal agents',
      pattern: /multi-modal agents|voice agents & assistants|browser \/ computer-use agents/i,
      guide: {
        roleLabel: 'an interactive multimodal-assistant topic',
        purpose: 'how agents stay useful across voice, visual, and browser interaction surfaces instead of living in text alone',
        used: 'voice interfaces, multimodal assistants, and consumer-facing computer-use workflows',
        unlock: 'assistants that can work across richer interfaces and interaction modes',
        exampleScenario: 'a consumer-facing agent that listens, sees, and acts across several surfaces instead of only answering text prompts'
      }
    },
    {
      sectionTitle: 'Consumer & personal agents',
      pattern: /creative \/ content generation agents|gaming & npc agents/i,
      guide: {
        roleLabel: 'a creative or entertainment application topic',
        purpose: 'how agent patterns support narrative, content creation, or interactive entertainment experiences for end users',
        used: 'creative tooling, content workflows, gameplay systems, and interactive character behavior',
        unlock: 'more adaptive and personalized creative experiences than static generation alone',
        exampleScenario: 'a consumer product where the agent helps generate, adapt, or role-play content in an ongoing interaction'
      }
    },
    {
      sectionTitle: 'Human-agent teaming',
      pattern: /trust calibration|oversight fatigue|automation complacency|anti-patterns: over-reliance|learned helplessness|automation bias|explainability requirements for team trust/i,
      guide: {
        roleLabel: 'a trust and oversight teaming topic',
        purpose: 'how humans calibrate trust, avoid over-reliance, and recognize when oversight quality is degrading in mixed human-agent workflows',
        used: 'review queues, copilots, escalation chains, and safety-sensitive automations where human judgment stays in the loop',
        unlock: 'better trust calibration and fewer failures caused by misplaced confidence or oversight fatigue',
        exampleScenario: 'a mixed workflow where a human reviewer has to know when to trust the agent and when to look harder'
      }
    },
    {
      sectionTitle: 'Human-agent teaming',
      pattern: /role complementarity|shared mental models|adaptive autonomy levels|handoff protocols|mixed-initiative interaction design|team situational awareness|workforce redesign/i,
      guide: {
        roleLabel: 'a teaming-design topic',
        purpose: 'how humans and agents share context, divide roles, and redesign workflows around mixed initiative and explicit handoffs',
        used: 'human-agent team design, escalation protocols, shared dashboards, and organizational redesign around AI assistance',
        unlock: 'clearer responsibility boundaries and less confusion at handoff points',
        exampleScenario: 'a service workflow being redesigned after a new semi-autonomous teammate is added to the operation'
      }
    },
    {
      sectionTitle: 'Agent-specific threats',
      pattern: /prompt injection|indirect prompt injection|goal hijacking|multi-hop prompt injection/i,
      guide: {
        roleLabel: 'an instruction-integrity threat topic',
        purpose: 'how untrusted content smuggles hostile instructions into the agent\'s control loop or retrieved context',
        used: 'RAG systems, browser agents, and tool-using assistants that read untrusted text from outside the trust boundary',
        unlock: 'more explicit separation between trusted instructions and untrusted content before the agent acts on it',
        exampleScenario: 'an agent that reads external content and must keep hostile instructions from rewriting its behavior'
      }
    },
    {
      sectionTitle: 'Agent-specific threats',
      pattern: /tool misuse|identity abuse|agent credential theft|excessive agency/i,
      guide: {
        roleLabel: 'an authority-abuse threat topic',
        purpose: 'how agent permissions, credentials, or delegated authority are misused once the system can take real actions',
        used: 'tool-calling agents, delegated workflows, and assistants operating with identity or action privileges',
        unlock: 'clearer reasoning about which permissions create real blast radius in the runtime',
        exampleScenario: 'an agent with action privileges that must be kept from overreaching, impersonating, or misusing delegated access'
      }
    },
    {
      sectionTitle: 'Agent-specific threats',
      pattern: /memory poisoning|supply chain attacks on tools|rogue agents/i,
      guide: {
        roleLabel: 'a system-compromise threat topic',
        purpose: 'how persistent memory, tool dependencies, or agent behavior itself can become compromised and poison later runs',
        used: 'memory systems, tool ecosystems, and long-running agent platforms with accumulating state or dependencies',
        unlock: 'better containment of compromised components before they pollute future agent behavior',
        exampleScenario: 'an agent platform trying to stop compromised memory or tool dependencies from corrupting later work'
      }
    },
    {
      sectionTitle: 'Agent-specific threats',
      pattern: /data exfiltration via agents|cascading hallucinations/i,
      guide: {
        roleLabel: 'a compounding-output threat topic',
        purpose: 'how bad outputs spread harm by leaking protected data or amplifying unsupported claims across later steps',
        used: 'multi-step workflows, chained agent calls, and systems where one bad output becomes input to the next component',
        unlock: 'earlier detection of outputs that should never be propagated further downstream',
        exampleScenario: 'an agent pipeline where one bad output can leak data or contaminate later reasoning'
      }
    },
    {
      sectionTitle: 'Interoperability & standards',
      pattern: /mcp|a2a|interoperability standards|agent protocol standardization|legacy fipa concepts/i,
      guide: {
        roleLabel: 'a protocol-standard topic',
        purpose: 'which shared protocol or standard defines the message model, capability contract, and interoperability surface between agent systems',
        used: 'cross-vendor agent integration, tool ecosystems, and platforms that need shared semantics instead of custom adapters for each pairwise link',
        unlock: 'cleaner interoperability through one durable contract instead of bespoke translation for every integration',
        exampleScenario: 'a team connecting agents or tools from several vendors without inventing a new contract for each connection'
      }
    },
    {
      sectionTitle: 'Interoperability & standards',
      pattern: /capability discovery and agent directories|agent cards \/ manifest formats|openapi|asyncapi/i,
      guide: {
        roleLabel: 'a capability-description topic',
        purpose: 'how agents and tools describe their interfaces, capabilities, and discovery metadata so other systems know how to call them',
        used: 'agent registries, capability catalogs, OpenAPI-style tool descriptions, and interoperable agent directories',
        unlock: 'machine-readable discovery and stronger contracts around what an agent or tool can actually do',
        exampleScenario: 'a platform surfacing agent capabilities to other runtimes through manifests, schemas, or discovery metadata'
      }
    },
    {
      sectionTitle: 'Interoperability & standards',
      pattern: /task handoff and status semantics|protocol bridging \/ interop layers|transport & session patterns|cross-vendor agent orchestration standards|emerging formal interoperability standards/i,
      guide: {
        roleLabel: 'a handoff-and-session interoperability topic',
        purpose: 'how work moves across runtimes with consistent handoff semantics, session rules, transport choices, and cross-system status updates',
        used: 'multi-runtime workflows, protocol bridges, and agent ecosystems that need work-state continuity across boundaries',
        unlock: 'more reliable cross-system handoffs instead of loosely coupled message passing with missing semantics',
        exampleScenario: 'an agent workflow that spans several runtimes and needs shared expectations about handoff, session, and status'
      }
    },
    {
      sectionTitle: 'Study route',
      pattern: /rough system picture|model\/runtime vocabulary before deep architecture analysis|agent\/system vocabulary before orchestration patterns/i,
      guide: {
        roleLabel: 'a foundational-vocabulary sequencing topic',
        purpose: 'which architectural picture or core vocabulary should be learned first so later abstractions have somewhere stable to land',
        used: 'onboarding paths that try to prevent learners from memorizing advanced terms before basic system boundaries are clear',
        unlock: 'earlier conceptual stability before the syllabus introduces denser abstractions and trade-offs',
        exampleScenario: 'a learner trying to understand advanced agent patterns without yet having a stable vocabulary for the core system'
      }
    },
    {
      sectionTitle: 'Study route',
      pattern: /models first, then cognition, then memory, then agency|prompting and decoding before tool use abstractions|reasoning and planning before autonomy decisions/i,
      guide: {
        roleLabel: 'a layered-learning-sequence topic',
        purpose: 'how the major layers of the stack should be learned in order so each new layer rests on a usable mental model of the previous one',
        used: 'full-stack learning plans that need a build order from model basics to autonomy and orchestration',
        unlock: 'a syllabus path that accumulates understanding instead of producing conceptual whiplash between layers',
        exampleScenario: 'a learner trying to move from model mechanics to agent architecture without skipping the middle layers'
      }
    },
    {
      sectionTitle: 'Study route',
      pattern: /single-agent workflow before multi-agent orchestration|retrieval before durable memory|evaluation early|governance alongside capability/i,
      guide: {
        roleLabel: 'an operational-sequencing topic',
        purpose: 'which practical engineering disciplines should arrive early so later system complexity does not outrun observability, control, or grounding',
        used: 'real project plans where teams need to sequence capability work alongside evaluation, governance, retrieval, and orchestration choices',
        unlock: 'a more production-aware learning order instead of treating operational concerns as an afterthought',
        exampleScenario: 'a team or learner trying to add complexity without losing grounding, measurement, or governance discipline'
      }
    },
    {
      pattern: /\brlhf\b|\brlaif\b|\bdpo\b|\bppo\b|\bgrpo\b|\bkto\b|\bipo\b|preference tuning|alignment tuning|reward modeling/i,
      guide: {
        roleLabel: 'a preference-optimization method',
        purpose: 'how rankings, rewards, or relative comparisons steer post-training behavior after the base model already exists',
        used: 'assistant alignment, response-style shaping, and post-training programs where preference signal matters more than raw labels',
        unlock: 'behavior change driven by preference signal rather than only supervised imitation',
        exampleScenario: 'a post-training pipeline trying to make a capable model behave more helpfully or safely'
      }
    },
    {
      pattern: /fine-tuning|fine tuning|lora|qlora|peft|continual learning|online learning|personalization systems|feedback loops|tool-use fine-tuning|trajectory fine-tuning|multi-task agent training|bootstrapped self-improvement|curriculum learning/i,
      guide: {
        roleLabel: 'a model-adaptation method',
        purpose: 'how pretrained weights or adapters are updated for a narrower domain, task family, or feedback stream',
        used: 'domain adaptation, personalization, tool-use tuning, and post-training programs that need more than prompt changes',
        unlock: 'more durable behavior change than runtime instruction tweaks alone',
        exampleScenario: 'a team specializing a base model for a domain or workflow that prompts alone cannot reliably shape'
      }
    },
    {
      pattern: /fine-tuning|fine tuning|lora|qlora|peft/i,
      guide: {
        roleLabel: 'a parameter-adaptation method',
        purpose: 'how pretrained weights or lightweight adapters are updated to specialize a model without retraining the entire stack from scratch',
        used: 'domain adaptation, adapter training, and teams trying to change behavior at lower cost than a full retrain',
        unlock: 'targeted specialization of a pretrained model with a clearer compute and serving trade-off',
        exampleScenario: 'a team applying adapter-based or fine-tuning methods to specialize a base model for one domain'
      }
    },
    {
      pattern: /continual learning|online learning|personalization systems|feedback loops/i,
      guide: {
        roleLabel: 'an ongoing-adaptation method',
        purpose: 'how model behavior keeps changing after initial deployment as fresh feedback, user signals, or new data arrive over time',
        used: 'personalized systems, feedback-driven updates, and long-lived products that cannot stay frozen after launch',
        unlock: 'adaptation that continues after first release instead of treating post-training as a one-time event',
        exampleScenario: 'a live system that keeps adapting as user feedback and new data accumulate'
      }
    },
    {
      pattern: /tool-use fine-tuning|trajectory fine-tuning|multi-task agent training|bootstrapped self-improvement|curriculum learning/i,
      guide: {
        roleLabel: 'an agent-capability adaptation method',
        purpose: 'how post-training is aimed at better planning, tool use, or long-horizon task performance rather than generic assistant polish alone',
        used: 'agent trajectory training, tool-use improvement, and post-training programs that target structured task execution',
        unlock: 'stronger agent behavior on multi-step tasks that depend on tool use, planning, or trajectory quality',
        exampleScenario: 'a team using post-training to make an agent better at real multi-step execution rather than only better at chat responses'
      }
    },
    {
      pattern: /synthetic data|instruction-following data|rejection sampling|self-play|self-instruct|simulated environment trajectories|trajectory synthesis|verification-based data quality filtering|contamination|benchmark leakage/i,
      guide: {
        roleLabel: 'a synthetic-data and supervision topic',
        purpose: 'how new training signal is generated, filtered, and evaluated when human-labeled data is limited or expensive',
        used: 'instruction-data generation, tool-use trajectory synthesis, rejection sampling, and data-quality programs for post-training',
        unlock: 'more scalable supervision pipelines without depending entirely on manual labeling',
        exampleScenario: 'a team generating and filtering new training examples to improve an agent without a huge human-labeling budget'
      }
    },
    {
      pattern: /distillation|model distillation|model merging/i,
      guide: {
        roleLabel: 'a model-compression or capability-transfer method',
        purpose: 'how behavior from one or more stronger models is transferred, compressed, or blended into a cheaper serving artifact',
        used: 'cost reduction, smaller deployment targets, and programs that want more capability per unit of serving cost',
        unlock: 'smaller or cheaper models that retain more of the parent system\'s useful behavior',
        exampleScenario: 'a team moving capability from an expensive frontier setup into a smaller model that can serve production traffic'
      }
    },
    {
      sectionTitle: 'Agent FinOps & cost economics',
      pattern: /token budgeting per task|multi-step pipeline budget allocation|reasoning-token cost accounting|prompt caching economics/i,
      guide: {
        roleLabel: 'a budget-allocation topic',
        purpose: 'how token and inference budget is carved up across steps so an agent can stay useful without burning cost indiscriminately',
        used: 'multi-step pipelines, cached prompts, reasoning-heavy calls, and systems that need explicit per-task spend control',
        unlock: 'more disciplined allocation of model spend before the workflow overconsumes by default',
        exampleScenario: 'an agent pipeline deciding how much token or reasoning budget each stage is allowed to spend'
      }
    },
    {
      sectionTitle: 'Agent FinOps & cost economics',
      pattern: /cost-per-task modeling|token-level cost attribution|chargebacks|agent spend observability dashboards/i,
      guide: {
        roleLabel: 'a cost-measurement and attribution topic',
        purpose: 'how spend is measured, attributed, and surfaced so teams can see which workflows, models, or tenants actually create the bill',
        used: 'shared platforms, internal chargebacks, spend dashboards, and economic reviews of production agent usage',
        unlock: 'clearer visibility into where cost is coming from before optimization starts',
        exampleScenario: 'a platform team trying to explain which agent flows are responsible for most of the monthly spend'
      }
    },
    {
      sectionTitle: 'Agent FinOps & cost economics',
      pattern: /model routing for cost|inference cost vs accuracy trade-off curves|agent roi frameworks|cost-aware tool selection policies|finops governance/i,
      guide: {
        roleLabel: 'an economic policy topic',
        purpose: 'how routing, ROI thresholds, and cost-aware policy decide when a more expensive model or tool call is actually justified',
        used: 'cheap-model-first cascades, ROI reviews, governance policies, and optimization of accuracy versus spend',
        unlock: 'clearer economic decision rules instead of treating every request as worth the most expensive path',
        exampleScenario: 'a platform choosing when the task justifies escalation to a more expensive model or tool path'
      }
    },
    {
      sectionTitle: 'CI/CD for AI systems',
      pattern: /prompt testing in ci pipelines|model regression checks|automated eval suites in pull requests|integration testing for tool-calling agents|contract testing for llm outputs/i,
      guide: {
        roleLabel: 'an automated release-testing topic',
        purpose: 'which tests and evals run automatically before a prompt, model, or tool-calling change is allowed to advance',
        used: 'CI pipelines, pull-request checks, regression suites, and contract tests around AI behavior changes',
        unlock: 'earlier failure detection while the change is still cheap to stop or revise',
        exampleScenario: 'a pull request that must prove prompt or model changes did not break expected behavior before merge'
      }
    },
    {
      sectionTitle: 'CI/CD for AI systems',
      pattern: /staging environments|shadow mode and dark launches|rollback strategies for model updates|canary releases with eval thresholds/i,
      guide: {
        roleLabel: 'a staged-rollout topic',
        purpose: 'how risky AI changes are exposed gradually through staging, shadow traffic, canaries, and rollback paths instead of one big cutover',
        used: 'release pipelines where prompt or model behavior must be observed under live-like conditions before full rollout',
        unlock: 'safer exposure of behavior changes before they reach the whole user base',
        exampleScenario: 'a team releasing a model or prompt update gradually so it can still abort cleanly if live signals turn bad'
      }
    },
    {
      sectionTitle: 'CI/CD for AI systems',
      pattern: /eval-gated deployments|prompt diff and review workflows|eval dashboards in ci/i,
      guide: {
        roleLabel: 'a release-gating topic',
        purpose: 'how evidence, diffs, and pass-fail thresholds are turned into actual go-no-go decisions inside the release process',
        used: 'eval-gated promotion, review workflows, and CI dashboards that need to justify why a behavior change should ship',
        unlock: 'release decisions based on explicit evidence instead of intuition or optimism',
        exampleScenario: 'a release process that needs a clear gate saying whether a prompt or model change deserves promotion'
      }
    }
  ];

  function matchesTopicBriefGuideRule(rule, entry) {
    return (!rule.layerTitle || rule.layerTitle === entry.layer.title)
      && (!rule.sectionTitle || rule.sectionTitle === entry.section.title)
      && (!rule.pattern || rule.pattern.test(entry.text));
  }

  function getTopicBriefSpecificGuide(entry, baseGuide) {
    const matchingRules = topicBriefSpecificGuideRules.filter(rule => matchesTopicBriefGuideRule(rule, entry));
    if (!matchingRules.length) {
      return baseGuide;
    }

    return matchingRules.reduce((guide, rule) => ({ ...guide, ...rule.guide }), { ...baseGuide });
  }

  function getTopicBriefExactOverride(entry) {
    return topicBriefExactOverrides.find(rule => rule.pattern.test(entry.text));
  }

  function getTopicBriefSectionOverride(entry) {
    return topicBriefSectionOverrides.find(override => override.layerTitle === entry.layer.title && override.sectionTitle === entry.section.title);
  }

  function getTopicBriefKind(entry) {
    const exactOverride = getTopicBriefExactOverride(entry);
    if (exactOverride && exactOverride.kind) {
      return exactOverride.kind;
    }

    const sectionOverride = getTopicBriefSectionOverride(entry);
    if (sectionOverride && sectionOverride.kind) {
      return sectionOverride.kind;
    }

    const titleRule = topicBriefKindRules.find(rule => rule.pattern.test(entry.text));
    if (titleRule && titleRule.kind === 'decision-lens' && entry.layer.title !== 'Mental Models') {
      return 'default';
    }

    return titleRule ? titleRule.kind : 'default';
  }

  function getTopicBriefGuide(entry) {
    const exactOverride = getTopicBriefExactOverride(entry);
    if (exactOverride && exactOverride.guide) {
      return exactOverride.guide;
    }

    const sectionOverride = getTopicBriefSectionOverride(entry);
    let guide = sectionOverride && sectionOverride.guide ? sectionOverride.guide : null;

    if (!guide) {
      const targetedGuideRule = topicBriefTargetedGuideRules.find(rule => rule.pattern.test(entry.text));
      if (targetedGuideRule) {
        guide = targetedGuideRule.guide;
      }
    }

    if (!guide) {
      const briefKind = getTopicBriefKind(entry);
      const sectionMatchText = `${entry.section.title} ${entry.layer.title}`;
      const sectionRule = topicBriefSectionRules.find(rule => rule.pattern.test(sectionMatchText));

      if (briefKind === 'comparison') {
        if (entry.layer.title === 'Mental Models') {
          if (entry.section.title === 'Model/runtime vocabulary') {
            guide = modelRuntimeVocabularyTopicBriefGuide;
          } else if (entry.section.title === 'Agent/system vocabulary') {
            guide = agentSystemVocabularyTopicBriefGuide;
          } else {
            guide = distinctionTopicBriefGuide;
          }
        } else {
          guide = sectionRule ? sectionRule.guide : (layerTopicBriefGuides[entry.layer.title] || defaultTopicBriefGuide);
        }
      } else if (briefKind === 'decision-lens' && entry.layer.title === 'Mental Models') {
        guide = entry.section.title === 'Model/runtime vocabulary'
          ? modelRuntimeVocabularyTopicBriefGuide
          : distinctionTopicBriefGuide;
      } else {
        const titleRule = topicBriefGuideRules.find(rule => rule.pattern.test(entry.text));
        if (titleRule) {
          if (titleRule.guide === distinctionTopicBriefGuide && entry.layer.title !== 'Mental Models') {
            guide = sectionRule ? sectionRule.guide : (layerTopicBriefGuides[entry.layer.title] || defaultTopicBriefGuide);
          } else {
            guide = titleRule.guide;
          }
        } else if (sectionRule) {
          guide = sectionRule.guide;
        } else {
          guide = layerTopicBriefGuides[entry.layer.title] || defaultTopicBriefGuide;
        }
      }
    }

    return getTopicBriefSpecificGuide(entry, guide);
  }

  function getTopicBriefPartnerText(entry, siblings = []) {
    const partnerNames = uniqueStrings([
      ...(entry.topic.prerequisites || []).slice(0, 2),
      ...siblings.slice(0, 2).map(item => item.text)
    ]).filter(name => name && name !== entry.text);

    return partnerNames.length ? joinNaturalLanguage(partnerNames.slice(0, 2)) : `other topics in ${entry.section.title}`;
  }

  const topicBriefOverrides = window.TopicBriefOverrides || Object.freeze({});

  function applyTopicBriefOverrides(entry, lines) {
    const override = topicBriefOverrides[entry.id] || topicBriefOverrides[entry.text];
    if (!override) {
      return lines;
    }

    return lines.map(line => override[line.label] ? { ...line, text: override[line.label] } : line);
  }

  function getTopicBriefComparisonParts(text) {
    const differenceMatch = text.match(/^the difference between (.+?) and (.+)$/i);
    if (differenceMatch) {
      return [differenceMatch[1].trim(), differenceMatch[2].trim()];
    }

    const beatsMatch = text.match(/^when (.+?) beats (.+)$/i);
    if (beatsMatch) {
      return [beatsMatch[1].trim(), beatsMatch[2].trim()];
    }

    if (/\s+vs\s+/i.test(text)) {
      return text.split(/\s+vs\s+/i).map(part => part.trim()).filter(Boolean);
    }

    return [];
  }

  function getGeneratedTopicBriefIntro(entry, guide, fallbackText) {
    return guide && guide.roleLabel && guide.purpose
      ? `${entry.text} is ${guide.roleLabel}, focused on ${guide.purpose}.`
      : fallbackText;
  }

  function buildGeneratedTopicBrief(entry, guide, briefKind, partnerText, relatedLayerText) {
    const comparisonParts = getTopicBriefComparisonParts(entry.text);

    switch (briefKind) {
      case 'comparison': {
        const comparisonText = comparisonParts.length
          ? `the boundary between ${joinNaturalLanguage(comparisonParts)}`
          : 'where nearby ideas diverge and why the distinction matters';

        return [
          {
            label: 'What it is',
            text: `${entry.text} is a distinction topic about ${comparisonText}. It helps explain where the concepts overlap, where they diverge, and why the difference matters in practice.`
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when teams have to choose between adjacent options rather than treat them as interchangeable. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by making the decision axis explicit before architecture choices harden around the wrong assumption.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The point is to understand which mode fits the job instead of pretending every situation wants the same operating style.`
          },
          {
            label: 'Without it',
            text: `Without a clear read on ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, teams often pick an option for the wrong reason or mix several patterns into one blurry design.`
          },
          {
            label: 'With it',
            text: `With the distinction in place, ${guide.withCase}. In ${guide.exampleScenario}, the team can explain why one option fits better than the alternatives.`
          }
        ];
      }

      case 'system-decomposition':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a system-mapping topic about the major pieces, flows, or boundaries that make up one agent system. It is less about one isolated algorithm and more about how the moving parts fit together.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when a team needs a shared picture before optimizing one local detail. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by turning a fuzzy system sketch into an explainable structure with visible boundaries and handoffs.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The value is having one map of the work before people start changing separate pieces in isolation.`
          },
          {
            label: 'Without it',
            text: `Without a clear picture of ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, teams tend to optimize one component while misunderstanding what it does to the rest of the workflow.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, design reviews become easier because everyone is talking about the same system picture.`
          }
        ];

      case 'decision-lens':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a design-lens topic about one pressure or constraint that shapes architecture choices upstream. It helps teams notice the hidden variable that should be steering the design.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when the hard part is not implementation but choosing what to optimize first. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by making the controlling constraint explicit before the system grows around the wrong trade-off.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The point is to name the pressure that should be driving the plan.`
          },
          {
            label: 'Without it',
            text: `Without a clear read on ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, teams often pull in several directions at once or optimize the wrong thing.`
          },
          {
            label: 'With it',
            text: `With the lens in place, ${guide.withCase}. In ${guide.exampleScenario}, the team can align design choices to the real constraint instead of fighting symptoms.`
          }
        ];

      case 'study-route':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a study-sequencing topic about the order in which nearby ideas should be learned so later material lands on top of the right prerequisites.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when someone is choosing what to study first instead of grabbing the most advanced-looking topic on the page. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by turning the syllabus into a buildable sequence rather than a flat pile of terms.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The point is to build later judgment on top of earlier fluency instead of forcing advanced coordination before the basics are stable.`
          },
          {
            label: 'Without it',
            text: `Without clear guidance from ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, learners usually know the words earlier than they understand how the pieces actually fit.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, later topics arrive with better context and much less conceptual whiplash.`
          }
        ];

      case 'governance':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a governance topic about how organizations classify risk, document controls, track deployed systems, or assign responsibility around agent use.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when an agent system has to be justified to auditors, leadership, customers, or ecosystem partners rather than only built by engineers. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by giving teams a clearer program for evidence, ownership, and operational discipline around deployment.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The point is that scaling a new operational capability usually requires records, named owners, and proof that the organization is running it responsibly.`
          },
          {
            label: 'Without it',
            text: `Without a clear handle on ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, teams often have the system running before they have a credible way to explain who owns the risk or what evidence exists.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, deployment becomes easier to justify, review, and scale because the accountability story is explicit.`
          }
        ];

      case 'training-method':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a learning-method topic about how model behavior changes through data, optimization, or post-training choices after the base model already exists.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when prompts alone cannot reliably create the behavior change the product needs. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by giving the team a concrete training-side lever instead of only tweaking runtime instructions.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The common thread is that the organization is changing how people are trained, not just what they are told today.`
          },
          {
            label: 'Without it',
            text: `Without a clear handle on ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, teams either overfit on one technique or keep using runtime patches for problems that belong in training.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} understood, ${guide.withCase}. In ${guide.exampleScenario}, the team can choose a training intervention that matches the actual behavior gap.`
          }
        ];

      case 'memory-operations':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a memory-operations topic about how stored context is selected, aged, compressed, shared, or governed after it has already been written.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially once an agent has more history than can safely stay in the active prompt. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by turning memory from a passive log into something that can be curated and governed deliberately.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The key idea is that remembered material needs upkeep, not just storage.`
          },
          {
            label: 'Without it',
            text: `Without a clear approach to ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, recall gets noisier over time and memory becomes harder to trust.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, the agent can carry history forward without letting the memory system turn into clutter.`
          }
        ];

      case 'policy-control':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a control-layer topic about where rules, approvals, validation checks, or control boundaries shape what the agent is allowed to do before, during, or after execution.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially where side effects, trust boundaries, or compliance obligations mean the agent cannot simply improvise. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by giving the system a visible enforcement point instead of hoping good behavior emerges on its own.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The point is that risky work usually needs an explicit checkpoint, not just trust in good intentions.`
          },
          {
            label: 'Without it',
            text: `Without a clear handle on ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, teams discover too late that the agent crossed a boundary nobody formalized.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, the agent can move faster inside the allowed lane because the control point is explicit.`
          }
        ];

      case 'detection-measurement':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a detection-and-measurement topic about how teams notice subtle behavior gaps, robustness limits, or long-horizon failures before they become visible incidents.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when the system can appear successful on the surface while drifting underneath. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by turning a vague concern into something the team can probe, monitor, and compare over time.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The point is to design checks that reveal hidden quality problems before they become public failures.`
          },
          {
            label: 'Without it',
            text: `Without a clear handle on ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, teams often discover the weakness only after deployment pressure has already raised the stakes.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, the team can see the weak signal earlier and decide what action it warrants.`
          }
        ];

      case 'identity-trust':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is an identity-and-trust topic about how agents prove who they are, what authority they carry, and how other systems decide whether to honor that authority.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when agents act on behalf of users or cross organizational boundaries. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by separating identity, permission, and provenance instead of letting them collapse into one vague trust assumption.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. What matters is not only who the actor is, but also what they are allowed to do on whose behalf.`
          },
          {
            label: 'Without it',
            text: `Without a clear approach to ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, teams end up with hard-to-audit delegation and brittle trust boundaries.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, delegation becomes easier to reason about and much safer to operate.`
          }
        ];

      case 'protocol-standards':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is an interoperability topic about how agent systems describe capabilities, exchange requests, or integrate through shared conventions instead of bespoke glue.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when multiple runtimes, tools, or vendors need to work together without custom wiring for every connection. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by turning integration from a one-off craft project into something closer to a reusable contract.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. Shared handoff rules reduce the amount of translation work every team has to reinvent.`
          },
          {
            label: 'Without it',
            text: `Without a clear contract around ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, integrations become expensive to build and fragile to change.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, ecosystems can interoperate without rewriting the interface each time.`
          }
        ];

      case 'runtime-durability':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} is a runtime-durability topic about how work executes, persists, resumes, or stays isolated when the agent runs as software under real operating conditions.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially when jobs outlive one request, one process, or one happy-path call. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock} by making execution survivable under retries, interruptions, and uneven workload instead of assuming everything finishes cleanly on the first attempt.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. The key is not brilliance in one moment, but clean continuity across interruptions and handoffs.`
          },
          {
            label: 'Without it',
            text: `Without a clear handle on ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, the system may appear fine in demos yet fail when work spans time, retries, or service boundaries.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, the agent can keep moving even when the runtime environment gets messy.`
          }
        ];

      case 'threat-failure':
        return [
          {
            label: 'What it is',
            text: getGeneratedTopicBriefIntro(entry, guide, `${entry.text} names a concrete failure or attack mode that can distort behavior, waste resources, or create unsafe outcomes in an otherwise capable agent system.`)
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}, especially once the system has tools, long-running loops, or meaningful side effects. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `Treating it explicitly unlocks ${guide.unlock}. The value is not just naming the bad outcome, but recognizing the pattern early enough to design against it.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}. Strong operations usually improve faster once they can name recurring failure patterns instead of treating each incident as a surprise.`
          },
          {
            label: 'Without it',
            text: `Without a clear model of ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, the team often mistakes the symptom for the cause until the damage is already visible.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} understood, ${guide.withCase}. In ${guide.exampleScenario}, the team can add controls, alarms, or limits that match the real failure mode.`
          }
        ];

      default:
        return [
          {
            label: 'What it is',
            text: `${entry.text} is ${guide.roleLabel}, focused on ${guide.purpose}. It sits in ${entry.layer.title} > ${entry.section.title}.`
          },
          {
            label: 'Where it is used',
            text: `You run into it in ${guide.used}. It usually interacts with ${partnerText}.${relatedLayerText}`
          },
          {
            label: 'What it unlocks',
            text: `It unlocks ${guide.unlock}, turning ${entry.text} into a concrete design lever instead of a vague idea.`
          },
          {
            label: 'Human analogy',
            text: `A useful human parallel is ${guide.analogy}.`
          },
          {
            label: 'Without it',
            text: `Without a clear handle on ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, that usually means more drift, more cleanup, or weaker reliability.`
          },
          {
            label: 'With it',
            text: `With ${entry.text} in place, ${guide.withCase}. In ${guide.exampleScenario}, the system can take on a broader or more dependable role.`
          }
        ];
    }
  }

  function buildTopicBrief(entry, context = {}) {
    const guide = getTopicBriefGuide(entry);
    const briefKind = getTopicBriefKind(entry);
    const partnerText = getTopicBriefPartnerText(entry, context.siblings || []);
    const relatedLayerText = context.relatedLayerTitles && context.relatedLayerTitles.length
      ? ` It also tends to connect into ${joinNaturalLanguage(context.relatedLayerTitles.slice(0, 2))}.`
      : '';

    return applyTopicBriefOverrides(entry, buildGeneratedTopicBrief(entry, guide, briefKind, partnerText, relatedLayerText));
  }
  window.__SyllabusTopicBrief = {
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
  };
}());

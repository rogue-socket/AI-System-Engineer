(function () {
  const defaultTopicBriefGuide = {
    roleLabel: 'a core concept in the agent stack',
    purpose: 'how an agent represents information, makes decisions, or stays dependable in a larger system',
    used: 'real systems where models, memory, tools, and control logic have to work together',
    unlock: 'a more precise system capability or design lever',
    analogy: 'the repeatable way a skilled person organizes a job before starting, such as using a checklist, reference binder, or review routine',
    withoutCase: 'the system stays more ad hoc and has to lean on broad, fragile defaults',
    withCase: 'the system gains a clearer way to steer behavior, compose parts, and reuse the pattern elsewhere',
    exampleScenario: 'a team turning a promising AI demo into a durable workflow'
  };

  const mentalModelTopicBriefGuide = {
    roleLabel: 'a system-framing concept',
    purpose: 'how the overall agent should be decomposed before you worry about frameworks or prompts',
    used: 'architecture reviews, scoping conversations, and early design decisions about workflow versus autonomy',
    unlock: 'a cleaner picture of what should stay deterministic, what should be model-driven, and where memory or tools belong',
    analogy: 'the way a project lead decides whether a job should be handled by a checklist, one specialist, or a small team before work begins',
    withoutCase: 'teams blur together chatbot UX, workflow automation, and real agency',
    withCase: 'teams can choose the right level of autonomy and keep the design simpler',
    exampleScenario: 'a product team deciding whether a task needs a scripted workflow, a single agent, or a coordinated set of agents'
  };

  const modelRuntimeVocabularyTopicBriefGuide = {
    roleLabel: 'a model/runtime vocabulary distinction',
    purpose: 'where closely related model, inference, token, state, or performance terms differ and why that boundary matters in practice',
    used: 'prompt budgeting, cost estimation, model selection, performance tuning, and architecture conversations where teams need the right term for the right layer',
    unlock: 'cleaner reasoning about model behavior, runtime limits, and cost or latency trade-offs without mixing adjacent concepts together',
    analogy: 'an operations team using precise labels for queue time, handling time, throughput, and capacity so performance discussions refer to the same thing',
    withoutCase: 'teams use the same word for several different runtime concepts and then misdiagnose cost, latency, or capability problems',
    withCase: 'teams can talk about the right layer of the stack and make cleaner budgeting, tuning, and model-choice decisions',
    exampleScenario: 'a team trying to explain why a model call is slow, expensive, or context-limited without blurring training, inference, and runtime state'
  };

  const agentSystemVocabularyTopicBriefGuide = {
    roleLabel: 'an agent/system vocabulary distinction',
    purpose: 'where nearby terms about plans, policies, memory, tools, orchestration, and state diverge in an agent architecture',
    used: 'system design reviews, tool-calling workflows, memory design, orchestration planning, and debugging conversations about who decides what',
    unlock: 'sharper boundaries between control artifacts, state, and action so the system design is easier to reason about',
    analogy: 'a team using separate labels for policies, work orders, case files, approvals, and handoffs so operational discussions do not collapse different responsibilities together',
    withoutCase: 'teams blur planning, control, memory, and action into one fuzzy bucket and then attach fixes to the wrong part of the system',
    withCase: 'teams can place logic, memory, validation, and delegation in the right layer with less architectural confusion',
    exampleScenario: 'a team designing an agent workflow and trying to keep prompts, plans, policies, memory, and orchestration from being treated as synonyms'
  };

  const modelTopicBriefGuide = {
    roleLabel: 'a model, representation, or inference concept',
    purpose: 'how information is encoded, how a model family behaves, or how generation is shaped at runtime',
    used: 'model selection, structured generation, multimodal input, retrieval, and performance tuning',
    unlock: 'better fit between task, model behavior, latency budget, and output shape',
    analogy: 'choosing whether a human should read a chart, skim a memo, translate a document, or fill out a structured form depending on the job',
    withoutCase: 'the agent uses blunter model choices or weaker output control than the task really needs',
    withCase: 'the system can match the job to the right modality, model behavior, or serving pattern',
    exampleScenario: 'a team choosing how an agent should read documents, reason, and emit usable output'
  };

  const promptTopicBriefGuide = {
    roleLabel: 'an instruction and interface-design topic',
    purpose: 'how the agent is briefed, constrained, and told what shape of output or behavior is expected',
    used: 'structured prompting, extraction, routing, tool calling, and multi-step workflows that depend on clear instructions',
    unlock: 'more consistent behavior without changing model weights',
    analogy: 'the way a manager hands over a written brief, examples, and a required output format before delegating work',
    withoutCase: 'the model improvises task boundaries, output shape, and tone from ambiguous wording',
    withCase: 'the model receives a clearer contract, so the behavior is easier to predict, compare, and test',
    exampleScenario: 'an extraction or routing agent that must return the same structure every time'
  };

  const reasoningTopicBriefGuide = {
    roleLabel: 'a reasoning and control pattern',
    purpose: 'how the agent plans, reflects, allocates effort, and chooses its next move under uncertainty',
    used: 'multi-step tasks, planning loops, self-correction, and hard decisions that cannot be solved with one reply',
    unlock: 'more deliberate behavior instead of purely reactive next-token behavior',
    analogy: 'a person breaking a messy task into steps, checking progress after each step, and changing course when new evidence appears',
    withoutCase: 'the agent reacts locally, loses the thread of the task, or stops too early',
    withCase: 'the agent can decompose work, inspect its own progress, and take better next actions',
    exampleScenario: 'a research or coding agent that has to plan, verify, and recover from partial failure'
  };

  const metacognitionTopicBriefGuide = {
    roleLabel: 'a metacognition and calibration topic',
    purpose: 'how an agent estimates confidence, notices uncertainty, decides whether to act, and judges when a task is done or needs escalation',
    used: 'abstention logic, confidence thresholds, stop conditions, verification loops, escalation rules, and high-risk tool use under uncertainty',
    unlock: 'better calibrated action, clearer stop decisions, and less overconfident behavior when evidence is partial or ambiguous',
    analogy: 'a skilled operator deciding whether they know enough to act now, should ask for help, or should do one more check before closing the case',
    withoutCase: 'the agent pushes ahead when it should hesitate, hesitates when it should finish, or speaks with more certainty than the evidence supports',
    withCase: 'the agent can separate low-confidence from high-confidence situations and choose action, abstention, verification, or escalation more deliberately',
    exampleScenario: 'an agent that must decide whether to answer, take an action, or escalate when evidence is partial or ambiguous'
  };

  const retrievalTopicBriefGuide = {
    roleLabel: 'a grounding and retrieval topic',
    purpose: 'how the agent finds, filters, stores, and injects external knowledge at the moment of need',
    used: 'enterprise search, support copilots, research agents, memory systems, and document-grounded workflows',
    unlock: 'access to fresher, narrower, and better-sourced knowledge than the base model can hold in the prompt alone',
    analogy: 'knowing which binder, notebook, archive, or colleague to consult and pulling the right page when the question comes up',
    withoutCase: 'the agent guesses from stale memory or shoves too much irrelevant context into the prompt',
    withCase: 'the system can fetch better evidence, compress it, and answer with stronger grounding',
    exampleScenario: 'a policy assistant that must answer from current documents instead of vague model memory'
  };

  const toolUseTopicBriefGuide = {
    roleLabel: 'an action, interface, or tool-use pattern',
    purpose: 'how the agent leaves pure text generation and interacts with tools, APIs, browsers, or external state',
    used: 'research agents, ops agents, coding agents, browser agents, and any workflow that needs live information or side effects',
    unlock: 'real leverage in the world: the ability to inspect state, call capabilities, and do work instead of only describing it',
    analogy: 'a worker leaving the discussion and using the right tools, machines, or systems to actually do the job',
    withoutCase: 'the agent can only talk about the next step instead of executing it or checking the real environment',
    withCase: 'the agent can gather evidence, invoke tools, and act in bounded, inspectable ways',
    exampleScenario: 'an agent that needs to read a dashboard, call an API, or update a record instead of only drafting text'
  };

  const controlValidationTopicBriefGuide = {
    roleLabel: 'a control-and-validation architecture topic',
    purpose: 'where checkpoints, approvals, validation gates, autonomy settings, and recovery logic shape how an agent is allowed to proceed',
    used: 'tool-using workflows, human review systems, approval chains, risky automations, and multi-step tasks with explicit validation or escalation points',
    unlock: 'clearer execution control, safer escalation, and more deliberate placement of validation before or after actions',
    analogy: 'an operational process with review points, escalation rules, and recovery steps that determine when work can proceed, pause, or be undone',
    withoutCase: 'the system acts too freely, validates too late, or cannot recover cleanly when an action goes wrong',
    withCase: 'teams can choose where to gate, validate, escalate, or compensate so autonomy matches the risk of each step',
    exampleScenario: 'an agent that can prepare work automatically but must pass validation, adapt autonomy, or compensate for failures as the workflow unfolds'
  };

  const multiAgentTopicBriefGuide = {
    roleLabel: 'a coordination pattern for specialized agents',
    purpose: 'how work is split across roles, orchestrated across hops, and kept coherent at system scale',
    used: 'pipelines where planning, retrieval, execution, review, and escalation are separated across multiple workers',
    unlock: 'specialization, delegation, and throughput without forcing one agent to do every cognitive role',
    analogy: 'a small team with distinct roles, reviews, and handoffs coordinating on one shared outcome',
    withoutCase: 'one overloaded agent becomes a bottleneck and mixes planning, execution, and checking into one blurry loop',
    withCase: 'specialists can focus on narrow roles while an orchestrator or protocol keeps the whole job aligned',
    exampleScenario: 'a report-building pipeline with separate planner, researcher, writer, critic, and approver roles'
  };

  const frameworkTopicBriefGuide = {
    roleLabel: 'a framework or SDK topic',
    purpose: 'what a named framework provides for building, orchestrating, or deploying agent systems and which design assumptions it bakes in',
    used: 'platform selection, prototyping, production builds, tool integration, state orchestration, and team-standardization decisions',
    unlock: 'faster implementation through reusable abstractions, with clearer trade-offs about ecosystem fit and control surface',
    analogy: 'choosing a workflow platform or software framework that gives teams prebuilt structure, conventions, and tooling instead of writing the whole stack from scratch',
    withoutCase: 'teams reinvent orchestration and glue code or pick tools without understanding the assumptions and constraints they impose',
    withCase: 'teams can match framework capability and operating style to the system they actually want to build',
    exampleScenario: 'a team choosing between agent frameworks, SDKs, and orchestration stacks for a new multi-agent product'
  };

  const multiAgentIncentivesTopicBriefGuide = {
    roleLabel: 'a multi-agent incentives and strategic-behavior topic',
    purpose: 'how several agents respond to incentives, allocate credit, build trust, and adapt when each actor\'s payoff depends on the others',
    used: 'multi-agent negotiations, shared-reward systems, reputation-based routing, governance design, and research on strategic agent behavior',
    unlock: 'clearer incentive shaping, better stability under cooperation or competition, and more predictable behavior when rewards are interdependent',
    analogy: 'an organization designing bonus rules, reputation effects, and escalation incentives so people do not game the process, free-ride, or sabotage the shared outcome',
    withoutCase: 'agents optimize local rewards, exploit loose rules, or cooperate badly because the incentive structure is underspecified',
    withCase: 'teams can shape incentives, assign credit, and reason about strategic behavior instead of assuming coordination alone will solve it',
    exampleScenario: 'a multi-agent system where several workers share rewards, compete for tasks, or rely on reputation and trust signals over time'
  };

  const runtimeTopicBriefGuide = {
    roleLabel: 'a runtime, operations, or delivery concern',
    purpose: 'how an agent system is served, scaled, versioned, routed, and kept alive under real workload',
    used: 'production APIs, long-running tasks, multi-tenant services, queues, retries, gateways, and release pipelines',
    unlock: 'repeatability and survival under real traffic, not just correctness in a local demo',
    analogy: 'the office, schedule, queue, and support systems that let a team keep working reliably day after day',
    withoutCase: 'the agent works in a demo but breaks under scale, retries, latency spikes, or long-running state',
    withCase: 'the system can handle load, persistence, versioning, and operational failure with far less drama',
    exampleScenario: 'a customer-facing AI service that must survive concurrency, deployment changes, and uneven traffic'
  };

  const mlopsLifecycleTopicBriefGuide = {
    roleLabel: 'an MLOps and lifecycle-management topic',
    purpose: 'how models, prompts, experiments, and related artifacts are versioned, tracked, promoted, reproduced, and governed across environments',
    used: 'platform teams, release management, experiment programs, model promotion, rollback planning, and reproducible evaluation across dev, staging, and production',
    unlock: 'controlled iteration across model versions and environments instead of ad hoc experimentation and opaque releases',
    analogy: 'a mix of release engineering and disciplined lab-notebook practice, where every version, experiment, artifact, and promotion step is recorded well enough to reproduce later',
    withoutCase: 'teams cannot reliably tell which version produced a behavior, why staging differs from production, or which experiment justified the current release',
    withCase: 'teams can compare runs, manage artifacts, and promote changes with stronger lineage, reproducibility, and rollback confidence',
    exampleScenario: 'a platform team running repeated model experiments and controlled releases across development, staging, and production'
  };

  const finOpsTopicBriefGuide = {
    roleLabel: 'an agent FinOps and cost-economics topic',
    purpose: 'how agent systems are budgeted, metered, attributed, and economically governed as model, tool, and infrastructure spend accumulate',
    used: 'shared agent platforms, enterprise AI budgeting, model-routing policy, chargebacks, ROI review, and cost-aware pipeline design',
    unlock: 'clearer visibility and control over how autonomous behavior turns into spend',
    analogy: 'a finance operations function that tracks unit economics, cost centers, approval thresholds, and usage reports for teams running expensive automated workloads',
    withoutCase: 'spend grows faster than understanding, and teams cannot clearly say which workflow, model, or loop is driving cost',
    withCase: 'teams can budget, attribute, and optimize agent spend with stronger accountability and clearer economic trade-offs',
    exampleScenario: 'an organization trying to scale agent pipelines without losing cost visibility or economic discipline'
  };

  const evaluationTopicBriefGuide = {
    roleLabel: 'a measurement, debugging, or feedback discipline',
    purpose: 'how teams inspect behavior, detect regressions, and learn whether the system is actually good enough',
    used: 'release gates, experimentation, incident analysis, benchmarking, tracing, and model or prompt iteration',
    unlock: 'evidence-driven improvement instead of intuition-driven guesswork',
    analogy: 'scorecards, QA review, and postmortems instead of trusting first impressions',
    withoutCase: 'regressions stay invisible and failures show up as anecdotes after users are already feeling them',
    withCase: 'teams can trace behavior, compare variants, and tighten quality using measured signals',
    exampleScenario: 'a team shipping a new prompt, model route, or workflow change and wanting proof that it improved things'
  };

  const specificationGapTopicBriefGuide = {
    roleLabel: 'a specification-versus-behavior gap topic',
    purpose: 'how deployed behavior diverges from stated objectives, evaluation assumptions, or user expectations as tasks get longer or environments shift',
    used: 'robustness testing, eval design, incident review, red teaming, and release decisions where the written objective may not match the behavior that actually emerges',
    unlock: 'clearer visibility into where apparent success diverges from real success under drift, shifted inputs, or longer-horizon behavior',
    analogy: 'a quality team comparing the written job description and official success metric to what staff actually optimize for once the real workload gets messy',
    withoutCase: 'teams ship systems that look correct on paper while failing under shifted conditions, hidden incentives, or unstated user expectations',
    withCase: 'teams can measure, diagnose, and narrow the gap between intended behavior and what the system actually does in practice',
    exampleScenario: 'a team trying to prove an agent still behaves acceptably when the inputs, incentives, or task horizon change'
  };

  const applicationTopicBriefGuide = {
    roleLabel: 'an application surface or domain lens',
    purpose: 'how agent primitives become concrete workflows for a real user, team, or industry',
    used: 'product design, domain adaptation, and decisions about where general agent patterns actually create value',
    unlock: 'translation from abstract capability into a workflow that matters to someone',
    analogy: 'the same general human skills showing up differently in roles like researcher, analyst, support rep, or engineer',
    withoutCase: 'the design stays abstract and it is hard to see what success, risk, or value should mean',
    withCase: 'the same underlying agent patterns are grounded in users, constraints, and real operational goals',
    exampleScenario: 'mapping a general agent stack onto coding, support, research, legal, or personal-assistant work'
  };

  const humanTeamingTopicBriefGuide = {
    roleLabel: 'a human-agent collaboration topic',
    purpose: 'how people and agents divide work, hand off responsibility, calibrate trust, and stay coordinated in mixed-initiative systems',
    used: 'copilots, supervised automation, escalation flows, review queues, and team workflows where humans and agents share responsibility',
    unlock: 'clearer collaboration boundaries, safer escalation paths, and better trust calibration in mixed teams',
    analogy: 'a mixed team of operators, specialists, and supervisors with explicit handoffs and review points for when responsibility should shift',
    withoutCase: 'people either over-trust the agent, underuse it, or lose track of who should take over next',
    withCase: 'humans and agents can share work with clearer roles, better escalation behavior, and less coordination confusion',
    exampleScenario: 'a mixed human-agent workflow where the agent prepares work and a person reviews, escalates, or resumes control when needed'
  };

  const safetyTopicBriefGuide = {
    roleLabel: 'a safety, boundary, or control layer',
    purpose: 'how autonomy stays bounded, auditable, and aligned with permissions, policy, and risk tolerance',
    used: 'tool-using agents, enterprise deployments, regulated settings, and any system that can take meaningful action',
    unlock: 'safer delegation, clearer accountability, and controlled failure modes instead of blind autonomy',
    analogy: 'approval rules, keycards, audit logs, and workplace policies that let people act without overstepping',
    withoutCase: 'the agent has too much freedom for the amount of oversight, validation, or policy attached to it',
    withCase: 'the system can act with clearer limits, safer defaults, and better auditability',
    exampleScenario: 'an assistant with access to data, tools, or side effects that could become costly or unsafe if left unchecked'
  };

  const alignmentTopicBriefGuide = {
    roleLabel: 'an alignment and behavior-steering topic',
    purpose: 'how an agent\'s goals, outputs, and decision tendencies are kept in line with intended use, human values, and acceptable behavior',
    used: 'assistant alignment, policy-sensitive systems, behavior review, safety evaluation, and products where competence is not enough unless behavior also stays normatively acceptable',
    unlock: 'clearer control over whether the system is pursuing the right objective in the right way',
    analogy: 'an organization defining mission, review standards, and escalation norms so staff not only follow rules but also pursue the right outcomes for the right reasons',
    withoutCase: 'the system may optimize the wrong proxy, hide harmful bias, or stay hard to trust because its behavior is misaligned with the intended objective',
    withCase: 'teams can reason more clearly about whether the system is pursuing the intended goal, exposing its behavior legibly, and treating people consistently',
    exampleScenario: 'a team deploying an agent where being capable is not enough unless the behavior also matches human values, fairness, and control expectations'
  };

  const privacyDataProtectionTopicBriefGuide = {
    roleLabel: 'a privacy and data-protection topic',
    purpose: 'how sensitive data is minimized, protected, geographically constrained, or removed across agent training, context handling, and inference',
    used: 'regulated environments, enterprise deployments, personal-data workflows, and systems that handle customer, employee, or otherwise protected information',
    unlock: 'clearer control over sensitive-data exposure, legal obligations, and privacy-preserving system design',
    analogy: 'a records-management and compliance team deciding what sensitive data may be stored, where it may travel, who may see it, and what must be masked or deleted',
    withoutCase: 'sensitive data leaks too far through the pipeline or the organization cannot prove it handled protected data within policy and law',
    withCase: 'teams can design data flows, storage boundaries, masking rules, and protected computation paths that reduce privacy risk and support compliance',
    exampleScenario: 'an agent pipeline that handles personal or regulated data across ingestion, retrieval, training, and inference'
  };

  const governanceTopicBriefGuide = {
    roleLabel: 'a governance, compliance, or accountability topic',
    purpose: 'how organizations classify risk, track deployed systems, document controls, and assign responsibility around agent use',
    used: 'enterprise governance programs, audits, procurement reviews, regulated deployments, and standards work around agent systems',
    unlock: 'clearer accountability, stronger evidence trails, and a more defensible operating model for agent deployment',
    analogy: 'a governance office maintaining system inventories, control mappings, audit records, and named owners before a new operational capability is scaled',
    withoutCase: 'deployments become hard to inventory, justify, audit, or defend when the system crosses organizational or regulatory boundaries',
    withCase: 'teams can map obligations, keep evidence, assign owners, and scale deployment with clearer accountability',
    exampleScenario: 'an organization trying to ship agent systems while satisfying internal governance, external standards, or regulatory expectations'
  };

  const studyRouteTopicBriefGuide = {
    roleLabel: 'a study-sequencing topic',
    purpose: 'how a learner should order foundational topics so later concepts land on top of the right prerequisites',
    used: 'self-study plans, onboarding curricula, and syllabus design for people learning agent systems end to end',
    unlock: 'a cleaner learning path with fewer false abstractions and less cargo-culting of advanced patterns',
    analogy: 'an apprenticeship program that teaches the toolkit first, then supervised practice, then advanced coordination once the basics are stable',
    withoutCase: 'learners jump into advanced patterns before the underlying concepts are stable and end up memorizing terms without usable mental models',
    withCase: 'learners can build understanding in a sequence that makes later abstractions easier to place and apply',
    exampleScenario: 'a learner trying to go from model basics to production agent design without getting lost in advanced jargon too early'
  };

  const distinctionTopicBriefGuide = {
    roleLabel: 'a distinction or trade-off topic',
    purpose: 'where nearby concepts diverge or which constraint should dominate a design choice before implementation begins',
    used: 'architecture reviews, vocabulary cleanup, and system design conversations where teams need sharper boundaries',
    unlock: 'cleaner reasoning about trade-offs and adjacent ideas that are easy to blur together',
    analogy: 'a planning meeting where a team has to separate urgent work from important work and decide which constraint actually controls the plan',
    withoutCase: 'teams mix neighboring concepts together or pretend incompatible goals can all be optimized at once',
    withCase: 'teams can name the real axis of choice and design around it instead of arguing past each other',
    exampleScenario: 'a team deciding which system shape, constraint, or operating mode should steer the architecture'
  };

  const systemDecompositionTopicBriefGuide = {
    roleLabel: 'a system-mapping topic',
    purpose: 'how the major pieces, flows, and boundaries of an agent system fit together before local optimization starts',
    used: 'architecture diagrams, scoping sessions, debugging, and system reviews that need an end-to-end picture',
    unlock: 'a cleaner view of how parts connect, where state changes happen, and where side effects should be expected',
    analogy: 'an operations lead sketching intake, handoffs, working state, approvals, and outbound actions on a whiteboard before the team changes the process',
    withoutCase: 'teams talk about the system as one blurry blob and struggle to explain how changes propagate',
    withCase: 'the system becomes easier to reason about end to end because handoffs, boundaries, and side effects are visible',
    exampleScenario: 'a team mapping an agent workflow before adding new tools, memory, or autonomy'
  };

  const trainingMethodTopicBriefGuide = {
    roleLabel: 'a model adaptation or learning-method topic',
    purpose: 'how behavior changes through data, objectives, and post-training choices rather than only runtime prompts',
    used: 'fine-tuning pipelines, alignment work, domain adaptation, personalization, and research on better post-training',
    unlock: 'specific ways to change model behavior at the training layer',
    analogy: 'an enablement team changing how staff are trained, coached, and evaluated rather than just sending a one-off reminder before today\'s shift',
    withoutCase: 'teams keep asking prompts to solve problems that really require different training signals',
    withCase: 'teams can choose the right post-training lever for the behavior change they actually need',
    exampleScenario: 'a platform team trying to make a model more helpful, safer, or better adapted to a domain'
  };

  const memoryOperationsTopicBriefGuide = {
    roleLabel: 'a memory-operations topic',
    purpose: 'how stored context is selected, aged, compressed, shared, governed, and recalled over time',
    used: 'assistants with durable memory, personalized systems, long-running workflows, and knowledge-heavy agents',
    unlock: 'cleaner memory hygiene instead of letting recall drift into one giant log',
    analogy: 'records management staff deciding what stays on the active case file, what moves to archive storage, and who is allowed to read it',
    withoutCase: 'memory becomes noisy, stale, or unsafe to reuse',
    withCase: 'memory stays more relevant, governable, and cheaper to operate',
    exampleScenario: 'a long-running assistant that has to remember the right things without carrying every past detail forever'
  };

  const policyControlTopicBriefGuide = {
    roleLabel: 'a policy and validation control topic',
    purpose: 'where rules, approvals, and checks are enforced before the agent is allowed to continue or act',
    used: 'tool approval flows, enterprise agents, safety reviews, regulated workflows, and schema-constrained systems',
    unlock: 'safer execution with clearer enforcement points',
    analogy: 'an operations workflow with required sign-offs, form validation, and separation of duties before a risky change is approved',
    withoutCase: 'the agent crosses trust boundaries with too little validation or too much ambiguity about who approves what',
    withCase: 'teams can place clear gates where mistakes would otherwise become side effects',
    exampleScenario: 'an agent that prepares work automatically but must satisfy policy before anything binding happens'
  };

  const identityTrustTopicBriefGuide = {
    roleLabel: 'an identity, trust, or delegation topic',
    purpose: 'how agents prove who they are, what authority they carry, and how other systems decide whether to trust them',
    used: 'authentication flows, delegated tool use, multi-agent communication, regulated APIs, and cross-organizational integrations',
    unlock: 'cleaner trust boundaries and safer delegation',
    analogy: 'a contractor showing ID, a signed work order, and a limited badge before entering a client site on someone else\'s behalf',
    withoutCase: 'credentials, identity, and authority blur together in unsafe ways',
    withCase: 'agents can act with clearer provenance, scoped authority, and auditable trust',
    exampleScenario: 'an agent acting on behalf of a user across several systems with different permissions'
  };

  const runtimeDurabilityTopicBriefGuide = {
    roleLabel: 'a runtime durability topic',
    purpose: 'how work persists, resumes, retries, isolates, and stays operational when the agent runs under real workload',
    used: 'background workers, durable workflows, queue-based systems, long-running jobs, and production runtimes',
    unlock: 'recoverable execution instead of fragile one-shot runs',
    analogy: 'an operations team designing shift handoffs, incident logs, and recovery playbooks so work continues cleanly across interruptions',
    withoutCase: 'execution state becomes brittle, hard to replay, or easy to corrupt',
    withCase: 'work can survive interruptions, retries, and service boundaries with much less drama',
    exampleScenario: 'a long-running task that must survive restarts, retries, and partial failure'
  };

  const threatFailureTopicBriefGuide = {
    roleLabel: 'a threat, failure-mode, or adversarial topic',
    purpose: 'how capable systems break, drift, or get exploited when incentives, attacks, or long chains of behavior go wrong',
    used: 'red teaming, risk review, incident analysis, safety evaluation, and production hardening',
    unlock: 'clearer threat models and earlier detection of dangerous failure patterns',
    analogy: 'a risk team mapping known fraud patterns and operational failure modes before a new service is exposed to the public',
    withoutCase: 'teams discover the bad pattern only after users, budgets, or downstream systems are already hit',
    withCase: 'teams can recognize the pattern sooner and add controls that match the actual failure mode',
    exampleScenario: 'a production agent that can touch tools, money, sensitive data, or long-running workflows'
  };

  const detectionMeasurementTopicBriefGuide = {
    roleLabel: 'a detection and measurement topic',
    purpose: 'how teams notice subtle behavior gaps, robustness limits, or long-horizon failures before they become visible incidents',
    used: 'evaluation design, monitoring, regression analysis, model updates, and robustness testing',
    unlock: 'earlier visibility into issues that do not show up in simple happy-path checks',
    analogy: 'a quality team designing audits, spot checks, and review triggers so drift is caught before customers feel the damage',
    withoutCase: 'teams miss the behavior entirely or notice it only after the system has already behaved badly in the field',
    withCase: 'teams can instrument the blind spot directly and decide whether it is acceptable, fixable, or release-blocking',
    exampleScenario: 'a team trying to prove that an agent stays aligned under changing data, longer horizons, or unseen tasks'
  };

  const protocolStandardsTopicBriefGuide = {
    roleLabel: 'a protocol or interoperability topic',
    purpose: 'how agent systems describe capabilities, exchange requests, and integrate through shared standards instead of one-off glue',
    used: 'tool ecosystems, multi-vendor environments, agent platforms, and cross-team integrations',
    unlock: 'portability and cleaner interoperability across runtimes and vendors',
    analogy: 'different organizations agreeing on common forms, field names, and handoff procedures so work can move between them without custom retraining every time',
    withoutCase: 'every integration becomes bespoke and fragile',
    withCase: 'capabilities can move across tools and platforms with far less custom stitching',
    exampleScenario: 'a team trying to connect agents, tools, and vendors without rewriting the contract for each new integration'
  };

  const layerTopicBriefGuides = {
    'Mental Models': mentalModelTopicBriefGuide,
    'Models & Representations': modelTopicBriefGuide,
    'Cognition & Control': reasoningTopicBriefGuide,
    'Memory & Knowledge': retrievalTopicBriefGuide,
    'Agency & Tool Use': toolUseTopicBriefGuide,
    'Multi-Agent Systems': multiAgentTopicBriefGuide,
    'Infrastructure & Runtime': runtimeTopicBriefGuide,
    'Evaluation & Observability': evaluationTopicBriefGuide,
    'Applications & Domains': applicationTopicBriefGuide,
    'Safety, Security & Governance': safetyTopicBriefGuide
  };

  const topicBriefSectionRules = [
    { pattern: /whole-system map|model\/runtime vocabulary|agent\/system vocabulary|design trade-offs|study route/i, guide: mentalModelTopicBriefGuide },
    { pattern: /prompt/i, guide: promptTopicBriefGuide },
    { pattern: /retrieval|rag|chunking|indexing|knowledge|memory/i, guide: retrievalTopicBriefGuide },
    { pattern: /reasoning|planning|reflection|meta-cognition|decision-making/i, guide: reasoningTopicBriefGuide },
    { pattern: /tool|action|browser|interaction|protocol|authentication|identity|meta tooling/i, guide: toolUseTopicBriefGuide },
    { pattern: /multi-agent|coordination|workflow|framework|failure modes/i, guide: multiAgentTopicBriefGuide },
    { pattern: /infrastructure|runtime|deployment|scaling|operations|finops|mlops|llmops|api design|training|adaptation|synthetic data/i, guide: runtimeTopicBriefGuide },
    { pattern: /evaluation|observability|debugging|testing|performance|ci\/cd|specification vs emergence/i, guide: evaluationTopicBriefGuide },
    { pattern: /developer|enterprise|research|consumer|human-agent|physical ai|application|domain/i, guide: applicationTopicBriefGuide },
    { pattern: /safety|security|governance|alignment|privacy/i, guide: safetyTopicBriefGuide }
  ];

  const topicBriefKindRules = [
    { pattern: /\bvs\b|trade-offs?|choice|\bbeats\b|difference between/i, kind: 'comparison' },
    { pattern: /inputs?, state, outputs?, and side effects|compound ai systems|rough system picture/i, kind: 'system-decomposition' },
    { pattern: /^when\b|^why\b|\bbefore\b|\bthen\b|starting point|at the end|budget|frontier|surface area|uncertainty|signal|overhang|deficit|constraints?/i, kind: 'decision-lens' },
    { pattern: /pretraining|next-token|instruction tuning|preference tuning|alignment tuning|\brlhf\b|\brlaif\b|\bdpo\b|\bppo\b|\bgrpo\b|fine-tuning|fine tuning|lora|qlora|peft|online learning|continual learning|personalization|feedback loops?|synthetic data|distillation|model merging|curriculum|trajectory fine-tuning|multi-task agent training|tool-use fine-tuning|bootstrapped self-improvement|rejection sampling|quality filtering|self-play|self-instruct|instruction-following data|trajectory synthesis|simulated environment trajectories/i, kind: 'training-method' },
    { pattern: /read \/ write memory policies|memory selection policies|memory routing|memory ttl|time decay|conflict resolution across memories|personalized vs shared memory|importance scoring|salience|compaction|summarization policies|archival|forgetting|memory provenance|source lineage|memory permissions|access control/i, kind: 'memory-operations' },
    { pattern: /validation|approval|guardrails|permission systems|capability gating|policy enforcement|least privilege|oversight checkpoints|output filtering|boundary testing|kill switches|audit trails|compliance|owasp|eu ai act|nist ai rmf|iso\/iec 42001|responsible ai|\bliability\b|accountability|rollback-on-failure|compensating actions|adaptive autonomy|human-in-the-loop|human-on-the-loop|full autonomy|oversight/i, kind: 'policy-control' },
    { pattern: /measuring|detection|detect|robustness|mismatch|unintended behaviors/i, kind: 'detection-measurement' },
    { pattern: /threats?|attack|injection|hijacking|misuse|abuse|poisoning|hallucination|rogue|exfiltration|theft|excessive agency|draining|explosion|exhaustion|drift|misgeneralization|gaming|mismatch|robustness|failure|objective compliance|apparent success|emergent strategy|unintended behaviors|contamination|leakage/i, kind: 'threat-failure' },
    { pattern: /oauth|authentication|credential|mTLS|workload identity|service identities|delegated authorization|authorization frameworks|scoped permission|identity management|identity cards|manifests|trust chains|signing|provenance verification|credential rotation|impersonation prevention|federation|non-repudiation|zero-trust/i, kind: 'identity-trust' },
    { pattern: /protocol|interoperability|openapi|asyncapi|capability discovery|agent directories|task handoff|status semantics|transport|session patterns|interop layers|agent card|manifest|a2a|mcp|fipa/i, kind: 'protocol-standards' },
    { pattern: /runtime environments|state persistence models|deterministic vs non-deterministic execution|idempotent task execution|replayability|resumability|event logs|task ledgers|ephemeral vs persistent workers|stateful vs stateless agents|checkpointing|recovery|long-running agent processes|durable execution|background workers|message queues|persistent agent processes|edge vs cloud/i, kind: 'runtime-durability' }
  ];

  const topicBriefGuideRules = [
    { pattern: /inputs?, state, outputs?, and side effects|compound ai systems|rough system picture/i, guide: systemDecompositionTopicBriefGuide },
    { pattern: /pretraining|next-token|instruction tuning|preference tuning|alignment tuning|\brlhf\b|\brlaif\b|\bdpo\b|\bppo\b|\bgrpo\b|fine-tuning|fine tuning|lora|qlora|peft|online learning|continual learning|personalization|feedback loops?|synthetic data|distillation|model merging|curriculum|trajectory fine-tuning|multi-task agent training|tool-use fine-tuning|bootstrapped self-improvement|rejection sampling|quality filtering|self-play|self-instruct|instruction-following data|trajectory synthesis|simulated environment trajectories/i, guide: trainingMethodTopicBriefGuide },
    { pattern: /read \/ write memory policies|memory selection policies|memory routing|memory ttl|time decay|conflict resolution across memories|personalized vs shared memory|importance scoring|salience|compaction|summarization policies|archival|forgetting|memory provenance|source lineage|memory permissions|access control/i, guide: memoryOperationsTopicBriefGuide },
    { pattern: /validation|approval|guardrails|permission systems|capability gating|policy enforcement|least privilege|oversight checkpoints|output filtering|boundary testing|kill switches|audit trails|owasp|eu ai act|nist ai rmf|iso\/iec 42001|responsible ai|\bliability\b|accountability|compliance|rollback-on-failure|compensating actions|adaptive autonomy|human-in-the-loop|human-on-the-loop|full autonomy|oversight/i, guide: policyControlTopicBriefGuide },
    { pattern: /measuring|detection|detect|robustness|mismatch|unintended behaviors/i, guide: detectionMeasurementTopicBriefGuide },
    { pattern: /threats?|attack|injection|hijacking|misuse|abuse|poisoning|hallucination|rogue|exfiltration|theft|excessive agency|draining|explosion|exhaustion|drift|misgeneralization|gaming|mismatch|robustness|failure|objective compliance|apparent success|emergent strategy|unintended behaviors|contamination|leakage/i, guide: threatFailureTopicBriefGuide },
    { pattern: /oauth|authentication|credential|mTLS|workload identity|service identities|delegated authorization|authorization frameworks|scoped permission|identity management|identity cards|manifests|trust chains|signing|provenance verification|credential rotation|impersonation prevention|federation|non-repudiation|zero-trust/i, guide: identityTrustTopicBriefGuide },
    { pattern: /protocol|interoperability|openapi|asyncapi|capability discovery|agent directories|task handoff|status semantics|transport|session patterns|interop layers|agent card|manifest|a2a|mcp|fipa/i, guide: protocolStandardsTopicBriefGuide },
    { pattern: /runtime environments|state persistence models|deterministic vs non-deterministic execution|idempotent task execution|replayability|resumability|event logs|task ledgers|ephemeral vs persistent workers|stateful vs stateless agents|checkpointing|recovery|long-running agent processes|durable execution|background workers|message queues|persistent agent processes|edge vs cloud/i, guide: runtimeDurabilityTopicBriefGuide },
    { pattern: /\bvs\b|trade-offs?|choice|\bbeats\b|difference between|^when\b|^why\b|\bbefore\b|\bthen\b|starting point|at the end|budget|frontier|surface area|uncertainty|signal|overhang|deficit|constraints?/i, guide: distinctionTopicBriefGuide }
  ];

  const topicBriefExactOverrides = [
    { pattern: /^MCP server hosting$/i, kind: 'default', guide: runtimeTopicBriefGuide },
    { pattern: /^Policy enforcement$/i, kind: 'policy-control', guide: policyControlTopicBriefGuide },
    { pattern: /^Adversarial \/ self-play agent systems$/i, kind: 'default', guide: multiAgentIncentivesTopicBriefGuide }
  ];

  const topicBriefTargetedGuideRules = [
    { pattern: /eval suites?|leaderboards?|benchmarks? \(/i, guide: evaluationTopicBriefGuide }
  ];

  const topicBriefSectionOverrides = [
    { layerTitle: 'Mental Models', sectionTitle: 'Study route', kind: 'study-route', guide: studyRouteTopicBriefGuide },
    { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Governance & compliance', kind: 'governance', guide: governanceTopicBriefGuide },
    { layerTitle: 'Applications & Domains', sectionTitle: 'Enterprise & business agents', kind: 'default', guide: applicationTopicBriefGuide },
    { layerTitle: 'Applications & Domains', sectionTitle: 'Consumer & personal agents', kind: 'default', guide: applicationTopicBriefGuide },
    { layerTitle: 'Applications & Domains', sectionTitle: 'Human-agent teaming', kind: 'default', guide: humanTeamingTopicBriefGuide },
    { layerTitle: 'Agency & Tool Use', sectionTitle: 'Prompt & interface design', kind: 'default', guide: promptTopicBriefGuide },
    { layerTitle: 'Agency & Tool Use', sectionTitle: 'Control & validation', guide: controlValidationTopicBriefGuide },
    { layerTitle: 'Cognition & Control', sectionTitle: 'Reflection, critique & repair', kind: 'default', guide: reasoningTopicBriefGuide },
    { layerTitle: 'Cognition & Control', sectionTitle: 'Meta-cognition', guide: metacognitionTopicBriefGuide },
    { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Frameworks', guide: frameworkTopicBriefGuide },
    { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Incentives & mechanism design (advanced / research)', guide: multiAgentIncentivesTopicBriefGuide },
    { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Failure modes at scale', kind: 'threat-failure', guide: threatFailureTopicBriefGuide },
    { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Interoperability & standards', kind: 'protocol-standards', guide: protocolStandardsTopicBriefGuide },
    { layerTitle: 'Evaluation & Observability', sectionTitle: 'Specification vs emergence gap', guide: specificationGapTopicBriefGuide },
    { layerTitle: 'Infrastructure & Runtime', sectionTitle: 'Agent FinOps & cost economics', guide: finOpsTopicBriefGuide },
    { layerTitle: 'Infrastructure & Runtime', sectionTitle: 'MLOps & LLMOps', guide: mlopsLifecycleTopicBriefGuide },
    { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Alignment', guide: alignmentTopicBriefGuide },
    { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Privacy & data protection', guide: privacyDataProtectionTopicBriefGuide }
  ];

  window.__SyllabusTopicBriefConfig = Object.freeze({
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
  });
}());
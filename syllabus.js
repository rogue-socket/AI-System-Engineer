(function () {
  const rawData = [
    {
      id:1, title:"Foundation Models", color:"#7F77DD", bg:"#EEEDFE",
      sections:[
        {title:"Core transformer architecture", topics:[
          "Attention mechanisms","Multi-head attention","Positional encoding","Feed-forward layers","Layer normalization","Residual connections","Tokenization","Byte-pair encoding (BPE)","Context windows","KV cache"
        ]},
        {title:"Architecture extensions", topics:[
          "Mixture of Experts (MoE)","Speculative decoding","Structured output / JSON mode","Prompt caching","Quantization (GPTQ, AWQ, GGUF)","State-space models (Mamba, RWKV)","Grouped Query Attention (GQA)","Multi-Head Latent Attention (MLA)","Sliding window attention","Rotary Position Embedding (RoPE)","Ring attention / infinite context","Retrieval-augmented generation at architecture level"
        ]},
        {title:"Model families", topics:[
          "GPT-style (decoder-only)","BERT-style (encoder-only)","T5-style (encoder-decoder)","Multimodal models (LMM/VLM)","Small language models (SLM)","Open-source vs proprietary","Model cards & documentation"
        ]},
        {title:"Embedding & retrieval models", topics:[
          "Text embedding models (OpenAI, Cohere, Voyage)","Open embedding models (BGE, E5, GTE, Nomic)","Multimodal embeddings (CLIP, SigLIP)","Reranker models (cross-encoders)","ColBERT / late interaction models","Matryoshka embeddings (variable dimension)","Embedding fine-tuning & domain adaptation","MTEB benchmark & embedding leaderboards"
        ]},
        {title:"Voice & audio models", topics:[
          "Text-to-speech (ElevenLabs, OpenAI TTS)","Speech-to-text (Whisper, Deepgram, AssemblyAI)","Voice cloning & synthesis","Real-time voice agents (OpenAI Realtime API)","Audio understanding models","Voice-first agent architectures"
        ]},
        {title:"Reasoning & thinking models", topics:[
          "OpenAI o1 / o1-pro / o3 / o4-mini","DeepSeek-R1 / R1-Zero / R1-0528","Claude with extended thinking (Anthropic)","Gemini 2.0 Flash Thinking / Gemini 2.5 Pro","Qwen QwQ / Qwen3 thinking mode","Grok 3 (xAI) with reasoning","Phi-4-reasoning (Microsoft)","Llama 4 Maverick / Scout reasoning","Mistral Large with reasoning","Command R7B with reasoning (Cohere)","Kimi k1.5 (Moonshot AI)","Marco-o1 (Alibaba DAMO)","Skywork-o1 (Kunlun Tech)","Open-source reasoning distillation (R1→smaller models)","Chain-of-thought tokens / thinking tokens","Thinking budget / max_thinking_tokens","Test-time compute scaling laws","Adaptive compute allocation per query","Best-of-N sampling / rejection sampling","GRPO (Group Relative Policy Optimization)","Hybrid thinking / non-thinking modes","Reasoning traces as training signal","Supervised fine-tuning on reasoning traces (SFT-on-CoT)","RL from verifiable rewards for reasoning"
        ]},
        {title:"Multimodal & vision models", topics:[
          "GPT-4o / GPT-4V (OpenAI)","Claude 3.5 / Claude 4 with vision (Anthropic)","Gemini 2.0 / 2.5 multimodal (Google)","Llama 4 multimodal (Meta)","Qwen-VL / Qwen2.5-VL (Alibaba)","Pixtral (Mistral)","InternVL / InternVL2 (Shanghai AI Lab)","LLaVA / LLaVA-NeXT","Idefics 2/3 (HuggingFace)","CogVLM / CogAgent","Florence-2 (Microsoft)","Image understanding vs generation models","Video understanding models","Vision-language grounding"
        ]},
        {title:"Tool-calling & code models", topics:[
          "Function-calling fine-tuned models","DeepSeek-Coder / DeepSeek-Coder-V2","OpenAI Codex (CLI agent)","StarCoder / StarCoder2 (BigCode)","Qwen-Coder (Qwen2.5-Coder)","Claude with tool use","Llama Code variants","CodeGemma (Google)","WizardCoder","Codestral (Mistral)","Granite Code (IBM)","Arctic (Snowflake)","Nemotron (NVIDIA)","Tool-use fine-tuning datasets (ToolBench, API-Bank)"
        ]},
        {title:"Open-weight model ecosystem", topics:[
          "Llama 3 / 3.1 / Llama 4 (Meta)","DeepSeek V3 / V3.1 / R1 (MIT license)","Mistral / Mixtral / Mistral Large","Qwen 2.5 / Qwen3 (Alibaba)","Gemma / Gemma 2 (Google)","Phi-3 / Phi-4 (Microsoft)","Command R / Command R+ (Cohere)","Yi series (01.AI)","Open-weight vs open-source licensing distinctions","Model distillation from closed models (controversy)","Hugging Face Hub as distribution ecosystem","Benchmark gaming & evaluation integrity"
        ]},
        {title:"Inference optimization", topics:[
          "Speculative decoding (draft + verifier)","KV cache compression (MLA)","Continuous batching","PagedAttention (vLLM)","Multi-token prediction","Mixed-precision inference (FP8, BF16)","Native Sparse Attention","MoE inference routing","Tensor / pipeline parallelism for serving","Prefix caching / prompt caching"
        ]},
        {title:"Prompt engineering", topics:[
          "Zero-shot prompting","Few-shot prompting","Instruction tuning","System vs user prompts","Prompt templates","Meta-prompting","Prompt chaining","Automatic prompt optimization","Prompt compression","Role prompting","Structured output prompting"
        ]},
        {title:"Production prompt management", topics:[
          "Prompt versioning and registries","Prompt A/B testing and experimentation","Prompt libraries and reuse patterns","Prompt lifecycle management (draft, review, staging, production)","Prompt regression testing","Prompt review and approval workflows","Prompt templating engines and variable injection","Prompt observability and performance tracking","Prompt rollback strategies","Prompt collaboration across teams","Prompt-model co-versioning","Prompt catalogs and discoverability"
        ]}
      ]
    },
    {
      id:2, title:"Reasoning & Intelligence", color:"#1D9E75", bg:"#E1F5EE",
      sections:[
        {title:"Reasoning paradigms", topics:[
          "Chain-of-Thought (CoT)","ReAct (Reason+Act)","Tree-of-Thought (ToT)","Graph-of-Thought (GoT)","Program-of-Thought (PoT)","Self-consistency","Debate reasoning","Skeleton-of-Thought","Chain-of-Emotion","Test-time compute scaling","Process reward models (PRM)","Outcome reward models (ORM)","Verification & self-verification"
        ]},
        {title:"Reflection & self-improvement", topics:[
          "Reflection loops","Self-critique","Self-evaluation","Iterative refinement","Constitutional AI","Self-play","Online learning from feedback","Reward modeling","Critique agents"
        ]},
        {title:"Training paradigms for agents", topics:[
          "Reinforcement Learning from Human Feedback (RLHF)","Reinforcement Learning from AI Feedback (RLAIF)","Direct Preference Optimization (DPO)","Proximal Policy Optimization (PPO)","Group Relative Policy Optimization (GRPO)","Tool-use fine-tuning","Agent trajectory fine-tuning","Curriculum learning for agents","Bootstrapped self-improvement","Multi-task agent training"
        ]},
        {title:"Agent architectures", topics:[
          "ReAct agents","Plan-and-Execute agents","Reflection agents","Autonomous agents (AutoGPT-style)","Tool-using agents","Generalist agents","Subagent patterns","Mixture-of-Agents (MoA)","World models","Skeleton planner","Compound AI systems","Cognitive architectures (ACT-R, SOAR)"
        ]},
        {title:"Planning & control", topics:[
          "Task decomposition","Hierarchical planning","Agent loop design","Rule-based controllers","LLM-based controllers","Execution engines","Retry & backoff strategies","Failure handling","Goal prioritization","Constraint satisfaction","Monte Carlo Tree Search planning","Budget-aware planning"
        ]},
        {title:"Neuro-symbolic AI (advanced / research)", topics:[
          "Logic-neural hybrid architectures","System 1 / System 2 dual-process models","Symbolic grounding for LLM reasoning","Knowledge graph-grounded reasoning","Constraint-guided neural generation"
        ]},
        {title:"Meta-cognition", topics:[
          "Confidence monitoring & calibration","Out-of-distribution (OOD) detection","Epistemic vs aleatoric uncertainty","Knowing-when-to-stop (task completion detection)","Selective prediction / abstention when unsure","Hallucination self-detection","Confidence-gated action execution","Resource-bounded reasoning","Planning horizon awareness","Model-internal uncertainty signals (logprob analysis)","Metacognitive prompting strategies","Introspective tool-use decisions"
        ]}
      ]
    },
    {
      id:3, title:"Memory & Knowledge", color:"#378ADD", bg:"#E6F1FB",
      sections:[
        {title:"Memory taxonomy", topics:[
          "In-context (working) memory","External / long-term memory","Episodic memory","Semantic memory","Procedural memory","Memory compression","Memory versioning","Memory pruning","MemGPT / Letta patterns","Context window management"
        ]},
        {title:"Retrieval techniques", topics:[
          "Vector search (ANN / HNSW)","Hybrid search","Keyword search (BM25)","Embeddings","Reranking","Cohere Rerank / cross-encoders","Query rewriting","Query expansion","ColBERT / late interaction retrieval","HyDE (Hypothetical Document Embeddings)","Contextual retrieval","Reciprocal Rank Fusion (RRF)","Learned sparse retrieval (SPLADE)"
        ]},
        {title:"Chunking & indexing", topics:[
          "Chunking strategies","Sliding window chunking","Document hierarchies","Late chunking","Parent-child retrieval","Recursive / semantic chunking","Agentic chunking","Metadata enrichment & filtering","Multi-index strategies","Indexing pipelines & automation"
        ]},
        {title:"RAG architectures", topics:[
          "Multi-hop RAG","Agentic RAG","Corrective RAG (CRAG)","Self-RAG","GraphRAG","Multimodal RAG","RAPTOR (tree-structured RAG)","Modular RAG pipelines","Adaptive RAG (route by query complexity)","RAG vs fine-tuning vs long context (trade-offs)","RAG evaluation (context relevance, faithfulness)","Cache-augmented generation"
        ]},
        {title:"Knowledge stores", topics:[
          "Vector databases (Pinecone, Weaviate, Qdrant)","Knowledge graphs","Relational DBs","Document stores","Conversation history","Episodic logs","Graph databases (Neo4j, Neptune)","Chroma / LanceDB (embedded vector DBs)","Hybrid stores (Milvus, pgvector)","Multi-tenant knowledge isolation"
        ]},
        {title:"Knowledge quality", topics:[
          "Hallucination detection","Grounding techniques","Freshness & staleness","Data pipelines & ingestion","Source attribution","Confidence scoring","Fact-checking agents"
        ]}
      ]
    },
    {
      id:4, title:"Agency & Tool Use", color:"#EF9F27", bg:"#FAEEDA",
      sections:[
        {title:"Tool interfaces", topics:[
          "Function calling","Tool schema design (OpenAI / Anthropic style)","Tool selection logic","Tool chaining","Tool error handling","Parallel tool calls","Tool result handling","Structured output for tool calls","Tool-use benchmarks (BFCL)"
        ]},
        {title:"Information tools", topics:[
          "Web search","Web scraping","APIs & REST","File ingestion (PDF, CSV, DOCX)","Code interpreters","Database queries","Knowledge base Q&A","Screenshot / screen capture tools","OCR & document AI"
        ]},
        {title:"Action tools", topics:[
          "Code execution (sandboxed)","File system operations","Shell / CLI automation","Browser automation","Computer use / GUI agents","Email & calendar APIs","Form filling","Voice & telephony agents","Image / video generation tools"
        ]},
        {title:"Meta tooling", topics:[
          "Tool discovery","Dynamic tool registration","Tool ranking & selection","Tool learning from feedback","OpenAI tool schema","Cost-aware tool selection policies"
        ]},
        {title:"Protocol convergence & standards", topics:[
          "MCP (Model Context Protocol)","A2A protocol","ACP (Agent Communication Protocol)","Interoperability standards","MCP server ecosystem","Agent Network Protocol (ANP)","Agentic AI Foundation (Linux Foundation)","IEEE P3394 — Agent Interoperability Standard","Protocol bridging / interop layers (MCP↔A2A)","Agent capability discovery & registry standards","Standardized agent card / manifest formats","OpenAPI / AsyncAPI for agent tool interfaces","Cross-vendor agent orchestration standards","FIPA-legacy concepts in modern protocols"
        ]},
        {title:"Agentic browsers", topics:[
          "Browser-as-runtime for AI agents","Browser Company Dia","Perplexity Comet","Google Project Mariner","Operator / Computer Use paradigms (Anthropic, OpenAI)","DOM interaction models for agent navigation","Browser sandboxing for agent safety","Vision-based web agents (screenshot understanding)","Headless vs visual browser agents","Credential & session isolation for browser agents","Browser Skills (user-defined agentic shortcuts)","Web agent benchmarks (WebArena, Mind2Web)"
        ]},
        {title:"Interaction patterns", topics:[
          "Tool-calling loops","Human-in-the-loop (HITL)","Conversational agents","Task-oriented agents","Event-driven agents","Streaming agents","Sync vs async","Voice / multimodal I/O","Webhooks & event triggers","Approval workflows","Objective-Validation Protocol (OVP) paradigm","Validation checkpoint architecture","Goal decomposition with validation gates","Rollback-on-failure / compensating actions","Human-in-the-loop vs human-on-the-loop vs full autonomy","Adaptive autonomy levels (dynamic delegation)"
        ]},
        {title:"Agent identity & authentication", topics:[
          "OAuth & authentication for agents","Agent credential management","Machine identity certificates (mTLS)","Delegated authorization (agent acts on behalf of user)","Scoped permission tokens per task","Agent identity cards / manifests","Multi-agent trust chains","Agent signing & provenance verification","Credential rotation for long-running agents","Cross-organizational agent federation"
        ]}
      ]
    },
    {
      id:5, title:"Multi-Agent Systems", color:"#D4537E", bg:"#FBEAF0",
      sections:[
        {title:"Multi-agent architectures", topics:[
          "Orchestrator-subagent pattern","Role-based agent teams","Peer-to-peer agents","Hierarchical agent networks","Debate agents","Mixture-of-Agents (MoA)","Puppeteer + specialist pattern","Governance agents","Agent marketplaces","Competitive agent systems"
        ]},
        {title:"Agent design patterns", topics:[
          "Router pattern (classify & dispatch)","Map-reduce pattern (parallel fan-out)","Supervisor pattern (manage + route)","Critic / verifier pattern","Planner-executor pattern","Retriever-reader pattern","Generator-evaluator loop","Escalation pattern (agent → human)","Watchdog pattern (monitoring agent)","Assembly line pattern (sequential specialization)","Blackboard pattern (shared workspace)","Inner monologue pattern"
        ]},
        {title:"Coordination & communication", topics:[
          "Message passing","Shared state management","Context handoff","Conflict resolution","Task delegation","Emergent behavior","Swarm intelligence","Agent discovery","Agent protocol standardization","Trust & reputation systems"
        ]},
        {title:"Frameworks", topics:[
          "LangChain / LangGraph","LlamaIndex","AutoGen","CrewAI","OpenAI Agents SDK","Google ADK","PydanticAI","Haystack","Microsoft AutoGen","Dify","Smolagents (HuggingFace)","Mastra","Vercel AI SDK","Agno (formerly Phidata)","Agency Swarm"
        ]},
        {title:"Workflow systems", topics:[
          "DAG pipelines","State machines","Event-driven orchestration","Async orchestration","Parallel execution","Fan-out / fan-in","Workflow recovery & checkpointing","Long-running agent processes","Durable execution (Temporal, Inngest)"
        ]},
        {title:"Failure modes at scale", topics:[
          "Coordination collapse (deadlock / live-lock)","Authority ambiguity (unclear decision ownership)","Cascade failures across agent hops","Deference loops (agents deferring indefinitely)","Goal drift in long-running workflows","Herding behavior (convergence on suboptimal solution)","Communication overhead explosion (O(n²) messaging)","Context window exhaustion in multi-turn chains","Hallucination amplification across hops","Silent failure (false success reporting)","Conflicting sub-goal resolution failures","Trust chain breakdown (compromised agent in pipeline)","Emergent adversarial dynamics between cooperative agents"
        ]}
      ]
    },
    {
      id:6, title:"Infrastructure & Deployment", color:"#888780", bg:"#F1EFE8",
      sections:[
        {title:"Model infrastructure", topics:[
          "API providers (OpenAI, Anthropic, Google)","Local inference (Ollama, vLLM, llama.cpp)","Model routing","Model switching","Multi-model ensembles","Token streaming","Inference providers (Groq, Together, Fireworks)","GPU orchestration","Model distillation"
        ]},
        {title:"Data infrastructure", topics:[
          "Vector databases","SQL / NoSQL systems","Object storage","Data lakes","Stream processing (Kafka)","Data versioning","Feature stores for agents","Time-series databases for agent metrics"
        ]},
        {title:"Scaling & operations", topics:[
          "Horizontal scaling of agent fleets","Agent lifecycle management","Auto-scaling based on queue depth","Multi-region agent deployment","Agent health checks & heartbeats","Graceful degradation strategies","Version management for agent configs","Canary deployments for agents","Configuration management (prompts, tools, models)","Agent dependency management"
        ]},
        {title:"System infrastructure", topics:[
          "Caching (Redis, semantic cache)","Message queues","Background workers","Rate limiting","Load balancing","API gateways","Agent sandboxing (E2B, Modal, Daytona)","MCP server hosting"
        ]},
        {title:"Deployment patterns", topics:[
          "Docker containers","Kubernetes","Serverless agents","Persistent agent processes","Edge vs cloud","Blue-green deployments","Agent registries","Shadow AI discovery","Agent-as-a-service","Hybrid local / cloud agents"
        ]},
        {title:"Learning & adaptation", topics:[
          "Fine-tuning (full, PEFT, LoRA, QLoRA)","RLHF","Direct Preference Optimization (DPO)","Continual learning","Online learning","Personalization systems","Feedback loops","Synthetic data generation","Model merging (TIES, DARE, SLERP)","Preference tuning (KTO, IPO)"
        ]},
        {title:"Synthetic data for agents", topics:[
          "LLM-generated instruction-following data","Rejection sampling for quality filtering","Self-play / self-instruct data generation","Distillation from frontier models","Simulated environment trajectories for tool-use","Multi-turn agentic trajectory synthesis","Verification-based data quality filtering","Contamination & benchmark leakage risks"
        ]},
        {title:"Agent FinOps & cost economics", topics:[
          "Token budgeting per task","Cost-per-task modeling & metering","Model routing for cost (cheap-model-first cascades)","Multi-step pipeline budget allocation","Inference cost vs accuracy trade-off curves","Agent ROI frameworks","Token-level cost attribution & chargebacks","Prompt caching economics (KV reuse savings)","Reasoning-token cost accounting","Cost-aware tool selection policies","Agent spend observability dashboards","FinOps governance for autonomous agent pipelines"
        ]},
        {title:"MLOps & LLMOps", topics:[
          "Model versioning and registries","Experiment tracking (Weights & Biases, MLflow, Comet)","Model-serving lifecycle (staging, production, retired)","A/B testing infrastructure for models","Feature flags for model routing","Prompt-model co-versioning","Artifact management (models, adapters, prompts)","LLM gateway patterns (LiteLLM, Portkey, Martian)","Model performance monitoring and drift detection","Automated retraining and fine-tuning pipelines","Reproducibility and deterministic inference","Environment parity (dev, staging, prod)"
        ]},
        {title:"API design for AI services", topics:[
          "Streaming response design (SSE, WebSockets, chunked transfer)","Rate limiting strategies for LLM-backed APIs","Token-based rate limiting vs request-based","Webhook patterns for async agent execution","Long-running task APIs (polling, callbacks, WebSockets)","API versioning for prompt and model changes","Request and response schemas for structured LLM output","Error handling and retry contracts for AI endpoints","Idempotency keys for agent actions","Authentication and authorization for AI APIs","Multi-tenant API isolation","API gateway patterns for model routing","Backpressure and queue-based request handling","Timeout design for variable-latency LLM calls","Health check and readiness probes for AI services"
        ]}
      ]
    },
    {
      id:7, title:"Safety, Security & Governance", color:"#E24B4A", bg:"#FCEBEB",
      sections:[
        {title:"Agent-specific threats", topics:[
          "Prompt injection","Indirect prompt injection","Goal hijacking","Tool misuse","Identity abuse","Memory poisoning","Cascading hallucinations","Rogue agents","Supply chain attacks on tools","Data exfiltration via agents","Multi-hop prompt injection","Agent credential theft","Excessive agency"
        ]},
        {title:"Safety mechanisms", topics:[
          "Guardrails","Output validation","Sandboxing","Permission systems (least privilege)","Capability gating","Red teaming","Constitutional AI","Kill switches","Human oversight checkpoints","Input / output filtering","Agent boundary testing","Canary tokens"
        ]},
        {title:"Governance & compliance", topics:[
          "OWASP Agentic AI Top 10","EU AI Act","NIST AI RMF","ISO/IEC 42001","Agent identity management","Agent registries & inventories","Audit trails","Policy enforcement","Zero-trust for agents","Regulatory mapping","Agent authorization frameworks","Responsible AI frameworks","Agent liability & accountability","Agentic AI Foundation (Linux Foundation governance)","Open governance for agent protocols","Agent impersonation prevention","Non-repudiation for agent actions"
        ]},
        {title:"Alignment", topics:[
          "Value alignment","Intent detection","Behavioral monitoring","Transparency & explainability","Bias detection","Fairness metrics","Controllability"
        ]},
        {title:"Privacy & data protection", topics:[
          "PII detection & redaction in agent pipelines","Data minimization for agent context","Consent management for agent data use","Right-to-erasure in agent memory","Differential privacy for agent training","Data residency & sovereignty","Agent-to-agent data sharing policies","Confidential computing for agent inference"
        ]}
      ]
    },
    {
      id:8, title:"Evaluation, Observability & Applications", color:"#639922", bg:"#EAF3DE",
      sections:[
        {title:"Evaluation", topics:[
          "Automated benchmarks (MMLU, HumanEval, GAIA)","Human evaluation","Task success rate","Hallucination detection","Faithfulness scoring","Relevance scoring","End-to-end agent evals","Multi-turn evals","Adversarial testing","A/B testing agents","SWE-bench","WebArena","AgentBench","BFCL (Berkeley Function Calling Leaderboard)","ToolBench"
        ]},
        {title:"Observability", topics:[
          "Distributed tracing (LangSmith, Langfuse)","Step-level logging","Cost tracking","Latency monitoring","Token usage dashboards","Agent audit logs","OpenTelemetry for agents","Arize / Phoenix","Braintrust"
        ]},
        {title:"Debugging & testing", topics:[
          "Prompt debugging","Tool call debugging","Deterministic replay","Failure analysis","Unit tests for agents","Integration tests","Regression testing","Chaos engineering for agents","Snapshot testing for prompts","Mock tool servers for testing","Agent simulation environments"
        ]},
        {title:"Performance engineering", topics:[
          "Latency optimization","Cost optimization","Semantic caching","Parallel execution","Batching","Model routing (small→large)","Prompt compression","Context pruning"
        ]},
        {title:"CI/CD for AI systems", topics:[
          "Prompt testing in CI pipelines","Model regression checks","Eval-gated deployments","Prompt diff and review workflows","Automated eval suites in pull requests","Staging environments for AI features","Shadow mode and dark launches for model changes","Rollback strategies for model updates","Canary releases with eval thresholds","Integration testing for tool-calling agents","Contract testing for LLM outputs","Eval dashboards in CI (pass/fail gates)"
        ]},
        {title:"Developer & engineering agents", topics:[
          "Coding agents","Agentic coding (Cursor, Copilot, Devin)","Code review agents","DevOps / SRE agents","Testing & QA agents","Documentation generation agents","Database migration agents","Security scanning agents"
        ]},
        {title:"Enterprise & business agents", topics:[
          "Customer support agents","Data analysis agents","Automation / RPA agents","Financial agents","Legal agents","Sales & marketing agents","Supply chain agents","HR & recruiting agents","Compliance & audit agents","Meeting summarization agents","Procurement agents"
        ]},
        {title:"Research & domain agents", topics:[
          "Research agents","Scientific discovery agents","Healthcare agents","Education agents","Drug discovery agents","Materials science agents","Climate & environmental agents","Academic writing & literature review agents"
        ]},
        {title:"Consumer & personal agents", topics:[
          "Personal assistants","Multi-modal agents","Voice agents & assistants","Browser / computer-use agents","Shopping & comparison agents","Travel planning agents","Lifestyle & productivity agents","Creative / content generation agents","Gaming & NPC agents"
        ]},
        {title:"Physical AI & embodied agents (advanced / research)", topics:[
          "Vision-Language-Action models (VLAs)","Sim-to-real transfer & domain randomization","JEPA (Joint Embedding Predictive Architecture)","Teleoperation data collection pipelines","Single-model vs dual-system VLA design"
        ]},
        {title:"Human-agent teaming", topics:[
          "Trust calibration in human-AI teams","Oversight fatigue & automation complacency","Role complementarity (human + agent skill mapping)","Cognitive load management with AI assistants","Shared mental models between humans and agents","Adaptive autonomy levels","Explainability requirements for team trust","Handoff protocols (agent-to-human escalation)","Anti-patterns: over-reliance, learned helplessness, automation bias","Mixed-initiative interaction design","Team situational awareness with AI members","Workforce redesign for human-agent collaboration"
        ]}
      ]
    }
  ];

  function topicText(topic) {
    return typeof topic === 'string' ? topic : topic.text;
  }

  function getText(topic) {
    return topicText(topic);
  }

  function isNew() {
    return false;
  }

  function normalizeTopic(topic, extra = {}) {
    return {
      ...(topic && typeof topic === 'object' ? topic : {}),
      text: topicText(topic),
      isNew: isNew(topic),
      ...extra
    };
  }

  function cloneTopic(topic) {
    return normalizeTopic(topic);
  }

  function newTopic(text, extra = {}) {
    return { text, ...extra };
  }

  const rawLayerMap = Object.fromEntries(rawData.map(layer => [layer.title, layer]));

  function getRawSection(layerTitle, sectionTitle) {
    return rawLayerMap[layerTitle].sections.find(section => section.title === sectionTitle);
  }

  function copyTopics(layerTitle, sectionTitle, filterFn = () => true) {
    return getRawSection(layerTitle, sectionTitle).topics.filter(filterFn).map(cloneTopic);
  }

  function dedupeStrings(values) {
    const seen = new Set();
    return values.filter(value => {
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
      .filter(topic => {
        const key = topic.text;
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      })
      .map(topic => ({ ...topic }));
  }

  function copySection(layerTitle, sectionTitle, overrides = {}) {
    return {
      title: overrides.title || sectionTitle,
      prerequisites: dedupeStrings(overrides.prerequisites || []),
      topics: overrides.topics ? dedupeTopics(overrides.topics) : copyTopics(layerTitle, sectionTitle, overrides.filter || (() => true)),
      sourceRefs: (overrides.sourceRefs || [{ layerTitle, sectionTitle, synthetic: false }]).map(ref => ({ ...ref }))
    };
  }

  function syntheticSection(title, topics, options = {}) {
    return {
      title,
      prerequisites: dedupeStrings(options.prerequisites || []),
      topics: dedupeTopics(topics),
      sourceRefs: (options.sourceRefs || []).map(ref => ({ ...ref, synthetic: true }))
    };
  }

  const validationTopics = [
    'Human-in-the-loop (HITL)',
    'Approval workflows',
    'Objective-Validation Protocol (OVP) paradigm',
    'Validation checkpoint architecture',
    'Goal decomposition with validation gates',
    'Rollback-on-failure / compensating actions',
    'Human-in-the-loop vs human-on-the-loop vs full autonomy',
    'Adaptive autonomy levels (dynamic delegation)'
  ];

  const governanceIdentityTopics = [
    'Agent identity management',
    'Agent authorization frameworks',
    'Zero-trust for agents',
    'Agent impersonation prevention',
    'Non-repudiation for agent actions'
  ];

  const workflowRuntimeTopics = [
    'Long-running agent processes',
    'Durable execution (Temporal, Inngest)'
  ];

  function buildStructuredData() {
    return [
      {
        id: 1,
        kind: 'Orientation',
        scope: 'How the whole system fits together before the deep dive',
        title: 'Mental Models',
        color: '#111111',
        bg: '#F3F4F6',
        sections: [
          syntheticSection('Whole-system map', [
            newTopic('Workflow vs agent vs multi-agent system'),
            newTopic('Models, memory, tools, controllers, and environments'),
            newTopic('The observe -> think -> act -> verify -> update loop'),
            newTopic('Inputs, state, outputs, and side effects'),
            newTopic('Deterministic workflow steps vs probabilistic model steps'),
            newTopic('Compound AI systems'),
            newTopic('Why an agent is usually a system, not a single model'),
            newTopic('The difference between chat UX and agent architecture')
          ], {
            sourceRefs: [
              { layerTitle: 'Reasoning & Intelligence', sectionTitle: 'Agent architectures' },
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Interaction patterns' },
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Workflow systems' }
            ]
          }),
          syntheticSection('Model/runtime vocabulary', [
            newTopic('Tokens vs embeddings vs generated text'),
            newTopic('Pretraining vs fine-tuning vs inference'),
            newTopic('Inference vs serving vs deployment'),
            newTopic('Prompt tokens vs completion tokens vs reasoning tokens'),
            newTopic('Context window vs working context vs max output length'),
            newTopic('Decoding vs sampling vs generation'),
            newTopic('Greedy decoding vs temperature vs top-p sampling'),
            newTopic('Structured outputs vs free-form generation'),
            newTopic('Stateless calls vs stateful sessions'),
            newTopic('Single-turn completion vs multi-turn interaction'),
            newTopic('Inference-time compute vs training-time compute'),
            newTopic('Model weights vs runtime state vs external state'),
            newTopic('Cold start vs warm path vs cached path'),
            newTopic('Latency vs throughput vs concurrency'),
            newTopic('Latency, cost, reliability, and accuracy as system constraints')
          ], {
            prerequisites: ['Whole-system map'],
            sourceRefs: [
              { layerTitle: 'Foundation Models', sectionTitle: 'Core transformer architecture' },
              { layerTitle: 'Foundation Models', sectionTitle: 'Prompt engineering' },
              { layerTitle: 'Foundation Models', sectionTitle: 'Inference optimization' },
              { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'Model infrastructure' },
              { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'Scaling & operations' }
            ]
          }),
          syntheticSection('Agent/system vocabulary', [
            newTopic('Objectives vs tasks vs subtasks'),
            newTopic('Prompts vs policies vs plans'),
            newTopic('Context vs memory vs knowledge base'),
            newTopic('Reasoning vs planning vs acting'),
            newTopic('Reasoning models vs chat models vs tool-using agents'),
            newTopic('Retrieval vs search vs reranking'),
            newTopic('Memory write vs memory recall vs context injection'),
            newTopic('Grounding vs hallucination vs verification'),
            newTopic('Tool invocation vs workflow orchestration'),
            newTopic('Function calling vs tool use vs agent action'),
            newTopic('Routing vs orchestration vs delegation'),
            newTopic('Supervision vs oversight vs approval'),
            newTopic('Guardrails vs validators vs evaluators'),
            newTopic('Session state vs agent state vs workflow state'),
            newTopic('Single-agent system vs multi-agent system')
          ], {
            prerequisites: ['Whole-system map', 'Model/runtime vocabulary'],
            sourceRefs: [
              { layerTitle: 'Reasoning & Intelligence', sectionTitle: 'Reasoning paradigms' },
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Memory taxonomy' },
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Retrieval techniques' },
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Tool interfaces' },
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Interaction patterns' },
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Workflow systems' }
            ]
          }),
          syntheticSection('Design trade-offs', [
            newTopic('When simple automation beats agents'),
            newTopic('Single-agent vs multi-agent design choice'),
            newTopic('Long context vs RAG vs fine-tuning'),
            newTopic('Closed-weight vs open-weight deployment'),
            newTopic('Hosted APIs vs self-hosted inference'),
            newTopic('General-purpose model vs specialist model stack'),
            newTopic('Reasoning-first model vs low-latency model routing'),
            newTopic('One big prompt vs explicit workflow decomposition'),
            newTopic('Prompt logic vs code logic vs symbolic logic'),
            newTopic('Structured outputs vs natural-language post-processing'),
            newTopic('Tool calling vs direct API integration in code'),
            newTopic('Synchronous request-response vs asynchronous background execution'),
            newTopic('Single-shot generation vs iterative refinement loops'),
            newTopic('Parallel execution vs sequential dependency-aware execution'),
            newTopic('Dynamic planning vs fixed playbooks'),
            newTopic('Shared memory vs isolated memory per agent'),
            newTopic('Centralized orchestrator vs peer-to-peer coordination'),
            newTopic('Human approval gates vs full autonomy'),
            newTopic('Autonomy vs oversight'),
            newTopic('Flexible autonomy vs hard capability boundaries'),
            newTopic('Broad tool access vs least-privilege tool scopes'),
            newTopic('Deterministic validation vs model judgment'),
            newTopic('Rule-based guardrails vs model-based guardrails'),
            newTopic('Strict schemas vs flexible schemas'),
            newTopic('Immediate execution vs simulation / dry-run first'),
            newTopic('Short-term context stuffing vs durable memory systems'),
            newTopic('Raw retrieval recall vs reranked precision'),
            newTopic('Freshness of knowledge vs cost of continuous ingestion'),
            newTopic('Latency optimization vs answer quality'),
            newTopic('Reliability engineering vs maximum capability reach'),
            newTopic('Cheap-model-first cascades vs premium-model default'),
            newTopic('Observability depth vs operational overhead'),
            newTopic('Experimentation speed vs governance maturity'),
            newTopic('When to keep logic symbolic'),
            newTopic('Toy demos vs durable systems')
          ], {
            prerequisites: ['Whole-system map', 'Model/runtime vocabulary', 'Agent/system vocabulary'],
            sourceRefs: [
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'RAG architectures' },
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Knowledge quality' },
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Interaction patterns' },
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Agent design patterns' },
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Workflow systems' },
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Safety mechanisms' },
              { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'Agent FinOps & cost economics' }
            ]
          }),
          syntheticSection('Study route', [
            newTopic('Rough system picture before local optimization'),
            newTopic('Model/runtime vocabulary before deep architecture analysis'),
            newTopic('Agent/system vocabulary before orchestration patterns'),
            newTopic('Models first, then cognition, then memory, then agency'),
            newTopic('Learn prompting and decoding before tool use abstractions'),
            newTopic('Understand reasoning and planning before autonomy decisions'),
            newTopic('Study memory and retrieval before advanced RAG patterns'),
            newTopic('Build one good single-agent workflow before multi-agent orchestration'),
            newTopic('Add validation and observability before increasing autonomy'),
            newTopic('Do evaluation alongside implementation, not only at the end'),
            newTopic('Study governance after you understand real system failure modes'),
            newTopic('Use production constraints early: latency, cost, permissions, retries'),
            newTopic('Use cases as synthesis, not the starting point')
          ], {
            prerequisites: ['Whole-system map', 'Model/runtime vocabulary', 'Agent/system vocabulary'],
            sourceRefs: [
              { layerTitle: 'Foundation Models', sectionTitle: 'Core transformer architecture' },
              { layerTitle: 'Reasoning & Intelligence', sectionTitle: 'Planning & control' },
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'RAG architectures' },
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Interaction patterns' },
              { layerTitle: 'Evaluation, Observability & Applications', sectionTitle: 'Evaluation' },
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Governance & compliance' }
            ]
          }),
        ]
      },
      {
        id: 2,
        kind: 'Capabilities',
        scope: 'How models represent, generate, and specialize',
        title: 'Models & Representations',
        color: '#7F77DD',
        bg: '#EEEDFE',
        sections: [
          syntheticSection('Representation primitives', [
            'Tokenization',
            'Byte-pair encoding (BPE)',
            'Context windows',
            'Positional encoding',
            newTopic('Embeddings as semantic coordinates'),
            newTopic('Similarity and vector distance intuition'),
            newTopic('Generated tokens as iterative decoding steps'),
            newTopic('Structured output as constrained generation')
          ], {
            prerequisites: ['Whole-system map', 'Model/runtime vocabulary'],
            sourceRefs: [
              { layerTitle: 'Foundation Models', sectionTitle: 'Core transformer architecture' },
              { layerTitle: 'Foundation Models', sectionTitle: 'Architecture extensions' },
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Retrieval techniques' }
            ]
          }),
          copySection('Foundation Models', 'Core transformer architecture', {
            prerequisites: ['Representation primitives'],
            topics: copyTopics('Foundation Models', 'Core transformer architecture', topic => ![
              'Tokenization',
              'Byte-pair encoding (BPE)',
              'Context windows',
              'Positional encoding'
            ].includes(topicText(topic)))
          }),
          syntheticSection('Model lifecycle & training fundamentals', [
            newTopic('Pretraining and next-token prediction'),
            'Instruction tuning',
            newTopic('Preference tuning and alignment tuning'),
            newTopic('Fine-tuning strategies (full, PEFT, LoRA, QLoRA)'),
            newTopic('Inference-time adaptation vs weight updates'),
            newTopic('Distillation as capability transfer'),
            newTopic('Quantization (GPTQ, AWQ, GGUF)'),
            newTopic('Data quality, contamination, and benchmark integrity')
          ], {
            prerequisites: ['Core transformer architecture'],
            sourceRefs: [
              { layerTitle: 'Foundation Models', sectionTitle: 'Architecture extensions' },
              { layerTitle: 'Foundation Models', sectionTitle: 'Prompt engineering' },
              { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'Learning & adaptation' }
            ]
          }),
          syntheticSection('Model interaction fundamentals', [
            'Zero-shot prompting',
            'Few-shot prompting',
            'System vs user prompts',
            'Prompt templates',
            newTopic('Role prompting'),
            newTopic('Structured output prompting'),
            newTopic('Greedy decoding vs sampling'),
            newTopic('Temperature'),
            newTopic('Top-k sampling'),
            newTopic('Top-p / nucleus sampling'),
            newTopic('Max tokens and stop sequences'),
            newTopic('Streaming vs non-streaming generation'),
            newTopic('Logprobs and token confidence surfaces')
          ], {
            prerequisites: ['Representation primitives', 'Model lifecycle & training fundamentals'],
            sourceRefs: [
              { layerTitle: 'Foundation Models', sectionTitle: 'Prompt engineering' },
              { layerTitle: 'Foundation Models', sectionTitle: 'Architecture extensions' },
              { layerTitle: 'Reasoning & Intelligence', sectionTitle: 'Meta-cognition' }
            ]
          }),
          copySection('Foundation Models', 'Model families', {
            prerequisites: ['Core transformer architecture', 'Model lifecycle & training fundamentals']
          }),
          copySection('Foundation Models', 'Embedding & retrieval models', {
            prerequisites: ['Representation primitives', 'Model families']
          }),
          copySection('Foundation Models', 'Reasoning & thinking models', {
            prerequisites: ['Model families', 'Model interaction fundamentals']
          }),
          copySection('Foundation Models', 'Multimodal & vision models', {
            prerequisites: ['Model families']
          }),
          copySection('Foundation Models', 'Voice & audio models', {
            prerequisites: ['Model families']
          }),
          copySection('Foundation Models', 'Tool-calling & code models', {
            title: 'Tool-capable & code-specialized models',
            prerequisites: ['Model families', 'Model interaction fundamentals']
          }),
          copySection('Foundation Models', 'Open-weight model ecosystem', {
            prerequisites: ['Model families', 'Model lifecycle & training fundamentals']
          }),
          copySection('Foundation Models', 'Inference optimization', {
            prerequisites: ['Core transformer architecture', 'Model lifecycle & training fundamentals']
          }),
          copySection('Foundation Models', 'Production prompt management', {
            prerequisites: ['Model interaction fundamentals']
          })
        ]
      },
      {
        id: 3,
        kind: 'Cognition',
        scope: 'How models plan, reflect, and decide under uncertainty',
        title: 'Cognition & Control',
        color: '#1D9E75',
        bg: '#E1F5EE',
        sections: [
          copySection('Reasoning & Intelligence', 'Reasoning paradigms', {
            prerequisites: ['Model interaction fundamentals', 'Model families']
          }),
          copySection('Reasoning & Intelligence', 'Planning & control', {
            title: 'Decision-making & planning',
            prerequisites: ['Reasoning paradigms']
          }),
          copySection('Reasoning & Intelligence', 'Reflection & self-improvement', {
            prerequisites: ['Decision-making & planning']
          }),
          copySection('Reasoning & Intelligence', 'Meta-cognition', {
            prerequisites: ['Reasoning paradigms', 'Reflection & self-improvement']
          }),
          copySection('Reasoning & Intelligence', 'Neuro-symbolic AI (advanced / research)', {
            prerequisites: ['Reasoning paradigms', 'Decision-making & planning']
          })
        ]
      },
      {
        id: 4,
        kind: 'State',
        scope: 'How knowledge persists',
        title: 'Memory & Knowledge',
        color: '#378ADD',
        bg: '#E6F1FB',
        sections: [
          copySection('Memory & Knowledge', 'Memory taxonomy', {
            prerequisites: ['Whole-system map', 'Agent/system vocabulary']
          }),
          copySection('Memory & Knowledge', 'Knowledge stores', {
            prerequisites: ['Memory taxonomy']
          }),
          copySection('Memory & Knowledge', 'Chunking & indexing', {
            prerequisites: ['Knowledge stores', 'Embedding & retrieval models']
          }),
          copySection('Memory & Knowledge', 'Retrieval techniques', {
            prerequisites: ['Embedding & retrieval models', 'Knowledge stores', 'Chunking & indexing']
          }),
          copySection('Memory & Knowledge', 'RAG architectures', {
            prerequisites: ['Retrieval techniques', 'Decision-making & planning']
          }),
          copySection('Memory & Knowledge', 'Knowledge quality', {
            prerequisites: ['Retrieval techniques', 'RAG architectures']
          }),
          syntheticSection('Memory operations', [
            newTopic('Read / write memory policies'),
            newTopic('Memory selection policies'),
            newTopic('Memory routing'),
            newTopic('Memory TTL / time decay'),
            newTopic('Conflict resolution across memories'),
            newTopic('Personalized vs shared memory'),
            newTopic('Importance scoring & salience'),
            newTopic('Compaction / summarization policies'),
            newTopic('Archival / forgetting strategies'),
            newTopic('Memory provenance & source lineage'),
            newTopic('Memory permissions & access control')
          ], {
            prerequisites: ['Memory taxonomy', 'Knowledge quality'],
            sourceRefs: [
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Memory taxonomy' },
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Knowledge quality' }
            ]
          })
        ]
      },
      {
        id: 5,
        kind: 'Action',
        scope: 'How a single agent decides, prompts, and acts',
        title: 'Agency & Tool Use',
        color: '#EF9F27',
        bg: '#FAEEDA',
        sections: [
          copySection('Reasoning & Intelligence', 'Agent architectures', {
            prerequisites: ['Reasoning paradigms', 'Decision-making & planning', 'Memory taxonomy'],
            topics: copyTopics('Reasoning & Intelligence', 'Agent architectures', topic => topicText(topic) !== 'Compound AI systems')
          }),
          copySection('Multi-Agent Systems', 'Agent design patterns', {
            prerequisites: ['Agent architectures']
          }),
          syntheticSection('Prompt & interface design', [
            'Meta-prompting',
            'Prompt chaining',
            'Automatic prompt optimization',
            newTopic('Prompt state injection from memory'),
            newTopic('Prompt versioning and change control'),
            newTopic('Prompt boundary design between planner and executor'),
            newTopic('Prompt contracts for parsers and tools'),
            newTopic('System prompt layering across collaborators')
          ], {
            prerequisites: ['Model interaction fundamentals', 'Agent architectures'],
            sourceRefs: [
              { layerTitle: 'Foundation Models', sectionTitle: 'Prompt engineering' },
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Memory taxonomy' },
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Tool interfaces' }
            ]
          }),
          copySection('Agency & Tool Use', 'Interaction patterns', {
            title: 'Interaction patterns & autonomy',
            prerequisites: ['Agent architectures', 'Agent design patterns'],
            topics: copyTopics('Agency & Tool Use', 'Interaction patterns', topic => !validationTopics.includes(topicText(topic)))
          }),
          copySection('Agency & Tool Use', 'Tool interfaces', {
            prerequisites: ['Prompt & interface design', 'Interaction patterns & autonomy']
          }),
          syntheticSection('Control & validation', dedupeTopics([
            ...copyTopics('Agency & Tool Use', 'Interaction patterns', topic => validationTopics.includes(topicText(topic))),
            newTopic('Mandatory vs optional approval gates'),
            newTopic('Schema-driven output validation'),
            newTopic('Tool approval gates vs output approval gates'),
            newTopic('Validation before side effects vs after side effects')
          ]), {
            prerequisites: ['Interaction patterns & autonomy', 'Tool interfaces'],
            sourceRefs: [
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Interaction patterns' },
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Safety mechanisms' }
            ]
          }),
          copySection('Agency & Tool Use', 'Information tools', {
            prerequisites: ['Tool interfaces', 'Memory taxonomy']
          }),
          copySection('Agency & Tool Use', 'Action tools', {
            prerequisites: ['Tool interfaces', 'Information tools']
          }),
          copySection('Agency & Tool Use', 'Meta tooling', {
            prerequisites: ['Tool interfaces', 'Control & validation']
          }),
          copySection('Agency & Tool Use', 'Agentic browsers', {
            prerequisites: ['Action tools', 'Multimodal & vision models']
          })
        ]
      },
      {
        id: 6,
        kind: 'Coordination',
        scope: 'How specialized agents coordinate',
        title: 'Multi-Agent Systems',
        color: '#D4537E',
        bg: '#FBEAF0',
        sections: [
          copySection('Multi-Agent Systems', 'Multi-agent architectures', {
            prerequisites: ['Agent architectures', 'Agent design patterns']
          }),
          copySection('Multi-Agent Systems', 'Coordination & communication', {
            prerequisites: ['Multi-agent architectures'],
            topics: copyTopics('Multi-Agent Systems', 'Coordination & communication', topic => !['Agent protocol standardization', 'Trust & reputation systems'].includes(topicText(topic)))
          }),
          copySection('Multi-Agent Systems', 'Workflow systems', {
            prerequisites: ['Multi-agent architectures', 'Decision-making & planning'],
            topics: copyTopics('Multi-Agent Systems', 'Workflow systems', topic => !workflowRuntimeTopics.includes(topicText(topic)))
          }),
          syntheticSection('Interoperability & standards', dedupeTopics([
            newTopic('Agent protocol standardization'),
            ...copyTopics('Agency & Tool Use', 'Protocol convergence & standards')
          ]), {
            prerequisites: ['Coordination & communication', 'Tool interfaces'],
            sourceRefs: [
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Protocol convergence & standards' },
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Coordination & communication' }
            ]
          }),
          syntheticSection('Incentives & mechanism design (advanced / research)', [
            newTopic('Game-theoretic interactions'),
            newTopic('Mechanism design'),
            newTopic('Trust & reputation systems'),
            newTopic('Reward sharing & credit assignment'),
            newTopic('Cooperative vs competitive agent incentives')
          ], {
            prerequisites: ['Multi-agent architectures', 'Coordination & communication'],
            sourceRefs: [
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Coordination & communication' }
            ]
          }),
          copySection('Multi-Agent Systems', 'Frameworks', {
            prerequisites: ['Workflow systems', 'Interoperability & standards']
          }),
          copySection('Multi-Agent Systems', 'Failure modes at scale', {
            prerequisites: ['Coordination & communication', 'Workflow systems', 'Frameworks']
          })
        ]
      },
      {
        id: 7,
        kind: 'Runtime',
        scope: 'How systems run',
        title: 'Infrastructure & Runtime',
        color: '#888780',
        bg: '#F1EFE8',
        sections: [
          copySection('Infrastructure & Deployment', 'Model infrastructure', {
            prerequisites: ['Model families', 'Inference optimization']
          }),
          copySection('Infrastructure & Deployment', 'Data infrastructure', {
            prerequisites: ['Knowledge stores', 'Retrieval techniques']
          }),
          syntheticSection('Agent runtime & execution', [
            newTopic('Agent runtime environments'),
            newTopic('Execution sandboxes as architecture'),
            newTopic('State persistence models'),
            newTopic('Deterministic vs non-deterministic execution'),
            newTopic('Idempotent task execution'),
            newTopic('Replayability and resumability'),
            newTopic('Event logs / task ledgers'),
            newTopic('Ephemeral vs persistent workers'),
            newTopic('Stateful vs stateless agents'),
            newTopic('Isolation boundaries for agents'),
            newTopic('Checkpointing & recovery'),
            newTopic('Configuration versioning for prompts, tools, and models'),
            newTopic('Long-running agent processes'),
            newTopic('Durable execution (Temporal, Inngest)')
          ], {
            prerequisites: ['Agent architectures', 'Tool interfaces', 'Workflow systems'],
            sourceRefs: [
              { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'System infrastructure' },
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Workflow systems' }
            ]
          }),
          copySection('Infrastructure & Deployment', 'System infrastructure', {
            prerequisites: ['Agent runtime & execution']
          }),
          copySection('Infrastructure & Deployment', 'Scaling & operations', {
            prerequisites: ['System infrastructure', 'Agent runtime & execution']
          }),
          copySection('Infrastructure & Deployment', 'Deployment patterns', {
            prerequisites: ['Scaling & operations']
          }),
          syntheticSection('Training & adaptation', dedupeTopics([
            ...copyTopics('Reasoning & Intelligence', 'Training paradigms for agents'),
            ...copyTopics('Infrastructure & Deployment', 'Learning & adaptation')
          ]), {
            prerequisites: ['Model lifecycle & training fundamentals', 'Agent runtime & execution'],
            sourceRefs: [
              { layerTitle: 'Reasoning & Intelligence', sectionTitle: 'Training paradigms for agents' },
              { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'Learning & adaptation' }
            ]
          }),
          copySection('Infrastructure & Deployment', 'Synthetic data for agents', {
            prerequisites: ['Training & adaptation']
          }),
          copySection('Infrastructure & Deployment', 'Agent FinOps & cost economics', {
            prerequisites: ['Model infrastructure', 'Agent runtime & execution']
          }),
          copySection('Infrastructure & Deployment', 'MLOps & LLMOps', {
            prerequisites: ['Model infrastructure', 'Agent runtime & execution', 'Training & adaptation']
          }),
          copySection('Infrastructure & Deployment', 'API design for AI services', {
            prerequisites: ['System infrastructure', 'Scaling & operations']
          })
        ]
      },
      {
        id: 8,
        kind: 'Measurement',
        scope: 'How systems are measured',
        title: 'Evaluation & Observability',
        color: '#639922',
        bg: '#EAF3DE',
        sections: [
          copySection('Evaluation, Observability & Applications', 'Evaluation', {
            prerequisites: ['Agent architectures', 'Tool interfaces', 'Agent runtime & execution'],
            topics: dedupeTopics([
              newTopic('Offline evals vs online evals'),
              newTopic('Unit, component, workflow, and system-level evals'),
              newTopic('Golden datasets and reference traces'),
              newTopic('LLM-as-judge caveats'),
              ...copyTopics('Evaluation, Observability & Applications', 'Evaluation'),
              newTopic('Acceptance thresholds and operational SLAs')
            ])
          }),
          copySection('Evaluation, Observability & Applications', 'Observability', {
            prerequisites: ['Evaluation', 'Agent runtime & execution']
          }),
          copySection('Evaluation, Observability & Applications', 'Debugging & testing', {
            prerequisites: ['Evaluation', 'Observability']
          }),
          copySection('Evaluation, Observability & Applications', 'Performance engineering', {
            prerequisites: ['Observability', 'Debugging & testing']
          }),
          copySection('Evaluation, Observability & Applications', 'CI/CD for AI systems', {
            prerequisites: ['Debugging & testing', 'Evaluation']
          }),
          syntheticSection('Specification vs emergence gap', [
            newTopic('Measuring unintended behaviors'),
            newTopic('Alignment drift over time'),
            newTopic('Goal misgeneralization'),
            newTopic('Emergent strategy detection'),
            newTopic('Specification gaming'),
            newTopic('Behavioral drift across model updates'),
            newTopic('Long-horizon failure detection'),
            newTopic('Distribution-shift robustness'),
            newTopic('Human expectation mismatch'),
            newTopic('Objective compliance vs apparent success')
          ], {
            prerequisites: ['Evaluation', 'Observability'],
            sourceRefs: [
              { layerTitle: 'Evaluation, Observability & Applications', sectionTitle: 'Evaluation' },
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Alignment' }
            ]
          })
        ]
      },
      {
        id: 9,
        kind: 'Use Cases',
        scope: 'Where agent systems create value',
        title: 'Applications & Domains',
        color: '#2E8E73',
        bg: '#E7F6F1',
        sections: [
          copySection('Evaluation, Observability & Applications', 'Developer & engineering agents', {
            prerequisites: ['Agent design patterns', 'Evaluation']
          }),
          copySection('Evaluation, Observability & Applications', 'Enterprise & business agents', {
            prerequisites: ['Workflow systems', 'Evaluation']
          }),
          copySection('Evaluation, Observability & Applications', 'Research & domain agents', {
            prerequisites: ['Evaluation']
          }),
          copySection('Evaluation, Observability & Applications', 'Consumer & personal agents', {
            prerequisites: ['Multimodal & vision models', 'Evaluation']
          }),
          copySection('Evaluation, Observability & Applications', 'Physical AI & embodied agents (advanced / research)', {
            prerequisites: ['Multimodal & vision models', 'Action tools', 'Evaluation']
          }),
          copySection('Evaluation, Observability & Applications', 'Human-agent teaming', {
            prerequisites: ['Evaluation', 'Interaction patterns & autonomy']
          })
        ]
      },
      {
        id: 10,
        kind: 'Constraints',
        scope: 'How systems stay bounded after the implementation picture is clear',
        title: 'Safety, Security & Governance',
        color: '#E24B4A',
        bg: '#FCEBEB',
        sections: [
          syntheticSection('Agent-specific threats', dedupeTopics([
            ...copyTopics('Safety, Security & Governance', 'Agent-specific threats'),
            newTopic('Token draining attacks'),
            newTopic('Cost explosion loops'),
            newTopic('Tool abuse causing financial damage'),
            newTopic('Budget exhaustion attacks')
          ]), {
            prerequisites: ['Tool interfaces', 'Agent runtime & execution', 'Multi-agent architectures'],
            sourceRefs: [
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Agent-specific threats' }
            ]
          }),
          copySection('Safety, Security & Governance', 'Safety mechanisms', {
            prerequisites: ['Agent-specific threats', 'Control & validation']
          }),
          syntheticSection('Identity, trust & authorization', dedupeTopics([
            ...copyTopics('Agency & Tool Use', 'Agent identity & authentication'),
            ...copyTopics('Safety, Security & Governance', 'Governance & compliance', topic => governanceIdentityTopics.includes(topicText(topic)))
          ]), {
            prerequisites: ['Safety mechanisms', 'Interoperability & standards'],
            sourceRefs: [
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Agent identity & authentication' },
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Governance & compliance' }
            ]
          }),
          copySection('Safety, Security & Governance', 'Alignment', {
            prerequisites: ['Evaluation', 'Specification vs emergence gap']
          }),
          copySection('Safety, Security & Governance', 'Privacy & data protection', {
            prerequisites: ['Memory taxonomy', 'Knowledge stores', 'Safety mechanisms']
          }),
          copySection('Safety, Security & Governance', 'Governance & compliance', {
            prerequisites: ['Safety mechanisms', 'Identity, trust & authorization', 'Alignment', 'Privacy & data protection'],
            topics: copyTopics('Safety, Security & Governance', 'Governance & compliance', topic => !governanceIdentityTopics.includes(topicText(topic)))
          })
        ]
      }
    ];
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  function createTopicId(layer, section, topic, layerIndex, sectionIndex, topicIndex) {
    return [
      String(layer.id).padStart(2, '0'),
      slugify(layer.title),
      slugify(section.title),
      slugify(topic.text),
      layerIndex,
      sectionIndex,
      topicIndex
    ].join('--');
  }

  function hydrateStructuredData(layers) {
    return layers.map((layer, layerIndex) => ({
      ...layer,
      layerIndex,
      anchorId: `l-${layerIndex}`,
      sections: layer.sections.map((section, sectionIndex) => {
        const sectionPrerequisites = dedupeStrings(section.prerequisites || []);

        return {
          ...section,
          prerequisites: sectionPrerequisites,
          sectionIndex,
          anchorId: `sec-${layerIndex}-${sectionIndex}`,
          sourceRefs: (section.sourceRefs || []).map(ref => ({ ...ref })),
          topics: section.topics.map((topic, topicIndex) => {
            const normalized = cloneTopic(topic);
            const id = createTopicId(layer, section, normalized, layerIndex, sectionIndex, topicIndex);
            const prerequisites = dedupeStrings([
              ...sectionPrerequisites,
              ...(normalized.prerequisites || []),
              ...section.topics.slice(Math.max(0, topicIndex - 2), topicIndex).map(topicText)
            ]).filter(prerequisite => prerequisite !== normalized.text).slice(0, 4);

            return {
              ...normalized,
              prerequisites,
              id,
              anchorId: `topic-${id}`,
              layerIndex,
              sectionIndex,
              topicIndex
            };
          })
        };
      })
    }));
  }

  const data = hydrateStructuredData(buildStructuredData());
  const TOPIC_STATUS_STORAGE_KEY = 'ai-agent-syllabus-topic-status-v1';
  const TOPIC_RESOURCE_STORAGE_KEY = 'ai-agent-syllabus-topic-resources-v1';
  const TOPIC_STATUS_ORDER = ['default', 'need-visit', 'learning', 'done'];
  const TOPIC_STATUS_DEFS = [
    { key: 'default', label: 'Default', shortLabel: 'Default', description: 'Not yet classified' },
    { key: 'need-visit', label: 'Need to visit', shortLabel: 'Need to visit', description: 'Planned for a later pass' },
    { key: 'learning', label: 'Learning', shortLabel: 'Learning', description: 'Currently studying' },
    { key: 'done', label: 'Done', shortLabel: 'Done', description: 'Finished or comfortable' }
  ];

  function sanitizeTopicStatus(status) {
    return TOPIC_STATUS_ORDER.includes(status) ? status : 'default';
  }

  function readStoredTopicStatuses() {
    try {
      const stored = window.localStorage.getItem(TOPIC_STATUS_STORAGE_KEY);
      if (!stored) {
        return {};
      }

      const parsed = JSON.parse(stored);
      if (!parsed || typeof parsed !== 'object') {
        return {};
      }

      return Object.fromEntries(
        Object.entries(parsed)
          .map(([topicId, status]) => [topicId, sanitizeTopicStatus(status)])
          .filter(([, status]) => status !== 'default')
      );
    } catch {
      return {};
    }
  }

  let topicStatuses = readStoredTopicStatuses();
  const topicStatusListeners = new Set();

  function writeStoredTopicStatuses() {
    try {
      window.localStorage.setItem(TOPIC_STATUS_STORAGE_KEY, JSON.stringify(topicStatuses));
    } catch {
      // Ignore storage write failures and continue with in-memory state.
    }
  }

  function getTopicStatusMeta(status) {
    return TOPIC_STATUS_DEFS.find(item => item.key === sanitizeTopicStatus(status)) || TOPIC_STATUS_DEFS[0];
  }

  function getTopicStatus(topicId) {
    return sanitizeTopicStatus(topicStatuses[topicId]);
  }

  function getNextTopicStatus(status) {
    const currentIndex = TOPIC_STATUS_ORDER.indexOf(sanitizeTopicStatus(status));
    return TOPIC_STATUS_ORDER[(currentIndex + 1) % TOPIC_STATUS_ORDER.length];
  }

  function syncTopicStatusUI(scope = document) {
    if (!scope || !scope.querySelectorAll) {
      return;
    }

    scope.querySelectorAll('.topic-token[data-topic-id]').forEach(token => {
      const status = getTopicStatus(token.dataset.topicId);
      const meta = getTopicStatusMeta(status);
      token.dataset.status = status;
      token.title = `${meta.label}: ${meta.description}`;
    });

    scope.querySelectorAll('.topic-status-control[data-topic-id]').forEach(button => {
      const status = getTopicStatus(button.dataset.topicId);
      const meta = getTopicStatusMeta(status);
      const nextMeta = getTopicStatusMeta(getNextTopicStatus(status));
      button.dataset.status = status;
      button.setAttribute('aria-label', `${meta.label}. Click to change status to ${nextMeta.label}.`);
      button.title = `${meta.label}. Click to change status to ${nextMeta.label}.`;
    });

    scope.querySelectorAll('.status-choice[data-topic-id]').forEach(button => {
      const currentStatus = getTopicStatus(button.dataset.topicId);
      const isActive = currentStatus === button.dataset.status;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function notifyTopicStatusListeners(changedTopicId) {
    if (typeof document !== 'undefined') {
      syncTopicStatusUI(document);
    }

    const snapshot = { ...topicStatuses };
    topicStatusListeners.forEach(listener => {
      listener({ changedTopicId, statuses: snapshot });
    });
  }

  function setTopicStatus(topicId, status) {
    if (!topicId) {
      return 'default';
    }

    const nextStatus = sanitizeTopicStatus(status);
    if (nextStatus === 'default') {
      delete topicStatuses[topicId];
    } else {
      topicStatuses[topicId] = nextStatus;
    }

    writeStoredTopicStatuses();
    notifyTopicStatusListeners(topicId);
    return nextStatus;
  }

  function cycleTopicStatus(topicId) {
    return setTopicStatus(topicId, getNextTopicStatus(getTopicStatus(topicId)));
  }

  function subscribeToTopicStatusChanges(listener) {
    topicStatusListeners.add(listener);
    return () => topicStatusListeners.delete(listener);
  }

  function normalizeResourceUrl(url) {
    const value = String(url || '').trim();
    if (!value) {
      return null;
    }

    const normalized = /^https?:\/\//i.test(value) ? value : `https://${value}`;

    try {
      const parsed = new URL(normalized);
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        return null;
      }
      return parsed.toString();
    } catch {
      return null;
    }
  }

  function sanitizeTopicResource(resource) {
    if (!resource || typeof resource !== 'object') {
      return null;
    }

    const url = normalizeResourceUrl(resource.url);
    const label = String(resource.label || '').trim();
    if (!url || !label) {
      return null;
    }

    return {
      id: String(resource.id || `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`),
      label,
      url
    };
  }

  function cloneTopicResources(resources = []) {
    return resources.map(resource => ({ ...resource }));
  }

  function readStoredTopicResources() {
    try {
      const stored = window.localStorage.getItem(TOPIC_RESOURCE_STORAGE_KEY);
      if (!stored) {
        return {};
      }

      const parsed = JSON.parse(stored);
      if (!parsed || typeof parsed !== 'object') {
        return {};
      }

      return Object.fromEntries(
        Object.entries(parsed)
          .map(([topicId, resources]) => [
            topicId,
            Array.isArray(resources)
              ? resources.map(sanitizeTopicResource).filter(Boolean)
              : []
          ])
          .filter(([, resources]) => resources.length)
      );
    } catch {
      return {};
    }
  }

  let topicResources = readStoredTopicResources();
  const topicResourceListeners = new Set();

  function writeStoredTopicResources() {
    try {
      window.localStorage.setItem(TOPIC_RESOURCE_STORAGE_KEY, JSON.stringify(topicResources));
    } catch {
      // Ignore storage write failures and continue with in-memory state.
    }
  }

  function getTopicResources(topicId) {
    return cloneTopicResources(topicResources[topicId] || []);
  }

  function notifyTopicResourceListeners(changedTopicId) {
    const snapshot = Object.fromEntries(
      Object.entries(topicResources).map(([topicId, resources]) => [topicId, cloneTopicResources(resources)])
    );

    topicResourceListeners.forEach(listener => {
      listener({
        changedTopicId,
        resources: getTopicResources(changedTopicId),
        allResources: snapshot
      });
    });
  }

  function addTopicResource(topicId, label, url) {
    if (!topicId) {
      return null;
    }

    const normalizedUrl = normalizeResourceUrl(url);
    const normalizedLabel = String(label || '').trim();
    if (!normalizedUrl || !normalizedLabel) {
      return null;
    }

    const existing = getTopicResources(topicId);
    const duplicate = existing.find(resource => resource.url === normalizedUrl);
    if (duplicate) {
      return duplicate;
    }

    const nextResource = {
      id: `resource_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
      label: normalizedLabel,
      url: normalizedUrl
    };

    topicResources[topicId] = [...existing, nextResource];
    writeStoredTopicResources();
    notifyTopicResourceListeners(topicId);
    return nextResource;
  }

  function removeTopicResource(topicId, resourceId) {
    if (!topicId || !resourceId) {
      return false;
    }

    const existing = getTopicResources(topicId);
    const nextResources = existing.filter(resource => resource.id !== resourceId);
    if (nextResources.length === existing.length) {
      return false;
    }

    if (nextResources.length) {
      topicResources[topicId] = nextResources;
    } else {
      delete topicResources[topicId];
    }

    writeStoredTopicResources();
    notifyTopicResourceListeners(topicId);
    return true;
  }

  function subscribeToTopicResourceChanges(listener) {
    topicResourceListeners.add(listener);
    return () => topicResourceListeners.delete(listener);
  }

  function hexToRgba(hex, alpha) {
    const normalized = String(hex || '').replace('#', '').trim();
    const short = normalized.length === 3;
    const expanded = short
      ? normalized.split('').map(char => `${char}${char}`).join('')
      : normalized;

    if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
      return `rgba(17, 17, 17, ${alpha})`;
    }

    const int = Number.parseInt(expanded, 16);
    const red = (int >> 16) & 255;
    const green = (int >> 8) & 255;
    const blue = int & 255;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function applyPageTheme(theme = {}) {
    if (typeof document === 'undefined') {
      return;
    }

    const color = theme.color || '#111111';
    const bg = theme.bg || '#F3F4F6';
    document.body.style.setProperty('--page-theme', color);
    document.body.style.setProperty('--page-tint', bg);
    document.body.style.setProperty('--page-accent', hexToRgba(color, 0.09));
    document.body.style.setProperty('--theme-line', hexToRgba(color, 0.18));
  }

  const topicEntries = [];
  const topicEntryMap = new Map();
  const topicEntryTextMap = new Map();
  const sectionEntryMap = new Map();

  data.forEach((layer, layerIndex) => {
    layer.sections.forEach((section, sectionIndex) => {
      const key = `${layerIndex}:${sectionIndex}`;
      const entries = section.topics.map((topic, topicIndex) => {
        const entry = {
          id: topic.id,
          text: topic.text,
          isNew: topic.isNew,
          topic,
          layer,
          section,
          layerIndex,
          sectionIndex,
          topicIndex
        };
        topicEntries.push(entry);
        topicEntryMap.set(entry.id, entry);
        if (!topicEntryTextMap.has(entry.text)) {
          topicEntryTextMap.set(entry.text, entry);
        }
        return entry;
      });
      sectionEntryMap.set(key, entries);
    });
  });

  const allTopicIds = topicEntries.map(entry => entry.id);

  function getTopicStatusCounts(topicIds = allTopicIds) {
    return TOPIC_STATUS_ORDER.map(status => ({
      status,
      count: topicIds.reduce((total, topicId) => total + (getTopicStatus(topicId) === status ? 1 : 0), 0)
    }));
  }

  function getStats(layers) {
    return layers.reduce((stats, layer) => {
      stats.layers += 1;
      stats.sections += layer.sections.length;
      stats.topics += layer.sections.reduce((total, section) => total + section.topics.length, 0);
      return stats;
    }, { layers: 0, sections: 0, topics: 0 });
  }

  function getSectionEntries(layerIndex, sectionIndex) {
    return sectionEntryMap.get(`${layerIndex}:${sectionIndex}`) || [];
  }

  function getTopicEntryById(topicId) {
    return topicEntryMap.get(topicId) || null;
  }

  function getTopicEntryByText(text) {
    return topicEntryTextMap.get(text) || null;
  }

  function getTopicHref(topicId) {
    return `topic.html?topic=${encodeURIComponent(topicId)}`;
  }

  function getIndexAnchorHref(topicId) {
    return `index.html#topic-${topicId}`;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getRenderablePrerequisites(prerequisites = []) {
    return dedupeStrings(prerequisites).slice(0, 4).map(text => {
      const entry = getTopicEntryByText(text);
      return {
        text,
        href: entry ? getTopicHref(entry.id) : null,
        topicId: entry ? entry.id : null
      };
    });
  }

  function getRenderableTopic(topic) {
    if (typeof topic === 'string') {
      return {
        text: topic,
        isNew: false,
        href: null,
        anchorId: null,
        current: false,
        topicId: null,
        status: 'default',
        prerequisites: [],
        prerequisiteNote: ''
      };
    }

    const topicId = topic.id || topic.topicId || null;
    const prerequisites = getRenderablePrerequisites(topic.prerequisites || []);
    return {
      text: topic.text,
      isNew: !!topic.isNew,
      href: topic.href || (topic.id ? getTopicHref(topic.id) : null),
      anchorId: topic.anchorId || (topic.id ? `topic-${topic.id}` : null),
      current: !!topic.current,
      topicId,
      status: topicId ? getTopicStatus(topicId) : 'default',
      prerequisites,
      prerequisiteNote: topicId && !prerequisites.length ? 'Entry point for this section' : ''
    };
  }

  function getRenderableMetaPair(renderable) {
    if (!renderable || renderable.href || renderable.prerequisites.length || renderable.prerequisiteNote) {
      return null;
    }

    const match = renderable.text.match(/^([^:]{2,48})\s*:\s+(.+)$/);
    if (!match) {
      return null;
    }

    return {
      label: match[1].trim(),
      value: match[2].trim()
    };
  }

  function renderTopicToken(renderable, options = {}) {
    const wrapper = document.createElement('div');
    wrapper.className = 'topic-token';
    wrapper.dataset.text = renderable.text.toLowerCase();
    wrapper.dataset.prereqs = renderable.prerequisites.map(item => item.text.toLowerCase()).join(' ');
    wrapper.dataset.status = renderable.status;
    if (renderable.topicId) {
      wrapper.dataset.topicId = renderable.topicId;
    }
    if (options.anchorIds && renderable.anchorId) {
      wrapper.id = renderable.anchorId;
    }

    const head = document.createElement('div');
    head.className = 'topic-head';
    const node = renderable.href ? document.createElement('a') : document.createElement('span');
    node.className = `${renderable.isNew ? 't-new' : 't'}${renderable.href ? ' t-link' : ''}${renderable.current ? ' t-current' : ''}`;
    if (renderable.href) {
      node.href = renderable.href;
    }

    if (renderable.isNew) {
      const dot = document.createElement('span');
      dot.className = 't-new-dot';
      node.appendChild(dot);
      node.appendChild(document.createTextNode(renderable.text));
    } else {
      node.textContent = renderable.text;
    }

    head.appendChild(node);

    if (renderable.topicId && options.showStatusControls !== false) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'topic-status-control';
      button.dataset.topicId = renderable.topicId;
      button.dataset.status = renderable.status;
      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        cycleTopicStatus(renderable.topicId);
      });
      head.appendChild(button);
    }

    wrapper.appendChild(head);

    if (options.showPrerequisites !== false && (renderable.prerequisites.length || renderable.prerequisiteNote)) {
      const prerequisites = document.createElement('div');
      prerequisites.className = 'topic-prereqs';

      const label = document.createElement('span');
      label.className = 'topic-prereq-label';
      label.textContent = 'Prereqs';
      prerequisites.appendChild(label);

      if (renderable.prerequisites.length) {
        renderable.prerequisites.forEach(item => {
          const prerequisiteNode = item.href ? document.createElement('a') : document.createElement('span');
          prerequisiteNode.className = item.href ? 'topic-prereq topic-prereq-link' : 'topic-prereq';
          prerequisiteNode.textContent = item.text;
          if (item.href) {
            prerequisiteNode.href = item.href;
          }
          prerequisites.appendChild(prerequisiteNode);
        });
      } else if (renderable.prerequisiteNote) {
        const note = document.createElement('span');
        note.className = 'topic-prereq-empty';
        note.textContent = renderable.prerequisiteNote;
        prerequisites.appendChild(note);
      }

      wrapper.appendChild(prerequisites);
    }

    return wrapper;
  }

  function renderMetaTable(metaRows) {
    const table = document.createElement('table');
    table.className = 'meta-table';

    const body = document.createElement('tbody');
    metaRows.forEach(rowItem => {
      const row = document.createElement('tr');
      row.className = 'meta-row';
      row.dataset.text = `${rowItem.metaPair.label} ${rowItem.metaPair.value}`.toLowerCase();

      const labelCell = document.createElement('th');
      labelCell.scope = 'row';
      labelCell.textContent = rowItem.metaPair.label;

      const valueCell = document.createElement('td');
      valueCell.textContent = rowItem.metaPair.value;

      row.appendChild(labelCell);
      row.appendChild(valueCell);
      body.appendChild(row);
    });

    table.appendChild(body);
    return table;
  }

  function setLayerOpenState(layerEl, isOpen) {
    layerEl.classList.toggle('open', isOpen);
    const control = layerEl.querySelector('.l-h');
    if (control) {
      control.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }

  function setSectionOpenState(sectionEl, isOpen) {
    sectionEl.classList.toggle('open', isOpen);
    const control = sectionEl.querySelector('.sec-h');
    if (control) {
      control.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }

  function renderLayerTree(root, layers, options = {}) {
    root.innerHTML = '';

    layers.forEach((layer, layerIndex) => {
      const totalTopics = layer.sections.reduce((count, section) => count + section.topics.length, 0);
      const shouldDefaultOpenLayer = options.openAll || (options.openFirstLayer !== false && layerIndex === 0);
      const layerEl = document.createElement('div');
      layerEl.className = 'l';
      layerEl.id = layer.anchorId || `l-${layer.id}`;
      layerEl.style.setProperty('--layer-color', layer.color || '#111111');
      layerEl.style.setProperty('--layer-bg', layer.bg || '#FFFFFF');
      layerEl.style.setProperty('--layer-shadow', hexToRgba(layer.color || '#111111', 0.08));
      layerEl.dataset.layerTitle = (layer.title || '').toLowerCase();
      layerEl.dataset.layerScope = (layer.scope || '').toLowerCase();
      layerEl.dataset.layerKind = (layer.kind || '').toLowerCase();
      layerEl.dataset.defaultOpen = shouldDefaultOpenLayer ? 'true' : 'false';

      if (shouldDefaultOpenLayer) {
        setLayerOpenState(layerEl, true);
      }

      const layerHeader = document.createElement('button');
      layerHeader.type = 'button';
      layerHeader.className = 'l-h';
      layerHeader.setAttribute('aria-expanded', shouldDefaultOpenLayer ? 'true' : 'false');
      layerHeader.innerHTML = `<span class="l-accent" style="background:${escapeHtml(layer.color || '#111')}"></span>
        <span class="l-n">${escapeHtml(String(layer.id).padStart(2, '0'))}</span>
        <span class="l-copy">
          <span class="l-k">${escapeHtml(layer.kind || 'Layer')}</span>
          <span class="l-t">${escapeHtml(layer.title || '')}</span>
          <span class="l-s">${escapeHtml(layer.scope || '')}</span>
        </span>
        <span class="l-meta">${escapeHtml(String(layer.sections.length))} sec · ${escapeHtml(String(totalTopics))} topics</span>
        <span class="l-arrow">▶</span>`;
      layerHeader.addEventListener('click', () => {
        setLayerOpenState(layerEl, !layerEl.classList.contains('open'));
      });
      layerEl.appendChild(layerHeader);

      const layerBody = document.createElement('div');
      layerBody.className = 'l-b';
      layerBody.id = `${layerEl.id}-body`;
      layerHeader.setAttribute('aria-controls', layerBody.id);
      const layerInner = document.createElement('div');
      layerInner.className = 'l-inner';

      layer.sections.forEach((section, sectionIndex) => {
        const shouldDefaultOpenSection = options.openAll || (options.openFirstLayer !== false && layerIndex === 0);
        const sectionEl = document.createElement('div');
        sectionEl.className = 'sec';
        sectionEl.id = section.anchorId;
        sectionEl.dataset.sectionTitle = (section.title || '').toLowerCase();
        sectionEl.dataset.defaultOpen = shouldDefaultOpenSection ? 'true' : 'false';

        if (shouldDefaultOpenSection) {
          setSectionOpenState(sectionEl, true);
        }

        const sectionHeader = document.createElement('button');
        sectionHeader.type = 'button';
        sectionHeader.className = 'sec-h';
        sectionHeader.setAttribute('aria-expanded', shouldDefaultOpenSection ? 'true' : 'false');
        sectionHeader.innerHTML = `<span class="sec-arrow">▶</span>
          <span class="sec-t">${escapeHtml(section.title || '')}</span>
          <span class="sec-c">${escapeHtml(String(section.topics.length))}</span>`;
        sectionHeader.addEventListener('click', event => {
          event.stopPropagation();
          setSectionOpenState(sectionEl, !sectionEl.classList.contains('open'));
        });
        sectionEl.appendChild(sectionHeader);

        const sectionBody = document.createElement('div');
        sectionBody.className = 'sec-b';
        sectionBody.id = `${section.anchorId}-body`;
        sectionHeader.setAttribute('aria-controls', sectionBody.id);
        const sectionInner = document.createElement('div');
        sectionInner.className = 'sec-inner';
        const renderables = section.topics.map(getRenderableTopic);
        const metaRows = renderables
          .map(renderable => ({ renderable, metaPair: getRenderableMetaPair(renderable) }))
          .filter(item => item.metaPair);
        const useMetaTable = metaRows.length >= 2;

        if (useMetaTable) {
          sectionInner.appendChild(renderMetaTable(metaRows));
        }

        const topicRenderables = useMetaTable
          ? renderables.filter(renderable => !getRenderableMetaPair(renderable))
          : renderables;

        if (topicRenderables.length) {
          const topicsEl = document.createElement('div');
          topicsEl.className = 'topics';

          topicRenderables.forEach(renderable => {
            topicsEl.appendChild(renderTopicToken(renderable, options));
          });

          sectionInner.appendChild(topicsEl);
        }

        sectionBody.appendChild(sectionInner);
        sectionEl.appendChild(sectionBody);
        layerInner.appendChild(sectionEl);
      });

      layerBody.appendChild(layerInner);
      layerEl.appendChild(layerBody);
      root.appendChild(layerEl);
    });

    syncTopicStatusUI(root.ownerDocument || document);
  }

  function filterLayerTree(root, query) {
    const value = query.toLowerCase().trim();

    root.querySelectorAll('.l').forEach(layerEl => {
      const layerTitle = layerEl.dataset.layerTitle || '';
      const layerScope = layerEl.dataset.layerScope || '';
      const layerKind = layerEl.dataset.layerKind || '';
      let layerHit = false;

      layerEl.querySelectorAll('.sec').forEach(sectionEl => {
        const sectionTitle = sectionEl.dataset.sectionTitle || '';
        const titleHit = !value || sectionTitle.includes(value) || layerTitle.includes(value) || layerScope.includes(value) || layerKind.includes(value);
        let sectionHit = false;

        sectionEl.querySelectorAll('.topic-token, .meta-row').forEach(itemEl => {
          const text = itemEl.dataset.text || '';
          const prereqs = itemEl.dataset.prereqs || '';
          const hit = !value || titleHit || text.includes(value) || prereqs.includes(value);
          itemEl.classList.toggle('faded', !hit && !!value);
          if (hit) {
            sectionHit = true;
          }
        });

        sectionEl.classList.toggle('faded', !sectionHit && !!value);
        if (value) {
          setSectionOpenState(sectionEl, sectionHit);
        } else {
          setSectionOpenState(sectionEl, sectionEl.dataset.defaultOpen === 'true');
        }

        if (sectionHit) {
          layerHit = true;
        }
      });

      layerEl.classList.toggle('faded', !layerHit && !!value);
      if (value) {
        setLayerOpenState(layerEl, layerHit);
      } else {
        setLayerOpenState(layerEl, layerEl.dataset.defaultOpen === 'true');
      }
    });
  }

  function focusTreeTarget(targetId) {
    if (!targetId) {
      return false;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      return false;
    }

    const section = target.closest('.sec');
    const layer = target.closest('.l');
    if (layer) {
      setLayerOpenState(layer, true);
    }
    if (section) {
      setSectionOpenState(section, true);
    }

    target.scrollIntoView({ block: 'center' });
    return true;
  }

  function applyHashFocus() {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, '').trim());
    if (!hash) {
      return;
    }
    focusTreeTarget(hash);
  }

  function wireHashFocus() {
    window.addEventListener('hashchange', applyHashFocus);
    requestAnimationFrame(applyHashFocus);
  }

  function layersToMarkdown(title, layers, summaryLines = []) {
    let md = `# ${title}\n\n`;

    summaryLines.forEach(line => {
      md += `> ${line}\n`;
    });

    if (summaryLines.length) {
      md += '\n';
    }

    layers.forEach(layer => {
      const layerHeading = typeof layer.id === 'number' ? `${layer.id}. ${layer.title}` : layer.title;
      md += `## ${layerHeading}\n\n`;
      if (layer.kind || layer.scope) {
        md += `> ${[layer.kind, layer.scope].filter(Boolean).join(' · ')}\n\n`;
      }

      layer.sections.forEach(section => {
        md += `### ${section.title}\n\n`;
        if (section.prerequisites && section.prerequisites.length) {
          md += `> Prerequisites: ${section.prerequisites.join(' · ')}\n\n`;
        }
        section.topics.forEach(topic => {
          const renderable = getRenderableTopic(topic);
          md += renderable.href
            ? `- [${renderable.text}](${renderable.href})${renderable.isNew ? ' *(new)*' : ''}\n`
            : `- ${renderable.text}${renderable.isNew ? ' *(new)*' : ''}\n`;
          if (renderable.prerequisites.length) {
            md += `  - Prerequisites: ${renderable.prerequisites.map(item => item.text).join(' · ')}\n`;
          }
        });
        md += '\n';
      });
    });

    return md;
  }

  function downloadMarkdown(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function renderStatusLegend(container, options = {}) {
    if (!container) {
      return;
    }

    const noteText = options.noteText || 'Click the status marker beside any topic to cycle its learning status.';
    const counts = getTopicStatusCounts(options.topicIds || allTopicIds);
    container.innerHTML = '';

    const note = document.createElement('div');
    note.className = 'status-note';
    note.textContent = noteText;
    container.appendChild(note);

    const items = document.createElement('div');
    items.className = 'status-items';

    counts.forEach(item => {
      const meta = getTopicStatusMeta(item.status);
      const pill = document.createElement('div');
      pill.className = 'status-item';
      pill.dataset.status = item.status;
      pill.innerHTML = `<span class="status-swatch"></span><span class="status-label">${escapeHtml(meta.shortLabel)}</span><span class="status-count">${escapeHtml(String(item.count))}</span>`;
      items.appendChild(pill);
    });

    container.appendChild(items);
  }

  function renderTopicStatusPicker(container, topicId) {
    if (!container || !topicId) {
      return;
    }

    container.innerHTML = '';
    const currentStatus = getTopicStatus(topicId);

    const label = document.createElement('div');
    label.className = 'status-picker-label';
    label.textContent = 'Current topic status';
    container.appendChild(label);

    const picker = document.createElement('div');
    picker.className = 'status-picker';

    TOPIC_STATUS_DEFS.forEach(meta => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'status-choice';
      button.dataset.topicId = topicId;
      button.dataset.status = meta.key;
      button.innerHTML = `<span class="status-swatch"></span><span>${escapeHtml(meta.label)}</span>`;
      button.classList.toggle('is-active', currentStatus === meta.key);
      button.setAttribute('aria-pressed', currentStatus === meta.key ? 'true' : 'false');
      button.addEventListener('click', () => {
        setTopicStatus(topicId, meta.key);
      });
      picker.appendChild(button);
    });

    container.appendChild(picker);
    syncTopicStatusUI(container.ownerDocument || document);
  }

  const stopWords = new Set([
    'and', 'the', 'for', 'with', 'from', 'into', 'using', 'use', 'agent', 'agents', 'model', 'models', 'system', 'systems',
    'how', 'what', 'why', 'this', 'that', 'your', 'their', 'into', 'onto', 'when', 'where', 'which', 'within', 'under',
    'over', 'after', 'before', 'between', 'across', 'style', 'mode', 'modes', 'data', 'level', 'levels'
  ]);

  function normalizeCompareText(text) {
    return text
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\([^)]*\)/g, ' ')
      .replace(/[^a-z0-9\s]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function tokenize(text) {
    return normalizeCompareText(text)
      .split(' ')
      .filter(token => token.length > 2 && !stopWords.has(token));
  }

  function uniqueStrings(values) {
    return Array.from(new Set(values.filter(Boolean)));
  }

  function uniqueEntries(entries, limit) {
    const seen = new Set();
    const result = [];

    entries.forEach(entry => {
      if (!entry || seen.has(entry.id)) {
        return;
      }
      seen.add(entry.id);
      result.push(entry);
    });

    return typeof limit === 'number' ? result.slice(0, limit) : result;
  }

  function formatEntryPath(entry) {
    return `${entry.layer.title} > ${entry.section.title} > ${entry.text}`;
  }

  function joinNaturalLanguage(values) {
    if (!values.length) {
      return '';
    }
    if (values.length === 1) {
      return values[0];
    }
    if (values.length === 2) {
      return `${values[0]} and ${values[1]}`;
    }
    return `${values.slice(0, -1).join(', ')}, and ${values[values.length - 1]}`;
  }

  function entryTopic(entry, options = {}) {
    return {
      text: options.path ? formatEntryPath(entry) : entry.text,
      isNew: entry.isNew,
      href: getTopicHref(entry.id),
      topicId: entry.id,
      prerequisites: entry.topic.prerequisites || [],
      current: !!options.current
    };
  }

  function sectionLinkTopic(layer, section, current = false) {
    return {
      text: current ? `Current section: ${section.title}` : section.title,
      href: `index.html#${section.anchorId}`,
      current
    };
  }

  function getPreviousContextEntries(entry, limit = 8) {
    const result = [];
    const sectionEntries = getSectionEntries(entry.layerIndex, entry.sectionIndex);
    result.push(...sectionEntries.slice(Math.max(0, entry.topicIndex - 4), entry.topicIndex));

    for (let index = entry.sectionIndex - 1; index >= 0 && result.length < limit; index -= 1) {
      const previousEntries = getSectionEntries(entry.layerIndex, index);
      result.unshift(...previousEntries.slice(Math.max(0, previousEntries.length - 2), previousEntries.length));
    }

    return uniqueEntries(result, limit);
  }

  function getNextContextEntries(entry, limit = 8) {
    const result = [];
    const sectionEntries = getSectionEntries(entry.layerIndex, entry.sectionIndex);
    result.push(...sectionEntries.slice(entry.topicIndex + 1, entry.topicIndex + 5));

    for (let index = entry.sectionIndex + 1; index < entry.layer.sections.length && result.length < limit; index += 1) {
      const nextEntries = getSectionEntries(entry.layerIndex, index);
      result.push(...nextEntries.slice(0, 2));
    }

    return uniqueEntries(result, limit);
  }

  function scoreEntryRelation(target, candidate) {
    if (!candidate || candidate.id === target.id) {
      return -1;
    }

    const targetNorm = normalizeCompareText(target.text);
    const candidateNorm = normalizeCompareText(candidate.text);
    const targetTokens = tokenize(`${target.text} ${target.section.title} ${target.layer.title}`);
    const candidateTokens = tokenize(`${candidate.text} ${candidate.section.title} ${candidate.layer.title}`);
    const overlap = targetTokens.filter(token => candidateTokens.includes(token));

    let score = 0;
    if (targetNorm && candidateNorm && targetNorm === candidateNorm) {
      score += 100;
    }

    score += overlap.length * 8;

    if (candidate.layerIndex === target.layerIndex) {
      score += 3;
    }

    if (candidate.sectionIndex === target.sectionIndex) {
      score += 5;
    }

    if (normalizeCompareText(candidate.section.title) === normalizeCompareText(target.section.title)) {
      score += 2;
    }

    return score;
  }

  function getRelatedEntries(target, options = {}) {
    const limit = options.limit || 12;
    const minScore = options.minScore == null ? 6 : options.minScore;

    return topicEntries
      .map(candidate => ({ entry: candidate, score: scoreEntryRelation(target, candidate) }))
      .filter(item => item.score >= minScore)
      .filter(item => !options.excludeSameSection || item.entry.sectionIndex !== target.sectionIndex || item.entry.layerIndex !== target.layerIndex)
      .filter(item => !options.layerTitles || options.layerTitles.includes(item.entry.layer.title))
      .sort((a, b) => b.score - a.score || a.entry.text.localeCompare(b.entry.text))
      .map(item => item.entry)
      .slice(0, limit);
  }

  function pickEntriesByRefs(refs, totalLimit = 8, perSection = 2) {
    const picked = [];

    refs.forEach(ref => {
      const layer = data.find(item => item.title === ref.layerTitle);
      if (!layer) {
        return;
      }

      ref.sectionTitles.forEach(sectionTitle => {
        const section = layer.sections.find(item => item.title === sectionTitle);
        if (!section) {
          return;
        }

        const entries = getSectionEntries(layer.layerIndex, section.sectionIndex);
        picked.push(...entries.slice(0, perSection));
      });
    });

    return uniqueEntries(picked, totalLimit);
  }

  function findRawOccurrencesByText(text) {
    const matches = [];

    rawData.forEach(layer => {
      layer.sections.forEach(section => {
        section.topics.forEach(topic => {
          if (topicText(topic) === text) {
            matches.push({
              layerTitle: layer.title,
              sectionTitle: section.title
            });
          }
        });
      });
    });

    return matches;
  }

  function buildTopicSummary(entry, siblings, relatedLayerTitles) {
    const siblingNames = siblings.slice(0, 2).map(item => item.text);
    const parts = [`${entry.text} sits in ${entry.layer.title} > ${entry.section.title}.`];

    if (siblingNames.length) {
      parts.push(`Study it alongside ${joinNaturalLanguage(siblingNames)}.`);
    }

    if (relatedLayerTitles.length) {
      parts.push(`Its strongest cross-links land in ${joinNaturalLanguage(relatedLayerTitles)}.`);
    }

    return parts.join(' ');
  }

  const defaultTopicBriefGuide = {
    roleLabel: 'a core concept in the agent stack',
    purpose: 'how an agent represents information, makes decisions, or stays dependable in a larger system',
    used: 'real systems where models, memory, tools, and control logic have to work together',
    unlock: 'a more precise system capability or design lever',
    analogy: 'a mental tool a skilled person uses to frame work before acting',
    withoutCase: 'the system stays more ad hoc and has to lean on broad, fragile defaults',
    withCase: 'the system gains a clearer way to steer behavior, compose parts, and reuse the pattern elsewhere',
    exampleScenario: 'a team turning a promising AI demo into a durable workflow'
  };

  const mentalModelTopicBriefGuide = {
    roleLabel: 'a system-framing concept',
    purpose: 'how the overall agent should be decomposed before you worry about frameworks or prompts',
    used: 'architecture reviews, scoping conversations, and early design decisions about workflow versus autonomy',
    unlock: 'a cleaner picture of what should stay deterministic, what should be model-driven, and where memory or tools belong',
    analogy: 'the mental map a person builds before attempting a complex task',
    withoutCase: 'teams blur together chatbot UX, workflow automation, and real agency',
    withCase: 'teams can choose the right level of autonomy and keep the design simpler',
    exampleScenario: 'a product team deciding whether a task needs a scripted workflow, a single agent, or a coordinated set of agents'
  };

  const modelTopicBriefGuide = {
    roleLabel: 'a model, representation, or inference concept',
    purpose: 'how information is encoded, how a model family behaves, or how generation is shaped at runtime',
    used: 'model selection, structured generation, multimodal input, retrieval, and performance tuning',
    unlock: 'better fit between task, model behavior, latency budget, and output shape',
    analogy: 'the combination of human pattern recognition and the way people switch mental modes for different tasks',
    withoutCase: 'the agent uses blunter model choices or weaker output control than the task really needs',
    withCase: 'the system can match the job to the right modality, model behavior, or serving pattern',
    exampleScenario: 'a team choosing how an agent should read documents, reason, and emit usable output'
  };

  const promptTopicBriefGuide = {
    roleLabel: 'an instruction and interface-design topic',
    purpose: 'how the agent is briefed, constrained, and told what shape of output or behavior is expected',
    used: 'structured prompting, extraction, routing, tool calling, and multi-step workflows that depend on clear instructions',
    unlock: 'more consistent behavior without changing model weights',
    analogy: 'the way a human gives a crisp brief, examples, and constraints before delegating work',
    withoutCase: 'the model improvises task boundaries, output shape, and tone from ambiguous wording',
    withCase: 'the model receives a clearer contract, so the behavior is easier to predict, compare, and test',
    exampleScenario: 'an extraction or routing agent that must return the same structure every time'
  };

  const reasoningTopicBriefGuide = {
    roleLabel: 'a reasoning and control pattern',
    purpose: 'how the agent plans, reflects, allocates effort, and chooses its next move under uncertainty',
    used: 'multi-step tasks, planning loops, self-correction, and hard decisions that cannot be solved with one reply',
    unlock: 'more deliberate behavior instead of purely reactive next-token behavior',
    analogy: 'executive function: breaking a problem down, checking progress, and changing course when something looks off',
    withoutCase: 'the agent reacts locally, loses the thread of the task, or stops too early',
    withCase: 'the agent can decompose work, inspect its own progress, and take better next actions',
    exampleScenario: 'a research or coding agent that has to plan, verify, and recover from partial failure'
  };

  const retrievalTopicBriefGuide = {
    roleLabel: 'a grounding and retrieval topic',
    purpose: 'how the agent finds, filters, stores, and injects external knowledge at the moment of need',
    used: 'enterprise search, support copilots, research agents, memory systems, and document-grounded workflows',
    unlock: 'access to fresher, narrower, and better-sourced knowledge than the base model can hold in the prompt alone',
    analogy: 'remembering where knowledge lives and pulling the right note or memory when the task calls for it',
    withoutCase: 'the agent guesses from stale memory or shoves too much irrelevant context into the prompt',
    withCase: 'the system can fetch better evidence, compress it, and answer with stronger grounding',
    exampleScenario: 'a policy assistant that must answer from current documents instead of vague model memory'
  };

  const toolUseTopicBriefGuide = {
    roleLabel: 'an action, interface, or tool-use pattern',
    purpose: 'how the agent leaves pure text generation and interacts with tools, APIs, browsers, or external state',
    used: 'research agents, ops agents, coding agents, browser agents, and any workflow that needs live information or side effects',
    unlock: 'real leverage in the world: the ability to inspect state, call capabilities, and do work instead of only describing it',
    analogy: 'hands, instruments, and procedural know-how working together with thought',
    withoutCase: 'the agent can only talk about the next step instead of executing it or checking the real environment',
    withCase: 'the agent can gather evidence, invoke tools, and act in bounded, inspectable ways',
    exampleScenario: 'an agent that needs to read a dashboard, call an API, or update a record instead of only drafting text'
  };

  const multiAgentTopicBriefGuide = {
    roleLabel: 'a coordination pattern for specialized agents',
    purpose: 'how work is split across roles, orchestrated across hops, and kept coherent at system scale',
    used: 'pipelines where planning, retrieval, execution, review, and escalation are separated across multiple workers',
    unlock: 'specialization, delegation, and throughput without forcing one agent to do every cognitive role',
    analogy: 'a small human team with distinct roles, handoffs, and shared goals',
    withoutCase: 'one overloaded agent becomes a bottleneck and mixes planning, execution, and checking into one blurry loop',
    withCase: 'specialists can focus on narrow roles while an orchestrator or protocol keeps the whole job aligned',
    exampleScenario: 'a report-building pipeline with separate planner, researcher, writer, critic, and approver roles'
  };

  const runtimeTopicBriefGuide = {
    roleLabel: 'a runtime, operations, or delivery concern',
    purpose: 'how an agent system is served, scaled, versioned, routed, and kept alive under real workload',
    used: 'production APIs, long-running tasks, multi-tenant services, queues, retries, gateways, and release pipelines',
    unlock: 'repeatability and survival under real traffic, not just correctness in a local demo',
    analogy: 'the nervous system and circulation that make higher cognition usable in the body over time',
    withoutCase: 'the agent works in a demo but breaks under scale, retries, latency spikes, or long-running state',
    withCase: 'the system can handle load, persistence, versioning, and operational failure with far less drama',
    exampleScenario: 'a customer-facing AI service that must survive concurrency, deployment changes, and uneven traffic'
  };

  const evaluationTopicBriefGuide = {
    roleLabel: 'a measurement, debugging, or feedback discipline',
    purpose: 'how teams inspect behavior, detect regressions, and learn whether the system is actually good enough',
    used: 'release gates, experimentation, incident analysis, benchmarking, tracing, and model or prompt iteration',
    unlock: 'evidence-driven improvement instead of intuition-driven guesswork',
    analogy: 'self-monitoring, coaching, and checking work against a rubric instead of trusting first impressions',
    withoutCase: 'regressions stay invisible and failures show up as anecdotes after users are already feeling them',
    withCase: 'teams can trace behavior, compare variants, and tighten quality using measured signals',
    exampleScenario: 'a team shipping a new prompt, model route, or workflow change and wanting proof that it improved things'
  };

  const applicationTopicBriefGuide = {
    roleLabel: 'an application surface or domain lens',
    purpose: 'how agent primitives become concrete workflows for a real user, team, or industry',
    used: 'product design, domain adaptation, and decisions about where general agent patterns actually create value',
    unlock: 'translation from abstract capability into a workflow that matters to someone',
    analogy: 'a human job role or professional specialization built on top of the same general cognitive machinery',
    withoutCase: 'the design stays abstract and it is hard to see what success, risk, or value should mean',
    withCase: 'the same underlying agent patterns are grounded in users, constraints, and real operational goals',
    exampleScenario: 'mapping a general agent stack onto coding, support, research, legal, or personal-assistant work'
  };

  const safetyTopicBriefGuide = {
    roleLabel: 'a safety, boundary, or control layer',
    purpose: 'how autonomy stays bounded, auditable, and aligned with permissions, policy, and risk tolerance',
    used: 'tool-using agents, enterprise deployments, regulated settings, and any system that can take meaningful action',
    unlock: 'safer delegation, clearer accountability, and controlled failure modes instead of blind autonomy',
    analogy: 'impulse control, social rules, and institutional guardrails that let humans act without causing needless damage',
    withoutCase: 'the agent has too much freedom for the amount of oversight, validation, or policy attached to it',
    withCase: 'the system can act with clearer limits, safer defaults, and better auditability',
    exampleScenario: 'an assistant with access to data, tools, or side effects that could become costly or unsafe if left unchecked'
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

  function getTopicBriefGuide(entry) {
    const matchText = `${entry.section.title} ${entry.layer.title}`;
    const sectionRule = topicBriefSectionRules.find(rule => rule.pattern.test(matchText));
    if (sectionRule) {
      return sectionRule.guide;
    }

    return layerTopicBriefGuides[entry.layer.title] || defaultTopicBriefGuide;
  }

  function getTopicBriefPartnerText(entry, siblings = []) {
    const partnerNames = uniqueStrings([
      ...(entry.topic.prerequisites || []).slice(0, 2),
      ...siblings.slice(0, 2).map(item => item.text)
    ]).filter(name => name && name !== entry.text);

    return partnerNames.length ? joinNaturalLanguage(partnerNames.slice(0, 2)) : `other topics in ${entry.section.title}`;
  }

  const topicBriefOverrides = Object.freeze({
    'Workflow vs agent vs multi-agent system': {
      'What it is': 'This topic draws the basic line between three system shapes. A workflow is mostly predetermined steps, an agent is a model-centered loop with local judgment, and a multi-agent system splits work across several collaborating agents.',
      'Where it is used': 'You use this distinction at the very start of system design, especially when deciding whether a task needs autonomy at all. It is one of the fastest ways to avoid building a dramatic agent where a simpler workflow would be stronger.',
      'What it unlocks': 'It unlocks the right complexity level for the problem. Once this is clear, the rest of the stack such as prompts, tools, memory, evals, and runtime choices becomes much easier to scope.',
      'Human analogy': 'The human parallel is the difference between following a checklist, letting one skilled operator improvise, and coordinating a small team with separate roles. Each mode can solve the same goal, but with very different costs and failure modes.',
      'Without it': 'Without this distinction, teams call everything an agent and end up mixing automation, reasoning, and coordination into one fuzzy bucket. A support task that needed a clean workflow can turn into an expensive and fragile pseudo-agent.',
      'With it': 'With this distinction in place, architecture choices become much more honest. The team can say this should stay scripted, this needs one bounded agent, or this is complex enough to justify delegation across multiple agents.'
    },
    'Models, memory, tools, controllers, and environments': {
      'What it is': 'This topic names the main building blocks of an agent system. Models generate and reason, memory carries state, tools let the system act, controllers govern the loop, and the environment is the outside world the agent reads from and changes.',
      'Where it is used': 'It is used in architecture diagrams, design reviews, debugging sessions, and postmortems. Whenever a team asks where a failure really came from, these categories give a clean way to separate causes.',
      'What it unlocks': 'It unlocks separation of concerns. Instead of treating the whole agent as one blob, you can ask whether the issue was bad retrieval, weak control flow, poor tool design, or the wrong model.',
      'Human analogy': 'The brain analogy is straightforward: model as reasoning machinery, memory as recall, tools as hands and instruments, controller as executive function, and environment as the real world pushing back on every plan.',
      'Without it': 'Without this mental model, teams keep reaching for prompt edits even when the true problem sits in tool contracts, stale memory, or weak control logic. The system stays hard to explain and harder to improve.',
      'With it': 'With this decomposition, the agent becomes inspectable. A team can improve one component at a time and know whether it is strengthening intelligence, grounding, action, or reliability.'
    },
    'The observe -> think -> act -> verify -> update loop': {
      'What it is': 'This is the core closed loop behind serious agents. The system gathers evidence, reasons over it, takes a step, checks whether the step worked, and updates state before continuing.',
      'Where it is used': 'You see this pattern in browser agents, coding agents, research systems, and long-running workflows where the model cannot safely answer in one shot. It is especially important once tools or side effects enter the picture.',
      'What it unlocks': 'It unlocks feedback-driven behavior. Instead of treating generation as a final answer, the agent can learn from the world after each move and correct itself before drifting too far.',
      'Human analogy': 'Humans work the same way when doing careful tasks: look at the situation, think, try something, check the result, then adjust. It is closer to real skilled work than a single burst of verbal output.',
      'Without it': 'Without a closed loop, the agent behaves like an open-loop guesser. It may confidently claim success after one bad action because nothing in the system forces it to verify what actually happened.',
      'With it': 'With the loop in place, the agent starts behaving more like an operator than a chatbot. It can recover from partial failure, notice bad tool results, and tighten the gap between plan and reality.'
    },
    'System vs user prompts': {
      'What it is': 'This topic separates enduring operating instructions from the current task request. The system prompt defines role, boundaries, and persistent behavior, while the user prompt expresses the immediate job to be done.',
      'Where it is used': 'It matters in chat products, extraction pipelines, tool-using agents, and any multi-tenant system where stable behavior must survive across many user requests. It is one of the earliest prompt design distinctions that becomes operationally important.',
      'What it unlocks': 'It unlocks layered control. The team can keep durable policies and behavior contracts stable while letting each task remain flexible and specific.',
      'Human analogy': 'The human analogy is job role versus current assignment. A doctor, analyst, or project manager keeps the role rules in mind even when each individual request is different.',
      'Without it': 'Without this split, task text and operating policy get tangled together. A single user request can accidentally override tone, output rules, or safety constraints that should have remained stable.',
      'With it': 'With the split in place, prompts become much easier to reason about, test, and revise. The agent keeps a steadier identity while still responding to the specifics of the task at hand.'
    },
    'Prompt templates': {
      'What it is': 'Prompt templates are reusable instruction frames with variables, slots, and fixed structure around a repeated task. They turn ad hoc prompting into an interface that can be versioned and reused.',
      'Where it is used': 'They show up in extraction, classification, summarization, routing, report generation, and any system where the same task is run across many inputs. In production, templates are often the basic unit of prompt maintenance.',
      'What it unlocks': 'They unlock consistency, repeatability, and comparison. Once the task lives in a template, teams can test changes, track regressions, and share the pattern instead of rewriting prompts from scratch.',
      'Human analogy': 'The human version is a standard briefing form or operating checklist. Skilled people still think, but they benefit from a repeatable structure that keeps key instructions from drifting.',
      'Without it': 'Without templates, prompting becomes artisanal and fragile. Two engineers solve the same task with different wording, the behavior drifts over time, and no one can clearly say what changed.',
      'With it': 'With templates, the prompt becomes a managed artifact instead of personal improvisation. That makes agents easier to debug, compare, review, and hand off across a team.'
    },
    'Function calling': {
      'What it is': 'Function calling is the pattern where a model emits structured arguments for a named tool instead of only producing prose. It is the bridge between language generation and reliable machine-to-machine action.',
      'Where it is used': 'It is used in database access, API orchestration, business workflows, browser automation, and assistant products that must do work instead of merely describing work. It becomes central as soon as an agent needs typed actions.',
      'What it unlocks': 'It unlocks structured execution. The system can validate arguments, route them to real tools, and reason about action in a form that software can trust much more than free text.',
      'Human analogy': 'The human analogy is filling out a precise request form instead of giving a vague spoken instruction. The structure makes downstream execution more reliable and less open to interpretation.',
      'Without it': 'Without function calling, teams often parse tool intent out of plain text after generation. That works in demos, but it breaks easily once the output must be exact, validated, and safely connected to real systems.',
      'With it': 'With function calling, tool use becomes explicit and inspectable. An agent can choose a tool, provide arguments in a schema, and let the runtime decide whether the call is valid, safe, and worth executing.'
    },
    'Tool-calling loops': {
      'What it is': 'A tool-calling loop is the repeated cycle of deciding what external capability to use, calling it, reading the result, and deciding what to do next. It turns tools into an active feedback channel rather than a one-off extension.',
      'Where it is used': 'You see it in research agents, browser agents, coding assistants, ops agents, and troubleshooting systems that must inspect live state while they work. It is one of the defining patterns of practical agency.',
      'What it unlocks': 'It unlocks iterative grounded action. The agent can move step by step through the task, reacting to actual results instead of trying to imagine the full path in advance.',
      'Human analogy': 'The human parallel is a technician checking instruments while diagnosing a system. Thought and action alternate, and each measurement changes the next decision.',
      'Without it': 'Without a loop, tool use stays shallow and brittle. The agent might call one tool once, then jump back into speculation even though the next good move depends on reading the new evidence.',
      'With it': 'With a real loop, the agent can search, inspect, revise, and continue. That is the moment when the system starts to feel less like prompt chaining and more like situated problem solving.'
    },
    'ReAct agents': {
      'What it is': 'ReAct agents interleave reasoning traces with concrete actions. Instead of first thinking in isolation and only later acting, they continually tie thought to tool use and environment feedback.',
      'Where it is used': 'This pattern is common in search agents, web agents, coding agents, and troubleshooting workflows where new evidence appears after every step. It became popular because it matches how many real tasks unfold.',
      'What it unlocks': 'It unlocks a tighter bond between plan and evidence. The model can revise its course as soon as a tool result challenges the current hypothesis.',
      'Human analogy': 'The human analogy is thinking out loud while working through a task, then immediately changing strategy after checking a result. The person is not separating planning from doing; the two are braided together.',
      'Without it': 'Without a ReAct-style pattern, an agent often overplans in the abstract or acts with too little reflection. Either way, the work can drift because the reasoning process is not grounded tightly enough in evidence.',
      'With it': 'With ReAct, the agent becomes more adaptive. Each action creates new information, and the reasoning process uses that information immediately rather than pretending the world stayed still.'
    },
    'RAG vs fine-tuning vs long context (trade-offs)': {
      'What it is': 'This topic is a decision framework for three very different ways of improving capability. RAG adds external knowledge at inference time, fine-tuning changes model behavior in the weights, and long context keeps more raw material in view during the call.',
      'Where it is used': 'It comes up in enterprise search, domain adaptation, product planning, platform decisions, and almost every serious conversation about how to make an agent better at a task. It is one of the highest-value trade-off topics in the whole map.',
      'What it unlocks': 'It unlocks better investment choices. Instead of defaulting to whichever technique is fashionable, a team can ask whether the problem is really about fresh knowledge, stable behavior, or sheer working context.',
      'Human analogy': 'The human analogy is the difference between looking something up, practicing until the skill becomes internalized, and spreading a huge pile of source material across the desk. Each method helps, but in a different way and at a different cost.',
      'Without it': 'Without this trade-off lens, teams often fine-tune when retrieval would be cheaper, or stuff enormous prompts into context when the real need is better retrieval and compression. The result is wasted effort and confusing architecture.',
      'With it': 'With this lens, architecture decisions become sharper. The team can explain why knowledge should stay external, why behavior should move into weights, or why large working context is worth the latency and cost.'
    },
    'Agentic RAG': {
      'What it is': 'Agentic RAG is retrieval that is no longer fixed to one static search step. The agent can reformulate the query, branch its search, inspect failures, retrieve again, and decide how evidence should be assembled.',
      'Where it is used': 'It is used in harder research tasks, compliance workflows, technical support, investigations, and document-heavy reasoning where one retrieve-then-read pass is not enough. It is especially useful when the first search result set is only a rough starting point.',
      'What it unlocks': 'It unlocks adaptive evidence gathering. The system can behave more like an investigator than a template, which often matters when the right answer is buried, fragmented, or phrased in an unexpected way.',
      'Human analogy': 'The human version is a researcher who changes search terms, chases references, and adjusts the reading plan after each clue. Good inquiry is rarely one query followed by one perfect answer.',
      'Without it': 'Without agentic behavior, RAG often stays shallow. If the first retrieval pass misses the key document or uses the wrong framing, the system has very little ability to recover.',
      'With it': 'With agentic RAG, retrieval becomes a reasoning partner. The agent can probe the corpus, widen or narrow the search, and assemble a better evidence trail before it commits to an answer.'
    },
    'Model routing': {
      'What it is': 'Model routing is the logic that chooses which model, provider, or tier should handle a given step. It turns a one-model system into a portfolio where capability, latency, price, and risk can be balanced dynamically.',
      'Where it is used': 'It is used in production agent platforms, cost-aware pipelines, fallback systems, and multi-step workflows where not every subtask deserves the same model. Routing becomes more important as traffic and cost pressure rise.',
      'What it unlocks': 'It unlocks economic and operational discipline. The system can reserve high-end models for hard steps, use smaller models for simpler work, and fail over across providers when needed.',
      'Human analogy': 'The human analogy is triage: not every problem goes straight to the top specialist. Routine cases go to a generalist, and only the difficult edge cases escalate upward.',
      'Without it': 'Without routing, one model has to do everything. That usually means either overspending on easy tasks or forcing difficult tasks through a weaker model that cannot reliably handle them.',
      'With it': 'With routing, the stack becomes more strategic. The agent platform can trade cost against quality explicitly and adapt model choice to the task rather than pretending all requests are the same.'
    },
    'Orchestrator-subagent pattern': {
      'What it is': 'The orchestrator-subagent pattern uses a supervisory agent or controller to delegate specific parts of the job to narrower workers. The orchestrator holds the bigger objective while subagents focus on specialized slices of the task.',
      'Where it is used': 'It is used in research, coding, analysis, and document workflows where planning, retrieval, execution, and review benefit from separate contexts. It is one of the most practical multi-agent patterns because it stays understandable.',
      'What it unlocks': 'It unlocks specialization without total chaos. Context can be narrowed for each subagent, while the orchestrator keeps the overall thread of the task intact.',
      'Human analogy': 'The human analogy is a manager coordinating specialists. One person tracks the mission, while others focus on search, drafting, verification, or execution.',
      'Without it': 'Without this pattern, one large agent often becomes overloaded. Planning, tool use, checking, and synthesis all compete inside one context window, and the quality of each role degrades.',
      'With it': 'With the pattern in place, each worker can be simpler and more focused. The overall system becomes easier to debug because delegation boundaries, responsibilities, and handoffs are visible.'
    },
    'Human-in-the-loop (HITL)': {
      'What it is': 'Human-in-the-loop means the system is designed to pause, escalate, or request approval at specific points rather than acting fully on its own. The human is part of the workflow, not just a spectator after the fact.',
      'Where it is used': 'It is used in legal review, finance, support escalation, medical settings, sensitive enterprise workflows, and any task where the cost of a wrong action is higher than the cost of a short review step.',
      'What it unlocks': 'It unlocks bounded autonomy. The agent can still do most of the work, but humans remain attached to key decisions, irreversible actions, or low-confidence situations.',
      'Human analogy': 'The analogy is supervisor sign-off. A skilled junior operator can do substantial work alone, but a more senior person reviews the critical moment before something binding happens.',
      'Without it': 'Without HITL, teams are pushed toward either reckless automation or constant manual babysitting. The system either acts too freely or never earns enough trust to be useful.',
      'With it': 'With HITL in the right places, autonomy becomes more practical. The agent handles the repetitive and preparatory work, while the human provides judgment at the moments that truly warrant it.'
    },
    'Distributed tracing (LangSmith, Langfuse)': {
      'What it is': 'Distributed tracing gives a time-ordered view of what the agent did across prompts, tool calls, model responses, retries, and downstream actions. It is the execution story of the system, not just the final answer on the screen.',
      'Where it is used': 'It is used in production debugging, regression analysis, eval investigation, latency tuning, and incident response. As soon as an agent has more than one step, tracing stops being optional if the team wants to understand failures.',
      'What it unlocks': 'It unlocks observability at the level that agent systems actually fail. Teams can inspect which prompt fired, which tool was slow, where the loop branched, and why the final answer looked wrong.',
      'Human analogy': 'The closest analogy is a flight recorder or a detailed work log. Instead of only seeing the final mistake, you can reconstruct the sequence of choices that produced it.',
      'Without it': 'Without tracing, teams diagnose agent behavior from symptoms and anecdotes. They see the wrong output, but they do not see the exact chain of steps, prompts, and tool results that made it happen.',
      'With it': 'With tracing, failure becomes legible. The system can be debugged step by step, which is what turns agent engineering from mysticism into something closer to normal software operations.'
    },
    'Prompt injection': {
      'What it is': 'Prompt injection is the attack pattern where hostile instructions are smuggled into content the model reads, such as user text, retrieved documents, websites, or tool outputs. The model may then treat those instructions as if they were trusted control text.',
      'Where it is used': 'It matters anywhere an agent reads untrusted input and especially where that agent also has tools, memory, or side effects. RAG systems, browser agents, and enterprise assistants are particularly exposed.',
      'What it unlocks': 'Treating prompt injection as a first-class topic unlocks real threat modeling for agent systems. It forces teams to think about trust boundaries, instruction hierarchy, tool permissions, and output validation.',
      'Human analogy': 'The human analogy is social engineering. A person can be manipulated by hostile phrasing in a document or message if they fail to separate trusted instructions from untrusted content.',
      'Without it': 'Without a prompt-injection mental model, teams assume retrieved text is just data. The agent then reads hostile content as if it were policy and may leak information, misuse tools, or derail the workflow.',
      'With it': 'With prompt injection treated as a real attack surface, architectures become more defensive. Teams add validation, permission boundaries, content separation, and safer tool policies before an attacker teaches them the lesson in production.'
    },
    'Eval-gated deployments': {
      'What it is': 'Eval-gated deployment means prompts, model routes, or workflow changes must clear a defined evaluation threshold before reaching users. It applies software release discipline to behavior that would otherwise drift silently.',
      'Where it is used': 'It is used in CI pipelines, staging checks, canary release processes, and platforms where prompt or model changes are frequent. The more often an AI system changes, the more this topic starts to matter.',
      'What it unlocks': 'It unlocks safer iteration. Teams can move quickly without pretending that intuition or ad hoc spot checks are enough to protect behavior in production.',
      'Human analogy': 'The human analogy is a formal competency check before someone is allowed to use a new procedure unsupervised. The point is not bureaucracy; the point is proving that the change still meets the bar.',
      'Without it': 'Without eval gates, behavior changes ship on gut feel. A prompt tweak can quietly break retrieval quality, tool behavior, or refusal boundaries, and the regression only becomes visible after users suffer it.',
      'With it': 'With eval-gated deployment, release decisions become evidence-based. The team can say what passed, what failed, and why a change was safe enough to promote.'
    },
    'Context windows': {
      'What it is': 'A context window is the amount of information a model can actively attend to during a single call. It defines the size of the model\'s short-term working space, not the total knowledge the system could possibly access.',
      'Where it is used': 'It matters in long-document analysis, chat memory, coding sessions, multimodal tasks, and any workflow where too much relevant material competes for space. Many higher-level design choices are really responses to this one limit.',
      'What it unlocks': 'It unlocks broader local reasoning over more tokens at once, but it also forces teams to think about prioritization, compression, and external memory instead of assuming everything can fit.',
      'Human analogy': 'The human analogy is working memory or the size of the desk you can actively work on right now. A bigger desk helps, but it does not remove the need to organize what stays in front of you.',
      'Without it': 'Without a clear sense of context windows, teams keep shoving more text into prompts and are surprised when quality drops or important evidence disappears. The agent ends up seeing either too little or too much in the wrong order.',
      'With it': 'With this topic understood, the system designer starts treating context as a scarce resource. That leads naturally to better retrieval, chunking, summarization, and stepwise workflows.'
    },
    'Embeddings as semantic coordinates': {
      'What it is': 'Embeddings turn text, images, or other inputs into vectors where distance roughly captures semantic similarity. They let systems compare meaning geometrically rather than relying only on exact wording.',
      'Where it is used': 'They are used in retrieval, clustering, deduplication, recommendation, memory lookup, and routing. In practice, embeddings are one of the main ways agent systems gain a searchable semantic memory.',
      'What it unlocks': 'They unlock similarity search across messy language variation. A system can find related content even when the surface phrasing does not match the query directly.',
      'Human analogy': 'The human analogy is the way people mentally place related ideas near each other even when the exact words differ. You can recognize that two formulations point at the same concept without them being identical strings.',
      'Without it': 'Without embeddings, a knowledge system leans much harder on keyword overlap and brittle lexical matching. That often means missing useful evidence just because the wording changed.',
      'With it': 'With embeddings, the agent can search for meaning rather than literal phrasing. That is one of the core moves that makes modern retrieval systems feel less mechanical and more context-aware.'
    },
    'Memory taxonomy': {
      'What it is': 'Memory taxonomy separates different kinds of memory instead of treating all stored information as one blob. Working, episodic, semantic, and procedural memory each play different roles in a capable agent system.',
      'Where it is used': 'It is used when designing assistants with history, research agents with durable state, and systems that need to distinguish short-term context from reusable long-term knowledge. It is a conceptual tool for keeping memory architecture honest.',
      'What it unlocks': 'It unlocks better storage and retrieval choices. Once the team knows whether information is a skill, an event, a fact, or temporary working state, the right persistence pattern becomes much clearer.',
      'Human analogy': 'The brain analogy is direct: humans remember what happened, what is true, and how to do something in different ways. Good agent memory design mirrors that separation instead of flattening everything into chat history.',
      'Without it': 'Without a taxonomy, teams often dump all history into one giant log and hope the model sorts it out. The result is noisy recall, poor prioritization, and memory that grows without becoming smarter.',
      'With it': 'With a memory taxonomy, the agent can treat facts, episodes, and instructions differently. That makes memory more composable, more efficient, and easier to govern over time.'
    },
    'Context window management': {
      'What it is': 'Context window management is the discipline of deciding what deserves to be in active context right now and what should stay external. It sits between raw model limits and the larger memory system.',
      'Where it is used': 'It is used in long-running agents, document-heavy workflows, coding tools, and any system that must balance relevance against token budget. In practice, it is one of the quiet determinants of answer quality.',
      'What it unlocks': 'It unlocks focus. Instead of treating every retrieved or remembered item as equally important, the system can compress, rank, prune, or stage information based on the current step.',
      'Human analogy': 'The human version is choosing what stays on your desk and what stays in the cabinet. Skilled people keep only the most relevant materials in active attention while still knowing where the rest lives.',
      'Without it': 'Without context management, prompts bloat quickly and the important details lose salience. Or the opposite happens: the prompt is trimmed aggressively and the model never sees the evidence it truly needed.',
      'With it': 'With context window management, the agent uses its limited working space deliberately. That usually leads to better grounding, lower cost, and fewer failures caused by prompt clutter.'
    },
    'Vector search (ANN / HNSW)': {
      'What it is': 'Vector search retrieves nearby embeddings rather than exact keyword matches, and ANN structures such as HNSW make that fast enough to use at production scale. It is the core engine behind most modern semantic search systems.',
      'Where it is used': 'You see it in RAG, memory recall, enterprise search, recommendation, and document routing. Anytime a system needs to find semantically related items across a large corpus, vector search is usually in the loop.',
      'What it unlocks': 'It unlocks scalable semantic retrieval. The system can search meaningfully across millions of items without exhaustively comparing every vector at query time.',
      'Human analogy': 'The human analogy is scanning the neighborhood of an idea rather than flipping through an alphabetized index. You are looking for conceptual neighbors, not only exact string matches.',
      'Without it': 'Without vector search, semantic retrieval either becomes too slow or collapses back into brittle keyword logic. That tends to hurt recall as soon as the corpus gets large and language becomes varied.',
      'With it': 'With vector search in place, semantic memory becomes practical at scale. The agent can reach for related evidence quickly enough that retrieval can stay inside real user-facing systems.'
    },
    'Metadata enrichment & filtering': {
      'What it is': 'Metadata enrichment adds structured fields such as source, date, tenant, access class, document type, or region to chunks and documents. Filtering then uses those fields to narrow retrieval before or after similarity search.',
      'Where it is used': 'It is used in enterprise RAG, regulated systems, multi-tenant search, and any workflow where not every semantically similar document should be eligible. It is often the difference between an impressive demo and a usable production system.',
      'What it unlocks': 'It unlocks retrieval precision and governance. The system can combine meaning with hard boundaries such as customer scope, freshness window, department, or permissions.',
      'Human analogy': 'The human analogy is labeling folders by project, date, and sensitivity instead of throwing everything into one pile. Semantic relevance matters, but good filing rules keep the search safe and precise.',
      'Without it': 'Without metadata enrichment, the agent may retrieve text that is semantically related but operationally wrong, outdated, or not allowed for the current user. That creates both quality problems and governance risk.',
      'With it': 'With metadata-aware retrieval, the agent searches more like a responsible system and less like a naive search box. It can stay relevant while also respecting scope, freshness, and control boundaries.'
    },
    'Multi-hop RAG': {
      'What it is': 'Multi-hop RAG handles questions whose answer is spread across several pieces of evidence rather than one chunk. The system has to retrieve, connect, and reason across multiple hops instead of pretending one search pass is enough.',
      'Where it is used': 'It is used in research, investigations, policy interpretation, technical troubleshooting, and other domains where the answer depends on combining facts from separate places. These are exactly the cases where simple retrieval often feels disappointingly shallow.',
      'What it unlocks': 'It unlocks cross-document synthesis. The agent can gather partial clues, bridge them, and produce an answer that depends on composition rather than a single quote.',
      'Human analogy': 'The human analogy is following references through multiple notes or documents to resolve a question. Serious inquiry often requires stitching together fragments rather than finding one perfect paragraph.',
      'Without it': 'Without multi-hop behavior, a retrieval system tends to answer only what is directly stated in one place. Questions that require bridging evidence across sources get simplified, guessed, or missed entirely.',
      'With it': 'With multi-hop RAG, the agent can do more than fetch. It can traverse an evidence chain, which makes document-grounded reasoning much closer to the way careful humans actually investigate.'
    },
    'Tool schema design (OpenAI / Anthropic style)': {
      'What it is': 'Tool schema design defines the names, descriptions, arguments, and types that a model sees when deciding how to call a tool. It is the contract between model reasoning and executable capability.',
      'Where it is used': 'It is used in every serious function-calling or tool-use system, from internal agent platforms to end-user assistants. The quality of the schema often matters as much as the quality of the tool implementation itself.',
      'What it unlocks': 'It unlocks clearer tool selection and safer argument generation. A well-designed schema helps the model understand what a tool is for, what inputs are valid, and when it should not call it.',
      'Human analogy': 'The human analogy is designing a good form, API, or checklist. Clear field names and crisp descriptions help people make fewer mistakes, and the same principle applies to models.',
      'Without it': 'Without good schema design, the tool layer becomes ambiguous. The model picks the wrong tool, invents invalid arguments, or treats similar actions as interchangeable when they are not.',
      'With it': 'With strong schemas, tool use becomes more legible and reliable. The model is still reasoning, but it is reasoning against a much better interface.'
    },
    'Parallel tool calls': {
      'What it is': 'Parallel tool calls let an agent invoke multiple independent tools or queries at the same time instead of serializing every step. It is a latency and coverage optimization when the calls do not depend on each other.',
      'Where it is used': 'It is used in search fan-out, multi-source retrieval, dashboard inspection, aggregation workflows, and evaluators that need several checks at once. It matters most when one slow step would otherwise dominate total runtime.',
      'What it unlocks': 'It unlocks lower latency and broader evidence gathering per turn. The agent can compare several signals in the time it would otherwise spend waiting on one after another.',
      'Human analogy': 'The human analogy is sending several people to gather information in parallel instead of having one person visit every source sequentially. The result arrives faster and often paints a fuller picture.',
      'Without it': 'Without parallelism, agent workflows can feel slower than they need to be and may underuse available tools. The system waits on serial calls even when there is no real dependency chain requiring that delay.',
      'With it': 'With parallel tool calls, the agent becomes more operationally efficient. It can widen its information surface without paying the full cumulative latency cost of each source in sequence.'
    },
    'MCP (Model Context Protocol)': {
      'What it is': 'MCP is a protocol for exposing tools, resources, and prompts to model-driven clients through a more standardized interface. It helps separate the agent client from the capability providers it can connect to.',
      'Where it is used': 'It is used in IDE agents, local tool ecosystems, enterprise integrations, and environments where capabilities should be reusable across multiple clients. It matters most when bespoke glue code starts to become the real bottleneck.',
      'What it unlocks': 'It unlocks interoperability. Instead of rewriting each integration for every client, teams can present capabilities through a shared protocol surface.',
      'Human analogy': 'The human analogy is a standard port or shared language between tools. Once everyone agrees on the interface, combining components becomes much easier than negotiating each pairing from scratch.',
      'Without it': 'Without a protocol layer like MCP, integration work tends to fragment into one-off adapters. That slows down reuse and makes the ecosystem harder to compose safely and predictably.',
      'With it': 'With MCP, the agent world gets a cleaner systems boundary. Tools become more portable across clients, and the capability surface can evolve with more consistency.'
    },
    'Agent sandboxing (E2B, Modal, Daytona)': {
      'What it is': 'Agent sandboxing provides isolated execution environments where code, file operations, or other risky actions can happen with controlled permissions. It is a containment layer for agent action, not just a convenience feature.',
      'Where it is used': 'It is used in coding agents, data-processing agents, notebook-style workflows, and any system that executes code or manipulates artifacts on behalf of a user. The moment an agent can run code, sandboxing becomes strategic.',
      'What it unlocks': 'It unlocks safer action. The system can do meaningful work while reducing blast radius, separating environments, and making execution more disposable and inspectable.',
      'Human analogy': 'The human analogy is doing hazardous work in a lab hood or a protected workshop area instead of in the middle of the office. The task still gets done, but the surrounding environment stays safer.',
      'Without it': 'Without sandboxing, agent execution happens too close to the crown jewels. A bad tool call, prompt injection, or buggy script can affect the primary environment much more directly than it should.',
      'With it': 'With sandboxing, action becomes more governable. The agent can still execute useful tasks, but in a boundary that is easier to reset, audit, and constrain.'
    },
    'Long-running agent processes': {
      'What it is': 'Long-running agent processes are workflows that continue over minutes, hours, or days rather than ending with one request-response cycle. They require persistence, checkpoints, and a notion of durable progress.',
      'Where it is used': 'They are used in research jobs, batch analysis, asynchronous enterprise workflows, approval chains, and background tasks that cannot be completed while a user waits. As soon as agents leave the chat box, this topic becomes central.',
      'What it unlocks': 'It unlocks endurance. The system can tackle larger tasks, survive interruptions, and carry state across time instead of collapsing into a single fragile turn.',
      'Human analogy': 'The human analogy is project work that spans days rather than a single conversation. People keep notes, resume from checkpoints, and come back to partially finished work later.',
      'Without it': 'Without support for long-running processes, agents either time out, lose state, or force users to micromanage every continuation. Complex workflows stay awkward because the system is trapped in short-lived interaction patterns.',
      'With it': 'With durable long-running behavior, the agent becomes more like a worker and less like a one-turn assistant. It can make progress in the background and return with accumulated results.'
    },
    'Model performance monitoring and drift detection': {
      'What it is': 'This topic covers watching model quality, latency, cost, and behavioral stability over time so that quiet regressions can be detected. Drift is not only about data distributions; it is also about how the system behaves after model, prompt, or traffic changes.',
      'Where it is used': 'It is used in production LLM platforms, gateways, eval systems, and any environment where models evolve while users keep relying on them. Once an AI system is live, monitoring becomes part of the product, not just an ops add-on.',
      'What it unlocks': 'It unlocks early warning. Teams can spot degradation before users fully absorb the cost, whether the drift shows up as weaker accuracy, slower responses, rising spend, or changing refusal patterns.',
      'Human analogy': 'The human analogy is noticing when a skilled worker starts slipping after a process change or after taking on the wrong workload. Small changes in behavior often matter before anyone says there is a crisis.',
      'Without it': 'Without monitoring and drift detection, the system can get worse slowly and invisibly. By the time people complain, the team has little historical context for when the behavior changed and why.',
      'With it': 'With performance monitoring in place, the AI stack becomes a measurable system. That turns maintenance from reactive guesswork into something closer to disciplined operations.'
    },
    'Contract testing for LLM outputs': {
      'What it is': 'Contract testing checks whether model outputs continue to satisfy the structural or behavioral expectations of downstream consumers. It is less about whether the answer sounds good and more about whether other parts of the system can safely rely on it.',
      'Where it is used': 'It is used in extraction pipelines, function-calling systems, structured APIs, UI generation, and any integration where a model output is parsed, validated, or fed into another component. The more automated the chain, the more important contracts become.',
      'What it unlocks': 'It unlocks safer change management. Teams can modify prompts, models, or routing logic without blindly hoping the output shape still satisfies the systems around it.',
      'Human analogy': 'The human analogy is checking that a handoff still uses the required format before another team starts processing it. Good intentions are not enough if the receiving system expects a specific contract.',
      'Without it': 'Without contract testing, one small model change can quietly break parsers, workflows, and downstream tools even while the output still looks plausible in a casual manual spot check.',
      'With it': 'With contract tests, LLM outputs become more manageable as software interfaces. The team gains a concrete way to enforce stability across iterative changes.'
    },
    'Deterministic replay': {
      'What it is': 'Deterministic replay is the ability to re-run a workflow with the same captured inputs, configuration, and tool interactions so that a failure can be inspected consistently. It is a debugging aid for systems that otherwise feel slippery and non-repeatable.',
      'Where it is used': 'It is used in incident analysis, regression investigation, eval debugging, and root-cause analysis for complex agent traces. It becomes especially valuable when multiple models and tools are involved in one failure.',
      'What it unlocks': 'It unlocks reproducibility. Instead of chasing a ghost behavior that only happened once in production, the team can reconstruct the sequence closely enough to learn from it.',
      'Human analogy': 'The human analogy is replaying surveillance footage or game tape. Seeing the sequence again under controlled conditions is often what finally makes the real mistake obvious.',
      'Without it': 'Without deterministic replay, debugging relies on incomplete logs and memory. The team can describe what probably happened, but it is much harder to test fixes against the same failure path.',
      'With it': 'With replay, agent failures become far easier to analyze systematically. That reduces the mystique around non-deterministic systems and brings debugging closer to normal engineering practice.'
    },
    'Capability gating': {
      'What it is': 'Capability gating means an agent is only allowed to use certain tools or actions when explicit conditions are met. It is a permission boundary for autonomy, not just a UI toggle.',
      'Where it is used': 'It is used in enterprise agents, sensitive workflows, financial or operational systems, and any setting where the model should not freely exercise every available capability. It often sits beside identity, approval, and policy enforcement.',
      'What it unlocks': 'It unlocks bounded power. The agent can still be useful, but its action space is narrowed to what the task, role, and trust level actually justify.',
      'Human analogy': 'The human analogy is role-based access with keycards or approvals. A person may be trusted to do some things on their own while other actions remain restricted unless a higher gate is cleared.',
      'Without it': 'Without capability gates, agent systems tend to be overpowered relative to the trustworthiness of the model and the maturity of the controls around it. That is a recipe for expensive mistakes.',
      'With it': 'With capability gating, autonomy becomes more precise. Teams can expand what the agent is allowed to do gradually instead of exposing the full tool surface from day one.'
    },
    'Zero-trust for agents': {
      'What it is': 'Zero-trust for agents applies the idea that no request, component, or connected system should be trusted implicitly. Every access, action, and handoff has to earn trust through verification and policy.',
      'Where it is used': 'It is used in enterprise deployments, multi-agent systems, cross-organizational workflows, and any environment where an agent touches sensitive data or external services. It is increasingly relevant as agent ecosystems become more connected.',
      'What it unlocks': 'It unlocks safer composition at scale. The system can assume less, verify more, and survive a world where prompts, tools, services, and identities may all be imperfect or compromised.',
      'Human analogy': 'The human analogy is checking identity, authority, and intent at every important handoff rather than assuming a person is trustworthy just because they are already inside the building.',
      'Without it': 'Without zero-trust thinking, teams smuggle hidden assumptions into the architecture. Those assumptions often fail exactly where agents are most dangerous: at tool boundaries, identity boundaries, and cross-system integrations.',
      'With it': 'With zero-trust principles in place, the agent stack gains stronger authentication, scoping, and audit patterns. That makes higher-autonomy systems easier to defend and reason about.'
    },
    'Data minimization for agent context': {
      'What it is': 'Data minimization means giving the agent only the data needed for the current task rather than the maximum data available. It is both a privacy principle and a prompt-quality principle.',
      'Where it is used': 'It is used in enterprise copilots, regulated domains, privacy-sensitive assistants, and any system where context assembly pulls from rich internal data sources. It matters whenever oversharing could create either risk or noise.',
      'What it unlocks': 'It unlocks tighter privacy control and cleaner reasoning. The model sees less irrelevant material, and the organization exposes less sensitive data than necessary for the job.',
      'Human analogy': 'The human analogy is briefing a colleague with only the facts they need to complete a task. You do not improve judgment by dumping the whole filing cabinet onto their desk.',
      'Without it': 'Without data minimization, agent prompts become bloated and privacy exposure expands by default. The system may see sensitive details it never needed, which raises both governance risk and cognitive clutter.',
      'With it': 'With data minimization, the agent gets a sharper working set and a safer operating posture. That usually improves both trustworthiness and focus at the same time.'
    }
  });

  function applyTopicBriefOverrides(entry, lines) {
    const override = topicBriefOverrides[entry.id] || topicBriefOverrides[entry.text];
    if (!override) {
      return lines;
    }

    return lines.map(line => override[line.label] ? { ...line, text: override[line.label] } : line);
  }

  function buildTopicBrief(entry, context = {}) {
    const guide = getTopicBriefGuide(entry);
    const partnerText = getTopicBriefPartnerText(entry, context.siblings || []);
    const relatedLayerText = context.relatedLayerTitles && context.relatedLayerTitles.length
      ? ` It also tends to connect into ${joinNaturalLanguage(context.relatedLayerTitles.slice(0, 2))}.`
      : '';

    return applyTopicBriefOverrides(entry, [
      {
        label: 'What it is',
        text: `${entry.text} lives in ${entry.layer.title} > ${entry.section.title}. It is best read as ${guide.roleLabel}, focused on ${guide.purpose}.`
      },
      {
        label: 'Where it is used',
        text: `You run into it in ${guide.used}. It usually travels with ${partnerText}.${relatedLayerText}`
      },
      {
        label: 'What it unlocks',
        text: `It unlocks ${guide.unlock}, which gives the agent a new control point instead of relying on vague defaults or manual patchwork.`
      },
      {
        label: 'Human analogy',
        text: `In human terms, it works like ${guide.analogy}. It is one of the ways an agent stack mirrors human method instead of raw reflex.`
      },
      {
        label: 'Without it',
        text: `Without ${entry.text}, ${guide.withoutCase}. In ${guide.exampleScenario}, that usually means more guessing, more operator cleanup, or weaker reliability.`
      },
      {
        label: 'With it',
        text: `With ${entry.text}, ${guide.withCase}. In ${guide.exampleScenario}, the agent can take on a broader or more dependable role.`
      }
    ]);
  }

  const officialResourceMatchers = [
    { pattern: /\bOpenAI\b|\bGPT-4o\b|\bGPT-4V\b|\bCodex\b|\bRealtime API\b/i, label: 'OpenAI docs', url: 'https://platform.openai.com/docs/overview' },
    { pattern: /\bAnthropic\b|\bClaude\b/i, label: 'Anthropic docs', url: 'https://docs.anthropic.com/' },
    { pattern: /\bGemini\b|\bGoogle ADK\b|\bProject Mariner\b/i, label: 'Google AI docs', url: 'https://ai.google.dev/' },
    { pattern: /\bLangChain\b|\bLangGraph\b/i, label: 'LangChain docs', url: 'https://docs.langchain.com/' },
    { pattern: /\bLlamaIndex\b/i, label: 'LlamaIndex docs', url: 'https://docs.llamaindex.ai/' },
    { pattern: /\bAutoGen\b/i, label: 'Microsoft AutoGen docs', url: 'https://microsoft.github.io/autogen/' },
    { pattern: /\bCrewAI\b/i, label: 'CrewAI docs', url: 'https://docs.crewai.com/' },
    { pattern: /\bPydanticAI\b/i, label: 'PydanticAI docs', url: 'https://ai.pydantic.dev/' },
    { pattern: /\bHaystack\b/i, label: 'Haystack docs', url: 'https://docs.haystack.deepset.ai/' },
    { pattern: /\bvLLM\b/i, label: 'vLLM docs', url: 'https://docs.vllm.ai/' },
    { pattern: /\bOllama\b/i, label: 'Ollama docs', url: 'https://ollama.com/' },
    { pattern: /\bllama\.cpp\b/i, label: 'llama.cpp project', url: 'https://github.com/ggerganov/llama.cpp' },
    { pattern: /\bQdrant\b/i, label: 'Qdrant docs', url: 'https://qdrant.tech/documentation/' },
    { pattern: /\bWeaviate\b/i, label: 'Weaviate docs', url: 'https://weaviate.io/developers/weaviate' },
    { pattern: /\bPinecone\b/i, label: 'Pinecone docs', url: 'https://docs.pinecone.io/' },
    { pattern: /\bNeo4j\b/i, label: 'Neo4j docs', url: 'https://neo4j.com/docs/' },
    { pattern: /\bDocker\b/i, label: 'Docker docs', url: 'https://docs.docker.com/' },
    { pattern: /\bKubernetes\b/i, label: 'Kubernetes docs', url: 'https://kubernetes.io/docs/home/' },
    { pattern: /\bOpenTelemetry\b/i, label: 'OpenTelemetry docs', url: 'https://opentelemetry.io/docs/' },
    { pattern: /\bNIST AI RMF\b/i, label: 'NIST AI RMF', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { pattern: /\bEU AI Act\b/i, label: 'EU AI Act overview', url: 'https://artificialintelligenceact.eu/' },
    { pattern: /\bOWASP Agentic AI Top 10\b/i, label: 'OWASP Agentic AI Top 10', url: 'https://genai.owasp.org/' }
  ];

  function dedupeResourceLinks(resources, limit) {
    const seen = new Set();
    const result = [];

    resources.forEach(resource => {
      if (!resource || !resource.url || seen.has(resource.url)) {
        return;
      }

      seen.add(resource.url);
      result.push({ label: resource.label, url: resource.url });
    });

    return typeof limit === 'number' ? result.slice(0, limit) : result;
  }

  function buildSuggestedTopicResources(entry) {
    const query = encodeURIComponent(entry.text);
    const scopedQuery = encodeURIComponent(`${entry.text} ${entry.section.title}`);
    const matchText = `${entry.text} ${entry.section.title} ${entry.layer.title}`;

    const officialLinks = officialResourceMatchers
      .filter(resource => resource.pattern.test(matchText))
      .slice(0, 2)
      .map(resource => ({ label: resource.label, url: resource.url }));

    return dedupeResourceLinks([
      ...officialLinks,
      { label: 'Wikipedia overview', url: `https://en.wikipedia.org/w/index.php?search=${query}` },
      { label: 'Britannica overview', url: `https://www.britannica.com/search?query=${query}` },
      { label: 'arXiv papers', url: `https://arxiv.org/search/?query=${query}&searchtype=all&abstracts=show&order=-announced_date_first&size=25` },
      { label: 'Semantic Scholar', url: `https://www.semanticscholar.org/search?q=${scopedQuery}&sort=relevance` },
      { label: 'Google Scholar', url: `https://scholar.google.com/scholar?q=${scopedQuery}` },
      { label: 'Papers with Code', url: `https://paperswithcode.com/search?q=${query}` }
    ]);
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
      ...getRelatedEntries(entry, { limit: 5, minScore: 2, layerTitles: ['Evaluation & Observability'] }),
      ...getRelatedEntries(entry, { limit: 5, minScore: 2, layerTitles: ['Infrastructure & Runtime', 'Agency & Tool Use'] }),
      ...getRelatedEntries(entry, { limit: 4, minScore: 2, layerTitles: ['Safety, Security & Governance'] }),
      ...pickEntriesByRefs([
        { layerTitle: 'Evaluation & Observability', sectionTitles: ['Evaluation', 'Performance engineering'] },
        { layerTitle: 'Infrastructure & Runtime', sectionTitles: ['Model infrastructure', 'System infrastructure'] },
        { layerTitle: 'Safety, Security & Governance', sectionTitles: ['Safety mechanisms'] }
      ], 10, 2)
    ]).filter(item => item.id !== entry.id).slice(0, 10);

    const operationalLinks = uniqueEntries([
      ...getRelatedEntries(entry, { limit: 8, minScore: 2, layerTitles: ['Agency & Tool Use', 'Infrastructure & Runtime', 'Applications & Domains'] }),
      ...pickEntriesByRefs([
        { layerTitle: 'Agency & Tool Use', sectionTitles: ['Tool interfaces', 'Information tools', 'Action tools'] },
        { layerTitle: 'Infrastructure & Runtime', sectionTitles: ['Model infrastructure', 'System infrastructure'] },
        { layerTitle: 'Applications & Domains', sectionTitles: ['Developer & engineering agents', 'Enterprise & business agents'] }
      ], 10, 2)
    ]).filter(item => item.id !== entry.id).slice(0, 10);

    const relatedLayerTitles = uniqueStrings(crossLayerConnections.map(item => item.layer.title)).slice(0, 3);

    const taxonomyLayer = {
      id: 1,
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
      id: 2,
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
      id: 3,
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

    const resourcesLayer = {
      id: 4,
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

    const layers = [taxonomyLayer, syllabusLayer, structureLayer, resourcesLayer];
    const detailStats = getStats(layers);

    return {
      entry,
      layers,
      brief: buildTopicBrief(entry, { siblings, relatedLayerTitles }),
      stats: detailStats,
      theme: {
        color: entry.layer.color,
        bg: entry.layer.bg,
        label: entry.layer.title
      },
      summary: buildTopicSummary(entry, siblings, relatedLayerTitles),
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

  function setAllLayersOpen(root, isOpen) {
    root.querySelectorAll('.l').forEach(function (layerEl) {
      setLayerOpenState(layerEl, isOpen);
      layerEl.querySelectorAll('.sec').forEach(function (sectionEl) {
        setSectionOpenState(sectionEl, isOpen);
      });
    });
  }

  window.Syllabus = {
    rawData,
    data,
    getText,
    isNew,
    getStats,
    getTopicStatus,
    setTopicStatus,
    cycleTopicStatus,
    subscribeToTopicStatusChanges,
    getTopicResources,
    addTopicResource,
    removeTopicResource,
    subscribeToTopicResourceChanges,
    syncTopicStatusUI,
    renderStatusLegend,
    renderTopicStatusPicker,
    applyPageTheme,
    renderLayerTree,
    filterLayerTree,
    wireHashFocus,
    layersToMarkdown,
    downloadMarkdown,
    getTopicHref,
    getIndexAnchorHref,
    getTopicEntryById,
    buildTopicDetailData,
    setAllLayersOpen
  };
}());
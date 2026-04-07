(function () {
  const rawData = [
    {
      id:1, title:"Foundation Models", color:"#7F77DD", bg:"#EEEDFE",
      sections:[
        {title:"Core transformer architecture", topics:[
          "Attention mechanisms","Multi-head attention","Positional encoding","Feed-forward layers","Layer normalization","Residual connections","Tokenization","Byte-pair encoding (BPE)","SentencePiece / Unigram tokenization","Context windows","KV cache"
        ]},
        {title:"Architecture extensions", topics:[
          "Mixture of Experts (MoE)","Speculative decoding","Structured output / JSON mode","Prompt caching","Quantization and packaging (GPTQ, AWQ, GGUF)","State-space models (Mamba, RWKV)","Grouped Query Attention (GQA)","Multi-Head Latent Attention (MLA)","Sliding window attention","Rotary Position Embedding (RoPE)","Ring attention / infinite context","Retrieval-conditioned architectures (advanced / research)"
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
          "Chain-of-Thought (CoT)","Least-to-Most prompting","ReAct (Reason+Act)","Tree-of-Thought (ToT)","Graph-of-Thought (GoT)","Program-of-Thought (PoT)","Self-consistency","Debate reasoning","Skeleton-of-Thought","Tool-assisted reasoning","Test-time compute scaling","Verifier-guided reasoning","Verification & self-verification"
        ]},
        {title:"Reflection, critique & repair", topics:[
          "Reflection loops","Self-critique","Self-evaluation","Iterative refinement","Reflexion","Critique agents","Trajectory critique and repair","Plan repair after failure","Post-action review loops"
        ]},
        {title:"Training paradigms for agents", topics:[
          "Reinforcement Learning from Human Feedback (RLHF)","Reinforcement Learning from AI Feedback (RLAIF)","Direct Preference Optimization (DPO)","Proximal Policy Optimization (PPO)","Group Relative Policy Optimization (GRPO)","Tool-use fine-tuning","Agent trajectory fine-tuning","Curriculum learning for agents","Bootstrapped self-improvement","Multi-task agent training"
        ]},
        {title:"Agent architectures", topics:[
          "ReAct agents","Plan-and-Execute agents","Reflection agents","Autonomous agents (AutoGPT-style)","Tool-using agents","Generalist agents","Subagent patterns","Mixture-of-Agents (MoA)","World models","Skeleton planner","Compound AI systems","Cognitive architectures (ACT-R, SOAR)"
        ]},
        {title:"Planning & control", topics:[
          "Task decomposition","Hierarchical planning","Agent loop design","Finite-state / rule-based controllers","LLM-based controllers","Planner-executor separation","Replanning / plan repair","Execution monitoring and watchdogs","Goal prioritization","Constraint satisfaction","Stop conditions and escalation criteria","Budget-aware planning"
        ]},
        {title:"Neuro-symbolic & constraint-guided reasoning (advanced / research)", topics:[
          "Logic-neural hybrid architectures","Solver-backed reasoning (SAT/SMT/planners)","Symbolic grounding for LLM reasoning","Knowledge graph-grounded reasoning","Constraint-guided neural generation"
        ]},
        {title:"Meta-cognition", topics:[
          "Confidence monitoring & calibration","Out-of-distribution (OOD) detection","Epistemic vs aleatoric uncertainty","Knowing-when-to-stop (task completion detection)","Selective prediction / abstention when unsure","Self-checking with external verification","Confidence-gated action execution","Resource-bounded reasoning","Planning horizon awareness","Confidence signals and calibration proxies","Metacognitive prompting strategies","Introspective tool-use decisions"
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
          "Vector search (ANN / HNSW)","Hybrid search","Keyword search (BM25)",newTopic("Dense retrieval embeddings", { idSlug: "Embeddings" }),"Reranking",newTopic("Reranker APIs / cross-encoders", { idSlug: "Cohere Rerank / cross-encoders" }),"Query rewriting","Query expansion","ColBERT / late interaction retrieval","HyDE (Hypothetical Document Embeddings)","Contextual retrieval","Reciprocal Rank Fusion (RRF)","Learned sparse retrieval (SPLADE)"
        ]},
        {title:"Chunking & indexing", topics:[
          "Chunking strategies","Sliding window chunking","Document hierarchies","Late chunking","Parent-child retrieval","Recursive / semantic chunking","Agentic chunking","Metadata enrichment & filtering","Multi-index strategies","Indexing pipelines & automation"
        ]},
        {title:"RAG architectures", topics:[
          "Multi-hop RAG","Agentic RAG","Corrective RAG (CRAG)","Self-RAG","GraphRAG","Multimodal RAG","RAPTOR (tree-structured RAG)","Modular RAG pipelines","Adaptive RAG (route by query complexity)","RAG vs fine-tuning vs long context (trade-offs)","RAG evaluation (context relevance, faithfulness)","Cache-augmented generation"
        ]},
        {title:"Knowledge stores", topics:[
          newTopic("Vector databases (Pinecone, Weaviate, Qdrant, Milvus)", { idSlug: "Vector databases (Pinecone, Weaviate, Qdrant)" }),"Knowledge graphs","Relational DBs","Document stores","Conversation history","Episodic logs","Graph databases (Neo4j, Neptune)","Chroma / LanceDB (embedded vector DBs)",newTopic("Operational vector stores (Postgres + pgvector, Elasticsearch / OpenSearch)", { idSlug: "Hybrid stores (Milvus, pgvector)" }),"Multi-tenant knowledge isolation"
        ]},
        {title:"Knowledge quality", topics:[
          "Hallucination detection","Grounding techniques","Freshness & staleness","Data pipelines & ingestion","Source attribution",newTopic("Calibrated confidence & abstention", { idSlug: "Confidence scoring" }),"Fact-checking agents"
        ]}
      ]
    },
    {
      id:4, title:"Agency & Tool Use", color:"#EF9F27", bg:"#FAEEDA",
      sections:[
        {title:"Tool interfaces", topics:[
          "Function calling","Tool schema design (JSON Schema / provider adapters)","Tool selection logic","Read-only vs side-effecting tool boundaries","Idempotent tool design and retry safety","Tool chaining","Tool error handling","Parallel tool calls","Tool result handling","Structured output for tool calls","Tool-use benchmarks and eval suites"
        ]},
        {title:"Information tools", topics:[
          "Web search","Web scraping","APIs & REST","File ingestion (PDF, CSV, DOCX)","Code interpreters","Database queries","Knowledge base Q&A","Screenshot / screen capture tools","OCR & document AI"
        ]},
        {title:"Action tools", topics:[
          "Code execution (sandboxed)","File system operations","Shell / CLI automation","Browser automation","Computer use / GUI agents","Email & calendar APIs","Form filling","Voice & telephony agents","Image / video generation tools"
        ]},
        {title:"Meta tooling", topics:[
          "Tool discovery","Dynamic tool registration","Tool ranking & selection","Capability descriptors and manifests","Provider-specific tool adapters","Tool health checks & fallback policies","Tool learning from feedback","Cost-aware tool selection policies"
        ]},
        {title:"Protocol convergence & standards", topics:[
          "MCP (Model Context Protocol)","A2A protocol","Interoperability standards","MCP server ecosystem","Capability discovery and agent directories","Task handoff and status semantics","Agent cards / manifest formats","OpenAPI / AsyncAPI for agent tool interfaces","Protocol bridging / interop layers (MCP↔A2A)","Transport & session patterns for agent protocols","Cross-vendor agent orchestration standards","Emerging formal interoperability standards (IEEE and others)","Legacy FIPA concepts in modern protocols"
        ]},
        {title:"Agentic browsers", topics:[
          "Browser-as-runtime for AI agents","Browser-native agent products","Operator / computer-use paradigms","DOM interaction models for agent navigation","Accessibility tree interaction for agent navigation","Vision-based web agents (screenshot understanding)","Browser sandboxing for agent safety","Headless vs visual browser agents","Credential & session isolation for browser agents","Reusable browser skills / macros","Web agent benchmarks (WebArena, Mind2Web)"
        ]},
        {title:"Interaction patterns", topics:[
          "Tool-calling loops","Human-in-the-loop (HITL)","Conversational agents","Task-oriented agents","Event-driven agents","Streaming agents","Synchronous vs asynchronous execution","Voice / multimodal I/O","Webhooks & event triggers","Approval workflows","Objective -> execution -> validation loops","Validation checkpoint architecture","Goal decomposition with validation gates","Rollback-on-failure / compensating actions","Human-in-the-loop vs human-on-the-loop vs full autonomy","Adaptive autonomy levels (dynamic delegation)"
        ]},
        {title:"Agent identity & authentication", topics:[
          "OAuth & authentication for agents","Agent credential management","Machine / workload identity for agents (mTLS, service identities)","Delegated authorization (agent acts on behalf of user)","Scoped permission tokens per task","Agent identity cards / manifests","Multi-agent trust chains","Agent signing & provenance verification","Credential rotation for long-running agents","Cross-organizational agent federation"
        ]}
      ]
    },
    {
      id:5, title:"Multi-Agent Systems", color:"#D4537E", bg:"#FBEAF0",
      sections:[
        {title:"Multi-agent architectures", topics:[
          "Orchestrator-subagent pattern","Role-based agent teams","Peer-to-peer agents","Hierarchical agent networks","Debate agents","Mixture-of-Agents (MoA)","Puppeteer + specialist pattern","Governance agents","Agents as tools",newTopic("Adversarial / self-play agent systems", { idSlug: "Competitive agent systems" })
        ]},
        {title:"Agent design patterns", topics:[
          "Router pattern (classify & dispatch)","Map-reduce pattern (parallel fan-out)","Supervisor pattern (manage + route)","Critic / verifier pattern","Planner-executor pattern","Retriever-reader pattern","Generator-evaluator loop","Escalation pattern (agent → human)","Watchdog pattern (monitoring agent)","Assembly line pattern (sequential specialization)","Blackboard pattern (shared workspace)",newTopic("Externalized scratchpad / working-state pattern", { idSlug: "Inner monologue pattern" })
        ]},
        {title:"Coordination & communication", topics:[
          "Message passing","Shared state management","Context handoff","Conflict resolution","Task delegation","Emergent behavior","Termination conditions & handoff criteria","Agent discovery","Agent protocol standardization","Trust & reputation systems"
        ]},
        {title:"Frameworks", topics:[
          "LangChain / LangGraph","LlamaIndex",newTopic("AutoGen (Microsoft)", { idSlug: "AutoGen" }),"CrewAI","OpenAI Agents SDK","Google ADK","PydanticAI","Haystack","Semantic Kernel","Dify","Smolagents (HuggingFace)","Mastra","Vercel AI SDK","Agno (formerly Phidata)","Agency Swarm"
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
          "Vector databases","SQL / NoSQL systems","Object storage",newTopic("Lakehouse / data lake platforms", { idSlug: "Data lakes" }),"Stream processing (Kafka)","Data versioning","Feature stores for agents","Time-series databases for agent metrics"
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
          "Model versioning and registries","Experiment tracking (Weights & Biases, MLflow, Comet)","Model-serving lifecycle (staging, production, retired)","A/B testing infrastructure for models","Feature flags for model routing","Prompt-model co-versioning","Artifact management (models, adapters, prompts)",newTopic("LLM gateway patterns (LiteLLM, Portkey, Kong AI Gateway)", { idSlug: "LLM gateway patterns (LiteLLM, Portkey, Martian)" }),"Model performance monitoring and drift detection","Automated retraining and fine-tuning pipelines","Reproducibility and deterministic inference","Environment parity (dev, staging, prod)"
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
    'Objective -> execution -> validation loops',
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
            newTopic('Input tokens vs output tokens vs reasoning budget'),
            newTopic('Training cutoff vs retrieved freshness vs live tool data'),
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
            newTopic('Prompt engineering vs context engineering'),
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
            newTopic('Reasoning-first default vs routed model mix'),
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
            newTopic('Study governance basics early, then deepen it after real failure modes'),
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
            newTopic('SentencePiece / Unigram tokenization'),
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
              'SentencePiece / Unigram tokenization',
              'Context windows',
              'Positional encoding'
            ].includes(topicText(topic)))
          }),
          syntheticSection('Architecture patterns & extensions', copyTopics('Foundation Models', 'Architecture extensions', topic => [
            'Rotary Position Embedding (RoPE)',
            'Grouped Query Attention (GQA)',
            'Sliding window attention',
            'Mixture of Experts (MoE)',
            'State-space models (Mamba, RWKV)',
            'Multi-Head Latent Attention (MLA)',
            'Ring attention / infinite context'
          ].includes(topicText(topic))), {
            prerequisites: ['Core transformer architecture'],
            sourceRefs: [
              { layerTitle: 'Foundation Models', sectionTitle: 'Architecture extensions' },
              { layerTitle: 'Foundation Models', sectionTitle: 'Core transformer architecture' }
            ]
          }),
          syntheticSection('Model lifecycle & training fundamentals', [
            newTopic('Pretraining and next-token prediction'),
            newTopic('Supervised fine-tuning (SFT)'),
            'Instruction tuning',
            newTopic('Preference tuning and alignment tuning'),
            newTopic('Fine-tuning strategies (full, PEFT, LoRA, QLoRA)'),
            newTopic('Inference-time adaptation vs weight updates'),
            newTopic('Distillation as capability transfer'),
            newTopic('Quantization and packaging (GPTQ, AWQ, GGUF)'),
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
            prerequisites: ['Core transformer architecture', 'Architecture patterns & extensions', 'Model lifecycle & training fundamentals']
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
          copySection('Reasoning & Intelligence', 'Reflection, critique & repair', {
            prerequisites: ['Decision-making & planning']
          }),
          copySection('Reasoning & Intelligence', 'Meta-cognition', {
            prerequisites: ['Reasoning paradigms', 'Reflection, critique & repair']
          }),
          copySection('Reasoning & Intelligence', 'Neuro-symbolic & constraint-guided reasoning (advanced / research)', {
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
            prerequisites: ['Scaling & operations'],
            topics: [
              'Docker containers',
              'Kubernetes',
              'Serverless agents',
              'Persistent agent processes',
              'Edge vs cloud',
              'Blue-green deployments',
              'Single-tenant vs multi-tenant agent platforms',
              'Control plane vs execution plane',
              'Agent-as-a-service',
              'Hybrid local / cloud agents'
            ]
          }),
          syntheticSection('Training & adaptation', dedupeTopics([
            ...copyTopics('Reasoning & Intelligence', 'Training paradigms for agents'),
            ...copyTopics('Infrastructure & Deployment', 'Learning & adaptation').map(topic =>
              topicText(topic) === 'RLHF'
                ? newTopic('Reward modeling for preference tuning', { idSlug: 'RLHF' })
                : topic
            )
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


  window.__SyllabusContent = {
    rawData,
    buildStructuredData,
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


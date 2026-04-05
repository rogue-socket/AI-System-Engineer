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
    // Allow visible topic labels to evolve without breaking stored progress or deep links.
    const idSource = topic.idSlug || topic.text;

    return [
      String(layer.id).padStart(2, '0'),
      slugify(layer.title),
      slugify(section.title),
      slugify(idSource),
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
        kind: 'default',
        text: topic,
        description: '',
        prompt: '',
        actionLabel: '',
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
      kind: topic.kind || 'default',
      text: topic.text,
      description: topic.description || '',
      prompt: topic.prompt || '',
      actionLabel: topic.actionLabel || '',
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
    if (!renderable || renderable.kind !== 'default' || renderable.href || renderable.prerequisites.length || renderable.prerequisiteNote) {
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

  function fallbackCopyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    let copied = false;
    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }

    document.body.removeChild(textarea);
    return copied;
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text)
        .then(() => true)
        .catch(() => fallbackCopyTextToClipboard(text));
    }

    return Promise.resolve(fallbackCopyTextToClipboard(text));
  }

  function renderTopicToken(renderable, options = {}) {
    const wrapper = document.createElement('div');
    wrapper.className = 'topic-token';
    wrapper.dataset.text = [renderable.text, renderable.description, renderable.prompt].filter(Boolean).join(' ').toLowerCase();
    wrapper.dataset.prereqs = renderable.prerequisites.map(item => item.text.toLowerCase()).join(' ');
    wrapper.dataset.status = renderable.status;
    if (renderable.topicId) {
      wrapper.dataset.topicId = renderable.topicId;
    }
    if (options.anchorIds && renderable.anchorId) {
      wrapper.id = renderable.anchorId;
    }

    if (renderable.kind === 'prompt') {
      wrapper.classList.add('prompt-token');

      const head = document.createElement('div');
      head.className = 'prompt-head';

      const info = document.createElement('div');
      info.className = 'prompt-info';

      const label = document.createElement('div');
      label.className = 'prompt-label';
      label.textContent = renderable.text;
      info.appendChild(label);

      if (renderable.description) {
        const description = document.createElement('div');
        description.className = 'prompt-description';
        description.textContent = renderable.description;
        info.appendChild(description);
      }

      const copyButton = document.createElement('button');
      copyButton.type = 'button';
      copyButton.className = 'prompt-copy-button';
      copyButton.textContent = renderable.actionLabel || 'Copy prompt';
      const defaultLabel = copyButton.textContent;
      let resetTimer = null;

      copyButton.addEventListener('click', () => {
        copyTextToClipboard(renderable.prompt).then(copied => {
          window.clearTimeout(resetTimer);
          copyButton.dataset.state = copied ? 'copied' : 'error';
          copyButton.textContent = copied ? 'Copied' : 'Copy failed';
          resetTimer = window.setTimeout(() => {
            copyButton.dataset.state = '';
            copyButton.textContent = defaultLabel;
          }, 1600);
        });
      });

      head.appendChild(info);
      head.appendChild(copyButton);
      wrapper.appendChild(head);

      const body = document.createElement('pre');
      body.className = 'prompt-body';
      body.textContent = renderable.prompt;
      wrapper.appendChild(body);

      return wrapper;
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
          if (renderable.kind === 'prompt') {
            md += `${renderable.text}\n\n`;
            if (renderable.description) {
              md += `> ${renderable.description}\n\n`;
            }
            md += '```text\n';
            md += `${renderable.prompt.replace(/\n+$/g, '')}\n`;
            md += '```\n\n';
            return;
          }

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
    label.textContent = 'Mark this topic';
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
    { pattern: /\bvs\b|trade-offs?|choice|beats|difference between/i, kind: 'comparison' },
    { pattern: /inputs?, state, outputs?, and side effects|compound ai systems|rough system picture/i, kind: 'system-decomposition' },
    { pattern: /^when\b|^why\b|\bbefore\b|\bthen\b|starting point|at the end|budget|frontier|surface area|uncertainty|signal|overhang|deficit|constraints?/i, kind: 'decision-lens' },
    { pattern: /pretraining|next-token|instruction tuning|preference tuning|alignment tuning|rlhf|rlaif|dpo|ppo|grpo|fine-tuning|fine tuning|lora|qlora|peft|online learning|continual learning|personalization|feedback loops?|synthetic data|distillation|model merging|curriculum|trajectory fine-tuning|multi-task agent training|tool-use fine-tuning|bootstrapped self-improvement|rejection sampling|quality filtering|self-play|self-instruct|instruction-following data|trajectory synthesis|simulated environment trajectories/i, kind: 'training-method' },
    { pattern: /read \/ write memory policies|memory selection policies|memory routing|memory ttl|time decay|conflict resolution across memories|personalized vs shared memory|importance scoring|salience|compaction|summarization policies|archival|forgetting|memory provenance|source lineage|memory permissions|access control/i, kind: 'memory-operations' },
    { pattern: /validation|approval|guardrails|permission systems|capability gating|policy enforcement|least privilege|oversight checkpoints|output filtering|boundary testing|kill switches|audit trails|compliance|owasp|eu ai act|nist ai rmf|iso\/iec 42001|responsible ai|liability|accountability|rollback-on-failure|compensating actions|adaptive autonomy|human-in-the-loop|human-on-the-loop|full autonomy|oversight/i, kind: 'policy-control' },
    { pattern: /measuring|detection|detect|robustness|mismatch|unintended behaviors/i, kind: 'detection-measurement' },
    { pattern: /threats?|attack|injection|hijacking|misuse|abuse|poisoning|hallucination|rogue|exfiltration|theft|excessive agency|draining|explosion|exhaustion|drift|misgeneralization|gaming|mismatch|robustness|failure|objective compliance|apparent success|emergent strategy|unintended behaviors|contamination|leakage/i, kind: 'threat-failure' },
    { pattern: /oauth|authentication|credential|mTLS|workload identity|service identities|delegated authorization|authorization frameworks|scoped permission|identity management|identity cards|manifests|trust chains|signing|provenance verification|credential rotation|impersonation prevention|federation|non-repudiation|zero-trust/i, kind: 'identity-trust' },
    { pattern: /protocol|interoperability|openapi|asyncapi|capability discovery|agent directories|task handoff|status semantics|transport|session patterns|interop layers|agent card|manifest|a2a|mcp|fipa/i, kind: 'protocol-standards' },
    { pattern: /runtime environments|execution sandboxes|state persistence models|deterministic vs non-deterministic execution|idempotent task execution|replayability|resumability|event logs|task ledgers|ephemeral vs persistent workers|stateful vs stateless agents|isolation boundaries|checkpointing|recovery|configuration versioning|long-running agent processes|durable execution|background workers|message queues|load balancing|api gateways|agent sandboxing|persistent agent processes|serverless agents|edge vs cloud|blue-green deployments/i, kind: 'runtime-durability' }
  ];

  const topicBriefGuideRules = [
    { pattern: /inputs?, state, outputs?, and side effects|compound ai systems|rough system picture/i, guide: systemDecompositionTopicBriefGuide },
    { pattern: /pretraining|next-token|instruction tuning|preference tuning|alignment tuning|rlhf|rlaif|dpo|ppo|grpo|fine-tuning|fine tuning|lora|qlora|peft|online learning|continual learning|personalization|feedback loops?|synthetic data|distillation|model merging|curriculum|trajectory fine-tuning|multi-task agent training|tool-use fine-tuning|bootstrapped self-improvement|rejection sampling|quality filtering|self-play|self-instruct|instruction-following data|trajectory synthesis|simulated environment trajectories/i, guide: trainingMethodTopicBriefGuide },
    { pattern: /read \/ write memory policies|memory selection policies|memory routing|memory ttl|time decay|conflict resolution across memories|personalized vs shared memory|importance scoring|salience|compaction|summarization policies|archival|forgetting|memory provenance|source lineage|memory permissions|access control/i, guide: memoryOperationsTopicBriefGuide },
    { pattern: /validation|approval|guardrails|permission systems|capability gating|policy enforcement|least privilege|oversight checkpoints|output filtering|boundary testing|kill switches|audit trails|owasp|eu ai act|nist ai rmf|iso\/iec 42001|responsible ai|liability|accountability|compliance|rollback-on-failure|compensating actions|adaptive autonomy|human-in-the-loop|human-on-the-loop|full autonomy|oversight/i, guide: policyControlTopicBriefGuide },
    { pattern: /measuring|detection|detect|robustness|mismatch|unintended behaviors/i, guide: detectionMeasurementTopicBriefGuide },
    { pattern: /threats?|attack|injection|hijacking|misuse|abuse|poisoning|hallucination|rogue|exfiltration|theft|excessive agency|draining|explosion|exhaustion|drift|misgeneralization|gaming|mismatch|robustness|failure|objective compliance|apparent success|emergent strategy|unintended behaviors|contamination|leakage/i, guide: threatFailureTopicBriefGuide },
    { pattern: /oauth|authentication|credential|mTLS|workload identity|service identities|delegated authorization|authorization frameworks|scoped permission|identity management|identity cards|manifests|trust chains|signing|provenance verification|credential rotation|impersonation prevention|federation|non-repudiation|zero-trust/i, guide: identityTrustTopicBriefGuide },
    { pattern: /protocol|interoperability|openapi|asyncapi|capability discovery|agent directories|task handoff|status semantics|transport|session patterns|interop layers|agent card|manifest|a2a|mcp|fipa/i, guide: protocolStandardsTopicBriefGuide },
    { pattern: /runtime environments|execution sandboxes|state persistence models|deterministic vs non-deterministic execution|idempotent task execution|replayability|resumability|event logs|task ledgers|ephemeral vs persistent workers|stateful vs stateless agents|isolation boundaries|checkpointing|recovery|configuration versioning|long-running agent processes|durable execution|background workers|message queues|load balancing|api gateways|agent sandboxing|persistent agent processes|serverless agents|edge vs cloud|blue-green deployments/i, guide: runtimeDurabilityTopicBriefGuide },
    { pattern: /\bvs\b|trade-offs?|choice|beats|difference between|^when\b|^why\b|\bbefore\b|\bthen\b|starting point|at the end|budget|frontier|surface area|uncertainty|signal|overhang|deficit|constraints?/i, guide: distinctionTopicBriefGuide }
  ];

  function getTopicBriefKind(entry) {
    const titleRule = topicBriefKindRules.find(rule => rule.pattern.test(entry.text));
    return titleRule ? titleRule.kind : 'default';
  }

  function getTopicBriefGuide(entry) {
    const titleRule = topicBriefGuideRules.find(rule => rule.pattern.test(entry.text));
    if (titleRule) {
      return titleRule.guide;
    }

    const sectionMatchText = `${entry.section.title} ${entry.layer.title}`;
    const sectionRule = topicBriefSectionRules.find(rule => rule.pattern.test(sectionMatchText));
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

    return text.split(/\s+vs\s+/i).map(part => part.trim()).filter(Boolean);
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
            text: `${entry.text} is a system-mapping topic about the major pieces, flows, or boundaries that make up one agent system. It is less about one isolated algorithm and more about how the moving parts fit together.`
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
            text: `${entry.text} is a design-lens topic about one pressure or constraint that shapes architecture choices upstream. It helps teams notice the hidden variable that should be steering the design.`
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

      case 'training-method':
        return [
          {
            label: 'What it is',
            text: `${entry.text} is a learning-method topic about how model behavior changes through data, optimization, or post-training choices after the base model already exists.`
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
            text: `${entry.text} is a memory-operations topic about how stored context is selected, aged, compressed, shared, or governed after it has already been written.`
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
            text: `${entry.text} is a control-layer topic about where rules, approvals, validation checks, or policy boundaries are enforced before the agent is allowed to continue.`
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
            text: `${entry.text} is a detection-and-measurement topic about how teams notice subtle behavior gaps, robustness limits, or long-horizon failures before they become visible incidents.`
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
            text: `${entry.text} is an identity-and-trust topic about how agents prove who they are, what authority they carry, and how other systems decide whether to honor that authority.`
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
            text: `${entry.text} is an interoperability topic about how agent systems describe capabilities, exchange requests, or integrate through shared conventions instead of bespoke glue.`
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
            text: `${entry.text} is a runtime-durability topic about how work executes, persists, resumes, or stays isolated when the agent runs as software under real operating conditions.`
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
            text: `${entry.text} names a concrete failure or attack mode that can distort behavior, waste resources, or create unsafe outcomes in an otherwise capable agent system.`
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

  const topicPromptOverrides = window.TopicPromptOverrides || Object.freeze({});

  function getTopicPromptFocusAreas(entry, guide, briefKind, comparisonParts) {
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
    if (/\s\/\s|\(|,/.test(entry.text)) {
      focusAreas.push('If the topic names multiple variants, products, or frameworks, explain each one briefly, then extract the shared pattern and trade-offs that connect them.');
    }

    return uniqueStrings(focusAreas).slice(0, 4);
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
    const summary = context.summary || buildTopicSummary(entry, context.siblings || [], context.relatedLayerTitles || []);
    const brief = context.brief || buildTopicBrief(entry, context);
    const prerequisites = dedupeStrings(entry.topic.prerequisites || []).slice(0, 5);
    const siblingNames = uniqueStrings((context.siblings || []).map(item => item.text).filter(text => text && text !== entry.text)).slice(0, 4);
    const crossLayerPaths = uniqueStrings((context.crossLayerConnections || []).map(formatEntryPath)).slice(0, 5);
    const operationalPaths = uniqueStrings((context.operationalLinks || []).map(formatEntryPath)).slice(0, 4);
    const practicePaths = uniqueStrings((context.practiceLinks || []).map(formatEntryPath)).slice(0, 4);
    const focusAreas = getTopicPromptFocusAreas(entry, guide, briefKind, comparisonParts);

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
      ...(comparisonParts.length
        ? [`- Build an explicit comparison of ${joinNaturalLanguage(comparisonParts)} and explain when each side is the better choice.`]
        : []),
      ...focusAreas.map(item => `- ${item}`),
      '- Call out common misconceptions, anti-patterns, and failure modes.',
      '- Explain how an engineer would decide when to use this topic, when not to use it, and what adjacent concepts they should learn next.',
      '- End with a concise mental model, 5 review questions, and 3 hands-on exercises.',
      '',
      'Output requirements:',
      '- Use clear headings and short subsections.',
      '- Include at least one comparison table or decision matrix.',
      '- Include one practical end-to-end example grounded in real agent systems.',
      '- Separate fundamentals, trade-offs, failure modes, and implementation guidance.',
      '- If a prerequisite matters, explain it inline briefly instead of assuming I already know it.',
      '',
      'Start the lesson now.'
    ].join('\n');
  }

  const officialResourceMatchers = [
    { pattern: /\bMCP\b|\bModel Context Protocol\b/i, label: 'Model Context Protocol docs', url: 'https://modelcontextprotocol.io/introduction' },
    { pattern: /\bA2A\b|\bAgent2Agent\b/i, label: 'A2A protocol docs', url: 'https://google.github.io/A2A/' },
    { pattern: /\bOpenAI Agents SDK\b/i, label: 'OpenAI Agents SDK docs', url: 'https://openai.github.io/openai-agents-python/' },
    { pattern: /\bOpenAI\b|\bGPT-4o\b|\bGPT-4V\b|\bCodex\b|\bRealtime API\b/i, label: 'OpenAI docs', url: 'https://platform.openai.com/docs/overview' },
    { pattern: /\bAnthropic\b|\bClaude\b/i, label: 'Anthropic docs', url: 'https://docs.anthropic.com/' },
    { pattern: /\bGoogle ADK\b|\bAgent Development Kit\b/i, label: 'Google ADK docs', url: 'https://adk.dev/' },
    { pattern: /\bGemini\b|\bGoogle ADK\b|\bProject Mariner\b/i, label: 'Google AI docs', url: 'https://ai.google.dev/' },
    { pattern: /\bLangChain\b|\bLangGraph\b/i, label: 'LangChain docs', url: 'https://docs.langchain.com/' },
    { pattern: /\bLlamaIndex\b/i, label: 'LlamaIndex docs', url: 'https://docs.llamaindex.ai/' },
    { pattern: /\bAutoGen\b/i, label: 'Microsoft AutoGen docs', url: 'https://microsoft.github.io/autogen/' },
    { pattern: /\bSemantic Kernel\b/i, label: 'Semantic Kernel docs', url: 'https://learn.microsoft.com/en-us/semantic-kernel/overview/' },
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
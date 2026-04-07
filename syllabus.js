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
    { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Interoperability & standards', kind: 'protocol-standards', guide: protocolStandardsTopicBriefGuide }
    ,{ layerTitle: 'Evaluation & Observability', sectionTitle: 'Specification vs emergence gap', guide: specificationGapTopicBriefGuide }
    ,{ layerTitle: 'Infrastructure & Runtime', sectionTitle: 'Agent FinOps & cost economics', guide: finOpsTopicBriefGuide }
    ,{ layerTitle: 'Infrastructure & Runtime', sectionTitle: 'MLOps & LLMOps', guide: mlopsLifecycleTopicBriefGuide }
    ,{ layerTitle: 'Safety, Security & Governance', sectionTitle: 'Alignment', guide: alignmentTopicBriefGuide }
    ,{ layerTitle: 'Safety, Security & Governance', sectionTitle: 'Privacy & data protection', guide: privacyDataProtectionTopicBriefGuide }
  ];

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
      sectionTitle: 'Decision-making & planning',
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
      sectionTitle: 'Decision-making & planning',
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
      sectionTitle: 'Decision-making & planning',
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
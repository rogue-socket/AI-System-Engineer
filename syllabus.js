(function () {
  const rawData = [
    {
      id:1, title:"Foundation Models", color:"#7F77DD", bg:"#EEEDFE",
      sections:[
        {title:"Core transformer architecture", topics:[
          "Attention mechanisms","Multi-head attention","Positional encoding","Feed-forward layers","Layer normalization","Residual connections","Tokenization","Byte-pair encoding (BPE)","Context windows","KV cache"
        ]},
        {title:"Architecture extensions", topics:[
          "Mixture of Experts (MoE)","Speculative decoding",{text:"Structured output / JSON mode",isNew:true},{text:"Prompt caching",isNew:true},{text:"Quantization (GPTQ, AWQ, GGUF)",isNew:true},{text:"State-space models (Mamba, RWKV)",isNew:true},{text:"Grouped Query Attention (GQA)",isNew:true},{text:"Multi-Head Latent Attention (MLA)",isNew:true},{text:"Sliding window attention",isNew:true},{text:"Rotary Position Embedding (RoPE)",isNew:true},{text:"Ring attention / infinite context",isNew:true},{text:"Retrieval-augmented generation at architecture level",isNew:true}
        ]},
        {title:"Model families", topics:[
          "GPT-style (decoder-only)","BERT-style (encoder-only)","T5-style (encoder-decoder)","Multimodal models (LMM/VLM)","Small language models (SLM)","Open-source vs proprietary","Model cards & documentation"
        ]},
        {title:"Embedding & retrieval models", topics:[
          {text:"Text embedding models (OpenAI, Cohere, Voyage)",isNew:true},{text:"Open embedding models (BGE, E5, GTE, Nomic)",isNew:true},{text:"Multimodal embeddings (CLIP, SigLIP)",isNew:true},{text:"Reranker models (cross-encoders)",isNew:true},{text:"ColBERT / late interaction models",isNew:true},{text:"Matryoshka embeddings (variable dimension)",isNew:true},{text:"Embedding fine-tuning & domain adaptation",isNew:true},{text:"MTEB benchmark & embedding leaderboards",isNew:true}
        ]},
        {title:"Voice & audio models", topics:[
          {text:"Text-to-speech (ElevenLabs, OpenAI TTS)",isNew:true},{text:"Speech-to-text (Whisper, Deepgram, AssemblyAI)",isNew:true},{text:"Voice cloning & synthesis",isNew:true},{text:"Real-time voice agents (OpenAI Realtime API)",isNew:true},{text:"Audio understanding models",isNew:true},{text:"Voice-first agent architectures",isNew:true}
        ]},
        {title:"Reasoning & thinking models", topics:[
          {text:"OpenAI o1 / o1-pro / o3 / o4-mini",isNew:true},{text:"DeepSeek-R1 / R1-Zero / R1-0528",isNew:true},{text:"Claude with extended thinking (Anthropic)",isNew:true},{text:"Gemini 2.0 Flash Thinking / Gemini 2.5 Pro",isNew:true},{text:"Qwen QwQ / Qwen3 thinking mode",isNew:true},{text:"Grok 3 (xAI) with reasoning",isNew:true},{text:"Phi-4-reasoning (Microsoft)",isNew:true},{text:"Llama 4 Maverick / Scout reasoning",isNew:true},{text:"Mistral Large with reasoning",isNew:true},{text:"Command R7B with reasoning (Cohere)",isNew:true},{text:"Kimi k1.5 (Moonshot AI)",isNew:true},{text:"Marco-o1 (Alibaba DAMO)",isNew:true},{text:"Skywork-o1 (Kunlun Tech)",isNew:true},{text:"Open-source reasoning distillation (R1→smaller models)",isNew:true},{text:"Chain-of-thought tokens / thinking tokens",isNew:true},{text:"Thinking budget / max_thinking_tokens",isNew:true},{text:"Test-time compute scaling laws",isNew:true},{text:"Adaptive compute allocation per query",isNew:true},{text:"Best-of-N sampling / rejection sampling",isNew:true},{text:"GRPO (Group Relative Policy Optimization)",isNew:true},{text:"Hybrid thinking / non-thinking modes",isNew:true},{text:"Reasoning traces as training signal",isNew:true},{text:"Supervised fine-tuning on reasoning traces (SFT-on-CoT)",isNew:true},{text:"RL from verifiable rewards for reasoning",isNew:true}
        ]},
        {title:"Multimodal & vision models", topics:[
          {text:"GPT-4o / GPT-4V (OpenAI)",isNew:true},{text:"Claude 3.5 / Claude 4 with vision (Anthropic)",isNew:true},{text:"Gemini 2.0 / 2.5 multimodal (Google)",isNew:true},{text:"Llama 4 multimodal (Meta)",isNew:true},{text:"Qwen-VL / Qwen2.5-VL (Alibaba)",isNew:true},{text:"Pixtral (Mistral)",isNew:true},{text:"InternVL / InternVL2 (Shanghai AI Lab)",isNew:true},{text:"LLaVA / LLaVA-NeXT",isNew:true},{text:"Idefics 2/3 (HuggingFace)",isNew:true},{text:"CogVLM / CogAgent",isNew:true},{text:"Florence-2 (Microsoft)",isNew:true},{text:"Image understanding vs generation models",isNew:true},{text:"Video understanding models",isNew:true},{text:"Vision-language grounding",isNew:true}
        ]},
        {title:"Tool-calling & code models", topics:[
          {text:"Function-calling fine-tuned models",isNew:true},{text:"DeepSeek-Coder / DeepSeek-Coder-V2",isNew:true},{text:"OpenAI Codex (CLI agent)",isNew:true},{text:"StarCoder / StarCoder2 (BigCode)",isNew:true},{text:"Qwen-Coder (Qwen2.5-Coder)",isNew:true},{text:"Claude with tool use",isNew:true},{text:"Llama Code variants",isNew:true},{text:"CodeGemma (Google)",isNew:true},{text:"WizardCoder",isNew:true},{text:"Codestral (Mistral)",isNew:true},{text:"Granite Code (IBM)",isNew:true},{text:"Arctic (Snowflake)",isNew:true},{text:"Nemotron (NVIDIA)",isNew:true},{text:"Tool-use fine-tuning datasets (ToolBench, API-Bank)",isNew:true}
        ]},
        {title:"Open-weight model ecosystem", topics:[
          {text:"Llama 3 / 3.1 / Llama 4 (Meta)",isNew:true},{text:"DeepSeek V3 / V3.1 / R1 (MIT license)",isNew:true},{text:"Mistral / Mixtral / Mistral Large",isNew:true},{text:"Qwen 2.5 / Qwen3 (Alibaba)",isNew:true},{text:"Gemma / Gemma 2 (Google)",isNew:true},{text:"Phi-3 / Phi-4 (Microsoft)",isNew:true},{text:"Command R / Command R+ (Cohere)",isNew:true},{text:"Yi series (01.AI)",isNew:true},{text:"Open-weight vs open-source licensing distinctions",isNew:true},{text:"Model distillation from closed models (controversy)",isNew:true},{text:"Hugging Face Hub as distribution ecosystem",isNew:true},{text:"Benchmark gaming & evaluation integrity",isNew:true}
        ]},
        {title:"Inference optimization", topics:[
          {text:"Speculative decoding (draft + verifier)",isNew:true},{text:"KV cache compression (MLA)",isNew:true},{text:"Continuous batching",isNew:true},{text:"PagedAttention (vLLM)",isNew:true},{text:"Multi-token prediction",isNew:true},{text:"Mixed-precision inference (FP8, BF16)",isNew:true},{text:"Native Sparse Attention",isNew:true},{text:"MoE inference routing",isNew:true},{text:"Tensor / pipeline parallelism for serving",isNew:true},{text:"Prefix caching / prompt caching",isNew:true}
        ]},
        {title:"Prompt engineering", topics:[
          "Zero-shot prompting","Few-shot prompting","Instruction tuning","System vs user prompts","Prompt templates","Meta-prompting","Prompt chaining","Automatic prompt optimization","Prompt compression",{text:"Role prompting",isNew:true},{text:"Structured output prompting",isNew:true}
        ]}
      ]
    },
    {
      id:2, title:"Reasoning & Intelligence", color:"#1D9E75", bg:"#E1F5EE",
      sections:[
        {title:"Reasoning paradigms", topics:[
          "Chain-of-Thought (CoT)","ReAct (Reason+Act)","Tree-of-Thought (ToT)","Graph-of-Thought (GoT)","Program-of-Thought (PoT)","Self-consistency","Debate reasoning","Skeleton-of-Thought","Chain-of-Emotion",{text:"Test-time compute scaling",isNew:true},{text:"Process reward models (PRM)",isNew:true},{text:"Outcome reward models (ORM)",isNew:true},{text:"Verification & self-verification",isNew:true}
        ]},
        {title:"Reflection & self-improvement", topics:[
          "Reflection loops","Self-critique","Self-evaluation","Iterative refinement","Constitutional AI","Self-play","Online learning from feedback",{text:"Reward modeling",isNew:true},{text:"Critique agents",isNew:true}
        ]},
        {title:"Training paradigms for agents", topics:[
          {text:"Reinforcement Learning from Human Feedback (RLHF)",isNew:true},{text:"Reinforcement Learning from AI Feedback (RLAIF)",isNew:true},{text:"Direct Preference Optimization (DPO)",isNew:true},{text:"Proximal Policy Optimization (PPO)",isNew:true},{text:"Group Relative Policy Optimization (GRPO)",isNew:true},{text:"Tool-use fine-tuning",isNew:true},{text:"Agent trajectory fine-tuning",isNew:true},{text:"Curriculum learning for agents",isNew:true},{text:"Bootstrapped self-improvement",isNew:true},{text:"Multi-task agent training",isNew:true}
        ]},
        {title:"Agent architectures", topics:[
          "ReAct agents","Plan-and-Execute agents","Reflection agents","Autonomous agents (AutoGPT-style)","Tool-using agents","Generalist agents","Subagent patterns","Mixture-of-Agents (MoA)","World models",{text:"Skeleton planner",isNew:true},{text:"Compound AI systems",isNew:true},{text:"Cognitive architectures (ACT-R, SOAR)",isNew:true}
        ]},
        {title:"Planning & control", topics:[
          "Task decomposition","Hierarchical planning","Agent loop design","Rule-based controllers","LLM-based controllers","Execution engines","Retry & backoff strategies","Failure handling","Goal prioritization","Constraint satisfaction",{text:"Monte Carlo Tree Search planning",isNew:true},{text:"Budget-aware planning",isNew:true}
        ]},
        {title:"Neuro-symbolic AI", topics:[
          {text:"Logic-neural hybrid architectures",isNew:true},{text:"Kautz taxonomy of neurosymbolic architectures",isNew:true},{text:"Differentiable logic programming (Scallop, DeepProbLog)",isNew:true},{text:"Logic Tensor Networks (LTNs)",isNew:true},{text:"Neural Theorem Provers",isNew:true},{text:"Knowledge graph-grounded reasoning",isNew:true},{text:"System 1 / System 2 dual-process models",isNew:true},{text:"Symbolic grounding for LLM reasoning",isNew:true},{text:"Neurosymbolic approaches to hallucination reduction",isNew:true},{text:"Constraint-guided neural generation",isNew:true},{text:"Abductive learning",isNew:true},{text:"Probabilistic neurosymbolic integration (ProbLog)",isNew:true}
        ]},
        {title:"Meta-cognition", topics:[
          {text:"Confidence monitoring & calibration",isNew:true},{text:"Out-of-distribution (OOD) detection",isNew:true},{text:"Epistemic vs aleatoric uncertainty",isNew:true},{text:"Knowing-when-to-stop (task completion detection)",isNew:true},{text:"Selective prediction / abstention when unsure",isNew:true},{text:"Hallucination self-detection",isNew:true},{text:"Confidence-gated action execution",isNew:true},{text:"Resource-bounded reasoning",isNew:true},{text:"Planning horizon awareness",isNew:true},{text:"Model-internal uncertainty signals (logprob analysis)",isNew:true},{text:"Metacognitive prompting strategies",isNew:true},{text:"Introspective tool-use decisions",isNew:true}
        ]}
      ]
    },
    {
      id:3, title:"Memory & Knowledge", color:"#378ADD", bg:"#E6F1FB",
      sections:[
        {title:"Memory taxonomy", topics:[
          "In-context (working) memory","External / long-term memory","Episodic memory","Semantic memory","Procedural memory","Memory compression","Memory versioning","Memory pruning",{text:"MemGPT / Letta patterns",isNew:true},{text:"Context window management",isNew:true}
        ]},
        {title:"Retrieval techniques", topics:[
          "Vector search (ANN / HNSW)","Hybrid search","Keyword search (BM25)","Embeddings","Reranking","Cohere Rerank / cross-encoders","Query rewriting","Query expansion",{text:"ColBERT / late interaction retrieval",isNew:true},{text:"HyDE (Hypothetical Document Embeddings)",isNew:true},{text:"Contextual retrieval",isNew:true},{text:"Reciprocal Rank Fusion (RRF)",isNew:true},{text:"Learned sparse retrieval (SPLADE)",isNew:true}
        ]},
        {title:"Chunking & indexing", topics:[
          "Chunking strategies","Sliding window chunking","Document hierarchies",{text:"Late chunking",isNew:true},{text:"Parent-child retrieval",isNew:true},{text:"Recursive / semantic chunking",isNew:true},{text:"Agentic chunking",isNew:true},{text:"Metadata enrichment & filtering",isNew:true},{text:"Multi-index strategies",isNew:true},{text:"Indexing pipelines & automation",isNew:true}
        ]},
        {title:"RAG architectures", topics:[
          "Multi-hop RAG","Agentic RAG","Corrective RAG (CRAG)","Self-RAG",{text:"GraphRAG",isNew:true},{text:"Multimodal RAG",isNew:true},{text:"RAPTOR (tree-structured RAG)",isNew:true},{text:"Modular RAG pipelines",isNew:true},{text:"Adaptive RAG (route by query complexity)",isNew:true},{text:"RAG vs fine-tuning vs long context (trade-offs)",isNew:true},{text:"RAG evaluation (context relevance, faithfulness)",isNew:true},{text:"Cache-augmented generation",isNew:true}
        ]},
        {title:"Knowledge stores", topics:[
          "Vector databases (Pinecone, Weaviate, Qdrant)","Knowledge graphs","Relational DBs","Document stores","Conversation history","Episodic logs",{text:"Graph databases (Neo4j, Neptune)",isNew:true},{text:"Chroma / LanceDB (embedded vector DBs)",isNew:true},{text:"Hybrid stores (Milvus, pgvector)",isNew:true},{text:"Multi-tenant knowledge isolation",isNew:true}
        ]},
        {title:"Knowledge quality", topics:[
          "Hallucination detection","Grounding techniques","Freshness & staleness","Data pipelines & ingestion","Source attribution","Confidence scoring",{text:"Fact-checking agents",isNew:true}
        ]}
      ]
    },
    {
      id:4, title:"Agency & Tool Use", color:"#EF9F27", bg:"#FAEEDA",
      sections:[
        {title:"Tool interfaces", topics:[
          "Function calling","Tool schema design (OpenAI / Anthropic style)","Tool selection logic","Tool chaining","Tool error handling","Parallel tool calls","Tool result handling",{text:"Structured output for tool calls",isNew:true},{text:"Tool-use benchmarks (BFCL)",isNew:true}
        ]},
        {title:"Information tools", topics:[
          "Web search","Web scraping","APIs & REST","File ingestion (PDF, CSV, DOCX)","Code interpreters","Database queries",{text:"Knowledge base Q&A",isNew:true},{text:"Screenshot / screen capture tools",isNew:true},{text:"OCR & document AI",isNew:true}
        ]},
        {title:"Action tools", topics:[
          "Code execution (sandboxed)","File system operations","Shell / CLI automation","Browser automation",{text:"Computer use / GUI agents",isNew:true},"Email & calendar APIs","Form filling",{text:"Voice & telephony agents",isNew:true},{text:"Image / video generation tools",isNew:true}
        ]},
        {title:"Meta tooling", topics:[
          "Tool discovery","Dynamic tool registration","Tool ranking & selection","Tool learning from feedback","OpenAI tool schema",{text:"Cost-aware tool selection policies",isNew:true}
        ]},
        {title:"Protocol convergence & standards", topics:[
          "MCP (Model Context Protocol)","A2A protocol",{text:"ACP (Agent Communication Protocol)",isNew:true},"Interoperability standards",{text:"MCP server ecosystem",isNew:true},{text:"Agent Network Protocol (ANP)",isNew:true},{text:"Agentic AI Foundation (Linux Foundation)",isNew:true},{text:"IEEE P3394 — Agent Interoperability Standard",isNew:true},{text:"Protocol bridging / interop layers (MCP↔A2A)",isNew:true},{text:"Agent capability discovery & registry standards",isNew:true},{text:"Standardized agent card / manifest formats",isNew:true},{text:"OpenAPI / AsyncAPI for agent tool interfaces",isNew:true},{text:"Cross-vendor agent orchestration standards",isNew:true},{text:"FIPA-legacy concepts in modern protocols",isNew:true}
        ]},
        {title:"Agentic browsers", topics:[
          {text:"Browser-as-runtime for AI agents",isNew:true},{text:"Browser Company Dia",isNew:true},{text:"Perplexity Comet",isNew:true},{text:"Google Project Mariner",isNew:true},{text:"Operator / Computer Use paradigms (Anthropic, OpenAI)",isNew:true},{text:"DOM interaction models for agent navigation",isNew:true},{text:"Browser sandboxing for agent safety",isNew:true},{text:"Vision-based web agents (screenshot understanding)",isNew:true},{text:"Headless vs visual browser agents",isNew:true},{text:"Credential & session isolation for browser agents",isNew:true},{text:"Browser Skills (user-defined agentic shortcuts)",isNew:true},{text:"Web agent benchmarks (WebArena, Mind2Web)",isNew:true}
        ]},
        {title:"Interaction patterns", topics:[
          "Tool-calling loops","Human-in-the-loop (HITL)","Conversational agents","Task-oriented agents","Event-driven agents","Streaming agents","Sync vs async","Voice / multimodal I/O",{text:"Webhooks & event triggers",isNew:true},{text:"Approval workflows",isNew:true},{text:"Objective-Validation Protocol (OVP) paradigm",isNew:true},{text:"Validation checkpoint architecture",isNew:true},{text:"Goal decomposition with validation gates",isNew:true},{text:"Rollback-on-failure / compensating actions",isNew:true},{text:"Human-in-the-loop vs human-on-the-loop vs full autonomy",isNew:true},{text:"Adaptive autonomy levels (dynamic delegation)",isNew:true}
        ]},
        {title:"Agent identity & authentication", topics:[
          {text:"OAuth & authentication for agents",isNew:true},{text:"Agent credential management",isNew:true},{text:"Machine identity certificates (mTLS)",isNew:true},{text:"Delegated authorization (agent acts on behalf of user)",isNew:true},{text:"Scoped permission tokens per task",isNew:true},{text:"Agent identity cards / manifests",isNew:true},{text:"Multi-agent trust chains",isNew:true},{text:"Agent signing & provenance verification",isNew:true},{text:"Credential rotation for long-running agents",isNew:true},{text:"Cross-organizational agent federation",isNew:true}
        ]}
      ]
    },
    {
      id:5, title:"Multi-Agent Systems", color:"#D4537E", bg:"#FBEAF0",
      sections:[
        {title:"Multi-agent architectures", topics:[
          "Orchestrator-subagent pattern","Role-based agent teams","Peer-to-peer agents","Hierarchical agent networks","Debate agents","Mixture-of-Agents (MoA)","Puppeteer + specialist pattern",{text:"Governance agents",isNew:true},{text:"Agent marketplaces",isNew:true},{text:"Competitive agent systems",isNew:true}
        ]},
        {title:"Agent design patterns", topics:[
          {text:"Router pattern (classify & dispatch)",isNew:true},{text:"Map-reduce pattern (parallel fan-out)",isNew:true},{text:"Supervisor pattern (manage + route)",isNew:true},{text:"Critic / verifier pattern",isNew:true},{text:"Planner-executor pattern",isNew:true},{text:"Retriever-reader pattern",isNew:true},{text:"Generator-evaluator loop",isNew:true},{text:"Escalation pattern (agent → human)",isNew:true},{text:"Watchdog pattern (monitoring agent)",isNew:true},{text:"Assembly line pattern (sequential specialization)",isNew:true},{text:"Blackboard pattern (shared workspace)",isNew:true},{text:"Inner monologue pattern",isNew:true}
        ]},
        {title:"Coordination & communication", topics:[
          "Message passing","Shared state management","Context handoff","Conflict resolution","Task delegation","Emergent behavior","Swarm intelligence","Agent discovery",{text:"Agent protocol standardization",isNew:true},{text:"Trust & reputation systems",isNew:true}
        ]},
        {title:"Frameworks", topics:[
          "LangChain / LangGraph","LlamaIndex","AutoGen","CrewAI","OpenAI Agents SDK","Google ADK","PydanticAI","Haystack","Microsoft AutoGen","Dify",{text:"Smolagents (HuggingFace)",isNew:true},{text:"Mastra",isNew:true},{text:"Vercel AI SDK",isNew:true},{text:"Agno (formerly Phidata)",isNew:true},{text:"Agency Swarm",isNew:true}
        ]},
        {title:"Workflow systems", topics:[
          "DAG pipelines","State machines","Event-driven orchestration","Async orchestration","Parallel execution","Fan-out / fan-in","Workflow recovery & checkpointing",{text:"Long-running agent processes",isNew:true},{text:"Durable execution (Temporal, Inngest)",isNew:true}
        ]},
        {title:"Failure modes at scale", topics:[
          {text:"Coordination collapse (deadlock / live-lock)",isNew:true},{text:"Authority ambiguity (unclear decision ownership)",isNew:true},{text:"Cascade failures across agent hops",isNew:true},{text:"Deference loops (agents deferring indefinitely)",isNew:true},{text:"Goal drift in long-running workflows",isNew:true},{text:"Herding behavior (convergence on suboptimal solution)",isNew:true},{text:"Communication overhead explosion (O(n²) messaging)",isNew:true},{text:"Context window exhaustion in multi-turn chains",isNew:true},{text:"Hallucination amplification across hops",isNew:true},{text:"Silent failure (false success reporting)",isNew:true},{text:"Conflicting sub-goal resolution failures",isNew:true},{text:"Trust chain breakdown (compromised agent in pipeline)",isNew:true},{text:"Emergent adversarial dynamics between cooperative agents",isNew:true}
        ]}
      ]
    },
    {
      id:6, title:"Infrastructure & Deployment", color:"#888780", bg:"#F1EFE8",
      sections:[
        {title:"Model infrastructure", topics:[
          "API providers (OpenAI, Anthropic, Google)","Local inference (Ollama, vLLM, llama.cpp)","Model routing","Model switching","Multi-model ensembles","Token streaming",{text:"Inference providers (Groq, Together, Fireworks)",isNew:true},{text:"GPU orchestration",isNew:true},{text:"Model distillation",isNew:true}
        ]},
        {title:"Data infrastructure", topics:[
          "Vector databases","SQL / NoSQL systems","Object storage","Data lakes","Stream processing (Kafka)","Data versioning",{text:"Feature stores for agents",isNew:true},{text:"Time-series databases for agent metrics",isNew:true}
        ]},
        {title:"Scaling & operations", topics:[
          {text:"Horizontal scaling of agent fleets",isNew:true},{text:"Agent lifecycle management",isNew:true},{text:"Auto-scaling based on queue depth",isNew:true},{text:"Multi-region agent deployment",isNew:true},{text:"Agent health checks & heartbeats",isNew:true},{text:"Graceful degradation strategies",isNew:true},{text:"Version management for agent configs",isNew:true},{text:"Canary deployments for agents",isNew:true},{text:"Configuration management (prompts, tools, models)",isNew:true},{text:"Agent dependency management",isNew:true}
        ]},
        {title:"System infrastructure", topics:[
          "Caching (Redis, semantic cache)","Message queues","Background workers","Rate limiting","Load balancing","API gateways",{text:"Agent sandboxing (E2B, Modal, Daytona)",isNew:true},{text:"MCP server hosting",isNew:true}
        ]},
        {title:"Deployment patterns", topics:[
          "Docker containers","Kubernetes","Serverless agents","Persistent agent processes","Edge vs cloud","Blue-green deployments","Agent registries",{text:"Shadow AI discovery",isNew:true},{text:"Agent-as-a-service",isNew:true},{text:"Hybrid local / cloud agents",isNew:true}
        ]},
        {title:"Learning & adaptation", topics:[
          "Fine-tuning (full, PEFT, LoRA, QLoRA)","RLHF","Direct Preference Optimization (DPO)","Continual learning","Online learning","Personalization systems","Feedback loops","Synthetic data generation",{text:"Model merging (TIES, DARE, SLERP)",isNew:true},{text:"Preference tuning (KTO, IPO)",isNew:true}
        ]},
        {title:"Synthetic data for agents", topics:[
          {text:"LLM-generated instruction-following data",isNew:true},{text:"Rejection sampling for quality filtering",isNew:true},{text:"Self-play / self-instruct data generation",isNew:true},{text:"Distillation from frontier models",isNew:true},{text:"Simulated environment trajectories for tool-use",isNew:true},{text:"Multi-turn agentic trajectory synthesis",isNew:true},{text:"Verification-based data quality filtering",isNew:true},{text:"Contamination & benchmark leakage risks",isNew:true}
        ]},
        {title:"Agent FinOps & cost economics", topics:[
          {text:"Token budgeting per task",isNew:true},{text:"Cost-per-task modeling & metering",isNew:true},{text:"Model routing for cost (cheap-model-first cascades)",isNew:true},{text:"Multi-step pipeline budget allocation",isNew:true},{text:"Inference cost vs accuracy trade-off curves",isNew:true},{text:"Agent ROI frameworks",isNew:true},{text:"Token-level cost attribution & chargebacks",isNew:true},{text:"Prompt caching economics (KV reuse savings)",isNew:true},{text:"Reasoning-token cost accounting",isNew:true},{text:"Cost-aware tool selection policies",isNew:true},{text:"Agent spend observability dashboards",isNew:true},{text:"FinOps governance for autonomous agent pipelines",isNew:true}
        ]}
      ]
    },
    {
      id:7, title:"Safety, Security & Governance", color:"#E24B4A", bg:"#FCEBEB",
      sections:[
        {title:"Agent-specific threats", topics:[
          "Prompt injection","Indirect prompt injection","Goal hijacking","Tool misuse","Identity abuse",{text:"Memory poisoning",isNew:true},{text:"Cascading hallucinations",isNew:true},{text:"Rogue agents",isNew:true},"Supply chain attacks on tools","Data exfiltration via agents",{text:"Multi-hop prompt injection",isNew:true},{text:"Agent credential theft",isNew:true},{text:"Excessive agency",isNew:true}
        ]},
        {title:"Safety mechanisms", topics:[
          "Guardrails","Output validation","Sandboxing","Permission systems (least privilege)","Capability gating","Red teaming","Constitutional AI","Kill switches","Human oversight checkpoints",{text:"Input / output filtering",isNew:true},{text:"Agent boundary testing",isNew:true},{text:"Canary tokens",isNew:true}
        ]},
        {title:"Governance & compliance", topics:[
          {text:"OWASP Agentic AI Top 10",isNew:true},{text:"EU AI Act",isNew:true},{text:"NIST AI RMF",isNew:true},{text:"ISO/IEC 42001",isNew:true},"Agent identity management","Agent registries & inventories","Audit trails","Policy enforcement","Zero-trust for agents","Regulatory mapping",{text:"Agent authorization frameworks",isNew:true},{text:"Responsible AI frameworks",isNew:true},{text:"Agent liability & accountability",isNew:true},{text:"Agentic AI Foundation (Linux Foundation governance)",isNew:true},{text:"Open governance for agent protocols",isNew:true},{text:"Agent impersonation prevention",isNew:true},{text:"Non-repudiation for agent actions",isNew:true}
        ]},
        {title:"Alignment", topics:[
          "Value alignment","Intent detection","Behavioral monitoring","Transparency & explainability","Bias detection","Fairness metrics","Controllability"
        ]},
        {title:"Privacy & data protection", topics:[
          {text:"PII detection & redaction in agent pipelines",isNew:true},{text:"Data minimization for agent context",isNew:true},{text:"Consent management for agent data use",isNew:true},{text:"Right-to-erasure in agent memory",isNew:true},{text:"Differential privacy for agent training",isNew:true},{text:"Data residency & sovereignty",isNew:true},{text:"Agent-to-agent data sharing policies",isNew:true},{text:"Confidential computing for agent inference",isNew:true}
        ]}
      ]
    },
    {
      id:8, title:"Evaluation, Observability & Applications", color:"#639922", bg:"#EAF3DE",
      sections:[
        {title:"Evaluation", topics:[
          "Automated benchmarks (MMLU, HumanEval, GAIA)","Human evaluation","Task success rate","Hallucination detection","Faithfulness scoring","Relevance scoring","End-to-end agent evals","Multi-turn evals","Adversarial testing","A/B testing agents",{text:"SWE-bench",isNew:true},{text:"WebArena",isNew:true},{text:"AgentBench",isNew:true},{text:"BFCL (Berkeley Function Calling Leaderboard)",isNew:true},{text:"ToolBench",isNew:true}
        ]},
        {title:"Observability", topics:[
          "Distributed tracing (LangSmith, Langfuse)","Step-level logging","Cost tracking","Latency monitoring","Token usage dashboards","Agent audit logs",{text:"OpenTelemetry for agents",isNew:true},{text:"Arize / Phoenix",isNew:true},{text:"Braintrust",isNew:true}
        ]},
        {title:"Debugging & testing", topics:[
          "Prompt debugging","Tool call debugging",{text:"Deterministic replay",isNew:true},"Failure analysis","Unit tests for agents","Integration tests","Regression testing","Chaos engineering for agents",{text:"Snapshot testing for prompts",isNew:true},{text:"Mock tool servers for testing",isNew:true},{text:"Agent simulation environments",isNew:true}
        ]},
        {title:"Performance engineering", topics:[
          "Latency optimization","Cost optimization","Semantic caching","Parallel execution","Batching","Model routing (small→large)","Prompt compression","Context pruning"
        ]},
        {title:"Developer & engineering agents", topics:[
          "Coding agents",{text:"Agentic coding (Cursor, Copilot, Devin)",isNew:true},{text:"Code review agents",isNew:true},{text:"DevOps / SRE agents",isNew:true},{text:"Testing & QA agents",isNew:true},{text:"Documentation generation agents",isNew:true},{text:"Database migration agents",isNew:true},{text:"Security scanning agents",isNew:true}
        ]},
        {title:"Enterprise & business agents", topics:[
          "Customer support agents","Data analysis agents","Automation / RPA agents","Financial agents","Legal agents",{text:"Sales & marketing agents",isNew:true},{text:"Supply chain agents",isNew:true},{text:"HR & recruiting agents",isNew:true},{text:"Compliance & audit agents",isNew:true},{text:"Meeting summarization agents",isNew:true},{text:"Procurement agents",isNew:true}
        ]},
        {title:"Research & domain agents", topics:[
          "Research agents","Scientific discovery agents","Healthcare agents","Education agents",{text:"Drug discovery agents",isNew:true},{text:"Materials science agents",isNew:true},{text:"Climate & environmental agents",isNew:true},{text:"Academic writing & literature review agents",isNew:true}
        ]},
        {title:"Consumer & personal agents", topics:[
          "Personal assistants","Multi-modal agents",{text:"Voice agents & assistants",isNew:true},{text:"Browser / computer-use agents",isNew:true},{text:"Shopping & comparison agents",isNew:true},{text:"Travel planning agents",isNew:true},{text:"Lifestyle & productivity agents",isNew:true},{text:"Creative / content generation agents",isNew:true},{text:"Gaming & NPC agents",isNew:true}
        ]},
        {title:"Physical AI & embodied agents", topics:[
          {text:"Vision-Language-Action models (VLAs)",isNew:true},{text:"RT-2 (Robotic Transformer 2)",isNew:true},{text:"π0 (pi-zero) — flow-matching action output",isNew:true},{text:"OpenVLA — open-source 7B VLA",isNew:true},{text:"GR00T N1 (NVIDIA) — humanoid VLA",isNew:true},{text:"Gemini Robotics / Robotics On-Device",isNew:true},{text:"JEPA (Joint Embedding Predictive Architecture)",isNew:true},{text:"Sim-to-real transfer & domain randomization",isNew:true},{text:"Open X-Embodiment dataset",isNew:true},{text:"Teleoperation data collection pipelines",isNew:true},{text:"Discrete token vs continuous action decoding",isNew:true},{text:"Single-model vs dual-system VLA design",isNew:true},{text:"Asynchronous inference for real-time robot control",isNew:true},{text:"PaLM-E / PaLI-X — embodied multimodal LMs",isNew:true}
        ]},
        {title:"Human-agent teaming", topics:[
          {text:"Trust calibration in human-AI teams",isNew:true},{text:"Oversight fatigue & automation complacency",isNew:true},{text:"Role complementarity (human + agent skill mapping)",isNew:true},{text:"Cognitive load management with AI assistants",isNew:true},{text:"Shared mental models between humans and agents",isNew:true},{text:"Adaptive autonomy levels",isNew:true},{text:"Explainability requirements for team trust",isNew:true},{text:"Handoff protocols (agent-to-human escalation)",isNew:true},{text:"Anti-patterns: over-reliance, learned helplessness, automation bias",isNew:true},{text:"Mixed-initiative interaction design",isNew:true},{text:"Team situational awareness with AI members",isNew:true},{text:"Workforce redesign for human-agent collaboration",isNew:true}
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

  function isNew(topic) {
    return !!(topic && typeof topic === 'object' && topic.isNew);
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
    return { text, isNew: true, ...extra };
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
          copySection('Reasoning & Intelligence', 'Neuro-symbolic AI', {
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
          syntheticSection('Incentives & mechanism design', [
            newTopic('Incentive design in agent systems'),
            newTopic('Game-theoretic interactions'),
            newTopic('Mechanism design'),
            newTopic('Auctions & bidding between agents'),
            newTopic('Voting / quorum protocols'),
            newTopic('Coalition formation'),
            newTopic('Market-based coordination'),
            newTopic('Reward sharing & credit assignment'),
            newTopic('Trust & reputation systems'),
            newTopic('Emergent misalignment'),
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
          copySection('Evaluation, Observability & Applications', 'Physical AI & embodied agents', {
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
      const shouldDefaultOpenLayer = options.openAll || layerIndex === 0;
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
        const shouldDefaultOpenSection = options.openAll || layerIndex === 0;
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
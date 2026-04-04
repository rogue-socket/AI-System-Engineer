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
      topics: overrides.topics ? dedupeTopics(overrides.topics) : copyTopics(layerTitle, sectionTitle, overrides.filter || (() => true)),
      sourceRefs: (overrides.sourceRefs || [{ layerTitle, sectionTitle, synthetic: false }]).map(ref => ({ ...ref }))
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

  function buildStructuredData() {
    return [
      {
        id: 1,
        kind: 'Capabilities',
        scope: 'What intelligence exists',
        title: 'Models',
        color: '#7F77DD',
        bg: '#EEEDFE',
        sections: [
          copySection('Foundation Models', 'Core transformer architecture'),
          copySection('Foundation Models', 'Architecture extensions'),
          copySection('Foundation Models', 'Model families'),
          copySection('Foundation Models', 'Embedding & retrieval models'),
          copySection('Foundation Models', 'Voice & audio models'),
          copySection('Foundation Models', 'Reasoning & thinking models'),
          copySection('Foundation Models', 'Multimodal & vision models'),
          copySection('Foundation Models', 'Tool-calling & code models', {
            title: 'Tool-capable & code-specialized models'
          }),
          copySection('Foundation Models', 'Open-weight model ecosystem'),
          copySection('Foundation Models', 'Inference optimization')
        ]
      },
      {
        id: 2,
        kind: 'Cognition',
        scope: 'How reasoning works',
        title: 'Cognition',
        color: '#1D9E75',
        bg: '#E1F5EE',
        sections: [
          copySection('Reasoning & Intelligence', 'Reasoning paradigms', {
            topics: copyTopics('Reasoning & Intelligence', 'Reasoning paradigms', topic => topicText(topic) !== 'ReAct (Reason+Act)')
          }),
          copySection('Reasoning & Intelligence', 'Reflection & self-improvement'),
          copySection('Reasoning & Intelligence', 'Planning & control', { title: 'Decision-making & planning' }),
          copySection('Reasoning & Intelligence', 'Neuro-symbolic AI'),
          copySection('Reasoning & Intelligence', 'Meta-cognition')
        ]
      },
      {
        id: 3,
        kind: 'State',
        scope: 'How knowledge persists',
        title: 'Memory & Knowledge',
        color: '#378ADD',
        bg: '#E6F1FB',
        sections: [
          copySection('Memory & Knowledge', 'Memory taxonomy'),
          {
            title: 'Memory operations',
            topics: [
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
            ],
            sourceRefs: [
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Memory taxonomy', synthetic: true },
              { layerTitle: 'Memory & Knowledge', sectionTitle: 'Knowledge quality', synthetic: true }
            ]
          },
          copySection('Memory & Knowledge', 'Retrieval techniques'),
          copySection('Memory & Knowledge', 'Chunking & indexing'),
          copySection('Memory & Knowledge', 'RAG architectures'),
          copySection('Memory & Knowledge', 'Knowledge stores'),
          copySection('Memory & Knowledge', 'Knowledge quality')
        ]
      },
      {
        id: 4,
        kind: 'Action',
        scope: 'How agents interact with environments',
        title: 'Action & Tool Use',
        color: '#EF9F27',
        bg: '#FAEEDA',
        sections: [
          copySection('Foundation Models', 'Prompt engineering', { title: 'Prompt & interface design' }),
          copySection('Agency & Tool Use', 'Tool interfaces'),
          copySection('Agency & Tool Use', 'Information tools'),
          copySection('Agency & Tool Use', 'Action tools'),
          copySection('Agency & Tool Use', 'Meta tooling'),
          copySection('Agency & Tool Use', 'Protocol convergence & standards'),
          copySection('Agency & Tool Use', 'Agentic browsers')
        ]
      },
      {
        id: 5,
        kind: 'Behavior',
        scope: 'How agent systems behave',
        title: 'Agency & Human Systems',
        color: '#C96FDD',
        bg: '#F6ECFB',
        sections: [
          copySection('Reasoning & Intelligence', 'Agent architectures'),
          copySection('Agency & Tool Use', 'Interaction patterns', {
            topics: copyTopics('Agency & Tool Use', 'Interaction patterns', topic => !validationTopics.includes(topicText(topic)))
          }),
          {
            title: 'Control & validation',
            topics: dedupeTopics([
              ...copyTopics('Agency & Tool Use', 'Interaction patterns', topic => validationTopics.includes(topicText(topic))),
              newTopic('Mandatory vs optional approval gates'),
              newTopic('Schema-driven output validation'),
              newTopic('Tool approval gates vs output approval gates')
            ]),
            sourceRefs: [
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Interaction patterns', synthetic: true }
            ]
          },
          copySection('Multi-Agent Systems', 'Agent design patterns'),
          copySection('Evaluation, Observability & Applications', 'Human-agent teaming')
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
          copySection('Multi-Agent Systems', 'Multi-agent architectures'),
          copySection('Multi-Agent Systems', 'Coordination & communication', {
            topics: copyTopics('Multi-Agent Systems', 'Coordination & communication', topic => !['Agent protocol standardization', 'Trust & reputation systems'].includes(topicText(topic)))
          }),
          {
            title: 'Incentives & mechanism design',
            topics: [
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
            ],
            sourceRefs: [
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Coordination & communication', synthetic: true }
            ]
          },
          copySection('Multi-Agent Systems', 'Frameworks'),
          copySection('Multi-Agent Systems', 'Workflow systems'),
          copySection('Multi-Agent Systems', 'Failure modes at scale')
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
          copySection('Infrastructure & Deployment', 'Model infrastructure'),
          copySection('Infrastructure & Deployment', 'Data infrastructure'),
          copySection('Infrastructure & Deployment', 'Scaling & operations'),
          copySection('Infrastructure & Deployment', 'System infrastructure'),
          {
            title: 'Agent runtime & execution',
            topics: [
              newTopic('Agent runtime environments'),
              newTopic('Execution sandboxes as architecture'),
              newTopic('State persistence models'),
              newTopic('Deterministic vs non-deterministic execution'),
              newTopic('Idempotent task execution'),
              newTopic('Replayability & resumability'),
              newTopic('Event logs / task ledgers'),
              newTopic('Ephemeral vs persistent workers'),
              newTopic('Stateful vs stateless agents'),
              newTopic('Isolation boundaries for agents'),
              newTopic('Checkpointing & recovery'),
              newTopic('Configuration versioning for prompts, tools, and models')
            ],
            sourceRefs: [
              { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'System infrastructure', synthetic: true },
              { layerTitle: 'Multi-Agent Systems', sectionTitle: 'Workflow systems', synthetic: true }
            ]
          },
          copySection('Infrastructure & Deployment', 'Deployment patterns'),
          {
            title: 'Training & adaptation',
            topics: dedupeTopics([
              ...copyTopics('Reasoning & Intelligence', 'Training paradigms for agents'),
              ...copyTopics('Infrastructure & Deployment', 'Learning & adaptation')
            ]),
            sourceRefs: [
              { layerTitle: 'Reasoning & Intelligence', sectionTitle: 'Training paradigms for agents', synthetic: true },
              { layerTitle: 'Infrastructure & Deployment', sectionTitle: 'Learning & adaptation', synthetic: true }
            ]
          },
          copySection('Infrastructure & Deployment', 'Synthetic data for agents'),
          copySection('Infrastructure & Deployment', 'Agent FinOps & cost economics')
        ]
      },
      {
        id: 8,
        kind: 'Constraints',
        scope: 'How systems stay bounded',
        title: 'Safety, Security & Governance',
        color: '#E24B4A',
        bg: '#FCEBEB',
        sections: [
          {
            title: 'Agent-specific threats',
            topics: dedupeTopics([
              ...copyTopics('Safety, Security & Governance', 'Agent-specific threats'),
              newTopic('Token draining attacks'),
              newTopic('Cost explosion loops'),
              newTopic('Tool abuse causing financial damage'),
              newTopic('Budget exhaustion attacks')
            ]),
            sourceRefs: [
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Agent-specific threats', synthetic: true }
            ]
          },
          copySection('Safety, Security & Governance', 'Safety mechanisms'),
          {
            title: 'Identity, trust & authorization',
            topics: dedupeTopics([
              ...copyTopics('Agency & Tool Use', 'Agent identity & authentication'),
              ...copyTopics('Safety, Security & Governance', 'Governance & compliance', topic => governanceIdentityTopics.includes(topicText(topic)))
            ]),
            sourceRefs: [
              { layerTitle: 'Agency & Tool Use', sectionTitle: 'Agent identity & authentication', synthetic: true },
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Governance & compliance', synthetic: true }
            ]
          },
          copySection('Safety, Security & Governance', 'Governance & compliance', {
            topics: copyTopics('Safety, Security & Governance', 'Governance & compliance', topic => !governanceIdentityTopics.includes(topicText(topic)))
          }),
          copySection('Safety, Security & Governance', 'Alignment'),
          copySection('Safety, Security & Governance', 'Privacy & data protection')
        ]
      },
      {
        id: 9,
        kind: 'Measurement',
        scope: 'How systems are measured',
        title: 'Evaluation & Observability',
        color: '#639922',
        bg: '#EAF3DE',
        sections: [
          copySection('Evaluation, Observability & Applications', 'Evaluation'),
          {
            title: 'Specification vs emergence gap',
            topics: [
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
            ],
            sourceRefs: [
              { layerTitle: 'Evaluation, Observability & Applications', sectionTitle: 'Evaluation', synthetic: true },
              { layerTitle: 'Safety, Security & Governance', sectionTitle: 'Alignment', synthetic: true }
            ]
          },
          copySection('Evaluation, Observability & Applications', 'Observability'),
          copySection('Evaluation, Observability & Applications', 'Debugging & testing'),
          copySection('Evaluation, Observability & Applications', 'Performance engineering')
        ]
      },
      {
        id: 10,
        kind: 'Use Cases',
        scope: 'Where agent systems create value',
        title: 'Applications & Domains',
        color: '#2E8E73',
        bg: '#E7F6F1',
        sections: [
          copySection('Evaluation, Observability & Applications', 'Developer & engineering agents'),
          copySection('Evaluation, Observability & Applications', 'Enterprise & business agents'),
          copySection('Evaluation, Observability & Applications', 'Research & domain agents'),
          copySection('Evaluation, Observability & Applications', 'Consumer & personal agents'),
          copySection('Evaluation, Observability & Applications', 'Physical AI & embodied agents')
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
      sections: layer.sections.map((section, sectionIndex) => ({
        ...section,
        sectionIndex,
        anchorId: `sec-${layerIndex}-${sectionIndex}`,
        sourceRefs: (section.sourceRefs || []).map(ref => ({ ...ref })),
        topics: section.topics.map((topic, topicIndex) => {
          const normalized = cloneTopic(topic);
          const id = createTopicId(layer, section, normalized, layerIndex, sectionIndex, topicIndex);
          return {
            ...normalized,
            id,
            anchorId: `topic-${id}`,
            layerIndex,
            sectionIndex,
            topicIndex
          };
        })
      }))
    }));
  }

  const data = hydrateStructuredData(buildStructuredData());
  const TOPIC_STATUS_STORAGE_KEY = 'ai-agent-syllabus-topic-status-v1';
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

  function getRenderableTopic(topic) {
    if (typeof topic === 'string') {
      return { text: topic, isNew: false, href: null, anchorId: null, current: false, topicId: null, status: 'default' };
    }

    const topicId = topic.id || topic.topicId || null;
    return {
      text: topic.text,
      isNew: !!topic.isNew,
      href: topic.href || (topic.id ? getTopicHref(topic.id) : null),
      anchorId: topic.anchorId || (topic.id ? `topic-${topic.id}` : null),
      current: !!topic.current,
      topicId,
      status: topicId ? getTopicStatus(topicId) : 'default'
    };
  }

  function renderLayerTree(root, layers, options = {}) {
    root.innerHTML = '';

    layers.forEach(layer => {
      const totalTopics = layer.sections.reduce((count, section) => count + section.topics.length, 0);
      const layerEl = document.createElement('div');
      layerEl.className = 'l';
      layerEl.id = layer.anchorId || `l-${layer.id}`;
      layerEl.style.setProperty('--layer-color', layer.color || '#111111');
      layerEl.style.setProperty('--layer-bg', layer.bg || '#FFFFFF');
      layerEl.style.setProperty('--layer-shadow', hexToRgba(layer.color || '#111111', 0.08));
      layerEl.dataset.layerTitle = (layer.title || '').toLowerCase();
      layerEl.dataset.layerScope = (layer.scope || '').toLowerCase();
      layerEl.dataset.layerKind = (layer.kind || '').toLowerCase();
      layerEl.dataset.defaultOpen = options.openAll ? 'true' : 'false';

      if (options.openAll) {
        layerEl.classList.add('open');
      }

      const layerHeader = document.createElement('div');
      layerHeader.className = 'l-h';
      layerHeader.innerHTML = `<div class="l-accent" style="background:${escapeHtml(layer.color || '#111')}"></div>
        <span class="l-n">${escapeHtml(String(layer.id).padStart(2, '0'))}</span>
        <span class="l-copy">
          <span class="l-k">${escapeHtml(layer.kind || 'Layer')}</span>
          <span class="l-t">${escapeHtml(layer.title || '')}</span>
          <span class="l-s">${escapeHtml(layer.scope || '')}</span>
        </span>
        <span class="l-meta">${escapeHtml(String(layer.sections.length))} sec · ${escapeHtml(String(totalTopics))} topics</span>
        <span class="l-arrow">▶</span>`;
      layerHeader.addEventListener('click', () => {
        layerEl.classList.toggle('open');
      });
      layerEl.appendChild(layerHeader);

      const layerBody = document.createElement('div');
      layerBody.className = 'l-b';
      const layerInner = document.createElement('div');
      layerInner.className = 'l-inner';

      layer.sections.forEach(section => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'sec';
        sectionEl.id = section.anchorId;
        sectionEl.dataset.sectionTitle = (section.title || '').toLowerCase();
        sectionEl.dataset.defaultOpen = options.openAll ? 'true' : 'false';

        if (options.openAll) {
          sectionEl.classList.add('open');
        }

        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'sec-h';
        sectionHeader.innerHTML = `<span class="sec-arrow">▶</span>
          <span class="sec-t">${escapeHtml(section.title || '')}</span>
          <span class="sec-c">${escapeHtml(String(section.topics.length))}</span>`;
        sectionHeader.addEventListener('click', event => {
          event.stopPropagation();
          sectionEl.classList.toggle('open');
        });
        sectionEl.appendChild(sectionHeader);

        const sectionBody = document.createElement('div');
        sectionBody.className = 'sec-b';
        const sectionInner = document.createElement('div');
        sectionInner.className = 'sec-inner';
        const topicsEl = document.createElement('div');
        topicsEl.className = 'topics';

        section.topics.forEach((topic, topicIndex) => {
          if (topicIndex > 0) {
            const sep = document.createElement('span');
            sep.className = 't-sep';
            sep.textContent = '·';
            topicsEl.appendChild(sep);
          }

          const renderable = getRenderableTopic(topic);
          const wrapper = document.createElement('span');
          wrapper.className = 'topic-token';
          wrapper.dataset.text = renderable.text.toLowerCase();
          wrapper.dataset.status = renderable.status;
          if (renderable.topicId) {
            wrapper.dataset.topicId = renderable.topicId;
          }

          const node = renderable.href ? document.createElement('a') : document.createElement('span');
          node.className = `${renderable.isNew ? 't-new' : 't'}${renderable.href ? ' t-link' : ''}${renderable.current ? ' t-current' : ''}`;
          if (renderable.href) {
            node.href = renderable.href;
          }
          if (options.anchorIds && renderable.anchorId) {
            wrapper.id = renderable.anchorId;
          }

          if (renderable.isNew) {
            const dot = document.createElement('span');
            dot.className = 't-new-dot';
            node.appendChild(dot);
            node.appendChild(document.createTextNode(renderable.text));
          } else {
            node.textContent = renderable.text;
          }

          wrapper.appendChild(node);

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
            wrapper.appendChild(button);
          }

          topicsEl.appendChild(wrapper);
        });

        sectionInner.appendChild(topicsEl);
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

        sectionEl.querySelectorAll('.topic-token').forEach(topicEl => {
          const text = topicEl.dataset.text || '';
          const hit = !value || titleHit || text.includes(value);
          topicEl.classList.toggle('faded', !hit && !!value);
          if (hit) {
            sectionHit = true;
          }
        });

        sectionEl.querySelectorAll('.t-sep').forEach(sep => {
          const prev = sep.previousElementSibling;
          const next = sep.nextElementSibling;
          const show = !value || (prev && !prev.classList.contains('faded')) || (next && !next.classList.contains('faded'));
          sep.classList.toggle('faded', !show && !!value);
        });

        sectionEl.classList.toggle('faded', !sectionHit && !!value);
        if (value) {
          sectionEl.classList.toggle('open', sectionHit);
        } else {
          sectionEl.classList.toggle('open', sectionEl.dataset.defaultOpen === 'true');
        }

        if (sectionHit) {
          layerHit = true;
        }
      });

      layerEl.classList.toggle('faded', !layerHit && !!value);
      if (value) {
        layerEl.classList.toggle('open', layerHit);
      } else {
        layerEl.classList.toggle('open', layerEl.dataset.defaultOpen === 'true');
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
      layer.classList.add('open');
    }
    if (section) {
      section.classList.add('open');
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
        section.topics.forEach(topic => {
          const renderable = getRenderableTopic(topic);
          md += `- ${renderable.text}${renderable.isNew ? ' *(new)*' : ''}\n`;
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

    const noteText = options.noteText || 'Click the small square beside any topic to cycle its learning status.';
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

  function buildTopicDetailData(topicId) {
    const entry = getTopicEntryById(topicId);
    if (!entry) {
      return null;
    }

    const siblings = getSectionEntries(entry.layerIndex, entry.sectionIndex).filter(item => item.id !== entry.id);
    const learnFirst = getPreviousContextEntries(entry, 8);
    const learnNext = getNextContextEntries(entry, 8);
    const exactStructuredMatches = topicEntries.filter(item => item.text === entry.text && item.id !== entry.id);
    const rawMatches = findRawOccurrencesByText(entry.text);
    const crossLayerConnections = getRelatedEntries(entry, { limit: 12, minScore: 6 }).filter(item => item.layerIndex !== entry.layerIndex);

    const practiceLinks = uniqueEntries([
      ...getRelatedEntries(entry, { limit: 5, minScore: 2, layerTitles: ['Evaluation & Observability'] }),
      ...getRelatedEntries(entry, { limit: 5, minScore: 2, layerTitles: ['Infrastructure & Runtime', 'Action & Tool Use'] }),
      ...getRelatedEntries(entry, { limit: 4, minScore: 2, layerTitles: ['Safety, Security & Governance'] }),
      ...pickEntriesByRefs([
        { layerTitle: 'Evaluation & Observability', sectionTitles: ['Evaluation', 'Performance engineering'] },
        { layerTitle: 'Infrastructure & Runtime', sectionTitles: ['Model infrastructure', 'System infrastructure'] },
        { layerTitle: 'Safety, Security & Governance', sectionTitles: ['Safety mechanisms'] }
      ], 10, 2)
    ]).filter(item => item.id !== entry.id).slice(0, 10);

    const operationalLinks = uniqueEntries([
      ...getRelatedEntries(entry, { limit: 8, minScore: 2, layerTitles: ['Action & Tool Use', 'Infrastructure & Runtime', 'Applications & Domains'] }),
      ...pickEntriesByRefs([
        { layerTitle: 'Action & Tool Use', sectionTitles: ['Tool interfaces', 'Information tools', 'Action tools'] },
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

    const layers = [taxonomyLayer, syllabusLayer, structureLayer];
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
        { label: 'Occurrences', value: `${exactStructuredMatches.length + 1} structured · ${rawMatches.length} raw` },
        { label: 'Connected topics', value: `${crossLayerConnections.length + siblings.length} mapped links` }
      ]
    };
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
    buildTopicDetailData
  };
}());
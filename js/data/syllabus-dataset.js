(function () {
  function newTopic(text, extra) {
    return { text, ...(extra || {}) };
  }

  const rawData = [
    {
      id: 1, title: 'Foundation Models', color: '#7F77DD', bg: '#EEEDFE',
      sections: [
        { title: 'Core transformer architecture', topics: [
          'Attention mechanisms', 'Multi-head attention', 'Positional encoding', 'Feed-forward layers', 'Layer normalization', 'Residual connections', 'Tokenization', 'Byte-pair encoding (BPE)', 'SentencePiece / Unigram tokenization', 'Context windows', 'KV cache'
        ] },
        { title: 'Architecture extensions', topics: [
          'Mixture of Experts (MoE)', 'Speculative decoding', 'Structured output / JSON mode', 'Prompt caching', 'Quantization and packaging (GPTQ, AWQ, GGUF)', 'State-space models (Mamba, RWKV)', 'Grouped Query Attention (GQA)', 'Multi-Head Latent Attention (MLA)', 'Sliding window attention', 'Rotary Position Embedding (RoPE)', 'Ring attention / infinite context', 'Retrieval-conditioned architectures (advanced / research)'
        ] },
        { title: 'Model families', topics: [
          'GPT-style (decoder-only)', 'BERT-style (encoder-only)', 'T5-style (encoder-decoder)', 'Multimodal models (LMM/VLM)', 'Small language models (SLM)', 'Open-source vs proprietary', 'Model cards & documentation'
        ] },
        { title: 'Embedding & retrieval models', topics: [
          'Text embedding models (OpenAI, Cohere, Voyage)', 'Open embedding models (BGE, E5, GTE, Nomic)', 'Multimodal embeddings (CLIP, SigLIP)', 'Reranker models (cross-encoders)', 'ColBERT / late interaction models', 'Matryoshka embeddings (variable dimension)', 'Embedding fine-tuning & domain adaptation', 'MTEB benchmark & embedding leaderboards'
        ] },
        { title: 'Voice & audio models', topics: [
          'Text-to-speech (ElevenLabs, OpenAI TTS)', 'Speech-to-text (Whisper, Deepgram, AssemblyAI)', 'Voice cloning & synthesis', 'Real-time voice agents (OpenAI Realtime API)', 'Audio understanding models', 'Voice-first agent architectures'
        ] },
        { title: 'Reasoning & thinking models', topics: [
          'OpenAI o1 / o1-pro / o3 / o4-mini', 'DeepSeek-R1 / R1-Zero / R1-0528', 'Claude with extended thinking (Anthropic)', 'Gemini 2.0 Flash Thinking / Gemini 2.5 Pro', 'Qwen QwQ / Qwen3 thinking mode', 'Grok 3 (xAI) with reasoning', 'Phi-4-reasoning (Microsoft)', 'Llama 4 Maverick / Scout reasoning', 'Mistral Large with reasoning', 'Command R7B with reasoning (Cohere)', 'Kimi k1.5 (Moonshot AI)', 'Marco-o1 (Alibaba DAMO)', 'Skywork-o1 (Kunlun Tech)', 'Open-source reasoning distillation (R1→smaller models)', 'Chain-of-thought tokens / thinking tokens', 'Thinking budget / max_thinking_tokens', 'Test-time compute scaling laws', 'Adaptive compute allocation per query', 'Best-of-N sampling / rejection sampling', 'GRPO (Group Relative Policy Optimization)', 'Hybrid thinking / non-thinking modes', 'Reasoning traces as training signal', 'Supervised fine-tuning on reasoning traces (SFT-on-CoT)', 'RL from verifiable rewards for reasoning', 'Process reward models (PRMs) vs outcome reward models'
        ] },
        { title: 'Multimodal & vision models', topics: [
          'GPT-4o / GPT-4V (OpenAI)', 'Claude 3.5 / Claude 4 with vision (Anthropic)', 'Gemini 2.0 / 2.5 multimodal (Google)', 'Llama 4 multimodal (Meta)', 'Qwen-VL / Qwen2.5-VL (Alibaba)', 'Pixtral (Mistral)', 'InternVL / InternVL2 (Shanghai AI Lab)', 'LLaVA / LLaVA-NeXT', 'Idefics 2/3 (HuggingFace)', 'CogVLM / CogAgent', 'Florence-2 (Microsoft)', 'Image understanding vs generation models', 'Video understanding models', 'Vision-language grounding', 'Video generation models (Sora, Kling, Veo)', 'SmolVLM / efficient on-device VLMs'
        ] },
        { title: 'Tool-calling & code models', topics: [
          'Function-calling fine-tuned models', 'DeepSeek-Coder / DeepSeek-Coder-V2', 'OpenAI Codex (CLI agent)', 'StarCoder / StarCoder2 (BigCode)', 'Qwen-Coder (Qwen2.5-Coder)', 'Claude with tool use', 'Llama Code variants', 'CodeGemma (Google)', 'WizardCoder', 'Codestral (Mistral)', 'Granite Code (IBM)', 'Arctic (Snowflake)', 'Nemotron (NVIDIA)', 'Tool-use fine-tuning datasets (ToolBench, API-Bank)', 'Gemini for coding (Gemini 2.5 Flash / Pro)'
        ] },
        { title: 'Open-weight model ecosystem', topics: [
          'Llama 3 / 3.1 / Llama 4 (Meta)', 'DeepSeek V3 / V3.1 / R1 (MIT license)', 'Mistral / Mixtral / Mistral Large', 'Qwen 2.5 / Qwen3 (Alibaba)', 'Gemma / Gemma 2 (Google)', 'Phi-3 / Phi-4 (Microsoft)', 'Command R / Command R+ (Cohere)', 'Yi series (01.AI)', 'OLMo 2 (AI2, fully open)', 'Falcon 2 / 3 (TII)', 'Open-weight vs open-source licensing distinctions', 'Model distillation from closed models (controversy)', 'Hugging Face Hub as distribution ecosystem', 'Benchmark gaming & evaluation integrity'
        ] },
        { title: 'Inference optimization', topics: [
          'Speculative decoding (draft + verifier)', 'KV cache compression (MLA)', 'Continuous batching', 'PagedAttention (vLLM)', 'Multi-token prediction', 'Mixed-precision inference (FP8, BF16)', 'Native Sparse Attention', 'MoE inference routing', 'Tensor / pipeline parallelism for serving', 'Prefix caching / prompt caching', 'FlashAttention (memory-efficient attention)', 'Chunked prefill and disaggregated serving', 'SGLang and radix attention'
        ] },
        { title: 'Prompt engineering', topics: [
          'Zero-shot prompting', 'Few-shot prompting', 'Instruction tuning', 'System vs user prompts', 'Prompt templates', 'Meta-prompting', 'Prompt chaining', 'Automatic prompt optimization', 'Prompt compression', 'Role prompting', 'Structured output prompting'
        ] },
        { title: 'Production prompt management', topics: [
          'Prompt versioning and registries', 'Prompt A/B testing and experimentation', 'Prompt libraries and reuse patterns', 'Prompt lifecycle management (draft, review, staging, production)', 'Prompt regression testing', 'Prompt review and approval workflows', 'Prompt templating engines and variable injection', 'Prompt observability and performance tracking', 'Prompt rollback strategies', 'Prompt collaboration across teams', 'Prompt-model co-versioning', 'Prompt catalogs and discoverability'
        ] }
      ]
    },
    {
      id: 2, title: 'Reasoning & Intelligence', color: '#1D9E75', bg: '#E1F5EE',
      sections: [
        { title: 'Reasoning paradigms', topics: [
          'Chain-of-Thought (CoT)', 'Least-to-Most prompting', 'ReAct (Reason+Act)', 'Tree-of-Thought (ToT)', 'Graph-of-Thought (GoT)', 'Program-of-Thought (PoT)', 'Self-consistency', 'Debate reasoning', 'Skeleton-of-Thought', 'Tool-assisted reasoning', 'Test-time compute scaling', 'Verifier-guided reasoning', 'Verification & self-verification'
        ] },
        { title: 'Reflection, critique & repair', topics: [
          'Reflection loops', 'Self-critique', 'Self-evaluation', 'Iterative refinement', 'Reflexion', 'Critique agents', 'Trajectory critique and repair', 'Plan repair after failure', 'Post-action review loops'
        ] },
        { title: 'Training paradigms for agents', topics: [
          'Reinforcement Learning from Human Feedback (RLHF)', 'Reinforcement Learning from AI Feedback (RLAIF)', 'Direct Preference Optimization (DPO)', 'Proximal Policy Optimization (PPO)', 'Group Relative Policy Optimization (GRPO)', 'Tool-use fine-tuning', 'Agent trajectory fine-tuning', 'Curriculum learning for agents', 'Bootstrapped self-improvement', 'Multi-task agent training'
        ] },
        { title: 'Agent architectures', topics: [
          'ReAct agents', 'Plan-and-Execute agents', 'Reflection agents', 'Autonomous agents (AutoGPT-style)', 'Tool-using agents', 'Generalist agents', 'Subagent patterns', 'Mixture-of-Agents (MoA)', 'World models', 'Skeleton planner', 'Compound AI systems', 'Cognitive architectures (ACT-R, SOAR)'
        ] },
        { title: 'Planning & control', topics: [
          'Task decomposition', 'Hierarchical planning', 'Agent loop design', 'Finite-state / rule-based controllers', 'LLM-based controllers', 'Planner-executor separation', 'Replanning / plan repair', 'Execution monitoring and watchdogs', 'Goal prioritization', 'Constraint satisfaction', 'Stop conditions and escalation criteria', 'Budget-aware planning'
        ] },
        { title: 'Neuro-symbolic & constraint-guided reasoning (advanced / research)', topics: [
          'Logic-neural hybrid architectures', 'Solver-backed reasoning (SAT/SMT/planners)', 'Symbolic grounding for LLM reasoning', 'Knowledge graph-grounded reasoning', 'Constraint-guided neural generation'
        ] },
        { title: 'Meta-cognition', topics: [
          'Confidence monitoring & calibration', 'Out-of-distribution (OOD) detection', 'Epistemic vs aleatoric uncertainty', 'Knowing-when-to-stop (task completion detection)', 'Selective prediction / abstention when unsure', 'Self-checking with external verification', 'Confidence-gated action execution', 'Resource-bounded reasoning', 'Planning horizon awareness', 'Confidence signals and calibration proxies', 'Metacognitive prompting strategies', 'Introspective tool-use decisions'
        ] }
      ]
    },
    {
      id: 3, title: 'Memory & Knowledge', color: '#378ADD', bg: '#E6F1FB',
      sections: [
        { title: 'Memory taxonomy', topics: [
          'In-context (working) memory', 'External / long-term memory', 'Episodic memory', 'Semantic memory', 'Procedural memory', 'Memory compression', 'Memory versioning', 'Memory pruning', 'MemGPT / Letta patterns', 'Context window management'
        ] },
        { title: 'Retrieval techniques', topics: [
          'Vector search (ANN / HNSW)', 'Hybrid search', 'Keyword search (BM25)', newTopic('Dense retrieval embeddings', { idSlug: 'Embeddings' }), 'Reranking', newTopic('Reranker APIs / cross-encoders', { idSlug: 'Cohere Rerank / cross-encoders' }), 'Query rewriting', 'Query expansion', 'ColBERT / late interaction retrieval', 'HyDE (Hypothetical Document Embeddings)', 'Contextual retrieval', 'Reciprocal Rank Fusion (RRF)', 'Learned sparse retrieval (SPLADE)'
        ] },
        { title: 'Chunking & indexing', topics: [
          'Chunking strategies', 'Sliding window chunking', 'Document hierarchies', 'Late chunking', 'Parent-child retrieval', 'Recursive / semantic chunking', 'Agentic chunking', 'Metadata enrichment & filtering', 'Multi-index strategies', 'Indexing pipelines & automation'
        ] },
        { title: 'RAG architectures', topics: [
          'Multi-hop RAG', 'Agentic RAG', 'Corrective RAG (CRAG)', 'Self-RAG', 'GraphRAG', 'Multimodal RAG', 'RAPTOR (tree-structured RAG)', 'Modular RAG pipelines', 'Adaptive RAG (route by query complexity)', 'RAG vs fine-tuning vs long context (trade-offs)', 'RAG evaluation (context relevance, faithfulness)', 'Cache-augmented generation'
        ] },
        { title: 'Knowledge stores', topics: [
          newTopic('Vector databases (Pinecone, Weaviate, Qdrant, Milvus)', { idSlug: 'Vector databases (Pinecone, Weaviate, Qdrant)' }), 'Knowledge graphs', 'Relational DBs', 'Document stores', 'Conversation history', 'Episodic logs', 'Graph databases (Neo4j, Neptune)', 'Chroma / LanceDB (embedded vector DBs)', newTopic('Operational vector stores (Postgres + pgvector, Elasticsearch / OpenSearch)', { idSlug: 'Hybrid stores (Milvus, pgvector)' }), 'Multi-tenant knowledge isolation'
        ] },
        { title: 'Knowledge quality', topics: [
          'Hallucination detection', 'Grounding techniques', 'Freshness & staleness', 'Data pipelines & ingestion', 'Source attribution', newTopic('Calibrated confidence & abstention', { idSlug: 'Confidence scoring' }), 'Fact-checking agents'
        ] }
      ]
    },
    {
      id: 4, title: 'Agency & Tool Use', color: '#EF9F27', bg: '#FAEEDA',
      sections: [
        { title: 'Tool interfaces', topics: [
          'Function calling', 'Tool schema design (JSON Schema / provider adapters)', 'Tool selection logic', 'Read-only vs side-effecting tool boundaries', 'Idempotent tool design and retry safety', 'Tool chaining', 'Tool error handling', 'Parallel tool calls', 'Tool result handling', 'Structured output for tool calls', 'Tool-use benchmarks and eval suites'
        ] },
        { title: 'Information tools', topics: [
          'Web search', 'Web scraping', 'APIs & REST', 'File ingestion (PDF, CSV, DOCX)', 'Code interpreters', 'Database queries', 'Knowledge base Q&A', 'Screenshot / screen capture tools', 'OCR & document AI'
        ] },
        { title: 'Action tools', topics: [
          'Code execution (sandboxed)', 'File system operations', 'Shell / CLI automation', 'Browser automation', 'Computer use / GUI agents', 'Email & calendar APIs', 'Form filling', 'Voice & telephony agents', 'Image / video generation tools'
        ] },
        { title: 'Meta tooling', topics: [
          'Tool discovery', 'Dynamic tool registration', 'Tool ranking & selection', 'Capability descriptors and manifests', 'Provider-specific tool adapters', 'Tool health checks & fallback policies', 'Tool learning from feedback', 'Cost-aware tool selection policies'
        ] },
        { title: 'Protocol convergence & standards', topics: [
          'MCP (Model Context Protocol)', 'A2A protocol', 'Interoperability standards', 'MCP server ecosystem', 'Capability discovery and agent directories', 'Task handoff and status semantics', 'Agent cards / manifest formats', 'OpenAPI / AsyncAPI for agent tool interfaces', 'Protocol bridging / interop layers (MCP↔A2A)', 'Transport & session patterns for agent protocols', 'Cross-vendor agent orchestration standards', 'Emerging formal interoperability standards (IEEE and others)', 'Legacy FIPA concepts in modern protocols'
        ] },
        { title: 'Agentic browsers', topics: [
          'Browser-as-runtime for AI agents', 'Browser-native agent products', 'Operator / computer-use paradigms', 'DOM interaction models for agent navigation', 'Accessibility tree interaction for agent navigation', 'Vision-based web agents (screenshot understanding)', 'Browser sandboxing for agent safety', 'Headless vs visual browser agents', 'Credential & session isolation for browser agents', 'Reusable browser skills / macros', 'Web agent benchmarks (WebArena, Mind2Web)'
        ] },
        { title: 'Interaction patterns', topics: [
          'Tool-calling loops', 'Human-in-the-loop (HITL)', 'Conversational agents', 'Task-oriented agents', 'Event-driven agents', 'Streaming agents', 'Synchronous vs asynchronous execution', 'Voice / multimodal I/O', 'Webhooks & event triggers', 'Approval workflows', 'Objective -> execution -> validation loops', 'Validation checkpoint architecture', 'Goal decomposition with validation gates', 'Rollback-on-failure / compensating actions', 'Human-in-the-loop vs human-on-the-loop vs full autonomy', 'Adaptive autonomy levels (dynamic delegation)'
        ] },
        { title: 'Agent identity & authentication', topics: [
          'OAuth & authentication for agents', 'Agent credential management', 'Machine / workload identity for agents (mTLS, service identities)', 'Delegated authorization (agent acts on behalf of user)', 'Scoped permission tokens per task', 'Agent identity cards / manifests', 'Multi-agent trust chains', 'Agent signing & provenance verification', 'Credential rotation for long-running agents', 'Cross-organizational agent federation'
        ] }
      ]
    },
    {
      id: 5, title: 'Multi-Agent Systems', color: '#D4537E', bg: '#FBEAF0',
      sections: [
        { title: 'Multi-agent architectures', topics: [
          'Orchestrator-subagent pattern', 'Role-based agent teams', 'Peer-to-peer agents', 'Hierarchical agent networks', 'Debate agents', 'Mixture-of-Agents (MoA)', 'Puppeteer + specialist pattern', 'Governance agents', 'Agents as tools', newTopic('Adversarial / self-play agent systems', { idSlug: 'Competitive agent systems' })
        ] },
        { title: 'Agent design patterns', topics: [
          'Router pattern (classify & dispatch)', 'Map-reduce pattern (parallel fan-out)', 'Supervisor pattern (manage + route)', 'Critic / verifier pattern', 'Planner-executor pattern', 'Retriever-reader pattern', 'Generator-evaluator loop', 'Escalation pattern (agent → human)', 'Watchdog pattern (monitoring agent)', 'Assembly line pattern (sequential specialization)', 'Blackboard pattern (shared workspace)', newTopic('Externalized scratchpad / working-state pattern', { idSlug: 'Inner monologue pattern' })
        ] },
        { title: 'Coordination & communication', topics: [
          'Message passing', 'Shared state management', 'Context handoff', 'Conflict resolution', 'Task delegation', 'Emergent behavior', 'Termination conditions & handoff criteria', 'Agent discovery', 'Agent protocol standardization', 'Trust & reputation systems'
        ] },
        { title: 'Frameworks', topics: [
          'LangChain / LangGraph', 'LlamaIndex', newTopic('AutoGen (Microsoft)', { idSlug: 'AutoGen' }), 'CrewAI', 'OpenAI Agents SDK', 'Google ADK', 'PydanticAI', 'Haystack', 'Semantic Kernel', 'Dify', 'Smolagents (HuggingFace)', 'Mastra', 'Vercel AI SDK', 'Agno (formerly Phidata)', 'Agency Swarm'
        ] },
        { title: 'Workflow systems', topics: [
          'DAG pipelines', 'State machines', 'Event-driven orchestration', 'Async orchestration', 'Parallel execution', 'Fan-out / fan-in', 'Workflow recovery & checkpointing', 'Long-running agent processes', 'Durable execution (Temporal, Inngest)'
        ] },
        { title: 'Failure modes at scale', topics: [
          'Coordination collapse (deadlock / live-lock)', 'Authority ambiguity (unclear decision ownership)', 'Cascade failures across agent hops', 'Deference loops (agents deferring indefinitely)', 'Goal drift in long-running workflows', 'Herding behavior (convergence on suboptimal solution)', 'Communication overhead explosion (O(n²) messaging)', 'Context window exhaustion in multi-turn chains', 'Hallucination amplification across hops', 'Silent failure (false success reporting)', 'Conflicting sub-goal resolution failures', 'Trust chain breakdown (compromised agent in pipeline)', 'Emergent adversarial dynamics between cooperative agents'
        ] }
      ]
    },
    {
      id: 6, title: 'Infrastructure & Deployment', color: '#888780', bg: '#F1EFE8',
      sections: [
        { title: 'Model infrastructure', topics: [
          'API providers (OpenAI, Anthropic, Google)', 'Local inference (Ollama, vLLM, llama.cpp)', 'Model routing', 'Model switching', 'Multi-model ensembles', 'Token streaming', 'Inference providers (Groq, Together, Fireworks)', 'GPU orchestration', 'Model distillation'
        ] },
        { title: 'Data infrastructure', topics: [
          'Vector databases', 'SQL / NoSQL systems', 'Object storage', newTopic('Lakehouse / data lake platforms', { idSlug: 'Data lakes' }), 'Stream processing (Kafka)', 'Data versioning', 'Feature stores for agents', 'Time-series databases for agent metrics'
        ] },
        { title: 'Scaling & operations', topics: [
          'Horizontal scaling of agent fleets', 'Agent lifecycle management', 'Auto-scaling based on queue depth', 'Multi-region agent deployment', 'Agent health checks & heartbeats', 'Graceful degradation strategies', 'Version management for agent configs', 'Canary deployments for agents', 'Configuration management (prompts, tools, models)', 'Agent dependency management'
        ] },
        { title: 'System infrastructure', topics: [
          'Caching (Redis, semantic cache)', 'Message queues', 'Background workers', 'Rate limiting', 'Load balancing', 'API gateways', 'Agent sandboxing (E2B, Modal, Daytona)', 'MCP server hosting'
        ] },
        { title: 'Deployment patterns', topics: [
          'Docker containers', 'Kubernetes', 'Serverless agents', 'Persistent agent processes', 'Edge vs cloud', 'Blue-green deployments', 'Agent registries', 'Shadow AI discovery', 'Agent-as-a-service', 'Hybrid local / cloud agents'
        ] },
        { title: 'Learning & adaptation', topics: [
          'Fine-tuning (full, PEFT, LoRA, QLoRA)', 'RLHF', 'Direct Preference Optimization (DPO)', 'Continual learning', 'Online learning', 'Personalization systems', 'Feedback loops', 'Synthetic data generation', 'Model merging (TIES, DARE, SLERP)', 'Preference tuning (KTO, IPO)'
        ] },
        { title: 'Synthetic data for agents', topics: [
          'LLM-generated instruction-following data', 'Rejection sampling for quality filtering', 'Self-play / self-instruct data generation', 'Distillation from frontier models', 'Simulated environment trajectories for tool-use', 'Multi-turn agentic trajectory synthesis', 'Verification-based data quality filtering', 'Contamination & benchmark leakage risks'
        ] },
        { title: 'Agent FinOps & cost economics', topics: [
          'Token budgeting per task', 'Cost-per-task modeling & metering', 'Model routing for cost (cheap-model-first cascades)', 'Multi-step pipeline budget allocation', 'Inference cost vs accuracy trade-off curves', 'Agent ROI frameworks', 'Token-level cost attribution & chargebacks', 'Prompt caching economics (KV reuse savings)', 'Reasoning-token cost accounting', 'Cost-aware tool selection policies', 'Agent spend observability dashboards', 'FinOps governance for autonomous agent pipelines'
        ] },
        { title: 'MLOps & LLMOps', topics: [
          'Model versioning and registries', 'Experiment tracking (Weights & Biases, MLflow, Comet)', 'Model-serving lifecycle (staging, production, retired)', 'A/B testing infrastructure for models', 'Feature flags for model routing', 'Prompt-model co-versioning', 'Artifact management (models, adapters, prompts)', newTopic('LLM gateway patterns (LiteLLM, Portkey, Kong AI Gateway)', { idSlug: 'LLM gateway patterns (LiteLLM, Portkey, Martian)' }), 'Model performance monitoring and drift detection', 'Automated retraining and fine-tuning pipelines', 'Reproducibility and deterministic inference', 'Environment parity (dev, staging, prod)'
        ] },
        { title: 'API design for AI services', topics: [
          'Streaming response design (SSE, WebSockets, chunked transfer)', 'Rate limiting strategies for LLM-backed APIs', 'Token-based rate limiting vs request-based', 'Webhook patterns for async agent execution', 'Long-running task APIs (polling, callbacks, WebSockets)', 'API versioning for prompt and model changes', 'Request and response schemas for structured LLM output', 'Error handling and retry contracts for AI endpoints', 'Idempotency keys for agent actions', 'Authentication and authorization for AI APIs', 'Multi-tenant API isolation', 'API gateway patterns for model routing', 'Backpressure and queue-based request handling', 'Timeout design for variable-latency LLM calls', 'Health check and readiness probes for AI services'
        ] }
      ]
    },
    {
      id: 7, title: 'Safety, Security & Governance', color: '#E24B4A', bg: '#FCEBEB',
      sections: [
        { title: 'Agent-specific threats', topics: [
          'Prompt injection', 'Indirect prompt injection', 'Goal hijacking', 'Tool misuse', 'Identity abuse', 'Memory poisoning', 'Cascading hallucinations', 'Rogue agents', 'Supply chain attacks on tools', 'Data exfiltration via agents', 'Multi-hop prompt injection', 'Agent credential theft', 'Excessive agency'
        ] },
        { title: 'Safety mechanisms', topics: [
          'Guardrails', 'Output validation', 'Sandboxing', 'Permission systems (least privilege)', 'Capability gating', 'Red teaming', 'Constitutional AI', 'Kill switches', 'Human oversight checkpoints', 'Input / output filtering', 'Agent boundary testing', 'Canary tokens'
        ] },
        { title: 'Governance & compliance', topics: [
          'OWASP Agentic AI Top 10', 'EU AI Act', 'NIST AI RMF', 'ISO/IEC 42001', 'Agent identity management', 'Agent registries & inventories', 'Audit trails', 'Policy enforcement', 'Zero-trust for agents', 'Regulatory mapping', 'Agent authorization frameworks', 'Responsible AI frameworks', 'Agent liability & accountability', 'Agentic AI Foundation (Linux Foundation governance)', 'Open governance for agent protocols', 'Agent impersonation prevention', 'Non-repudiation for agent actions'
        ] },
        { title: 'Alignment', topics: [
          'Value alignment', 'Intent detection', 'Behavioral monitoring', 'Transparency & explainability', 'Bias detection', 'Fairness metrics', 'Controllability'
        ] },
        { title: 'Privacy & data protection', topics: [
          'PII detection & redaction in agent pipelines', 'Data minimization for agent context', 'Consent management for agent data use', 'Right-to-erasure in agent memory', 'Differential privacy for agent training', 'Data residency & sovereignty', 'Agent-to-agent data sharing policies', 'Confidential computing for agent inference'
        ] }
      ]
    },
    {
      id: 8, title: 'Evaluation, Observability & Applications', color: '#639922', bg: '#EAF3DE',
      sections: [
        { title: 'Evaluation', topics: [
          'Automated benchmarks (MMLU, HumanEval, GAIA)', 'Human evaluation', 'Task success rate', 'Hallucination detection', 'Faithfulness scoring', 'Relevance scoring', 'End-to-end agent evals', 'Multi-turn evals', 'Adversarial testing', 'A/B testing agents', 'SWE-bench', 'WebArena', 'AgentBench', 'BFCL (Berkeley Function Calling Leaderboard)', 'ToolBench'
        ] },
        { title: 'Observability', topics: [
          'Distributed tracing (LangSmith, Langfuse)', 'Step-level logging', 'Cost tracking', 'Latency monitoring', 'Token usage dashboards', 'Agent audit logs', 'OpenTelemetry for agents', 'Arize / Phoenix', 'Braintrust'
        ] },
        { title: 'Debugging & testing', topics: [
          'Prompt debugging', 'Tool call debugging', 'Deterministic replay', 'Failure analysis', 'Unit tests for agents', 'Integration tests', 'Regression testing', 'Chaos engineering for agents', 'Snapshot testing for prompts', 'Mock tool servers for testing', 'Agent simulation environments'
        ] },
        { title: 'Performance engineering', topics: [
          'Latency optimization', 'Cost optimization', 'Semantic caching', 'Parallel execution', 'Batching', 'Model routing (small→large)', 'Prompt compression', 'Context pruning'
        ] },
        { title: 'CI/CD for AI systems', topics: [
          'Prompt testing in CI pipelines', 'Model regression checks', 'Eval-gated deployments', 'Prompt diff and review workflows', 'Automated eval suites in pull requests', 'Staging environments for AI features', 'Shadow mode and dark launches for model changes', 'Rollback strategies for model updates', 'Canary releases with eval thresholds', 'Integration testing for tool-calling agents', 'Contract testing for LLM outputs', 'Eval dashboards in CI (pass/fail gates)'
        ] },
        { title: 'Developer & engineering agents', topics: [
          'Coding agents', 'Agentic coding (Cursor, Copilot, Devin)', 'Code review agents', 'DevOps / SRE agents', 'Testing & QA agents', 'Documentation generation agents', 'Database migration agents', 'Security scanning agents'
        ] },
        { title: 'Enterprise & business agents', topics: [
          'Customer support agents', 'Data analysis agents', 'Automation / RPA agents', 'Financial agents', 'Legal agents', 'Sales & marketing agents', 'Supply chain agents', 'HR & recruiting agents', 'Compliance & audit agents', 'Meeting summarization agents', 'Procurement agents'
        ] },
        { title: 'Research & domain agents', topics: [
          'Research agents', 'Scientific discovery agents', 'Healthcare agents', 'Education agents', 'Drug discovery agents', 'Materials science agents', 'Climate & environmental agents', 'Academic writing & literature review agents'
        ] },
        { title: 'Consumer & personal agents', topics: [
          'Personal assistants', 'Multi-modal agents', 'Voice agents & assistants', 'Browser / computer-use agents', 'Shopping & comparison agents', 'Travel planning agents', 'Lifestyle & productivity agents', 'Creative / content generation agents', 'Gaming & NPC agents'
        ] },
        { title: 'Physical AI & embodied agents (advanced / research)', topics: [
          'Vision-Language-Action models (VLAs)', 'Sim-to-real transfer & domain randomization', 'JEPA (Joint Embedding Predictive Architecture)', 'Teleoperation data collection pipelines', 'Single-model vs dual-system VLA design'
        ] },
        { title: 'Human-agent teaming', topics: [
          'Trust calibration in human-AI teams', 'Oversight fatigue & automation complacency', 'Role complementarity (human + agent skill mapping)', 'Cognitive load management with AI assistants', 'Shared mental models between humans and agents', 'Adaptive autonomy levels', 'Explainability requirements for team trust', 'Handoff protocols (agent-to-human escalation)', 'Anti-patterns: over-reliance, learned helplessness, automation bias', 'Mixed-initiative interaction design', 'Team situational awareness with AI members', 'Workforce redesign for human-agent collaboration'
        ] }
      ]
    }
  ];

  window.__SyllabusDataset = Object.freeze({
    rawData
  });
}());

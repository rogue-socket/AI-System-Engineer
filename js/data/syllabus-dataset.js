(function () {
  function newTopic(text, extra) {
    return { text, ...(extra || {}) };
  }

  const rawData = [
    {
      id: 0, title: 'Mental Models', color: '#2DABB1', bg: '#E0F5F5',
      sections: [
        { title: 'What a model is', topics: [
          'A model is a file of numbers, not a program with rules',
          'What a neural network looks like — layers of simple math that compose into complex behavior',
          'What a parameter is — one adjustable number; billions of them together encode everything the model "knows"',
          'What the transformer is — the architecture behind LLMs, where every token can attend to every other token',
          'What attention does — the model deciding which parts of the input matter for predicting the next piece',
          'What "large" means in Large Language Model — parameter count, data scale, compute spent',
          'What a foundation model is — one pretrained model adapted to many downstream tasks',
          'Open-weight vs closed — you get the file vs you get an API endpoint',
          'Why a model is frozen after training — the weights don\'t change when you use it, only when you train it again',
          'Model families and versions — why GPT-4, GPT-4o, and GPT-4 Turbo are different models with different tradeoffs'
        ] },
        { title: 'How models learn', topics: [
          'What training is — showing billions of examples and adjusting weights to reduce prediction error',
          'What pretraining does — learning language patterns from the internet at massive scale',
          'The training objective in one sentence — predict the next token, that\'s it, but it\'s enough',
          'What loss means — a number that goes down when the model gets better at predicting',
          'Why the dataset matters more than the architecture — garbage in, garbage out, at scale',
          'What RLHF does — human preference data steers the model from "predict text" to "be helpful"',
          'What instruction tuning is — teaching the model to follow directions rather than just complete text',
          'What fine-tuning is — additional training on specific data to specialize a general model',
          'What distillation is — training a small model to mimic a large one\'s behavior',
          'What scaling laws say — more data, more parameters, more compute produces predictably better models',
          'What emergent capabilities are — abilities that appear at scale without being explicitly trained',
          'Why training and inference are completely different phases — training is rare and expensive, inference is constant and cheap'
        ] },
        { title: 'How models generate', topics: [
          'Generation is next-token prediction — one token at a time, always predicting what comes next',
          'What autoregressive means — each new token depends on all the tokens before it',
          'What the output looks like internally — a probability distribution over every possible next token',
          'What temperature does — controls how spread out or peaked that distribution is',
          'What top-p and top-k do — different cutoffs for pruning unlikely tokens before sampling',
          'What greedy decoding is — always picking the most probable token, and why it sounds robotic',
          'Why generation is inherently slow — the sequential one-at-a-time bottleneck',
          'What time-to-first-token means — the pause before output starts streaming',
          'What streaming is — sending tokens to the user as they\'re generated, not waiting for the full response',
          'What a stop sequence is — how the model knows when it\'s done',
          'What batching means for inference — processing multiple user requests simultaneously to share GPU compute',
          'Why the same prompt can give different outputs — sampling is stochastic unless temperature is zero'
        ] },
        { title: 'Tokens, context, and the input surface', topics: [
          'What a token is — a chunk of text, roughly three-quarters of an English word',
          'Why "count the r\'s in strawberry" fails — the model never sees individual characters, only token chunks',
          'What a tokenizer does — maps text to integer IDs and back; different models use different tokenizers',
          'Why code, JSON, and non-English text are expensive — tokenizers are optimized for common English prose',
          'What context window means — the fixed-size buffer of tokens the model can see in one call',
          'Why context is not memory — it\'s rebuilt from scratch on every request',
          'What competes for context space — system prompt, conversation history, retrieved documents, your message, and the model\'s reply all share one budget',
          'What "lost in the middle" means — models attend more to the beginning and end, less to the center',
          'Why longer context isn\'t always better — more tokens means more noise, higher cost, slower responses',
          'Token economics — input tokens and output tokens are priced differently, and the ratio matters'
        ] },
        { title: 'Prompting as steering', topics: [
          'What a prompt actually does — selects which patterns the model will activate and extend',
          'Why prompting works at all — the model is a pattern completer, and the prompt sets up the pattern',
          'What a system prompt is — persistent framing that shapes every response in the conversation',
          'What few-shot examples do — they demonstrate the pattern instead of describing it',
          'What chain-of-thought prompting is — asking the model to reason step by step before giving the answer',
          'Why more output tokens before the answer often means better answers — generation is computation',
          'Why small wording changes cause large output shifts — you\'re navigating a high-dimensional space',
          'What structured output means — constraining the model to produce JSON, XML, or another machine-readable format',
          'What prompt injection is — adversarial input that hijacks the model\'s instructions',
          'Why "just ask clearly" is necessary but not sufficient — the model optimizes for plausible continuation, not correctness'
        ] },
        { title: 'Reasoning, planning, and model limitations', topics: [
          'What "reasoning" means for a model — generating tokens that look like reasoning, not an internal thought process',
          'What a reasoning model is — specifically trained to produce extended thinking chains before answering',
          'What thinking tokens are — intermediate steps the model generates that may or may not be visible to the user',
          'What planning looks like — the model can decompose problems into steps, but can\'t guarantee the plan is executable',
          'What self-correction looks like — the model critiquing its own output in a follow-up pass',
          'Why models hallucinate — they complete patterns plausibly, they don\'t verify against a source of truth',
          'What models are reliably bad at — counting, spatial reasoning, precise arithmetic, consistent negation',
          'The difference between generating and knowing — the model can produce correct-looking text without "knowing" it\'s correct',
          'Why confidence and correctness are unrelated — the model sounds equally sure whether it\'s right or wrong'
        ] },
        { title: 'Agents, tools, and autonomy', topics: [
          'What an agent is — a program that calls a model in a loop: observe, decide, act, repeat',
          'What the agent loop looks like — prompt the model, parse the response, execute an action, feed the result back, repeat',
          'What separates an agent from a single model call — persistence across steps, actions in the real world, and feedback',
          'What a tool is — a function the agent can invoke: search, run code, read files, call APIs, query databases',
          'How tool calling works — the model outputs structured text requesting a function call, your code executes it and returns the result',
          'What a multi-agent system is — multiple agents coordinating, each with different roles or capabilities',
          'What autonomy levels mean — from "suggest an action for human approval" to "execute end-to-end without asking"',
          'What a human-in-the-loop is — a checkpoint where the agent pauses for human review before proceeding',
          'What guardrails are — programmatic constraints that prevent the agent from taking dangerous or unintended actions',
          'Why agents fail — compounding small errors, hallucinated actions, infinite loops, losing track of the goal',
          'What an agent framework is — a library that handles the loop mechanics so you write the decision logic'
        ] },
        { title: 'Memory, retrieval, and state', topics: [
          'Why models have no memory — every API call is independent; the model doesn\'t remember the last one',
          'What conversation history really is — you rebuild context by resending prior messages every time',
          'What short-term memory means for agents — whatever fits in the current context window',
          'What long-term memory means for agents — external storage you build around the model: databases, files, vector stores',
          'What an embedding is — a fixed-size vector of numbers that captures the meaning of a piece of text',
          'What vector similarity means — similar meanings produce nearby vectors; you can search by meaning, not keywords',
          'What a vector database does — stores embeddings and retrieves the closest matches efficiently',
          'What RAG is — Retrieval-Augmented Generation: look up relevant information, inject it into the prompt, then generate',
          'Why RAG exists — models can\'t know everything, context windows aren\'t infinite, and information changes',
          'What a knowledge graph is — facts as structured relationships (entity → relation → entity) rather than raw text'
        ] },
        { title: 'The system around the model', topics: [
          'What an AI system is — model + code + data + infrastructure; the model is one component, not the product',
          'Why most engineering effort is outside the model — parsing, validation, routing, error handling, storage, UI',
          'What a pipeline is — multiple model calls chained with code in between, each step feeding the next',
          'What orchestration means — managing the flow of data and control across multiple components or models',
          'What multi-model routing looks like — using a small fast model for easy tasks and routing hard ones to an expensive model',
          'What evaluation means — systematically measuring whether your system does what you intended',
          'What observability means — the ability to see what happened inside the system when something goes wrong',
          'What the latency-cost-quality triangle is — every design decision trades between speed, price, and output quality',
          'What deployment means here — getting from "works on my laptop" to "serves users reliably at scale"',
          'Why versioning everything matters — the model, the prompt, the retrieval pipeline, and the evaluation all change independently'
        ] }
      ]
    },
    {
      id: 1, title: 'Foundation Models', color: '#7F77DD', bg: '#EEEDFE',
      sections: [
        { title: 'Model internals for system design', topics: [
          'KV cache mechanics and memory scaling',
          'Context window economics',
          'Tokenizer behavior and budget planning',
          'Attention variants that affect serving (GQA, MHA, MLA)',
          'Mixture of Experts routing and serving implications',
          'State-space models (Mamba, RWKV) as transformer alternatives'
        ] },
        { title: 'Model selection', topics: [
          'Reasoning vs speed vs cost trade-off framework',
          'Open-weight vs API model decision matrix',
          'Small models that outperform (when 7B beats 70B)',
          'Model cards — what they tell you and what they hide',
          'Benchmark gaming and how to read leaderboards honestly',
          'The distillation question — when to train your own'
        ] },
        { title: 'Inference optimization', topics: [
          'Speculative decoding (draft + verifier)',
          'Quantization trade-offs (GPTQ, AWQ, GGUF)',
          'Continuous batching and PagedAttention (vLLM)',
          'KV cache compression and eviction',
          'Prompt caching and prefix sharing',
          'FlashAttention and memory-efficient serving',
          'Mixed-precision inference (FP8, BF16)',
          'Tensor and pipeline parallelism for serving',
          'Chunked prefill and disaggregated serving'
        ] },
        { title: 'Structured output', topics: [
          'JSON mode and constrained decoding',
          'Grammar-guided generation',
          'Schema validation at the generation boundary',
          'Structured output failure modes and recovery',
          'Tool-call output format design'
        ] },
        { title: 'Embedding and retrieval models', topics: [
          'Text embedding model selection (dimensions, cost, quality)',
          'Matryoshka embeddings for variable-precision retrieval',
          'Cross-encoder rerankers vs bi-encoder trade-offs',
          'ColBERT and late interaction models',
          'Embedding fine-tuning for domain adaptation',
          'MTEB benchmark and evaluation pitfalls',
          'Multimodal embeddings (CLIP, SigLIP) for cross-modal retrieval'
        ] },
        { title: 'Prompt engineering for production', topics: [
          'Prompt versioning and registries',
          'Prompt regression testing',
          'Prompt A/B testing and experimentation',
          'Prompt-model co-versioning',
          'Prompt compression and context budgeting',
          'System vs user prompt boundary design',
          'Meta-prompting and prompt chaining',
          'Prompt rollback and incident response'
        ] },
        { title: 'Reasoning models', topics: [
          'When reasoning models are worth the cost',
          'Thinking budget and adaptive compute allocation',
          'Test-time compute scaling laws',
          'Chain-of-thought token economics',
          'Hybrid thinking and non-thinking modes',
          'Process reward models vs outcome reward models'
        ] }
      ]
    },
    {
      id: 2, title: 'Reasoning & Intelligence', color: '#1D9E75', bg: '#E1F5EE',
      sections: [
        { title: 'The agent loop', topics: [
          'Perceive-reason-act loop mechanics',
          'Bounded vs unbounded execution',
          'Deterministic replay and resume-from-failure',
          'State persistence — why SQLite often beats Redis for single-node agents',
          'Event sourcing for agent traces',
          'Stop conditions and escalation criteria',
          'The ReAct pattern and its degradation past ~10 iterations'
        ] },
        { title: 'Planning and decomposition', topics: [
          'Task decomposition strategies',
          'Hierarchical planning and replanning',
          'Plan-and-execute vs reactive agents',
          'Budget-aware planning (token, cost, and time limits)',
          'Plan repair after partial failure',
          'Goal prioritization under constraints'
        ] },
        { title: 'Reasoning patterns', topics: [
          'Chain-of-Thought — when it helps and when it hurts',
          'Tree-of-Thought vs Graph-of-Thought trade-offs',
          'Self-consistency via majority voting',
          'Tool-assisted reasoning',
          'Verifier-guided reasoning',
          'Test-time compute vs fine-tuning — the crossover point'
        ] },
        { title: 'Reflection and self-correction', topics: [
          'Reflection loops and their overhead cost',
          'Self-critique that actually improves output',
          'Trajectory critique and repair',
          'Iterative refinement vs single-shot — when each wins',
          'Post-action review patterns'
        ] },
        { title: 'Metacognition', topics: [
          'Confidence calibration and its limits',
          'Selective abstention — when to say I don\'t know',
          'Out-of-distribution detection for agents',
          'Knowing-when-to-stop (task completion detection)',
          'Confidence-gated action execution',
          'Resource-bounded reasoning'
        ] },
        { title: 'Agent architectures', topics: [
          'ReAct agents — strengths and breaking points',
          'Plan-and-execute agents',
          'Tool-using agents',
          'Autonomous vs bounded agents — the spectrum',
          'Compound AI systems as the real architecture',
          'Cognitive architectures (ACT-R, SOAR) — lessons for LLM agents',
          'LLM-as-judge in the loop'
        ] }
      ]
    },
    {
      id: 3, title: 'Memory & Knowledge', color: '#378ADD', bg: '#E6F1FB',
      sections: [
        { title: 'Memory architecture', topics: [
          'Working memory (in-context) and its limits',
          'Episodic memory — event logs with timestamps',
          'Semantic memory — facts and relationships',
          'Procedural memory — learned action patterns',
          'Memory promotion rules (reactive recall to system prompt by use count)',
          'Memory compression and summarization trade-offs',
          'Memory pruning and forgetting policies',
          'Memory versioning and rollback',
          'Context window management strategies',
          'MemGPT and Letta patterns for virtual context'
        ] },
        { title: 'Retrieval fundamentals', topics: [
          'Vector search (ANN, HNSW) and index tuning',
          'BM25 keyword search — when it beats dense retrieval',
          'Hybrid search (BM25 + dense) — when it is worth the complexity',
          'Query rewriting and expansion',
          'HyDE (Hypothetical Document Embeddings)',
          'Reciprocal Rank Fusion for multi-signal merging',
          'Reranking with cross-encoders — latency vs relevance',
          'ColBERT for late interaction retrieval',
          'Contextual retrieval (document-level context injection)',
          'Learned sparse retrieval (SPLADE)'
        ] },
        { title: 'Chunking and indexing', topics: [
          'Chunking strategies beyond 512 tokens with 50 overlap',
          'Semantic chunking vs fixed-size trade-offs',
          'Parent-child retrieval (chunk-level match, full-doc context)',
          'Late chunking',
          'Metadata enrichment and filtering',
          'Multi-index strategies',
          'Indexing pipeline automation'
        ] },
        { title: 'RAG architectures', topics: [
          'Single-hop RAG and its ceiling',
          'Multi-hop RAG for complex questions',
          'Agentic RAG — retrieve, evaluate, re-retrieve',
          'Corrective RAG (CRAG)',
          'Self-RAG',
          'GraphRAG for relational knowledge',
          'RAG vs fine-tuning vs long context — decision framework',
          'RAG evaluation (faithfulness, relevance, coverage)',
          'Cache-augmented generation'
        ] },
        { title: 'Knowledge stores', topics: [
          'sqlite-vec vs Qdrant vs Pinecone vs Milvus — selection criteria',
          'Chroma and LanceDB for embedded use cases',
          'pgvector for operational workloads',
          'Knowledge graphs (Neo4j) vs vector search — when each wins',
          'Multi-tenant knowledge isolation',
          'Cache invalidation as the actual hard problem',
          'Freshness and staleness detection'
        ] }
      ]
    },
    {
      id: 4, title: 'Agency & Tool Use', color: '#EF9F27', bg: '#FAEEDA',
      sections: [
        { title: 'Tool design discipline', topics: [
          'Tools as typed functions — schema-first design',
          'JSON Schema for tool interfaces',
          'Read-only vs side-effecting tool boundaries',
          'Idempotency keys for retry safety',
          'Schema validation at the boundary',
          'Error surfaces the model can actually recover from',
          'Approval gates for paid and destructive actions',
          'Tool allowlists vs sandboxing',
          'Parallel tool call design',
          'Tool result format design'
        ] },
        { title: 'Information tools', topics: [
          'Web search integration patterns',
          'Web scraping with anti-bot considerations',
          'API integration and rate limit handling',
          'File ingestion pipelines (PDF, CSV, DOCX)',
          'Code interpreter sandboxes',
          'Database query tools and read-only boundaries'
        ] },
        { title: 'Action tools', topics: [
          'Code execution sandboxing (E2B, Modal, Firecracker)',
          'File system operations and permission models',
          'Shell and CLI automation',
          'Browser automation (Playwright, Puppeteer patterns)',
          'Computer use and GUI agents',
          'Voice and telephony agent tooling'
        ] },
        { title: 'Meta tooling', topics: [
          'Dynamic tool registration and discovery',
          'Tool ranking and selection strategies',
          'Capability descriptors and manifests',
          'Tool health checks and fallback policies',
          'Cost-aware tool selection',
          'Tool learning from feedback'
        ] },
        { title: 'Protocols and standards', topics: [
          'MCP — what it solves and what it does not',
          'A2A protocol — agent-to-agent communication',
          'MCP server ecosystem and hosting',
          'Agent cards and manifest formats',
          'OpenAPI for agent tool interfaces',
          'Protocol bridging (MCP to A2A)',
          'Transport and session patterns for agent protocols',
          'When to skip protocols entirely'
        ] },
        { title: 'Interaction patterns', topics: [
          'Human-in-the-loop vs human-on-the-loop vs full autonomy',
          'Approval workflows and escalation design',
          'Streaming agents and partial results',
          'Event-driven vs polling agents',
          'Validation checkpoint architecture',
          'Rollback-on-failure and compensating actions',
          'Adaptive autonomy levels'
        ] },
        { title: 'Agent identity and authentication', topics: [
          'OAuth flows for agents',
          'Delegated authorization — agent acts as user',
          'Scoped permission tokens per task',
          'Credential rotation for long-running agents',
          'Machine identity for agents (mTLS, service accounts)',
          'Multi-agent trust chains'
        ] }
      ]
    },
    {
      id: 5, title: 'Multi-Agent Systems', color: '#D4537E', bg: '#FBEAF0',
      sections: [
        { title: 'When multi-agent is wrong', topics: [
          'Why most multi-agent systems should be one agent with better tools',
          'The coordination overhead tax',
          'Single agent with role-switching vs multiple agents',
          'Complexity budgets for multi-agent',
          'The just add another agent antipattern'
        ] },
        { title: 'Orchestration patterns', topics: [
          'Coordinator-worker pattern',
          'Peer mesh vs hierarchical networks',
          'Capsule and subprocess isolation — trade-offs',
          'StateGraph vs hand-rolled orchestration — when each wins',
          'Router pattern (classify and dispatch)',
          'Map-reduce pattern (parallel fan-out)',
          'Supervisor pattern',
          'Critic and verifier pattern',
          'Assembly line pattern (sequential specialization)',
          'Blackboard pattern (shared workspace)'
        ] },
        { title: 'Coordination mechanics', topics: [
          'Message passing design',
          'Shared state management',
          'Context handoff protocols',
          'Conflict resolution strategies',
          'Task delegation and load balancing',
          'Termination conditions and handoff criteria',
          'Agent discovery and registration'
        ] },
        { title: 'Frameworks', topics: [
          'LangGraph — StateGraph and when it fits',
          'OpenAI Agents SDK',
          'PydanticAI',
          'CrewAI trade-offs',
          'Haystack for pipelines',
          'Temporal and Inngest for durable execution',
          'Framework selection criteria'
        ] },
        { title: 'Failure modes at scale', topics: [
          'Coordination collapse — deadlock and livelock',
          'Cascade failures across agent hops',
          'Deference loops — agents deferring indefinitely',
          'Context window exhaustion in multi-turn chains',
          'Hallucination amplification across hops',
          'Silent failure and false success reporting',
          'Communication overhead explosion',
          'Goal drift in long-running workflows'
        ] }
      ]
    },
    {
      id: 6, title: 'Infrastructure & Deployment', color: '#888780', bg: '#F1EFE8',
      sections: [
        { title: 'Model serving', topics: [
          'API providers vs self-hosted — decision framework',
          'Local inference (Ollama, vLLM, llama.cpp)',
          'Model routing — cheap-first cascades',
          'Fallback model chains',
          'Token streaming implementation',
          'GPU orchestration and scheduling',
          'Inference provider selection (Groq, Together, Fireworks)'
        ] },
        { title: 'Production hardening', topics: [
          'Rate limiting strategies for LLM APIs',
          'Retry policies with exponential backoff and jitter',
          'Cost ceilings per request',
          'Timeout design for variable-latency LLM calls',
          'Backpressure and queue-based request handling',
          'Circuit breakers for model endpoints',
          'Health checks and readiness probes for AI services',
          'Graceful degradation — model fallback and feature flags'
        ] },
        { title: 'Caching and performance', topics: [
          'Semantic caching — when it works and when it poisons',
          'Redis caching patterns for LLM calls',
          'Prompt caching economics (KV reuse savings)',
          'Response caching and invalidation strategies',
          'Prefix caching for shared system prompts'
        ] },
        { title: 'Data infrastructure', topics: [
          'Vector database operations at scale',
          'SQL and NoSQL for agent state',
          'Message queues for async agents',
          'Stream processing for real-time agent pipelines',
          'Feature stores for agent context'
        ] },
        { title: 'Deployment patterns', topics: [
          'Container strategies for agents',
          'Serverless agents — cold start trade-offs',
          'Persistent agent processes (long-running)',
          'Canary deployments for model changes',
          'Blue-green for prompt updates',
          'Agent-as-a-service patterns',
          'Shadow mode for safe model rollout'
        ] },
        { title: 'Cost engineering', topics: [
          'Token budgeting per task',
          'Cost-per-task modeling and metering',
          'Multi-step pipeline budget allocation',
          'Token-level cost attribution and chargebacks',
          'Reasoning token cost accounting',
          'Agent ROI frameworks',
          'FinOps governance for autonomous pipelines'
        ] },
        { title: 'API design for AI services', topics: [
          'Streaming response design (SSE, WebSocket, chunked transfer)',
          'Webhook patterns for async agent execution',
          'Long-running task APIs (polling, callbacks, WebSockets)',
          'API versioning for prompt and model changes',
          'Idempotency keys for agent actions',
          'Multi-tenant API isolation'
        ] },
        { title: 'Fine-tuning and adaptation', topics: [
          'Full fine-tuning vs LoRA vs QLoRA — decision framework',
          'When to fine-tune vs when to prompt engineer',
          'Synthetic data generation for agent training',
          'RLHF and DPO for behavior alignment',
          'Model merging techniques (TIES, DARE, SLERP)',
          'Continual learning pitfalls'
        ] }
      ]
    },
    {
      id: 7, title: 'Safety, Security & Governance', color: '#E24B4A', bg: '#FCEBEB',
      sections: [
        { title: 'Threat landscape', topics: [
          'Direct prompt injection',
          'Indirect prompt injection — data-plane attacks',
          'Goal hijacking and instruction override',
          'Tool misuse and excessive agency',
          'Memory poisoning',
          'Multi-hop prompt injection',
          'Data exfiltration via agent tools',
          'Supply chain attacks on MCP servers',
          'Agent credential theft'
        ] },
        { title: 'Defense mechanisms', topics: [
          'The deterministic shell around stochastic core pattern',
          'Bounded loops — cap at N steps',
          'Tool allowlists and deny-by-default',
          'Output schema validation as a safety layer',
          'Input and output filtering',
          'Sandboxing execution environments',
          'Permission systems and least privilege',
          'Kill switches and emergency stops',
          'Human oversight checkpoints',
          'Canary tokens for data leakage detection',
          'Red teaming agents'
        ] },
        { title: 'Governance and compliance', topics: [
          'OWASP Agentic AI Top 10',
          'EU AI Act — practical implications for agent builders',
          'Agent audit trails and structured logging',
          'Policy enforcement for agents',
          'Zero-trust for agent architectures',
          'Agent identity management and inventories',
          'Responsible AI frameworks that actually work'
        ] },
        { title: 'Privacy and data protection', topics: [
          'PII detection and redaction in agent pipelines',
          'Data minimization for agent context',
          'Right-to-erasure in agent memory systems',
          'Consent management for agent data use',
          'Differential privacy for agent training data',
          'Confidential computing for inference'
        ] }
      ]
    },
    {
      id: 8, title: 'Evaluation, Observability & Applications', color: '#639922', bg: '#EAF3DE',
      sections: [
        { title: 'Evaluation frameworks', topics: [
          'RAGAs vs DeepEval vs hand-rolled — when each fits',
          'LLM-as-judge bias and calibration traps',
          'Golden sets and regression suites',
          'Adversarial evaluation',
          'Trajectory evaluation — not just the final answer',
          'Fuzzy comparison metrics (Levenshtein, token_sort_ratio, WRatio)',
          'End-to-end agent evaluation',
          'Multi-turn evaluation',
          'SWE-bench and AgentBench — what they measure',
          'BFCL (Berkeley Function Calling Leaderboard)'
        ] },
        { title: 'Observability', topics: [
          'Structured tracing for agent runs',
          'Span hierarchies for multi-step agents',
          'LangSmith vs Langfuse vs Braintrust',
          'OpenTelemetry for AI agents',
          'Replay-from-trace debugging',
          'Prompt versioning in traces',
          'Cost attribution per turn',
          'Token usage dashboards and alerting',
          'Alert design for agent failures'
        ] },
        { title: 'Debugging and testing', topics: [
          'Prompt debugging techniques',
          'Tool call debugging',
          'Deterministic replay for agent runs',
          'Failure analysis patterns',
          'Unit tests for agents',
          'Integration tests for tool-calling agents',
          'Regression testing for prompt changes',
          'Snapshot testing for prompt outputs',
          'Mock tool servers for testing',
          'Chaos engineering for agents'
        ] },
        { title: 'CI/CD for AI systems', topics: [
          'Prompt testing in CI pipelines',
          'Model regression checks',
          'Eval-gated deployments',
          'Shadow mode and dark launches for model changes',
          'Canary releases with eval thresholds',
          'Rollback strategies for model updates',
          'Contract testing for LLM outputs'
        ] },
        { title: 'Performance engineering', topics: [
          'Latency optimization strategies',
          'Cost optimization patterns',
          'Parallel execution for independent steps',
          'Batching LLM calls',
          'Model routing — small to large cascades',
          'Context pruning strategies'
        ] },
        { title: 'Application patterns', topics: [
          'Coding agents — architecture and orchestration',
          'DevOps and SRE agents',
          'Customer support agents',
          'Research and deep-analysis agents',
          'Data pipeline agents',
          'Document processing agents'
        ] }
      ]
    }
  ];

  window.__SyllabusDataset = Object.freeze({
    rawData
  });
}());

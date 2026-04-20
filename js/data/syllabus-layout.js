(function () {
  const contentApi = window.__SyllabusContent || {};
  const { newTopic, dedupeTopics, copyTopics, copySection, syntheticSection, topicText } = contentApi;

  if (!newTopic || !dedupeTopics || !copyTopics || !copySection || !syntheticSection || !topicText) {
    throw new Error('Syllabus content helpers failed to load before syllabus layout.');
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
          })
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
            topics: copyTopics('Foundation Models', 'Core transformer architecture', function (topic) {
              return ![
                'Tokenization',
                'Byte-pair encoding (BPE)',
                'SentencePiece / Unigram tokenization',
                'Context windows',
                'Positional encoding'
              ].includes(topicText(topic));
            })
          }),
          syntheticSection('Architecture patterns & extensions', copyTopics('Foundation Models', 'Architecture extensions', function (topic) {
            return [
              'Rotary Position Embedding (RoPE)',
              'Grouped Query Attention (GQA)',
              'Sliding window attention',
              'Mixture of Experts (MoE)',
              'State-space models (Mamba, RWKV)',
              'Multi-Head Latent Attention (MLA)',
              'Ring attention / infinite context'
            ].includes(topicText(topic));
          }), {
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
            topics: copyTopics('Reasoning & Intelligence', 'Agent architectures', function (topic) {
              return topicText(topic) !== 'Compound AI systems';
            })
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
            topics: copyTopics('Agency & Tool Use', 'Interaction patterns', function (topic) {
              return !validationTopics.includes(topicText(topic));
            })
          }),
          copySection('Agency & Tool Use', 'Tool interfaces', {
            prerequisites: ['Prompt & interface design', 'Interaction patterns & autonomy']
          }),
          syntheticSection('Control & validation', dedupeTopics([
            ...copyTopics('Agency & Tool Use', 'Interaction patterns', function (topic) {
              return validationTopics.includes(topicText(topic));
            }),
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
            topics: copyTopics('Multi-Agent Systems', 'Coordination & communication', function (topic) {
              return !['Agent protocol standardization', 'Trust & reputation systems'].includes(topicText(topic));
            })
          }),
          copySection('Multi-Agent Systems', 'Workflow systems', {
            prerequisites: ['Multi-agent architectures', 'Decision-making & planning'],
            topics: copyTopics('Multi-Agent Systems', 'Workflow systems', function (topic) {
              return !workflowRuntimeTopics.includes(topicText(topic));
            })
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
            ...copyTopics('Infrastructure & Deployment', 'Learning & adaptation').map(function (topic) {
              return topicText(topic) === 'RLHF'
                ? newTopic('Reward modeling for preference tuning', { idSlug: 'RLHF' })
                : topic;
            })
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
            ...copyTopics('Safety, Security & Governance', 'Governance & compliance', function (topic) {
              return governanceIdentityTopics.includes(topicText(topic));
            })
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
            topics: copyTopics('Safety, Security & Governance', 'Governance & compliance', function (topic) {
              return !governanceIdentityTopics.includes(topicText(topic));
            })
          })
        ]
      }
    ];
  }

  window.__SyllabusContent = {
    ...contentApi,
    buildStructuredData
  };
}());

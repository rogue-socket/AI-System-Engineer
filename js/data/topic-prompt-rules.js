(function () {
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

  window.__SyllabusTopicPromptConfig = Object.freeze({
    topicPromptSectionFocusRules,
    topicPromptTitleFocusRules
  });
}());
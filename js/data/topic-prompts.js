(function () {
  function buildPrompt(lines) {
    return lines.join('\n');
  }

  // Reserved for optional hand-authored study-prompt overrides keyed by topic id or visible topic text.
  window.TopicPromptOverrides = Object.freeze({
    'Workflow vs agent vs multi-agent system': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Workflow vs agent vs multi-agent system" for someone designing real AI products and internal automation systems.',
        '',
        'Requirements:',
        '- Start with a crisp three-column comparison of workflow, single agent, and multi-agent system.',
        '- Make the main decision axis explicit: determinism, judgment, delegation, coordination cost, observability, latency, and failure surface.',
        '- Use concrete human analogies as real operational patterns or team structures, not brain metaphors.',
        '- Give one example where a workflow is the right answer, one where a bounded single agent is the right answer, and one where multi-agent coordination is justified.',
        '- Explain the most common mistake: calling everything an agent and paying unnecessary complexity costs.',
        '- Include a short decision rubric a team could actually use in an architecture review.',
        '- End with a concise mental model, 5 review questions, and 3 design exercises.'
      ])
    },
    'Models, memory, tools, controllers, and environments': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Models, memory, tools, controllers, and environments" as a system decomposition exercise for engineers building agents.',
        '',
        'Requirements:',
        '- Define each component precisely and explain what job it owns in a production agent system.',
        '- Show how failures get misdiagnosed when teams blame the model for a problem that actually lives in retrieval, tool design, control flow, or the environment.',
        '- Use a concrete organizational or operational analogy, not a mind or brain analogy.',
        '- Walk through one end-to-end example such as a support agent, coding agent, or operations assistant and map each part of the system to one of these components.',
        '- Include a troubleshooting table with columns for symptom, likely layer, and first debugging move.',
        '- End with a concise mental model, 5 review questions, and 3 hands-on exercises.'
      ])
    },
    'The observe -> think -> act -> verify -> update loop': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "The observe -> think -> act -> verify -> update loop" as the core operating loop of a serious agent.',
        '',
        'Requirements:',
        '- Explain each stage of the loop in order and what can go wrong if that stage is weak or skipped.',
        '- Contrast this closed loop with a one-shot chatbot response.',
        '- Use a concrete operational analogy such as troubleshooting, field operations, or case handling, not a brain analogy.',
        '- Include one realistic agent example where verification catches a bad action before the system drifts further.',
        '- Explain where state updates should live: prompt context, durable memory, workflow state, or external systems.',
        '- Include a short checklist for designing a safe loop with stop criteria and validation points.',
        '- End with a concise mental model, 5 review questions, and 3 implementation exercises.'
      ])
    },
    'Inputs, state, outputs, and side effects': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Inputs, state, outputs, and side effects" as a system-boundary topic for engineers building dependable agents.',
        '',
        'Requirements:',
        '- Define each term precisely and explain why teams get into trouble when they blur them together.',
        '- Use a concrete operations-process analogy, not a brain analogy.',
        '- Show one end-to-end agent example and label its inputs, internal state, outputs, and external side effects separately.',
        '- Explain the debugging value of this separation: what you inspect first when the answer is wrong, when memory is wrong, and when a real-world action was wrong.',
        '- Include a table with columns for layer, example, failure mode, and control mechanism.',
        '- Call out hidden side effects such as writes, notifications, purchases, or permissions changes that teams often forget to model.',
        '- End with a concise mental model, 5 review questions, and 3 architecture exercises.'
      ])
    },
    'Deterministic workflow steps vs probabilistic model steps': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Deterministic workflow steps vs probabilistic model steps" as a design-choice problem for production systems.',
        '',
        'Requirements:',
        '- Compare deterministic steps and probabilistic steps across repeatability, observability, failure handling, evaluation strategy, and safety.',
        '- Explain which decisions belong in code or workflow logic and which are worth leaving to model judgment.',
        '- Use a concrete operations or service-delivery analogy, not a brain analogy.',
        '- Walk through one realistic system that mixes both, and explain why each stage was assigned to workflow logic or model logic.',
        '- Include common anti-patterns such as putting hard business rules into prompts or forcing the model to fake determinism it cannot guarantee.',
        '- End with a concise mental model, 5 review questions, and 3 design exercises.'
      ])
    },
    'Context vs memory vs knowledge base': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Context vs memory vs knowledge base" for someone designing retrieval and state management in agents.',
        '',
        'Requirements:',
        '- Define context, memory, and knowledge base separately, then compare them in a table by time horizon, persistence, retrieval pattern, and operational risk.',
        '- Explain the placement decision: what belongs in immediate context, what deserves durable memory, and what should remain in a searchable external repository until needed.',
        '- Use concrete records-management or operations-workflow analogies, not mind or brain analogies.',
        '- Show a realistic anti-pattern where a team shoves everything into the prompt and another anti-pattern where they save too much as memory.',
        '- Walk through one end-to-end example such as a support or research agent that uses all three correctly.',
        '- End with a concise mental model, 5 review questions, and 3 design exercises.'
      ])
    },
    'Memory write vs memory recall vs context injection': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Memory write vs memory recall vs context injection" for engineers designing memory pipelines in agents.',
        '',
        'Requirements:',
        '- Distinguish the three operations clearly: when information is stored, when it is retrieved, and when it is actually placed into the working context of a model call.',
        '- Explain why these are different control points with different costs, risks, and debugging responsibilities.',
        '- Use a concrete records-management or case-handling analogy, not a brain analogy.',
        '- Walk through one realistic example where writing too much memory causes future noise and another where poor recall causes the system to miss relevant context.',
        '- Include a short control checklist covering write policy, recall policy, injection budget, and provenance tracking.',
        '- End with a concise mental model, 5 review questions, and 3 system-design exercises.'
      ])
    },
    'Grounding vs hallucination vs verification': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Grounding vs hallucination vs verification" for engineers who need reliable answers from agent systems.',
        '',
        'Requirements:',
        '- Define grounding, hallucination, and verification separately, then compare them in a table by purpose, mechanism, and failure mode.',
        '- Make it explicit that grounding reduces unsupported claims but does not by itself prove correctness, while verification is a separate control activity.',
        '- Use a concrete audit, investigation, or quality-review analogy, not a brain analogy.',
        '- Walk through one realistic failure where a grounded answer is still wrong and explain how verification would have caught it.',
        '- Include a practical pipeline showing where retrieval, answer generation, citation handling, and verification checks sit relative to each other.',
        '- End with a concise mental model, 5 review questions, and 3 implementation exercises.'
      ])
    },
    'Long context vs RAG vs fine-tuning': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Long context vs RAG vs fine-tuning" as a decision problem for engineering teams.',
        '',
        'Requirements:',
        '- Build a decision matrix comparing long context, RAG, and fine-tuning across freshness, behavior change, latency, cost, maintenance burden, evaluation difficulty, and governance risk.',
        '- Explain which problems are about knowledge access, which are about durable behavior change, and which are about giving the model more working material in one call.',
        '- Use operational or organizational analogies such as searching the archive, updating the training manual, or laying more documents on the desk, not brain analogies.',
        '- Give one realistic product example for each choice and one example where a hybrid strategy is justified.',
        '- Call out the most common mistake: using the fashionable lever rather than the lever that matches the real problem.',
        '- End with a concise mental model, 5 review questions, and 3 architecture exercises.'
      ])
    },
    'Function calling vs tool use vs agent action': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Function calling vs tool use vs agent action" for engineers building tool-using agents that must interact reliably with software systems.',
        '',
        'Requirements:',
        '- Start with a crisp comparison between function calling, broader tool use, and full agent action.',
        '- Explain where structured invocation ends and where higher-level action planning begins.',
        '- Cover the full path for a function-calling step: tool description, schema, selection, argument generation, validation, execution, result handling, and retry strategy.',
        '- Use a concrete operational analogy such as a standardized service request or intake form, not a brain analogy.',
        '- Show one example of simple function calling, one of richer tool use, and one of a multi-step agent action that coordinates several tools and decisions.',
        '- Cover common failure modes: ambiguous tool names, bad argument schemas, missing validation, silent execution errors, and over-permissive tool surfaces.',
        '- Include a checklist for deciding when a task only needs function calling and when it has crossed into agent action.',
        '- End with a concise mental model, 5 review questions, and 3 implementation exercises.'
      ])
    },
    'Retrieval vs search vs reranking': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Retrieval vs search vs reranking" for engineers designing evidence pipelines in agent systems.',
        '',
        'Requirements:',
        '- Define the three terms clearly and explain why they happen at different points in an information pipeline.',
        '- Compare broad candidate generation, query-driven search behavior, and reranking as separate responsibilities.',
        '- Use a concrete research-desk or archive-search analogy, not a brain analogy.',
        '- Walk through one realistic example where naive retrieval finds too much, search gets closer, and reranking produces the actually useful context set.',
        '- Cover the main trade-offs: latency, recall, precision, index quality, and evaluation strategy.',
        '- End with a concise mental model, 5 review questions, and 3 retrieval-design exercises.'
      ])
    },
    'Reasoning vs planning vs acting': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Reasoning vs planning vs acting" for engineers designing multi-step agent behavior.',
        '',
        'Requirements:',
        '- Define reasoning, planning, and acting separately, then explain how they depend on each other without being the same thing.',
        '- Compare situations where the agent should spend more effort on reasoning, where it should make a plan, and where it should act quickly with bounded checks.',
        '- Use a concrete troubleshooting, field-operations, or casework analogy, not a brain analogy.',
        '- Walk through one realistic agent task where reasoning shapes the plan and the plan shapes the actions, then show what breaks if one layer is skipped.',
        '- Cover common failure modes such as endless reasoning, brittle planning, premature action, and stale plans after new evidence arrives.',
        '- Include guidance on how to instrument each layer separately in logs or traces.',
        '- End with a concise mental model, 5 review questions, and 3 implementation exercises.'
      ])
    },
    'Routing vs orchestration vs delegation': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Routing vs orchestration vs delegation" as a systems-design distinction for agent engineers.',
        '',
        'Requirements:',
        '- Start with a crisp table comparing routing, orchestration, and delegation by who decides, what gets assigned, state ownership, and failure surface.',
        '- Explain where model routing fits as one special case inside the broader routing category.',
        '- Use a concrete triage, dispatch, or manager-to-specialist analogy from operations, not a brain analogy.',
        '- Walk through one realistic workflow and show which parts are routing, which are orchestration, and which are true delegation.',
        '- Cover the main trade-offs: cost, latency, coordination overhead, observability, and debugging complexity.',
        '- Include a short architecture checklist for deciding when a system only needs routing and when it has become orchestration or delegation.',
        '- End with a concise mental model, 5 review questions, and 3 architecture exercises.'
      ])
    },
    'Human-in-the-loop (HITL)': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Human-in-the-loop (HITL)" for engineers designing bounded autonomy and approval workflows.',
        '',
        'Requirements:',
        '- Define HITL precisely and distinguish it from human-on-the-loop and fully autonomous execution.',
        '- Explain where humans should intervene: approval gates, escalation points, ambiguity handling, low-confidence situations, and irreversible actions.',
        '- Use a concrete supervisory-review or operations-signoff analogy, not a brain analogy.',
        '- Walk through one realistic workflow where the agent does most of the work but a human reviews the critical decision point.',
        '- Cover the operational trade-offs: speed, trust, oversight fatigue, queueing, auditability, and the risk of humans becoming rubber stamps.',
        '- Include a short design checklist for deciding where to place human review and what evidence the agent should provide at handoff time.',
        '- End with a concise mental model, 5 review questions, and 3 workflow-design exercises.'
      ])
    },
    'Human approval gates vs full autonomy': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Human approval gates vs full autonomy" as a concrete operating-model decision for production agents.',
        '',
        'Requirements:',
        '- Compare approval-gated execution and fully autonomous execution across risk, speed, trust, queueing cost, auditability, and operator fatigue.',
        '- Explain how to choose approval points based on irreversibility, financial impact, permissions scope, and uncertainty.',
        '- Use a concrete signoff or control-room analogy, not a brain analogy.',
        '- Walk through one realistic workflow in both modes and show what changes operationally when the approval gate is removed.',
        '- Cover anti-patterns such as approvals that arrive too late, humans reduced to rubber stamps, and autonomy enabled without rollback design.',
        '- End with a concise mental model, 5 review questions, and 3 workflow-design exercises.'
      ])
    },
    'Guardrails vs validators vs evaluators': {
      prompt: buildPrompt([
        'You are an expert tutor in AI agent systems and production AI architecture.',
        '',
        'Teach the topic "Guardrails vs validators vs evaluators" for engineers building controlled and measurable agent systems.',
        '',
        'Requirements:',
        '- Define guardrails, validators, and evaluators separately, then compare them by timing, purpose, strictness, and typical implementation style.',
        '- Explain which ones are preventative controls, which ones are pass-fail checks, and which ones are measurement or judgment layers.',
        '- Use a concrete QA, compliance, or review-process analogy, not a brain analogy.',
        '- Walk through one realistic agent workflow and show where each layer belongs before, during, and after execution.',
        '- Cover anti-patterns such as using a soft evaluator where a hard validator is required or calling every policy check a guardrail.',
        '- Include a short checklist for deciding which control type belongs at each stage of a workflow.',
        '- End with a concise mental model, 5 review questions, and 3 control-design exercises.'
      ])
    }
  });
}());
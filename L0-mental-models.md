# L0 — Mental Models

> What the words actually mean.

This layer goes before L1 (Foundation Models). It gives learners the right mental pictures so that when they encounter terms like "inference," "agent loop," or "RAG" in L1–L8, they already have an intuition for what's happening.

No technical depth — just the correct picture in your head.

---

## Implementation

- **Layer ID**: 0
- **Title**: Mental Models
- **Color/bg**: TBD (needs a distinct color not used by L1–L8)
- **Kind**: Orientation
- **Scope**: Foundational intuitions — what models are, how they generate, what agents do, and how systems are built around them

### Files to modify

1. **`js/data/syllabus-dataset.js`** — Add the raw layer (id: 0) with all sections and topics as the first entry in the `rawData` array.
2. **`js/data/syllabus-layout.js`** — Add the pedagogical layer as the first entry in `buildStructuredData()`, using `copySection('Mental Models', '<section title>')` calls with appropriate prerequisites.
3. **Renumber nothing** — existing layers keep their IDs (1–8). Layer 0 is prepended.

---

## Sections and Topics

### Section 1: What a model is

- A model is a file of numbers, not a program with rules
- What a neural network looks like — layers of simple math that compose into complex behavior
- What a parameter is — one adjustable number; billions of them together encode everything the model "knows"
- What the transformer is — the architecture behind LLMs, where every token can attend to every other token
- What attention does — the model deciding which parts of the input matter for predicting the next piece
- What "large" means in Large Language Model — parameter count, data scale, compute spent
- What a foundation model is — one pretrained model adapted to many downstream tasks
- Open-weight vs closed — you get the file vs you get an API endpoint
- Why a model is frozen after training — the weights don't change when you use it, only when you train it again
- Model families and versions — why GPT-4, GPT-4o, and GPT-4 Turbo are different models with different tradeoffs

### Section 2: How models learn

- What training is — showing billions of examples and adjusting weights to reduce prediction error
- What pretraining does — learning language patterns from the internet at massive scale
- The training objective in one sentence — predict the next token, that's it, but it's enough
- What loss means — a number that goes down when the model gets better at predicting
- Why the dataset matters more than the architecture — garbage in, garbage out, at scale
- What RLHF does — human preference data steers the model from "predict text" to "be helpful"
- What instruction tuning is — teaching the model to follow directions rather than just complete text
- What fine-tuning is — additional training on specific data to specialize a general model
- What distillation is — training a small model to mimic a large one's behavior
- What scaling laws say — more data, more parameters, more compute produces predictably better models
- What emergent capabilities are — abilities that appear at scale without being explicitly trained
- Why training and inference are completely different phases — training is rare and expensive, inference is constant and cheap

### Section 3: How models generate

- Generation is next-token prediction — one token at a time, always predicting what comes next
- What autoregressive means — each new token depends on all the tokens before it
- What the output looks like internally — a probability distribution over every possible next token
- What temperature does — controls how spread out or peaked that distribution is
- What top-p and top-k do — different cutoffs for pruning unlikely tokens before sampling
- What greedy decoding is — always picking the most probable token, and why it sounds robotic
- Why generation is inherently slow — the sequential one-at-a-time bottleneck
- What time-to-first-token means — the pause before output starts streaming
- What streaming is — sending tokens to the user as they're generated, not waiting for the full response
- What a stop sequence is — how the model knows when it's done
- What batching means for inference — processing multiple user requests simultaneously to share GPU compute
- Why the same prompt can give different outputs — sampling is stochastic unless temperature is zero

### Section 4: Tokens, context, and the input surface

- What a token is — a chunk of text, roughly three-quarters of an English word
- Why "count the r's in strawberry" fails — the model never sees individual characters, only token chunks
- What a tokenizer does — maps text to integer IDs and back; different models use different tokenizers
- Why code, JSON, and non-English text are expensive — tokenizers are optimized for common English prose
- What context window means — the fixed-size buffer of tokens the model can see in one call
- Why context is not memory — it's rebuilt from scratch on every request
- What competes for context space — system prompt, conversation history, retrieved documents, your message, and the model's reply all share one budget
- What "lost in the middle" means — models attend more to the beginning and end, less to the center
- Why longer context isn't always better — more tokens means more noise, higher cost, slower responses
- Token economics — input tokens and output tokens are priced differently, and the ratio matters

### Section 5: Prompting as steering

- What a prompt actually does — selects which patterns the model will activate and extend
- Why prompting works at all — the model is a pattern completer, and the prompt sets up the pattern
- What a system prompt is — persistent framing that shapes every response in the conversation
- What few-shot examples do — they demonstrate the pattern instead of describing it
- What chain-of-thought prompting is — asking the model to reason step by step before giving the answer
- Why more output tokens before the answer often means better answers — generation is computation
- Why small wording changes cause large output shifts — you're navigating a high-dimensional space
- What structured output means — constraining the model to produce JSON, XML, or another machine-readable format
- What prompt injection is — adversarial input that hijacks the model's instructions
- Why "just ask clearly" is necessary but not sufficient — the model optimizes for plausible continuation, not correctness

### Section 6: Reasoning, planning, and model limitations

- What "reasoning" means for a model — generating tokens that look like reasoning, not an internal thought process
- What a reasoning model is — specifically trained to produce extended thinking chains before answering
- What thinking tokens are — intermediate steps the model generates that may or may not be visible to the user
- What planning looks like — the model can decompose problems into steps, but can't guarantee the plan is executable
- What self-correction looks like — the model critiquing its own output in a follow-up pass
- Why models hallucinate — they complete patterns plausibly, they don't verify against a source of truth
- What models are reliably bad at — counting, spatial reasoning, precise arithmetic, consistent negation
- The difference between generating and knowing — the model can produce correct-looking text without "knowing" it's correct
- Why confidence and correctness are unrelated — the model sounds equally sure whether it's right or wrong

### Section 7: Agents, tools, and autonomy

- What an agent is — a program that calls a model in a loop: observe, decide, act, repeat
- What the agent loop looks like — prompt the model, parse the response, execute an action, feed the result back, repeat
- What separates an agent from a single model call — persistence across steps, actions in the real world, and feedback
- What a tool is — a function the agent can invoke: search, run code, read files, call APIs, query databases
- How tool calling works — the model outputs structured text requesting a function call, your code executes it and returns the result
- What a multi-agent system is — multiple agents coordinating, each with different roles or capabilities
- What autonomy levels mean — from "suggest an action for human approval" to "execute end-to-end without asking"
- What a human-in-the-loop is — a checkpoint where the agent pauses for human review before proceeding
- What guardrails are — programmatic constraints that prevent the agent from taking dangerous or unintended actions
- Why agents fail — compounding small errors, hallucinated actions, infinite loops, losing track of the goal
- What an agent framework is — a library that handles the loop mechanics so you write the decision logic

### Section 8: Memory, retrieval, and state

- Why models have no memory — every API call is independent; the model doesn't remember the last one
- What conversation history really is — you rebuild context by resending prior messages every time
- What short-term memory means for agents — whatever fits in the current context window
- What long-term memory means for agents — external storage you build around the model: databases, files, vector stores
- What an embedding is — a fixed-size vector of numbers that captures the meaning of a piece of text
- What vector similarity means — similar meanings produce nearby vectors; you can search by meaning, not keywords
- What a vector database does — stores embeddings and retrieves the closest matches efficiently
- What RAG is — Retrieval-Augmented Generation: look up relevant information, inject it into the prompt, then generate
- Why RAG exists — models can't know everything, context windows aren't infinite, and information changes
- What a knowledge graph is — facts as structured relationships (entity → relation → entity) rather than raw text

### Section 9: The system around the model

- What an AI system is — model + code + data + infrastructure; the model is one component, not the product
- Why most engineering effort is outside the model — parsing, validation, routing, error handling, storage, UI
- What a pipeline is — multiple model calls chained with code in between, each step feeding the next
- What orchestration means — managing the flow of data and control across multiple components or models
- What multi-model routing looks like — using a small fast model for easy tasks and routing hard ones to an expensive model
- What evaluation means — systematically measuring whether your system does what you intended
- What observability means — the ability to see what happened inside the system when something goes wrong
- What the latency-cost-quality triangle is — every design decision trades between speed, price, and output quality
- What deployment means here — getting from "works on my laptop" to "serves users reliably at scale"
- Why versioning everything matters — the model, the prompt, the retrieval pipeline, and the evaluation all change independently

---

## Summary

- **9 sections**, **~100 topics**
- Layer ID 0, prepended before all existing layers
- No existing layers or IDs need to change

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static single-page website for an AI Systems Engineering syllabus/curriculum. Pure vanilla JavaScript (ES5/ES6 IIFEs), HTML, and CSS — no framework, no bundler, no build step. Deployed on GitHub Pages at `https://rogue-socket.github.io/AI-System-Engineer/`.

## Running Locally

Serve the root directory with any static file server. VS Code Live Server is pre-configured on port 5501. Alternatives:
```
python -m http.server 5501
npx serve -p 5501
```
Open `index.html` (syllabus overview) or `topic.html?topic=<topicId>` (topic detail).

There is no build, lint, or test command. Runtime validation in `syllabus-validation.js` runs on page load and logs console warnings for: duplicate topic IDs, missing topic text, broken `sourceRefs` lineage, and stale keys in `TopicBriefOverrides`/`TopicPromptOverrides` that no longer match any topic ID or visible text.

## Architecture

### Module System

Scripts are loaded via `<script>` tags in dependency order. Each file is an IIFE that registers itself on `window` under a namespaced key (e.g. `window.__SyllabusCore`, `window.__SyllabusContent`). `syllabus.js` composes all registered APIs into a single `window.Syllabus` public facade used by page controllers.

**Load order** — `index.html` loads a base stack; `topic.html` adds topic-detail modules:
- Base: `syllabus-dataset` → `syllabus-helpers` → `syllabus-layout` → `syllabus-core` → `syllabus-startup` → `syllabus-validation` → `syllabus.js` → page controller
- Topic page inserts before core: `topic-briefs`, `topic-brief-config`, `topic-prompts`, `topic-prompt-rules`; after core: `topic-detail-shared`, `topic-brief`, `topic-prompt`, `topic-resources`, `topic-detail`

### Two-Tier Data Model

Content flows through two layers:
1. **`syllabus-dataset.js`** — the raw source of truth. Flat list of layers, each with sections and topic strings. All topic text originates here.
2. **`syllabus-layout.js`** — restructures raw data into pedagogical layers using helpers like `copySection(layerTitle, sectionTitle)` and `syntheticSection(...)`. Adds `prerequisites`, `sourceRefs`, and `idSlug` fields. This is where the learner-facing layer structure is defined.

`syllabus-helpers.js` bridges the two: it provides `copySection`, `copyTopics`, `newTopic`, `syntheticSection`, and topic normalization. To add a topic, add it in `syllabus-dataset.js` then reference it in `syllabus-layout.js`.

### Directory Layout

- `js/data/` — Raw content and helpers. `syllabus-dataset.js` has the syllabus structure; `topic-briefs.js` and `topic-prompts.js` hold hand-authored overrides.
- `js/core/` — Shared runtime: hydration, indexes, localStorage state, rendering, startup error display, and validation.
- `js/features/` — Topic-detail feature modules (brief generation, prompt generation, resource suggestions, related-topic graph utilities).
- `js/pages/` — Page-specific startup controllers (`index-page.js`, `topic-page.js`).

### Key Patterns

- **State**: Mutable module-level vars + `localStorage` for persistence (keys: `ai-agent-syllabus-topic-status-v1`, `ai-agent-syllabus-topic-resources-v1`). Pub/sub via `Set`-based listener lists for reactive re-renders.
- **Topic IDs**: Built in `syllabus-core.js:createTopicId` as `{layerId padded 2}--{slugified layer}--{slugified section}--{slugified topic text}--{layerIdx}--{secIdx}--{topicIdx}`. If a topic has an `idSlug` field, that is slugified instead of the visible text — this lets topic labels evolve without breaking stored progress or deep links. (No topics currently use `idSlug`.)
- **Routing**: URL query params (`topic.html?topic=<topicId>`).
- **Rendering**: Imperative DOM manipulation (`innerHTML`, `createElement`). No virtual DOM.
- **Theming**: CSS custom properties (`--page-theme`, `--page-tint`) set at runtime per layer color.
- **Content overrides**: `TopicBriefOverrides` and `TopicPromptOverrides` are keyed by topic ID or visible topic text. Lookup checks `entry.id` first, then `entry.text`. When neither matches, the generated fallback is used.

## Working With Content

Large files — read only the relevant section, not the whole file:
- `topic-briefs.js` (~2900 lines) — hand-authored brief overrides
- `syllabus-core.js` (~1100 lines) — hydration, state, rendering
- `syllabus-dataset.js` (~500 lines) — raw syllabus content

When adding or modifying topics, ensure the topic ID remains stable. Renaming a topic's visible text changes its ID (and breaks localStorage data and deep links) unless you add an `idSlug` field preserving the old slug.

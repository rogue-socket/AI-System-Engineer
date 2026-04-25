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

There is no build, lint, or test command. Runtime validation in `syllabus-validation.js` catches structural data issues (duplicate IDs, stale override keys) via console warnings on page load.

## Architecture

### Module System

Scripts are loaded via `<script>` tags in dependency order. Each file is an IIFE that registers itself on `window` under a namespaced key (e.g. `window.__SyllabusCore`, `window.__SyllabusContent`). `syllabus.js` composes all registered APIs into a single `window.Syllabus` public facade used by page controllers.

**Load order** — `index.html` loads a base stack; `topic.html` adds topic-detail modules:
- Base: `syllabus-dataset` → `syllabus-helpers` → `syllabus-layout` → `syllabus-core` → `syllabus-startup` → `syllabus-validation` → `syllabus.js` → page controller
- Topic page inserts before core: `topic-briefs`, `topic-brief-config`, `topic-prompts`, `topic-prompt-rules`; after core: `topic-detail-shared`, `topic-brief`, `topic-prompt`, `topic-resources`, `topic-detail`

### Directory Layout

- `js/data/` — Raw content and helpers. `syllabus-dataset.js` has the syllabus structure; `topic-briefs.js` and `topic-prompts.js` hold hand-authored overrides.
- `js/core/` — Shared runtime: hydration, indexes, localStorage state, rendering, startup error display, and validation.
- `js/features/` — Topic-detail feature modules (brief generation, prompt generation, resource suggestions, related-topic graph utilities).
- `js/pages/` — Page-specific startup controllers (`index-page.js`, `topic-page.js`).

### Key Patterns

- **State**: Mutable module-level vars + `localStorage` for persistence (keys: `ai-agent-syllabus-topic-status-v1`, `ai-agent-syllabus-topic-resources-v1`). Pub/sub via `Set`-based listener lists for reactive re-renders.
- **Routing**: URL query params (`topic.html?topic=<topicId>`). Topic IDs are deterministic slugs from layer/section/topic position, optionally overridden by `idSlug` fields.
- **Rendering**: Imperative DOM manipulation (`innerHTML`, `createElement`). No virtual DOM.
- **Theming**: CSS custom properties (`--page-theme`, `--page-tint`) set at runtime per layer color.
- **Content generation**: Brief and prompt content uses a fallback chain: hand-authored override → rule-based generated fallback. Override maps are validated at startup against known topic IDs.

## Working With Content

The largest files are content data: `topic-briefs.js` (~369KB), `topic-brief-config.js` (~49KB), `topic-prompts.js` (~20KB). When editing these, read only the relevant topic section rather than the whole file.

When adding or modifying topics, ensure the topic ID remains stable (check `idSlug` if present) to avoid breaking localStorage progress data and deep links.

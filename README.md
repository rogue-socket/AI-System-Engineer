# AI Agent Systems Syllabus

https://rogue-socket.github.io/AI-System-Engineer/

An interactive, browser-based syllabus for learning AI agent systems from first principles through deployment, evaluation, and governance.

The site is a static GitHub Pages project with no build step. It presents the syllabus as a layered taxonomy with searchable topics, topic detail pages, progress tracking in local storage, and export support.

The codebase is organized as plain browser scripts with a functional split rather than one large application file:

- `js/data/`: raw syllabus dataset, learner-facing syllabus layout, and the helper functions that bridge them into the runtime
- `js/core/`: shared hydration, indexing, startup handling, runtime validation, local storage state, and rendering utilities
- `js/features/`: topic-detail helpers split into shared graph/query utilities, brief generation, study-prompt generation, resource generation, and the final topic-detail builder
- `js/pages/`: page-specific startup controllers for each HTML entry point
- `syllabus.js`: thin public API wrapper that composes the loaded modules into `window.Syllabus`

The overview page loads only the shared data/core/startup/validation stack. The topic page adds the detail-specific feature scripts and hand-authored topic brief and prompt override files on top of that shared runtime.

## What It Includes

- A structured syllabus spanning models, cognition, memory, tool use, multi-agent systems, infrastructure, safety, and evaluation
- An orientation layer covering whole-system mental models, vocabulary, design trade-offs, and study sequencing
- Topic detail pages that expand a selected topic into related context, neighboring concepts, and study guidance
- Local progress markers for topics: Default, Need to visit, Learning, and Done
- Search, collapse/expand controls, and Markdown export
- Hand-authored topic briefs for selected topic detail pages, with generated fallbacks for the rest
- Hand-authored study-prompt overrides for selected high-value topic pages, with generated prompts for the rest
- A minimal static frontend designed to work well on GitHub Pages

## Running Locally

Because this is a static site, you can run it in any simple local web server.

- [index.html](/c:/workdir/AI-System-Engineer/index.html): main syllabus page
- [topic.html](/c:/workdir/AI-System-Engineer/topic.html): topic detail page
- [js/data/topic-briefs.js](/c:/workdir/AI-System-Engineer/js/data/topic-briefs.js): hand-authored topic brief content for selected topic pages
- [js/data/topic-brief-config.js](/c:/workdir/AI-System-Engineer/js/data/topic-brief-config.js): shared guide catalog and generic rule tables for topic brief generation
- [js/data/topic-prompts.js](/c:/workdir/AI-System-Engineer/js/data/topic-prompts.js): optional hand-authored study-prompt overrides, keyed by topic id or visible topic text
- [js/data/topic-prompt-rules.js](/c:/workdir/AI-System-Engineer/js/data/topic-prompt-rules.js): shared section/title focus rules used by generated study prompts
- [js/data/syllabus-dataset.js](/c:/workdir/AI-System-Engineer/js/data/syllabus-dataset.js): raw syllabus source content
- [js/data/syllabus-helpers.js](/c:/workdir/AI-System-Engineer/js/data/syllabus-helpers.js): content helper functions that normalize topics and copy sections from the raw dataset
- [js/data/syllabus-layout.js](/c:/workdir/AI-System-Engineer/js/data/syllabus-layout.js): learner-facing restructuring into pedagogical layers
- [js/core/syllabus-core.js](/c:/workdir/AI-System-Engineer/js/core/syllabus-core.js): structured data hydration, indexes, browser persistence, rendering, filtering, and export helpers
- [js/core/syllabus-startup.js](/c:/workdir/AI-System-Engineer/js/core/syllabus-startup.js): visible startup-failure handling so missing runtime pieces or invalid data produce a clear error panel instead of a blank page
- [js/core/syllabus-validation.js](/c:/workdir/AI-System-Engineer/js/core/syllabus-validation.js): runtime integrity checks for duplicate topic ids, broken source lineage, and stale optional override keys
- [js/features/topic-detail-shared.js](/c:/workdir/AI-System-Engineer/js/features/topic-detail-shared.js): shared topic-detail lookup, graph, and formatting helpers
- [js/features/topic-brief.js](/c:/workdir/AI-System-Engineer/js/features/topic-brief.js): topic brief guide rules and generated brief assembly
- [js/features/topic-prompt.js](/c:/workdir/AI-System-Engineer/js/features/topic-prompt.js): study prompt generation and prompt focus rules
- [js/features/topic-resources.js](/c:/workdir/AI-System-Engineer/js/features/topic-resources.js): suggested external learning resource generation
- [js/features/topic-detail.js](/c:/workdir/AI-System-Engineer/js/features/topic-detail.js): final topic-detail assembly using the smaller feature modules
- [js/pages/index-page.js](/c:/workdir/AI-System-Engineer/js/pages/index-page.js): main syllabus page controller
- [js/pages/topic-page.js](/c:/workdir/AI-System-Engineer/js/pages/topic-page.js): topic detail page controller
- [syllabus.js](/c:/workdir/AI-System-Engineer/syllabus.js): thin wrapper that exposes the public browser API
- [styles.css](/c:/workdir/AI-System-Engineer/styles.css): visual system and layout
- [README.md](/c:/workdir/AI-System-Engineer/README.md): project overview

You can also open `index.html` directly in a browser, but serving it locally is the safer default for consistent behavior.

- No framework or bundler required
- Topic progress is stored in the browser with `localStorage`

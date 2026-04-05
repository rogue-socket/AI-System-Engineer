# AI Agent Systems Syllabus

https://rogue-socket.github.io/AI-System-Engineer/

An interactive, browser-based syllabus for learning AI agent systems from first principles through deployment, evaluation, and governance.

The site is a static GitHub Pages project with no build step. It presents the syllabus as a layered taxonomy with searchable topics, topic detail pages, progress tracking in local storage, and export support.

## What It Includes

- A structured syllabus spanning models, cognition, memory, tool use, multi-agent systems, infrastructure, safety, and evaluation
- An orientation layer covering whole-system mental models, vocabulary, design trade-offs, and study sequencing
- Topic detail pages that expand a selected topic into related context, neighboring concepts, and study guidance
- Local progress markers for topics: Default, Need to visit, Learning, and Done
- Search, collapse/expand controls, and Markdown export
- A minimal static frontend designed to work well on GitHub Pages

## Running Locally

Because this is a static site, you can run it in any simple local web server.

- [index.html](/c:/workdir/AI-System-Engineer/index.html): main syllabus page
- [topic.html](/c:/workdir/AI-System-Engineer/topic.html): topic detail page
- [syllabus.js](/c:/workdir/AI-System-Engineer/syllabus.js): syllabus data, derived structure, rendering logic, filters, exports, and topic detail generation
- [styles.css](/c:/workdir/AI-System-Engineer/styles.css): visual system and layout
- [README.md](/c:/workdir/AI-System-Engineer/README.md): project overview

You can also open `index.html` directly in a browser, but serving it locally is the safer default for consistent behavior.

- No framework or bundler required
- Topic progress is stored in the browser with `localStorage`

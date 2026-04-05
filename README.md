# AI Agent Systems Syllabus

Live site: https://rogue-socket.github.io/AI-System-Engineer/

An interactive, browser-based syllabus for learning AI agent systems from first principles through deployment, evaluation, and governance.

The site is a static GitHub Pages project with no build step. It presents the syllabus as a layered taxonomy with searchable topics, topic detail pages, progress tracking in local storage, and export support.

## What It Includes

- A structured syllabus spanning models, cognition, memory, tool use, multi-agent systems, infrastructure, safety, and evaluation
- An orientation layer covering whole-system mental models, vocabulary, design trade-offs, and study sequencing
- Topic detail pages that expand a selected topic into related context, neighboring concepts, and study guidance
- Local progress markers for topics: Default, Need to visit, Learning, and Done
- Search, collapse/expand controls, and Markdown export
- A minimal static frontend designed to work well on GitHub Pages

## Live Experience

The main syllabus homepage is the entry point for browsing the full taxonomy.

- Main site: https://rogue-socket.github.io/AI-System-Engineer/
- Topic detail pages open from the main syllabus and provide focused breakdowns for a selected topic

## Project Structure

- [index.html](/c:/workdir/AI-System-Engineer/index.html): main syllabus page
- [topic.html](/c:/workdir/AI-System-Engineer/topic.html): topic detail page
- [syllabus.js](/c:/workdir/AI-System-Engineer/syllabus.js): syllabus data, derived structure, rendering logic, filters, exports, and topic detail generation
- [styles.css](/c:/workdir/AI-System-Engineer/styles.css): visual system and layout
- [README.md](/c:/workdir/AI-System-Engineer/README.md): project overview

## Running Locally

Because this is a static site, you can run it in any simple local web server.

Example with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

You can also open `index.html` directly in a browser, but serving it locally is the safer default for consistent behavior.

## Design Notes

- No framework or bundler required
- Content and interaction logic live in a single JavaScript file for easy editing and GitHub Pages deployment
- Topic progress is stored in the browser with `localStorage`
- The UI is intentionally minimal and content-forward

## Use Cases

- Self-study roadmap for AI agent systems
- Internal reference for teams building agentic products
- Curriculum scaffold for workshops or study groups
- Lightweight public knowledge map for the agent systems space

## Deployment

This repository is set up to work as a GitHub Pages static site. With the current remote, the expected public URL is:

```text
https://rogue-socket.github.io/AI-System-Engineer/
```

If the repository name or GitHub Pages configuration changes, update the URL in this README accordingly.
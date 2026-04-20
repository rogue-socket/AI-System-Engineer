# Sentai Migration Plan

This document is the operational migration guide for turning the current static Sentai learning site into a production-grade website with analytics, dynamic content, newsletter/email capture, and publishing workflows.

Primary deployment assumption for this version: frontend remains on GitHub Pages, with a minimal Cloudflare Worker backend for dynamic endpoints.

## Scope Filter Applied

The following areas are intentionally excluded from this version:

- business goals, KPI definitions, and baseline planning
- SEO audit and URL preservation strategy
- broad stack and hosting re-evaluation (fixed decision applied: GitHub Pages + Worker)
- branch strategy and environment setup strategy
- compliance/legal planning
- QA/performance hardening and launch orchestration

## Recommended Tech Stack (Simple, Free, and Fast)

### Reality Check First

- A fully dynamic always-on backend with zero cold starts is usually not possible forever on strict free tiers from AWS or GCP
- If you want immediate response and always-live behavior at zero cost, the most reliable pattern is static hosting + minimal edge functions
- You may still pay for one thing: a custom domain name (hosting can remain free)

### Default Stack Recommendation (Best Match for Your Constraints)

- Frontend: keep current HTML/CSS/JS structure and migrate gradually only where needed
- Frontend hosting: reuse existing GitHub Pages deployment
- Optional edge layer: put Cloudflare in front only if you want extra caching/routing on a custom domain
- Basic backend: Cloudflare Workers free plan for tiny APIs (email capture proxy, click tracking endpoint, updates feed endpoint)
- Data storage: start with no database, keep content in repo files (JSON/Markdown), add Cloudflare D1 only if needed
- Analytics: Cloudflare Web Analytics (free) for traffic + custom Worker event endpoint for click tracking
- Email capture and newsletters: ConvertKit or Beehiiv free tier using embedded forms and automation basics
- Updates publishing: Markdown-based updates stored in repo and rendered as dynamic sections during build
- CI/CD: GitHub Actions to auto-deploy Pages on push and deploy Worker when backend code changes

### GitHub Pages Reuse Architecture

- Keep all UI pages on GitHub Pages
- Call Worker endpoints from frontend using either:
  - your-worker-name.workers.dev (fastest setup)
  - api.yourdomain.com (cleanest setup with custom domain)
- Use CORS allowlist so only your site origins can call write endpoints
- Keep backend logic tiny and stateless for fast edge execution

### Local PC Hosting Path

- Local app run: use a simple static dev server for the site
- Local API simulation: run Workers locally with Wrangler for endpoint testing
- Local content workflow: edit Markdown/JSON, refresh site, commit to repo

### Online Always-Live Path (No Sleep Behavior)

- Keep static site on GitHub Pages
- Use edge Worker routes only for small dynamic tasks
- Keep dynamic logic lightweight and cache-friendly to avoid latency spikes
- Offload heavy workflows (newsletter sending, campaign logic) to managed SaaS free tiers

### If You Still Want AWS or GCP

- AWS best free-feeling option: S3 + CloudFront for static hosting, but dynamic Lambda endpoints can still cold start
- GCP best free-feeling option: Firebase Hosting for static hosting, but Cloud Functions can still cold start
- Conclusion: for your zero-bootup preference, Cloudflare-based stack is a better first choice than AWS/GCP serverless

### Suggested Minimal Build (Start Here)

- Site: current static codebase
- Host: GitHub Pages (existing setup)
- Backend: one Worker with three endpoints
- Endpoints: /api/track-click, /api/subscribe, /api/updates
- Email provider: ConvertKit embedded form + webhook bridge if needed
- Data: repo files only at first, then optional D1 later

### Verification Criteria for Stack Fit

- Local site starts in under 10 seconds on your machine
- Online site responds immediately after long idle periods
- Click events are recorded reliably from topic/resource interactions
- Email signup works end-to-end with confirmation
- Updates can be published by editing repo content and redeploying

## How to Use This Plan

- Execute steps in order unless a dependency explicitly says otherwise
- Treat all `Necessary` items as non-negotiable
- Add `Good to Have` items once the core milestone is stable
- Use `Verification Criteria` as the go/no-go gate before moving to the next step

## Brief Steps (High-Level)

1. Set up the new web app foundation (static routing, layout, and API integration points)
2. Model and migrate content (topics, briefs, resources, updates)
3. Build authentication, admin access, and content operations safeguards
4. Implement analytics event schema and instrumentation
5. Implement email capture and lifecycle messaging
6. Add publishing system and dynamic homepage modules
7. Add backend services for dynamic content and stats endpoints
8. Add observability, error tracking, and operational dashboards

---

## Step 1: Set Up the New Web App Foundation

### Necessary

- Keep the current static scaffold and standardize page/module structure
- Establish shared layout, navigation, and footer
- Configure global styles and design tokens
- Add accessibility and responsive layout baseline

### Good to Have

- Component library starter (buttons, cards, forms, badges)
- Theme tokens with semantic naming

### Agent Should Look Out For

- Rebuilding styles ad hoc without reusable primitives
- Ignoring mobile breakpoints until late stage
- Missing semantic HTML landmarks

### Things to Implement

- Route structure for home, topic listing, topic detail, updates, and about pages
- Shared page shell and typography scale
- Frontend API client layer for Worker endpoints
- Accessibility baseline checks (focus order, keyboard nav)

### Verification Criteria

- Lighthouse accessibility score reaches launch threshold
- Core routes render correctly on desktop and mobile
- Shared layout is consistent across routes

### Other Important Things

- Keep pages static-first and move dynamic behavior to Worker-backed API calls

---

## Step 2: Model and Migrate Content

### Necessary

- Define content models:
  - topics
  - briefs
  - resources
  - updates/posts
  - tags/categories
- Migrate existing content from JS files into structured storage
- Add validation rules and slug uniqueness constraints

### Good to Have

- Content linting (required fields, description length, link validity)
- Import scripts with dry-run mode

### Agent Should Look Out For

- Data shape drift between frontend expectations and stored records
- Duplicate slugs and broken internal references
- Missing source attribution for external resources

### Things to Implement

- Migration scripts for current data files
- Schema constraints and indexes
- Editorial status fields (`draft`, `scheduled`, `published`, `archived`)

### Verification Criteria

- 100 percent of existing content represented in new schema
- Zero broken internal links after migration
- Draft/publish lifecycle works for updates

### Other Important Things

- Keep immutable IDs for content even if slugs change

---

## Step 3: Build Authentication, Admin Access, and Content Safeguards

### Necessary

- Add role-based access for admin/content editors
- Protect admin endpoints and mutation APIs
- Add audit trail for critical content changes

### Good to Have

- Single sign-on for team logins
- Session anomaly alerts

### Agent Should Look Out For

- Exposing admin routes without strict auth middleware
- Missing server-side authorization checks
- No change history for published content edits

### Things to Implement

- Auth provider integration
- Roles (`admin`, `editor`, `viewer`)
- Content change log table and UI view

### Verification Criteria

- Unauthorized users cannot reach protected actions
- Role matrix is enforced in API and UI
- Audit logs capture who changed what and when

### Other Important Things

- Use least-privilege permissions for all service keys

---

## Step 4: Implement Analytics Event Schema and Instrumentation

### Necessary

- Define event taxonomy before implementation
- Instrument key user actions end-to-end
- Capture attribution context (utm params, referrer, campaign)

### Good to Have

- Event naming conventions validator in CI
- Event versioning strategy for schema changes

### Agent Should Look Out For

- Duplicate events firing on hydration/re-render
- Event names changing without migration plan
- Missing IDs required for joinability (user/session/content)

### Things to Implement

- Core events:
  - `page_view`
  - `topic_card_impression`
  - `topic_card_click`
  - `resource_click`
  - `email_signup_started`
  - `email_signup_completed`
  - `update_view`
  - `update_cta_click`
- Event helper utility with consistent payload shape
- Instrumentation path through Worker endpoint (`/api/track-click`) for custom click events
- Dashboard funnel and retention views

### Verification Criteria

- Each critical event appears in analytics within acceptable delay
- Event payload fields match schema definition
- Funnel totals reconcile against expected interaction counts

### Other Important Things

- Keep PII out of analytics events unless explicitly required and compliant

---

## Step 5: Implement Email Capture and Lifecycle Messaging

### Necessary

- Add signup forms on high-intent surfaces
- Store subscriber status and source metadata
- Implement confirmation and welcome messaging flow

### Good to Have

- Progressive profiling after initial signup
- Topic preference center and digest frequency settings

### Agent Should Look Out For

- Signup accepted by UI but not persisted correctly
- No unsubscribe mechanism in outbound updates
- Weak deliverability setup (SPF, DKIM, DMARC)

### Things to Implement

- Subscriber model with fields:
  - email
  - status
  - source page
  - signup timestamp
  - tags/preferences
- Confirmation and welcome email flows
- Unsubscribe and resubscribe logic

### Verification Criteria

- End-to-end signup flow succeeds in staging and production
- Unsubscribe link works and updates state correctly
- Deliverability/authentication checks pass

### Other Important Things

- Keep lifecycle templates versioned for safe iteration

---

## Step 6: Add Publishing System and Dynamic Homepage Modules

### Necessary

- Build updates feed with scheduled/published states
- Render dynamic homepage blocks:
  - latest updates
  - trending topics
  - curated resources
- Add editor workflow for drafting and publishing updates

### Good to Have

- Editorial calendar and scheduling view
- Featured content override controls

### Agent Should Look Out For

- Publishing content without preview
- Time zone bugs in scheduled posts
- Cache invalidation delays after publish

### Things to Implement

- Updates listing page and update detail page
- Preview mode for unpublished content
- Dynamic query modules with fallback states

### Verification Criteria

- Publishing an update makes it visible within SLA
- Scheduled posts publish at intended local time
- Dynamic modules degrade gracefully when data is sparse

### Other Important Things

- Keep manual curation controls for key homepage sections

---

## Step 7: Add Backend Services for Dynamic Data and Stats

### Necessary

- Build server endpoints for:
  - topic stats
  - trending modules
  - update listings
  - subscriber actions
- Enforce input validation and rate limiting
- Enforce CORS allowlist for GitHub Pages origin and custom domain (if used)
- Add caching strategy for read-heavy endpoints

### Good to Have

- Background jobs for aggregation and enrichment
- Read replicas or edge cache strategy for scale

### Agent Should Look Out For

- N+1 query patterns on popular routes
- Missing pagination for list endpoints
- Exposed internal fields in API responses

### Things to Implement

- API contracts and response schemas
- Aggregation jobs for rolling windows (24h, 7d, 30d)
- CORS policy and preflight handling for browser requests from frontend
- Cache headers and invalidation hooks

### Verification Criteria

- API latency and error rates meet SLO targets
- Query plans are index-supported for key endpoints
- Endpoint outputs match documented schema

### Other Important Things

- Version external APIs before breaking changes

---

## Step 8: Add Observability, Error Tracking, and Ops Dashboards

### Necessary

- Add error monitoring for frontend and backend
- Add uptime checks and alert routing
- Track key platform health metrics (latency, error rate, queue depth)

### Good to Have

- Synthetic flows for critical journeys
- Auto-created incident tickets from alerts

### Agent Should Look Out For

- Silent failures in form submissions or publishing
- Alert fatigue from noisy thresholds
- Missing correlation IDs across logs/events

### Things to Implement

- Monitoring provider integration
- Alert policies with severity levels
- Runbooks for common incidents

### Verification Criteria

- Critical failures trigger alerts to correct channel
- Incident response runbook is actionable and tested
- Dashboards show end-to-end health at a glance

### Other Important Things

- Keep post-incident reviews and action logs for recurring issues

---

## Cross-Step Implementation Matrix

### Security (Applies to All Steps)

- Necessary:
  - secrets in managed env stores only
  - no API keys in frontend bundles
- Good to Have:
  - automated secret scanning in CI
- Look Out For:
  - permissive CORS and leaked admin endpoints
- Implement:
  - baseline security headers and dependency audit checks
- Verification:
  - no critical vulnerabilities unresolved at launch

### Data Quality (Applies to All Steps)

- Necessary:
  - schema validation at ingest and API response layers
- Good to Have:
  - anomaly detection on outlier metrics
- Look Out For:
  - null-heavy records and inconsistent enums
- Implement:
  - data quality checks in CI and scheduled jobs
- Verification:
  - key dashboards reconcile with source records

### Documentation (Applies to All Steps)

- Necessary:
  - architecture docs, runbooks, and onboarding notes
- Good to Have:
  - architecture diagrams and ownership maps
- Look Out For:
  - stale docs after tooling or workflow changes
- Implement:
  - docs update requirement in PR template
- Verification:
  - new engineer can deploy and validate locally using docs only

---

## Suggested Execution Waves

1. Wave 1 (Core Product Surface): Steps 1-3
2. Wave 2 (Measurement + Growth): Steps 4-5
3. Wave 3 (Dynamic Publishing): Steps 6-7
4. Wave 4 (Reliability): Step 8

## Exit Criteria for This Scoped Migration

- Production site serves all migrated routes with parity or better UX
- Analytics dashboards are trusted and actively used
- Email capture and update publishing are fully operational
- Dynamic modules are stable and data-driven
- Security and incident readiness controls are in place

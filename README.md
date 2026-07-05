# Boris Wong — AI Engineer & Full-Stack Developer

Personal portfolio built with Next.js and TypeScript, deployed on Vercel.

**Live site:** [boris-wong.vercel.app](https://boris-wong.vercel.app)

---

## About

Vancouver-based software developer and data analyst (SFU Computing Science) building at the intersection of AI agents, full-stack products, and quantitative analysis. Fluent in English, Cantonese, and Mandarin — with a focus on localized, real-world AI applications.

This repository contains the source for my portfolio site. The projects showcased below are each maintained in their own repositories.

---

## Featured Projects

### 🦞 CLAW BOT — Autonomous Personal AI Agent
A self-hosted, Signal-based AI agent that proactively delivers market intelligence and manages trading hypotheses through natural Cantonese conversation. A LangGraph-orchestrated agent routes user intent across specialized handlers, runs scheduled proactive alerts (daily briefings, semiconductor news digests) via APScheduler, and integrates with a separate data service over HTTP.

`Claude API` · `LangGraph` · `FastAPI` · `SQLite` · `Docker` · `APScheduler` · `Python`
→ [github.com/Sfuborisw/claw-bot](https://github.com/Sfuborisw/claw-bot)

### 📊 Hypothesis Log — Verifiable Trading Journal
A full-stack trading journal that turns market intuitions into structured, verifiable hypotheses and auto-computes hit rates through statistical analysis. API-first design later allowed CLAW BOT to consume the same service with zero changes.

`React` · `TypeScript` · `FastAPI` · `SQLAlchemy` · `pandas`
→ [github.com/Sfuborisw/hypothesis-log](https://github.com/Sfuborisw/hypothesis-log)

> **Architecture note:** CLAW BOT and Hypothesis Log are two decoupled services communicating over HTTP — Hypothesis Log owns the data and verification logic; CLAW BOT is the conversational and proactive layer. This demonstrates clean service separation and API-first design.

*Additional projects (ETL pipelines, RAG assistant, full-stack reporting, front-end systems) are showcased on the [live site](https://boris-wong.vercel.app).*

---

## Tech Stack (this site)

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Contact

- **Portfolio:** [boris-wong.vercel.app](https://boris-wong.vercel.app)
- **GitHub:** [github.com/Sfuborisw](https://github.com/Sfuborisw)
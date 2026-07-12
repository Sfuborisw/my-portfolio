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
A self-hosted, Signal-based AI agent that proactively delivers market intelligence and manages trading hypotheses through natural Cantonese conversation. A **LangGraph** state machine classifies each message and routes it to a specialized handler — hypothesis query, natural-language trade logging, statistical analysis, or memory-aware chat. **APScheduler** drives proactive delivery: daily market briefings and scheduled semiconductor/AI news digests, summarized by Claude. Conversation memory and user preferences persist in SQLite, and it integrates with the decoupled Hypothesis Log service over HTTP.

`Claude API` · `LangGraph` · `FastAPI` · `SQLite` · `Docker` · `APScheduler` · `signal-cli` · `Python`
→ [github.com/Sfuborisw/claw-bot](https://github.com/Sfuborisw/claw-bot)

### 📊 Hypothesis Log — Verifiable Trading Journal
A full-stack trading journal that turns market intuitions into structured, verifiable hypotheses and auto-computes hit rates by signal and confidence level. **Deployed live** across Vercel (frontend), Render (FastAPI backend), and Supabase Postgres, with a self-resetting demo sandbox — visitors can freely add, verify, and delete hypotheses, and it resets daily to a curated baseline. API-first design allowed CLAW BOT to consume the same service with zero changes.

`React` · `TypeScript` · `FastAPI` · `SQLAlchemy` · `PostgreSQL` · `pandas` · `Supabase` · `Render`
→ **[Live Demo](https://hypothesis-log.vercel.app)** · [github.com/Sfuborisw/hypothesis-log](https://github.com/Sfuborisw/hypothesis-log)

> **Architecture note:** CLAW BOT and Hypothesis Log are two decoupled services communicating over HTTP — Hypothesis Log owns the data model and verification logic; CLAW BOT is the conversational and proactive layer. This demonstrates clean service separation and API-first design, the same pattern used to scale production systems.

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
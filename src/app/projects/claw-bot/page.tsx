"use client";
import Link from "next/link";

const handlers = [
  {
    title: "Query",
    desc: "Reads trading hypotheses from the log in natural language.",
  },
  {
    title: "Log Trade",
    desc: "Extracts structured fields from free text, confirms, then writes.",
  },
  {
    title: "Analysis",
    desc: "Computes hit-rate statistics by signal and confidence level.",
  },
  {
    title: "Chat",
    desc: "Memory-aware conversation backed by persistent SQLite.",
  },
];

const features = [
  {
    label: "Agentic Routing",
    body: "A LangGraph state machine classifies each message with Claude and dispatches it to the right handler — query, trade logging, analysis, or chat.",
  },
  {
    label: "Proactive Alerts",
    body: "APScheduler drives scheduled delivery: daily pre-market briefings and semiconductor/AI news digests, summarized by Claude and pushed over Signal.",
  },
  {
    label: "Multi-Service Integration",
    body: "Talks to a decoupled Hypothesis Log API over HTTP, the Claude API for reasoning, GNews for news, and yfinance for quotes — never coupling their databases.",
  },
  {
    label: "Persistent Memory",
    body: "Conversation history and user preferences live in SQLite, so the agent stays personalized across sessions — unlike a stateless chatbot.",
  },
];

const stack = [
  "Claude API",
  "LangGraph",
  "FastAPI",
  "SQLite",
  "SQLAlchemy",
  "Docker",
  "APScheduler",
  "signal-cli",
  "Python",
];

function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 680 620"
      className="w-full h-auto"
      role="img"
      aria-label="CLAW BOT system architecture across five layers"
    >
      <defs>
        <marker
          id="cb-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* Layer 1: Signal */}
      <rect
        x="200"
        y="30"
        width="280"
        height="52"
        rx="10"
        fill="#0f766e"
        fillOpacity="0.15"
        stroke="#14b8a6"
        strokeWidth="1"
      />
      <text
        x="340"
        y="52"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#5eead4"
        fontSize="14"
        fontWeight="500"
      >
        Signal messaging
      </text>
      <text
        x="340"
        y="68"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#5eead4"
        fontSize="12"
      >
        signal-cli in Docker · websocket
      </text>

      <line
        x1="340"
        y1="82"
        x2="340"
        y2="108"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />

      {/* Layer 2: FastAPI */}
      <rect
        x="200"
        y="108"
        width="280"
        height="52"
        rx="10"
        fill="#475569"
        fillOpacity="0.2"
        stroke="#64748b"
        strokeWidth="1"
      />
      <text
        x="340"
        y="130"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#cbd5e1"
        fontSize="14"
        fontWeight="500"
      >
        FastAPI application
      </text>
      <text
        x="340"
        y="146"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#cbd5e1"
        fontSize="12"
      >
        async host · APScheduler jobs
      </text>

      <line
        x1="340"
        y1="160"
        x2="340"
        y2="186"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />

      {/* Layer 3: LangGraph router */}
      <rect
        x="200"
        y="186"
        width="280"
        height="52"
        rx="10"
        fill="#5b21b6"
        fillOpacity="0.2"
        stroke="#8b5cf6"
        strokeWidth="1"
      />
      <text
        x="340"
        y="208"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#c4b5fd"
        fontSize="14"
        fontWeight="500"
      >
        LangGraph router
      </text>
      <text
        x="340"
        y="224"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#c4b5fd"
        fontSize="12"
      >
        Claude-based intent classification
      </text>

      <line
        x1="250"
        y1="238"
        x2="115"
        y2="286"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />
      <line
        x1="305"
        y1="238"
        x2="270"
        y2="286"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />
      <line
        x1="375"
        y1="238"
        x2="410"
        y2="286"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />
      <line
        x1="430"
        y1="238"
        x2="565"
        y2="286"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />

      {/* Layer 4: handlers */}
      {[
        { x: 44, t: "Query", s: "Read hypotheses", cx: 110 },
        { x: 204, t: "Log trade", s: "Extract + write", cx: 270 },
        { x: 344, t: "Analysis", s: "Hit-rate stats", cx: 410 },
        { x: 504, t: "Chat", s: "Memory-aware", cx: 570 },
      ].map((h) => (
        <g key={h.t}>
          <rect
            x={h.x}
            y="286"
            width="132"
            height="58"
            rx="8"
            fill="#9a3412"
            fillOpacity="0.18"
            stroke="#ea580c"
            strokeWidth="1"
          />
          <text
            x={h.cx}
            y="308"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#fdba74"
            fontSize="14"
            fontWeight="500"
          >
            {h.t}
          </text>
          <text
            x={h.cx}
            y="326"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#fdba74"
            fontSize="12"
          >
            {h.s}
          </text>
        </g>
      ))}

      <line
        x1="110"
        y1="344"
        x2="180"
        y2="430"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />
      <line
        x1="270"
        y1="344"
        x2="270"
        y2="430"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />
      <line
        x1="410"
        y1="344"
        x2="410"
        y2="430"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />
      <line
        x1="570"
        y1="344"
        x2="500"
        y2="430"
        stroke="#94a3b8"
        strokeWidth="1.5"
        markerEnd="url(#cb-arrow)"
      />

      {/* Layer 5: data */}
      <rect
        x="120"
        y="430"
        width="200"
        height="52"
        rx="10"
        fill="#1e40af"
        fillOpacity="0.2"
        stroke="#3b82f6"
        strokeWidth="1"
      />
      <text
        x="220"
        y="452"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#93c5fd"
        fontSize="14"
        fontWeight="500"
      >
        SQLite memory
      </text>
      <text
        x="220"
        y="468"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#93c5fd"
        fontSize="12"
      >
        Conversation · profile
      </text>

      <rect
        x="360"
        y="430"
        width="200"
        height="52"
        rx="10"
        fill="#1e40af"
        fillOpacity="0.2"
        stroke="#3b82f6"
        strokeWidth="1"
      />
      <text
        x="460"
        y="452"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#93c5fd"
        fontSize="14"
        fontWeight="500"
      >
        Hypothesis Log API
      </text>
      <text
        x="460"
        y="468"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#93c5fd"
        fontSize="12"
      >
        Decoupled service · HTTP
      </text>

      {/* External services */}
      <text x="340" y="516" textAnchor="middle" fill="#94a3b8" fontSize="12">
        External services
      </text>
      {[
        { x: 90, t: "Claude API", s: "Reasoning core", cx: 165 },
        { x: 265, t: "GNews API", s: "News digests", cx: 340 },
        { x: 440, t: "yfinance", s: "Market quotes", cx: 515 },
      ].map((e) => (
        <g key={e.t}>
          <rect
            x={e.x}
            y="530"
            width="150"
            height="48"
            rx="8"
            fill="#854d0e"
            fillOpacity="0.18"
            stroke="#d97706"
            strokeWidth="1"
          />
          <text
            x={e.cx}
            y="550"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#fcd34d"
            fontSize="14"
            fontWeight="500"
          >
            {e.t}
          </text>
          <text
            x={e.cx}
            y="567"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#fcd34d"
            fontSize="12"
          >
            {e.s}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function ClawBotPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-8 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Navigation */}
        <Link
          href="/projects"
          className="text-emerald-600 dark:text-blue-400 mb-6 inline-block font-medium hover:underline"
        >
          ← Back to Gallery
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            CLAW BOT — Autonomous Personal AI Agent
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
            A self-hosted, Signal-based AI agent that proactively delivers
            market intelligence and manages trading hypotheses through natural
            Cantonese conversation.
          </p>
        </div>

        {/* Architecture Brief */}
        <div className="mb-10 p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl flex flex-col md:flex-row gap-8 backdrop-blur-sm">
          {/* Left: Description */}
          <div className="flex-1">
            <h3 className="text-[11px] font-black text-blue-500 tracking-[0.2em] uppercase mb-3">
              System Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-medium mb-5">
              CLAW BOT turns a passive chatbot into a{" "}
              <strong className="text-white">proactive agent</strong>. A{" "}
              <strong className="text-white">LangGraph</strong> router
              classifies each incoming message and dispatches it to a
              specialized handler, while{" "}
              <strong className="text-white">APScheduler</strong> drives
              time-based delivery of market briefings and news digests. It
              integrates with a decoupled{" "}
              <strong className="text-white">Hypothesis Log</strong> service
              over HTTP — a clean, API-first separation of concerns.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-slate-950 text-slate-300 text-[10px] font-bold tracking-widest uppercase rounded border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: How It Works */}
          <div className="w-full md:w-5/12 bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-[11px] font-black text-blue-400 tracking-[0.2em] uppercase mb-4">
              How It Works
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              {[
                "A message arrives over Signal (self-hosted signal-cli bridge).",
                "The LangGraph router uses Claude to classify intent.",
                "It dispatches to the matching handler — query, log, analysis, or chat.",
                "Scheduled jobs push briefings and news digests without being asked.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-10">
          <h3 className="text-[11px] font-black text-blue-500 tracking-[0.2em] uppercase mb-4">
            Architecture
          </h3>
          <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border dark:border-slate-800">
            <ArchitectureDiagram />
          </div>
        </div>

        {/* Handlers */}
        <div className="mb-10">
          <h3 className="text-[11px] font-black text-blue-500 tracking-[0.2em] uppercase mb-4">
            Intent Handlers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {handlers.map((h) => (
              <div
                key={h.title}
                className="bg-white dark:bg-slate-800 p-5 rounded-2xl border dark:border-slate-700"
              >
                <div className="font-bold text-slate-900 dark:text-white mb-1">
                  {h.title}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h3 className="text-[11px] font-black text-blue-500 tracking-[0.2em] uppercase mb-4">
            Key Engineering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-l-4 border-emerald-500 dark:border-slate-700 shadow-sm"
              >
                <div className="font-bold text-slate-900 dark:text-white mb-2">
                  {f.label}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cantonese note + CTA */}
        <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-sm">
          <div>
            <h3 className="text-[11px] font-black text-blue-400 tracking-[0.2em] uppercase mb-2">
              Localized Product Design
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              Built Cantonese-first to serve Cantonese-speaking retail
              investors, demonstrating localized LLM product design. The agent
              also responds in English on demand.
            </p>
          </div>
          <a
            href="https://github.com/Sfuborisw/claw-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-emerald-500/20 text-center"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";

// TODO: 換做你實際嘅 Vercel 前端 URL
const LIVE_DEMO_URL = "https://hypothesis-log.vercel.app";

const stack = [
  "React",
  "TypeScript",
  "FastAPI",
  "SQLAlchemy",
  "Postgres",
  "Supabase",
  "Render",
  "pandas",
];

const loopSteps = [
  {
    n: 1,
    title: "Hypothesize",
    body: "Log a testable claim: ticker, action, entry price, predicted direction, confidence, and a target verification date.",
  },
  {
    n: 2,
    title: "Predict",
    body: "Commit to a direction (up / down / sideways) and a timeframe — no vague gut-feel, a falsifiable statement.",
  },
  {
    n: 3,
    title: "Verify",
    body: "On the target date, check the actual outcome against the prediction. Hit or miss is recorded, not remembered.",
  },
  {
    n: 4,
    title: "Measure",
    body: "Analysis endpoints compute hit rates by signal and confidence, revealing where your real edge lies.",
  },
];

const features = [
  {
    label: "Falsifiable by Design",
    body: "Every hypothesis carries an explicit prediction and verification date, so intuitions become measurable instead of forgotten.",
  },
  {
    label: "Quantified Edge",
    body: "pandas-backed analysis endpoints break down hit rate by signal and confidence level — turning a journal into a feedback loop.",
  },
  {
    label: "API-First Architecture",
    body: "A clean REST backend means the same service powers both the web UI and a separate AI agent (CLAW BOT) with zero changes.",
  },
  {
    label: "Live Demo Sandbox",
    body: "Deployed with a curated demo baseline that resets daily — visitors can freely add, verify, and delete hypotheses.",
  },
];

function VerificationLoop() {
  return (
    <svg
      viewBox="0 0 680 240"
      className="w-full h-auto"
      role="img"
      aria-label="The verification loop: hypothesize, predict, verify, measure"
    >
      <defs>
        <marker
          id="hl-arrow"
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

      {[
        { x: 20, label: "Hypothesize", sub: "log the claim" },
        { x: 185, label: "Predict", sub: "commit direction" },
        { x: 350, label: "Verify", sub: "check outcome" },
        { x: 515, label: "Measure", sub: "compute edge" },
      ].map((s, i) => (
        <g key={s.label}>
          <rect
            x={s.x}
            y="90"
            width="145"
            height="60"
            rx="10"
            fill="#0f766e"
            fillOpacity="0.15"
            stroke="#10b981"
            strokeWidth="1"
          />
          <text
            x={s.x + 72}
            y="114"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#5eead4"
            fontSize="14"
            fontWeight="600"
          >
            {s.label}
          </text>
          <text
            x={s.x + 72}
            y="132"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#5eead4"
            fontSize="11"
          >
            {s.sub}
          </text>
          {i < 3 && (
            <line
              x1={s.x + 145}
              y1="120"
              x2={s.x + 165}
              y2="120"
              stroke="#94a3b8"
              strokeWidth="1.5"
              markerEnd="url(#hl-arrow)"
            />
          )}
        </g>
      ))}

      {/* Feedback loop arrow: Measure back to Hypothesize */}
      <path
        d="M587 90 Q587 40 340 40 Q92 40 92 90"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd="url(#hl-arrow)"
        opacity="0.7"
      />
      <text x="340" y="30" textAnchor="middle" fill="#60a5fa" fontSize="12">
        feedback loop — sharpen the next hypothesis
      </text>
    </svg>
  );
}

export default function HypothesisLogPage() {
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
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Hypothesis Log — Verifiable Trading Journal
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
              A full-stack trading journal that turns market intuitions into
              structured, verifiable hypotheses and auto-computes your real edge
              through statistical analysis.
            </p>
          </div>
          <a
            href={LIVE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-emerald-500/20 text-center"
          >
            Launch Live Demo →
          </a>
        </div>

        {/* Architecture Brief */}
        <div className="mb-10 p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl flex flex-col md:flex-row gap-8 backdrop-blur-sm">
          <div className="flex-1">
            <h3 className="text-[11px] font-black text-blue-500 tracking-[0.2em] uppercase mb-3">
              System Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-medium mb-5">
              A <strong className="text-white">React + TypeScript</strong> front
              end talks to a{" "}
              <strong className="text-white">FastAPI + SQLAlchemy</strong>{" "}
              backend exposing REST endpoints for logging, retrieving, and
              verifying hypotheses — plus{" "}
              <strong className="text-white">pandas</strong>-backed analysis
              that computes hit rates by signal and confidence. Deployed
              full-stack: front end on Vercel, backend on Render, data in
              Supabase Postgres.
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

          <div className="w-full md:w-5/12 bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-[11px] font-black text-blue-400 tracking-[0.2em] uppercase mb-4">
              Try the Demo
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {[
                "Log a hypothesis — pick a ticker, direction, and confidence.",
                "Verify a pending one to see hit/miss recorded.",
                "Watch the hit-rate analysis update live.",
                "Everything resets daily to a clean baseline.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Note: the demo backend sleeps when idle — the first load may take
              ~30s to wake.
            </p>
          </div>
        </div>

        {/* Verification Loop */}
        <div className="mb-10">
          <h3 className="text-[11px] font-black text-blue-500 tracking-[0.2em] uppercase mb-4">
            The Verification Loop
          </h3>
          <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border dark:border-slate-800">
            <VerificationLoop />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {loopSteps.map((s) => (
              <div
                key={s.n}
                className="bg-white dark:bg-slate-800 p-5 rounded-2xl border dark:border-slate-700"
              >
                <div className="font-bold text-slate-900 dark:text-white mb-1">
                  {s.n}. {s.title}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {s.body}
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

        {/* CTA */}
        <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-sm">
          <div>
            <h3 className="text-[11px] font-black text-blue-400 tracking-[0.2em] uppercase mb-2">
              Explore It
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              Try the live demo, or read the source on GitHub. The same API also
              powers CLAW BOT, an autonomous Signal-based AI agent.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <a
              href={LIVE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-emerald-500/20 text-center"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Sfuborisw/hypothesis-log"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-bold transition-colors border border-slate-700 text-center"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

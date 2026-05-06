"use client";
import Link from "next/link";
import ChatWindow from "../../../components/shared/ChatWindow";

export default function AiAssistantDetailPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-8 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs / Back button */}
        <Link
          href="/projects"
          className="text-emerald-600 dark:text-blue-400 mb-6 inline-block font-medium hover:underline"
        >
          ← Back to Gallery
        </Link>

        {/* --- Engineering Architecture Brief & Instructions --- */}
        <div className="mb-12 p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-2xl flex flex-col md:flex-row gap-8 backdrop-blur-sm">
          {/* Left: Description */}
          <div className="flex-1">
            <h3 className="text-[11px] font-black text-blue-500 tracking-[0.2em] uppercase mb-3">
              Intelligent Portfolio Assistant
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-5">
              Based on the{" "}
              <strong className="text-slate-900 dark:text-white">
                Simple-RAG
              </strong>{" "}
              project architecture, this assistant utilizes a localized vector
              database to provide precise, context-aware responses. By
              integrating{" "}
              <strong className="text-slate-900 dark:text-white">
                Gemini 3 Flash
              </strong>{" "}
              with{" "}
              <strong className="text-slate-900 dark:text-white">
                ChromaDB
              </strong>
              , the system retrieves relevant professional data before
              generation, effectively minimizing technical friction and
              hallucination.
            </p>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 text-[10px] font-bold tracking-widest uppercase rounded border border-slate-200 dark:border-slate-800">
                Gemini 3 Flash
              </span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 text-[10px] font-bold tracking-widest uppercase rounded border border-slate-200 dark:border-slate-800">
                ChromaDB
              </span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 text-[10px] font-bold tracking-widest uppercase rounded border border-slate-200 dark:border-slate-800">
                Vector Search
              </span>
            </div>
          </div>

          {/* Right: Interactive Demo Guide */}
          <div className="w-full md:w-5/12 bg-blue-50/50 dark:bg-slate-800/40 p-6 rounded-xl border border-blue-100 dark:border-slate-700/50">
            <h3 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              AI Assistant Guide
            </h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                  1
                </span>
                <p className="leading-relaxed">
                  <strong>Query:</strong> Ask about Boris&apos;s background in
                  Full-Stack development or his specific AI projects.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                  2
                </span>
                <p className="leading-relaxed">
                  <strong>Retrieval:</strong> The agent performs a semantic
                  search within ChromaDB to fetch relevant fragments from his
                  resume and portfolio.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
                  3
                </span>
                <p className="leading-relaxed">
                  <strong>Augmentation:</strong> The LLM synthesizes the
                  retrieved context to deliver a grounded, professional
                  response.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Main Content: Full-Width Integrated Chat Interface */}
        <div className="mt-8 flex flex-col items-center">
          <div className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all h-[600px] lg:h-[750px]">
            <ChatWindow />
          </div>

          {/* Quick Tip Footer (Optional) */}
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-500 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Note: This assistant is powered by Boris&apos;s personal project
            data via RAG.
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

"use client";
import Link from "next/link";
import ChatWindow from "../../../components/shared/ChatWindow";

export default function AiAssistantDetailPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs / Back button */}
        <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mb-8 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to Projects
        </Link>

        {/* Project Detail Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Intelligent Portfolio Assistant</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A context-aware AI powered by the latest Gemini 3 Flash model, designed to engage visitors and showcase advanced NLP capabilities.
          </p>
        </div>

        {/* Main Content: Description and Live Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Project Description */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border dark:border-slate-700">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Key Features & Technologies</h2>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Gemini 3 Flash API:</strong> Real-time, intelligent conversational AI.</li>
                <li><strong>Next.js App Router:</strong> Modern, performant web architecture.</li>
                <li><strong>Tailwind CSS v4:</strong> Utility-first styling for responsive design.</li>
                <li><strong>TypeScript:</strong> Enhanced code quality and developer experience.</li>
                <li><strong>Dynamic Routing:</strong> Seamless navigation within the portfolio.</li>
                <li><strong>Dark Mode Support:</strong> User-friendly interface in all lighting conditions.</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                💡 <strong>Try it out!</strong> Ask the assistant questions about Boris, his skills, or this website's tech stack.
              </p>
            </div>
          </div>

          {/* Right Column: Live Interactive AI Chat */}
          <div className="w-full h-full">
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  );
}

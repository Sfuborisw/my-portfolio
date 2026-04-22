"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectsPage() {
  const router = useRouter();

  const projects = [
    {
      id: "poe2-market-nexus",
      title: "POE2 Market Nexus",
      role: "DATA ENGINEER / BACK-END",
      description:
        "Real-time arbitrage detection and market analysis tool for Path of Exile 2.",
      tech: ["Python", "FastAPI", "PostgreSQL", "ETL Pipeline"],
      image: "/images/poe2-market.jpg",
      link: "/projects/poe2-market-nexus",
      liveUrl: "https://poe-2-market-nexus.vercel.app/",
      challenge:
        "Processing high-volume, fluctuating market data in real-time.",
      solution:
        "Engineered a Python ETL pipeline using Cron-based automation to scrape, transform, and store time-series data for instant arbitrage calculations.",
      metrics: "FOCUS: AUTOMATED ETL PIPELINE",
    },
    {
      id: "ai-assistant",
      title: "Intelligent Portfolio Assistant",
      role: "AI ENGINEER / RAG SPECIALIST",
      description:
        "A context-aware AI agent designed to bridge the gap between user queries and professional context.",
      tech: ["Gemini 3 API", "Next.js", "ChromaDB", "NLP"],
      image: "/images/ai-assistant.jpg",
      link: "/projects/ai-assistant",
      liveUrl: "/projects/ai-assistant",
      challenge:
        "Minimizing hallucination while maintaining high-speed conversational responses.",
      solution:
        "Leveraged Gemini 3 Flash with a localized RAG architecture (using ChromaDB) to fetch precise resume context before generating responses.",
      metrics: "FOCUS: RAG ARCHITECTURE & NLP",
    },
    {
      id: "property-report",
      title: "Property Instance Reporting",
      role: "SYSTEM ARCHITECT / FULL-STACK",
      description:
        "A secure, professional reporting ecosystem for facility and maintenance management.",
      tech: ["React", "State Management", "Data Analytics"],
      image: "/images/property-report.jpg",
      link: "/projects/property-report",
      liveUrl: "/projects/property-report",
      challenge:
        "Handling complex form states and ensuring 100% data integrity in concurrent multi-user environments.",
      solution:
        "Designed a robust relational data model to track incident lifecycles from report to resolution with real-time analytics visualization.",
      metrics: "FOCUS: SECURE DATA MANAGEMENT",
    },
    {
      id: "ward-system",
      title: "Ward Patient Chart System",
      role: "FRONT-END / UI ENGINEER",
      description:
        "A medical monitoring dashboard for tracking patient vitals and bed occupancy.",
      tech: ["React", "Data Visualization", "Interactive Analytics"],
      image: "/images/ward-system.jpg",
      link: "/projects/ward-system",
      liveUrl: "/projects/ward-system",
      challenge:
        "Displaying complex, real-time patient vitals without overwhelming the medical staff's cognitive load.",
      solution:
        "Developed an interactive, high-contrast dashboard with optimized data rendering, allowing for immediate visual assessment of critical patient metrics.",
      metrics: "FOCUS: ACCESSIBILITY & UI DESIGN",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Engineering Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase">
            Engineering <span className="text-blue-600">Archive</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-medium italic border-l-2 border-blue-600 pl-4">
            &quot;A collection of technical solutions, AI implementations, and
            optimized data architectures.&quot;
          </p>
        </div>

        {/* Technical Case Studies */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                if (project.link !== "#") router.push(project.link);
              }}
              className={`group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-blue-500 transition-all duration-700 
                          ${project.link === "#" ? "opacity-75 cursor-not-allowed" : "hover:shadow-2xl cursor-pointer"}`}
            >
              <div className="flex flex-col md:flex-row min-h-[400px]">
                {/* Visual Half */}
                <div className="relative h-64 md:h-auto w-full md:w-3/5 group-hover:md:w-1/2 transition-all duration-700 ease-in-out overflow-hidden border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-slate-900/90 text-white text-[10px] font-black uppercase tracking-widest rounded shadow-xl backdrop-blur-md">
                      {project.role}
                    </span>
                  </div>
                  {project.link === "#" && (
                    <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
                      <p className="text-white text-lg font-bold uppercase tracking-widest border-2 border-white px-4 py-2">
                        In Development
                      </p>
                    </div>
                  )}
                </div>

                {/* Technical Content Half */}
                <div className="p-10 flex-1 flex flex-col justify-between transition-all duration-700 ease-in-out bg-white dark:bg-slate-900">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-md text-slate-500 dark:text-slate-400 font-medium mt-1 italic">
                        {project.description}
                      </p>
                    </div>

                    {/* Technical Deep Dive (Shown on Hover) */}
                    <div className="hidden group-hover:block animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="space-y-6">
                        <div className="space-y-1">
                          <h4 className="text-[10px] font-bold uppercase text-blue-600 tracking-[0.2em]">
                            The Challenge
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300 font-mono">
                            &gt;&gt; {project.challenge}
                          </p>
                        </div>
                        <div className="space-y-2 border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-1">
                          <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-[0.2em]">
                            Solution Architecture
                          </h4>
                          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono pt-2 border-t border-slate-100 dark:border-slate-800">
                          {project.metrics}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack & Action Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded text-[10px] font-bold border border-slate-200 dark:border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 text-xs font-black text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline tracking-widest uppercase transition-colors"
                      >
                        Launch Project ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

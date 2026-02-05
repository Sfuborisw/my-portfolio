"use client";

import Link from "next/link";

// 1. Define data (can be moved to constants folder later)
const skills = [
  {
    title: "Generative AI",
    desc: "Developing intelligent agents with Gemini 3 Flash & Claude.",
    icon: "🤖",
  },
  {
    title: "Automation",
    desc: "Streamlining complex workflows with Python & API integration.",
    icon: "⚙️",
  },
  {
    title: "Modern Web",
    desc: "Building high-performance apps with Next.js & Tailwind.",
    icon: "🌐",
  },
];

const featuredProjects = [
  {
    id: "ai-assistant",
    title: "AI Portfolio Assistant",
    tech: "Next.js + Gemini",
    image: "/images/ai-assistant.jpg",
  },
  {
    id: "ward-system",
    title: "Medical Chart System",
    tech: "React + Data Vis",
    image: "/images/ward-system.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      {/* SECTION 1: HERO */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
        {/* 1. Brief introduction (Added above the title to convey professionalism) */}
        <p className="mb-4 text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-sm animate-in fade-in slide-in-from-bottom duration-700">
          Hi, I&apos;m Boris Wong — Software Developer
        </p>

        {/* 2. Main Title */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
          Engineering the <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            AI-Powered Era
          </span>
        </h1>

        {/* 3. Core Value Proposition */}
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
          Pioneering the uncharted frontiers of the AI industry to build
          what&apos;s next.
        </p>

        {/* 4. Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/projects"
            className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-all shadow-xl"
          >
            Explore Projects
          </Link>

          <Link
            href="/contact" // Or jump to the Contact section in your Footer
            className="px-10 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* SECTION 2: SKILLS (Skills section) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS (Featured work section) */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
            <Link
              href="/projects"
              className="text-blue-600 font-bold hover:underline text-sm uppercase tracking-widest"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                    {project.tech}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

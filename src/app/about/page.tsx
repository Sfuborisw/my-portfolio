"use client";
import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* --- Header Section --- */}
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
            Turning <span className="text-blue-600">Hours</span>{" "}
            <br className="hidden md:block" />
            into <span className="text-blue-600">Seconds</span>.
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            I&apos;m Boris, a Full-stack Developer obsessed with efficiency. I
            build{" "}
            <span className="inline-block font-semibold text-slate-900 dark:text-white">
              high-quality
            </span>{" "}
            applications that simplify complex tasks and give people their time
            back.
          </p>
        </header>

        {/* --- The "Core Story" Section --- */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-center">
          <div className="md:col-span-7 space-y-8 text-lg text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Why I Build.
            </h2>
            <div className="space-y-6 leading-loose">
              <p>
                My journey into development started with a simple observation:
                <span className="block text-2xl font-bold text-blue-600 mt-2">
                  Complexity is a thief of time.
                </span>
              </p>
              <p>
                I once worked with healthcare professionals who spent hours
                every day manually analyzing patient data. It wasn&apos;t just
                tedious; it was exhausting. I knew there was a better way.
              </p>
              <p>
                I built a chart display system that transformed their workflow.
                What used to take <strong>hours of manual labor</strong> now
                takes <strong>seconds of automated processing</strong>. Seeing
                them make faster, better-informed decisions is why I do what I
                do.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl shadow-blue-500/10 border border-slate-100 dark:border-slate-700 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-black tracking-widest">
                      Before
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      Hours of Manual Analysis
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100 dark:border-slate-700"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white dark:bg-slate-800 px-4 text-slate-400 font-mono text-sm">
                      VS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-black tracking-widest">
                      After My Solution
                    </div>
                    <div className="text-2xl font-black text-blue-600">
                      Seconds to Clarity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Future Vision Section --- */}
        <section className="w-full bg-slate-950 rounded-[3rem] p-10 md:p-20 text-white mb-32 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-900/30 border border-blue-800/50">
                <span className="text-xs font-black text-blue-400 tracking-widest uppercase">
                  Next-Gen Automation
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-[1.1]">
                Beyond Standard Code: <br />
                <span className="text-blue-500">The GenAI Frontier.</span>
              </h2>

              <p className="text-slate-300 text-xl leading-relaxed mb-8">
                The future of efficiency isn&apos;t just about writing better
                code—it&apos;s about <strong>Generative AI</strong>. I am deeply
                focused on integrating <strong>AI models</strong> into modern
                software ecosystems to build intelligent automation.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
                From autonomous agent workflows to AI-powered data synthesis, I
                aim to create tools that don&apos;t just assist users, but
                fundamentally redefine how work gets done.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-lg shadow-blue-900/40 flex items-center gap-2"
                >
                  Explore My AI Tools
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <a
                  href="mailto:boris@example.com"
                  className="group flex items-center gap-2 text-slate-300 px-8 py-4 rounded-2xl font-black hover:text-white transition-colors"
                >
                  Let&apos;s Talk AI
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="md:col-span-4 hidden md:flex justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] p-12 shadow-inner">
                  <svg
                    className="w-20 h-20 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Call to Action / Coffee --- */}
        <footer className="text-center border-t dark:border-slate-800 pt-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            I&apos;d love to grab a coffee and hear about your work in IT or
            exchange advice on the field.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/boris-pwwong/"
              className="text-slate-500 hover:text-blue-600 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sfuborisw"
              className="text-slate-500 hover:text-blue-600 transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

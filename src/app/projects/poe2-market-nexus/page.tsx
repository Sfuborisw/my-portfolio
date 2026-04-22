import Link from "next/link";

export default function POE2MarketNexusPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-12 uppercase tracking-widest"
        >
          ← Back to Archive
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-md border border-blue-200 dark:border-blue-800">
              Data Engineering
            </span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-black uppercase tracking-widest rounded-md border border-slate-200 dark:border-slate-700">
              Live Project
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6">
            POE2 Market <span className="text-blue-600">Nexus</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            An automated ETL pipeline and real-time market analytics dashboard
            designed to decode the complex economy of Path of Exile 2.
          </p>
        </div>

        {/* Action CTA - The "Launch" Button */}
        <div className="mb-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Ready to see it in action?
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Explore the live Vercel deployment with real-time data.
            </p>
          </div>
          <a
            href="https://poe-2-market-nexus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
          >
            Launch Live App ↗
          </a>
        </div>

        {/* Main Content - Engineering Case Study */}
        <div className="space-y-12">
          {/* Tech Stack */}
          <section>
            <h2 className="text-xs font-black text-slate-400 tracking-[0.2em] uppercase mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Python",
                "FastAPI",
                "PostgreSQL",
                "Next.js",
                "Cron Jobs",
                "Pandas",
                "Tailwind CSS",
                "Vercel",
              ].map((tech) => (
                <div
                  key={tech}
                  className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center font-bold text-slate-700 dark:text-slate-300 text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* The Challenge & Architecture */}
          <section className="grid md:grid-cols-2 gap-12 pt-8">
            <div>
              <h2 className="text-xs font-black text-slate-400 tracking-[0.2em] uppercase mb-4">
                The Challenge
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                The Path of Exile 2 economy fluctuates wildly. Manual tracking
                of item values and arbitrage opportunities is practically
                impossible due to the sheer volume of transactions. The system
                needed a way to ingest large amounts of JSON data constantly
                without crashing or returning stale information.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-black text-slate-400 tracking-[0.2em] uppercase mb-4">
                System Architecture
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                I implemented a robust{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  ETL (Extract, Transform, Load)
                </strong>{" "}
                pipeline. A scheduled Cron job triggers a Python script to
                extract raw market data, clean and normalize it using Pandas,
                and safely load the structured time-series data into a
                PostgreSQL database.
              </p>
              <div className="p-4 bg-slate-900 rounded-lg text-green-400 font-mono text-xs overflow-x-auto">
                <p>{`// Pipeline Logging Overview`}</p>
                <p>{`> Status: ACTIVE`}</p>
                <p>{`> Latency: < 250ms`}</p>
                <p>{`> DB_Sync: Successful`}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

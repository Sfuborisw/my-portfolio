// src/app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project Card Example */}
        <div className="p-6 border rounded-2xl dark:border-slate-800 hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-2">Project One</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            A cool AI application built with Next.js 16 and Gemini 3.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 text-sm rounded-full">Next.js 16</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 text-sm rounded-full">Tailwind v4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
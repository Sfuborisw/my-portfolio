"use client";
import Link from "next/link"; // Import Link for navigation

export default function ProjectsPage() {
  const projects = [
    {
      id: 'ai-assistant', // Unique ID for linking
      title: "Intelligent Portfolio Assistant",
      description: "A context-aware AI powered by Gemini 3 Flash to engage visitors.",
      tech: ["AI & NLP", "Gemini 3 API", "Next.js 15"],
      image: "https://via.placeholder.com/400x250/3b82f6/e0e7ff?text=AI+Assistant+Preview", // Placeholder image
      link: "/projects/ai-assistant",
    },
    {
      id: 'property-report',
      title: "Property Instance Report System",
      description: "A professional reporting tool for property managers to track maintenance and incidents.",
      tech: ["CRUD", "Status Management", "Next.js"],
      image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=Property+System",
      link: "/projects/property-report", // 更新呢個 Link
    },
    {
      id: 'e-commerce',
      title: "E-commerce Platform (Coming Soon)",
      description: "Building a full-stack e-commerce solution with Stripe integration.",
      tech: ["Stripe", "PostgreSQL", "Next.js"],
      image: "https://via.placeholder.com/400x250/a1a1aa/e4e4e7?text=E-commerce+Preview",
      link: "#", // No link for coming soon
    },
    {
      id: 'data-dashboard',
      title: "Real-time Data Dashboard (Coming Soon)",
      description: "Developing a live analytics dashboard with WebSockets and Chart.js.",
      tech: ["WebSockets", "Chart.js", "TypeScript"],
      image: "https://via.placeholder.com/400x250/34d399/d1fae5?text=Dashboard+Preview",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">My Creative Work</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Showcasing my technical skills and AI implementations.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={project.link} 
              className={`block rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                         ${project.link === '#' ? 'cursor-not-allowed opacity-70' : ''}`}
            >
              <div className="bg-white dark:bg-slate-800 h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="relative h-48 w-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                  {/* For a real project, you'd use <Image src={project.image} alt={project.title} ... /> */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  {project.link === '#' && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
                      Coming Soon
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
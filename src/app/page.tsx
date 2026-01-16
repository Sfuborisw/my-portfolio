import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
        Building the <span className="text-blue-600">Future</span>
      </h1>
      
      {/* The Link Component is key for Next.js routing */}
      <Link 
        href="/projects" 
        className="mt-8 px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-transform"
      >
        Explore Projects
      </Link>
    </div>
  );
}
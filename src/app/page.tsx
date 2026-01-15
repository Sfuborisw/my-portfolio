export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center p-4">
      <h1 className="text-5xl font-extrabold text-gray-700 tracking-tight">
        Building the <span className="text-blue-600">Future</span> with AI
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Hi, I&apos;m a developer passionate about AI integration and modern web technologies. 
        Welcome to my digital space.
      </p>
      <div className="mt-10 flex gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg">
          View Projects
        </button>
        <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all">
          Contact Me
        </button>
      </div>
    </div>
  );
}
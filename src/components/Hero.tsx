"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          I'm a creative developer passionate about building beautiful and functional web experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}


"use client";

export default function Intro() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              I specialize in creating modern web applications with cutting-edge technologies. 
              My focus is on delivering exceptional user experiences through clean code and intuitive design.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With expertise in React, Next.js, and modern web frameworks, I bring ideas to life 
              through thoughtful development and attention to detail.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
                React
              </span>
              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
                Next.js
              </span>
              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
                Tailwind CSS
              </span>
            </div>
          </div>
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}


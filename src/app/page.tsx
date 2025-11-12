"use client";

import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

export default function HomePage() {
  return (
    <main className="relative">
      <section 
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/bg.png)' }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Developer | Designer | Creator
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors rounded-lg">
              Scroll to Explore
            </button>
          </div>
        </div>
      </section>
      <Hero />
      <Intro />
    </main>
  );
}
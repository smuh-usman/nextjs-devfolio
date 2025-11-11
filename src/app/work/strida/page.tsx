"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StridaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-500 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/work"
            className="text-white/80 hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Work
          </Link>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl mt-8">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl font-bold text-white mb-6"
            >
              Strida
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 text-white/90 text-lg"
            >
              <p>
                A revolutionary folding bike design that combines portability
                with style and functionality.
              </p>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Project Overview
                </h2>
                <p>
                  Strida represents the future of urban mobility. This project
                  showcases innovative design thinking and engineering
                  excellence.
                </p>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Compact folding mechanism</li>
                  <li>Lightweight aluminum frame</li>
                  <li>Modern aesthetic design</li>
                  <li>Easy to carry and store</li>
                </ul>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    CAD Design
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    3D Modeling
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Engineering
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}


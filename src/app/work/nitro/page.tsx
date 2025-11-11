"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NitroPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-500 to-red-500 py-20 px-6">
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
              Nitro
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 text-white/90 text-lg"
            >
              <p>
                A high-performance web application built for speed and
                scalability in modern cloud environments.
              </p>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Project Overview
                </h2>
                <p>
                  Nitro pushes the boundaries of web performance, delivering
                  lightning-fast load times and seamless user experiences at
                  scale.
                </p>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sub-second page load times</li>
                  <li>Advanced caching strategies</li>
                  <li>Server-side rendering</li>
                  <li>Optimized asset delivery</li>
                </ul>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Next.js
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Vercel Edge
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    TypeScript
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Redis
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


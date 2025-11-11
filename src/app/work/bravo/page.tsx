"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BravoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 py-20 px-6">
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
              Bravo
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 text-white/90 text-lg"
            >
              <p>
                A modern communication platform designed to bring teams together
                and boost productivity.
              </p>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Project Overview
                </h2>
                <p>
                  Bravo is a comprehensive communication solution that combines
                  messaging, video calls, and project management in one
                  seamless platform.
                </p>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Real-time messaging and collaboration</li>
                  <li>HD video conferencing</li>
                  <li>Integrated file sharing</li>
                  <li>Task management tools</li>
                </ul>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    React
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Node.js
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    WebRTC
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    MongoDB
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


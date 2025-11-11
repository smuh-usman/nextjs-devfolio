"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FargoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-500 to-emerald-500 py-20 px-6">
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
              Fargo
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 text-white/90 text-lg"
            >
              <p>
                An innovative logistics solution that streamlines supply chain
                management and delivery operations.
              </p>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Project Overview
                </h2>
                <p>
                  Fargo revolutionizes logistics management with real-time
                  tracking, intelligent routing, and predictive analytics for
                  optimal efficiency.
                </p>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Real-time package tracking</li>
                  <li>AI-powered route optimization</li>
                  <li>Automated dispatch system</li>
                  <li>Analytics dashboard</li>
                </ul>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Python
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Django
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    PostgreSQL
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Machine Learning
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


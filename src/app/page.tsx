"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-bold text-gray-800"
      >
        Hello Framer Motion 👋
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8"
      >
        <Link
          href="/work"
          className="text-lg text-gray-700 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-gray-900 pb-1"
        >
          View My Work →
        </Link>
      </motion.div>
    </main>
  );
}
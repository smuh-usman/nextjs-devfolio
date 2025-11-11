"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    name: "Strida",
    slug: "strida",
    description: "A revolutionary folding bike design",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Bravo",
    slug: "bravo",
    description: "Modern communication platform",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Nitro",
    slug: "nitro",
    description: "High-performance web application",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Fargo",
    slug: "fargo",
    description: "Innovative logistics solution",
    color: "from-green-500 to-emerald-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-gray-800 mb-4">My Work</h1>
          <p className="text-xl text-gray-600">
            A showcase of projects I've built
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <Link href={`/work/${project.slug}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-64 cursor-pointer">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}
                  />
                  <div className="relative h-full flex flex-col justify-center items-center p-8">
                    <h2 className="text-4xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-4">
                      {project.name}
                    </h2>
                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300 text-center">
                      {project.description}
                    </p>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-semibold">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}


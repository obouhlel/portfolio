"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <div className="max-w-5xl mt-[80px] sm:mt-0 mx-auto px-8 flex items-center justify-center flex-col min-h-screen z-50">
        <motion.h1
          className="text-5xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mes projets
        </motion.h1>
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-2">
            En cours de développement
          </h2>
          <p className="text-black dark:text-white">
            Cette section est actuellement en construction. Revenez bientôt pour
            découvrir mes projets !<br /> Vous pouvez consulter mon{" "}
            <a
              href="https://github.com/obouhlel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>{" "}
            pour voir mes projets en cours.
          </p>
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-2 text-center">
                Hypertube
              </h2>
              <p className="text-red-700 dark:text-red-400 text-center italic">
                Projet en cours
              </p>
              <p className="text-black dark:text-white text-left">
                Hypertube est un projet de plateforme de streaming vidéo.
              </p>
              <div className="text-white mt-2 text-center">
                <span className="bg-green-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Node.js
                </span>
                <span className="bg-purple-800 text-white text-xs px-2 py-1 rounded mr-1">
                  AdonisJS
                </span>
                <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Inertia.js
                </span>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-1">
                  TypeScript
                </span>
                <span className="bg-cyan-800 text-white text-xs px-2 py-1 rounded mr-1">
                  React
                </span>
              </div>
              <div className="text-center">
                <motion.a
                  href="https://hypertube.obouhlel.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4 inline-block transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le projet
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-2 text-center">
                Datascience X Logistic Regression
              </h2>
              <p className="text-black dark:text-white text-left">
                Hypertube est un projet de plateforme de streaming vidéo.
              </p>
              <div className="text-white mt-2 text-center">
                <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Python
                </span>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mr-1">
                  Pandas
                </span>
                <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded mr-1">
                  NumPy
                </span>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-1">
                  Matplotlib
                </span>
              </div>
              <div className="text-center">
                <motion.a
                  href="https://github.com/obouhlel/dslr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4 inline-block transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le projet
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/projet-card";

const projects = [
  {
    title: "Hypertube",
    status: "Projet en cours",
    description:
      "Hypertube est une plateforme de streaming vidéo permettant aux utilisateurs de rechercher et visionner des films via le protocole BitTorrent. L'application télécharge les films à la demande et les stocke temporairement sur le serveur.",
    stacks: ["Node.js", "AdonisJS", "Inertia.js", "TypeScript", "React"],
    link: "https://hypertube.obouhlel.xyz",
  },
  {
    title: "Datascience X Logistic Regression",
    description:
      "Un projet d'analyse de données et de machine learning inspiré de Harry Potter. Ce projet implémente un modèle de régression logistique pour prédire la maison de Poudlard d'un élève à partir de ses caractéristiques. Il comprend des visualisations de données, une analyse exploratoire et un classificateur entraîné avec des méthodes statistiques.",
    stacks: ["Python", "Pandas", "NumPy", "Matplotlib"],
    link: "https://github.com/obouhlel/dslr",
  },
  {
    title: "Random Pokemon generator",
    description:
      "Un site web, où des pokémon apparaise avec leur son avec une petite animation, en utilisant axios pour faire des requete API.",
    stacks: ["React", "Next.js", "Framer Motion", "TypeScript"],
    link: "https://oustopie.xyz/",
  },
];

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
          <p className="text-black dark:text-white">
            Vous pouvez consulter mon{" "}
            <a
              href="https://github.com/obouhlel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>{" "}
            pour découvrir plus de projet.
          </p>
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

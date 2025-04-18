"use client";
import React from "react";
// import { ProjectCard } from "@/components/ui/project-card";

export default function Page() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-center flex-col min-h-screen z-10">
        <h1 className="text-5xl font-bold text-white text-center mb-8">
          Mes projets
        </h1>
        {/* <ProjectCard items={projects} /> */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            En cours de développement
          </h2>
          <p className="text-gray-300">
            Cette section est actuellement en construction. Revenez bientôt pour
            découvrir mes projets !
          </p>
        </div>
      </div>
    </>
  );
}

// const projects = [
//   {
//     title: "Hypertube",
//     description: "Description du projet",
//     image: "/images/hypertube.png",
//     link: "https://hypertube.obouhlel.xyz",
//     stack: ["Node.js", "AdonisJS", "Inertia.js", "TypeScript", "React"],
//   },
// ];

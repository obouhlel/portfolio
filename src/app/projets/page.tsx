"use client";
import React from "react";
import { ProjectCard } from "@/components/ui/project-card";

export default function Page() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-center flex-col min-h-screen z-10">
        <h1 className="text-5xl font-bold text-white text-center mb-8">
          Mes projets
        </h1>
        <ProjectCard items={projects} />
      </div>
    </>
  );
}

export const projects = [
  {
    title: "Hypertube",
    description: "Description du projet",
    image: "/images/hypertube.png",
    link: "https://hypertube.obouhlel.xyz",
    stack: ["Node.js", "AdonisJS", "Inertia.js", "TypeScript", "React"],
  },
];

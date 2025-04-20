import React from "react";
import { motion } from "framer-motion";
import Stack from "@/components/ui/stack";

interface ProjectCardProps {
  title: string;
  status?: string;
  description: string;
  stacks: string[];
  link: string;
}

export default function ProjectCard({
  title,
  status,
  description,
  stacks,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-2xl font-semibold text-black dark:text-white mb-2 text-center">
        {title}
      </h2>
      {status && (
        <p className="text-red-700 dark:text-red-400 text-center italic">
          {status}
        </p>
      )}
      <p className="text-black dark:text-white text-left">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2 items-center justify-center">
        {stacks.map((stack, index) => (
          <Stack key={index}>{stack}</Stack>
        ))}
      </div>
      <div className="text-center">
        <motion.a
          href={link}
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
  );
}

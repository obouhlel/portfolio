"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Item } from "@/types/item";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  const items: Array<Item> = [
    {
      title: "Github",
      icon: <Github className="text-black dark:text-white h-full w-full" />,
      href: "https://github.com/obouhlel",
    },
    {
      title: "Linkedin",
      icon: <Linkedin className="text-black dark:text-white h-full w-full" />,
      href: "https://www.linkedin.com/in/oussama-bouhlel-7a9152294/",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 z-50"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Oussama BOUHLEL
        </div>
        <div className="font-extralight max-w-[80vw] text-base md:text-4xl text-neutral-200 py-4 text-center">
          Actuellement à la recherche d&apos;un stage de 6 mois avec
          pré-embauche,
          <br />
          ou d&apos;un emploi en tant que développeur logiciel ou Full-Stack.
        </div>
        <a
          href="/CV.pdf"
          className="px-8 py-3 rounded-full bg-white dark:bg-gray-600 text-black dark:text-white font-medium text-lg hover:bg-neutral-200 hover:dark:bg-gray-700 transition-colors"
        >
          Voir mon CV
        </a>
      </motion.div>
      <FloatingDock
        items={items}
        desktopClassName="fixed bottom-5 z-50"
        mobileClassName="fixed bottom-5 right-5 z-50"
      />
    </div>
  );
}

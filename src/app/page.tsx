"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Item } from "@/types/Item";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Oussama BOUHLEL
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Déveoppeur Logiciel
        </div>
        <div className="text-sm md:text-lg font-light text-center dark:text-neutral-200">
          Développement en cours...
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="primary" className="hidden md:flex">
            <a href="/parcours">Mon Parcours</a>
          </Button>
          <Button variant="primary" className="hidden md:flex">
            <a href="/projets">Mes Projets</a>
          </Button>
          <Button variant="primary" className="hidden md:flex">
            <a href="/skills">Mes Compétances</a>
          </Button>
          <Button variant="primary" className="hidden md:flex">
            <a href="/contacts">Me contacter</a>
          </Button>
        </div>
      </motion.div>
      <FloatingDock
        items={items}
        desktopClassName="fixed bottom-5"
        mobileClassName="fixed bottom-5 right-5"
      />
    </AuroraBackground>
  );
}

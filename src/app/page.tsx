"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
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
      </motion.div>
    </AuroraBackground>
  );
}

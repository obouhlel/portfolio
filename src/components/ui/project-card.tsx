"use clients";
import React from "react";
import { Project } from "@/types/project";

export function ProjectCard({ items }: { items: Project[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
}

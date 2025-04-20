import React from "react";

interface StackProps {
  children: string;
}

const stackColors: { [key: string]: string } = {
  Python: "bg-blue-600",
  JavaScript: "bg-yellow-600",
  PostgreSQL: "bg-blue-500",
  Django: "bg-green-700",
  API: "bg-red-500",
  CSS: "bg-blue-500",
  HTML: "bg-orange-600",
  TypeScript: "bg-blue-700",
  "Node.js": "bg-green-800",
  AdonisJS: "bg-purple-800",
  "Inertia.js": "bg-blue-800",
  React: "bg-cyan-800",
  "Vue.js": "bg-green-500",
  Pandas: "bg-green-600",
  NumPy: "bg-yellow-600",
  Matplotlib: "bg-red-600",
  "Nuxt.js": "bg-green-600",
  "Next.js": "bg-black",
  "Framer Motion": "bg-purple-800",
  Vue: "bg-green-500",
  Rust: "bg-orange-700",
  Docker: "bg-blue-800",
  Nuxt: "bg-green-600",
  CI: "bg-indigo-500",
};

export default function Stack({ children }: StackProps) {
  const colorClass = stackColors[children] || "bg-gray-800";

  return (
    <span
      className={`${colorClass} px-5 py-2 rounded-full text-white font-medium`}
    >
      {children}
    </span>
  );
}

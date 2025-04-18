"use client";

export default function Page() {
  // const skills = [
  //   {
  //     category: "Programming Languages",
  //     items: [
  //       "C",
  //       "C++",
  //       "Rust",
  //       "Python",
  //       "TypeScript",
  //       "HTML",
  //       "CSS",
  //       "Vue.js",
  //       "React",
  //     ],
  //   },
  //   { category: "Front-end", items: ["Next.js", "Nuxt.js", "Tailwind CSS"] },
  //   { category: "Back-end", items: ["Django", "AdonisJS"] },
  //   { category: "DevOps", items: ["Docker", "Nginx", "Kubernetes", "Coolify"] },
  // ];

  return (
    <>
      <div className="pt-[60px] flex flex-col items-center justify-center min-h-screen space-y-8">
        <div className="text-5xl font-bold text-white text-center mb-8">
          Mes compétences
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      </div>
    </>
  );
}

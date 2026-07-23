"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/shared/ProjectCard";
import projects from "@/data/projects.json";

const categories = [
  "All",
  ...new Set(projects.map((p) => p.category)),
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-sm"
    >
      <SectionHeader title="Projects" />

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors font-heading ${
              active === cat
                ? "bg-primary text-white"
                : "border border-border text-secondary hover:border-secondary hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

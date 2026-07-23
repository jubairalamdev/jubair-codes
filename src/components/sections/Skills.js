import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import { getSkills } from "@/services/skills";

const skillIcons = {
  React: { icon: FaReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  Python: { icon: FaPython, color: "#3776AB" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Git: { icon: FaGitAlt, color: "#F05032" },
  Docker: { icon: FaDocker, color: "#2496ED" },
  Vercel: { icon: SiVercel, color: "#000000" },
};

export default async function Skills() {
  const skills = await getSkills();

  return (
    <section
      id="skills"
      className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-sm"
    >
      <SectionHeader title="Skills" />

      <div className="mt-8 flex flex-col gap-8">
        {skills.categories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-4 text-xs font-semibold text-secondary uppercase tracking-widest font-heading">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const matched = skillIcons[skill.name];
                return (
                  <Badge
                    key={skill.name}
                    icon={matched?.icon}
                    iconColor={matched?.color}
                    className="px-4 py-2 text-xl"
                  >
                    {skill.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}

        {skills.certifications.length > 0 && (
          <div>
            <h3 className="mb-4 text-xs font-semibold text-secondary uppercase tracking-widest font-heading">
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {skills.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-bg-subtle px-4 py-3"
                >
                  <HiOutlineAcademicCap className="text-lg text-accent" />
                  <div>
                    <p className="text-sm font-medium text-black font-heading">
                      {cert.name}
                    </p>
                    <p className="text-xs text-secondary">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

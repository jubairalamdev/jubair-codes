import { HiOutlineAcademicCap } from "react-icons/hi2";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import { getSkills } from "@/services/skills";

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
            <h3 className="mb-4 text-xs font-semibold text-secondary uppercase tracking-widest">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </div>
        ))}

        {skills.certifications.length > 0 && (
          <div>
            <h3 className="mb-4 text-xs font-semibold text-secondary uppercase tracking-widest">
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {skills.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 rounded-xl border border-border px-4 py-3"
                >
                  <HiOutlineAcademicCap className="text-lg text-accent" />
                  <div>
                    <p className="text-sm font-medium text-black">
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

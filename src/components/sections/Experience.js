import { HiArrowRight, HiOutlineAcademicCap } from "react-icons/hi2";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import { getExperiences } from "@/services/experience";
import { getSkills } from "@/services/skills";

export default async function Experience() {
  const experience = await getExperiences();
  const skills = await getSkills();

  return (
    <section
      id="experience"
      className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-sm"
    >
      <SectionHeader title="Experience" />

      <div className="mt-8 flex flex-col divide-y divide-border">
        {experience.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 py-6 first:pt-0 last:pb-0"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-card font-semibold text-black font-heading">
                {item.role}
              </h3>
              <span className="shrink-0 text-sm text-secondary">
                {item.period}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge>{item.company}</Badge>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-secondary">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {skills.certifications.length > 0 && (
        <div className="mt-10">
          <SectionHeader title="Certifications" />
          <div className="mt-6 flex flex-col gap-3">
            {skills.certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg-subtle px-4 py-3"
              >
                <HiOutlineAcademicCap className="text-lg text-black" />
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
    </section>
  );
}

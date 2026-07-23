import { HiArrowRight } from "react-icons/hi2";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import { getExperiences } from "@/services/experience";

export default async function Experience() {
  const experience = await getExperiences();

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

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              View Details <HiArrowRight className="text-xs" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

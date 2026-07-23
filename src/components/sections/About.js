import { HiOutlineMapPin } from "react-icons/hi2";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import personalInfo from "@/data/personal-info.json";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 rounded-3xl border border-border bg-white p-10 shadow-sm"
    >
      <SectionHeader title="About" />

      <div className="flex flex-col items-center gap-6">
        <div className="h-28 w-28 rounded-full border border-border bg-bg-subtle shadow-sm" />

        <div className="flex flex-col gap-4 text-left">
          <p className="text-base leading-relaxed text-secondary">
            {personalInfo.bio}
          </p>
          <p className="text-base leading-relaxed text-secondary">
            I focus on building clean, performant, and accessible web
            applications that deliver great user experiences.
          </p>
        </div>

        <Badge icon={HiOutlineMapPin}>{personalInfo.location}</Badge>
      </div>
    </section>
  );
}

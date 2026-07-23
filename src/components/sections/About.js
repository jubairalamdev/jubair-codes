import { HiOutlineMapPin } from "react-icons/hi2";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import { getPersonalInfo } from "@/services/personal-info";
import Image from "next/image";

export default async function About() {
  const personalInfo = await getPersonalInfo();

  return (
    <section
      id="about"
      className="flex flex-col gap-6 rounded-3xl border border-border bg-white p-6 md:p-10 shadow-sm"
    >
      <SectionHeader title="About" />

      <div className="flex flex-col items-center gap-6">
        <Image
          src="/profile.png"
          alt="Profile photo"
          width={350}
          height={350}
          className="h-35 w-35 md:h-38 md:w-38 rounded-full border-4 border-gray-400 bg-bg-subtle shadow-sm"
          role="img"
          aria-label="Profile photo placeholder"
        />

        <div className="flex flex-col gap-4 text-left">
          <p className="text-base leading-relaxed text-secondary">
            {personalInfo.description}
          </p>
        </div>

        <Badge icon={HiOutlineMapPin} className="text-[16px]">{personalInfo.location}</Badge>
      </div>
    </section>
  );
}

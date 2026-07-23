import { HiMiniAcademicCap } from "react-icons/hi2";

export default function SectionHeader({ title, icon: Icon }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        {Icon ? (
          <Icon className="text-lg text-accent" />
        ) : (
          <span className="h-2 w-2 rounded-full bg-accent" />
        )}
        <h2 className="text-sm font-medium text-secondary uppercase tracking-wider">
          {title}
        </h2>
      </div>
      <div className="h-px w-full bg-border" />
    </div>
  );
}

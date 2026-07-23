import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Badge from "@/components/shared/Badge";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-bg-subtle" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
        <div className="absolute top-3 left-3 z-10">
          <span className="rounded-full border border-border bg-white/90 px-3 py-1 text-xs text-secondary backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-card font-semibold text-black font-heading">
          {project.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-secondary">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-auto pt-3">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            View Details <HiArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </article>
  );
}

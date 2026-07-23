import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import Container from "@/components/shared/Container";
import Badge from "@/components/shared/Badge";
import projects from "@/data/projects.json";

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return null;

  return (
    <Container className="py-6">
      <Link
        href="/#projects"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-black"
      >
        <HiArrowLeft className="text-xs" /> Back to Projects
      </Link>

      <article className="rounded-3xl border border-border bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-medium text-secondary uppercase tracking-wider">
              Project
            </span>
          </div>
          <h1 className="text-section font-semibold text-black">
            {project.title}
          </h1>
          <div className="h-px w-full bg-border" />
        </div>

        <div className="mt-8 aspect-video w-full rounded-2xl bg-bg-subtle" />

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-secondary">
          {project.longDescription}
        </p>

        <div className="mt-8">
          <h2 className="mb-4 text-base font-semibold text-black">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        {project.contributions && project.contributions.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 text-base font-semibold text-black">
              Key Contributions
            </h2>
            <ul className="flex flex-col gap-2">
              {project.contributions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-secondary"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 text-base font-semibold text-black">
              Challenges Faced
            </h2>
            <ul className="flex flex-col gap-2">
              {project.challenges.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-secondary"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.improvements && project.improvements.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 text-base font-semibold text-black">
              Future Improvements
            </h2>
            <ul className="flex flex-col gap-2">
              {project.improvements.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-secondary"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-secondary transition-colors hover:border-secondary hover:text-black"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </article>
    </Container>
  );
}

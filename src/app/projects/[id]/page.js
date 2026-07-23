import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import Container from "@/components/shared/Container";
import Badge from "@/components/shared/Badge";
import { getProjects, getProjectById } from "@/services/projects";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) return null;

  return (
    <Container className="py-6">
      <Link
        href="/#projects"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-black"
      >
        <HiArrowLeft className="text-xs" /> Back to Projects
      </Link>

      <article className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-black" />
          <h1 className="text-section font-semibold text-black font-heading">
            {project.title}
          </h1>
          <div className="flex-1 border-t border-dashed border-border" />
        </div>

        <div className="mt-8 aspect-video w-full rounded-2xl bg-bg-subtle" />

        <div className="mt-10">
          <h2 className="mb-4 text-base font-semibold text-black font-heading">
            Project Overview
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-secondary">
            {project.longDescription}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 text-base font-semibold text-black font-heading">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        {project.features && project.features.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 text-base font-semibold text-black font-heading">
              Features
            </h2>
            <ul className="flex flex-col gap-2">
              {project.features.map((item, i) => (
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

        {project.contributions && project.contributions.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 text-base font-semibold text-black font-heading">
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
          <div className="mt-10">
            <h2 className="mb-4 text-base font-semibold text-black font-heading">
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
          <div className="mt-10">
            <h2 className="mb-4 text-base font-semibold text-black font-heading">
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
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover font-heading"
            >
              Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-secondary transition-colors hover:border-secondary hover:text-black font-heading"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </article>
    </Container>
  );
}

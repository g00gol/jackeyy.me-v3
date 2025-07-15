import { notFound } from "next/navigation";

import type { Project as ProjectType } from "@/components/projects/types";
import { getAllProjects, getProjectBySlug } from "@/components/projects/utils";
import { Project } from "@/components/projects/project";

export function generateStaticParams() {
  const projects: ProjectType[] = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project: ProjectType;
  try {
    project = getProjectBySlug(slug) as ProjectType;
  } catch {
    notFound();
  }

  return <Project project={project} />;
}

import { notFound } from "next/navigation";

import type { Project as ProjectType } from "@/components/projects/types";
import { getProjectBySlug } from "@/components/projects/utils";
import { Project } from "@/components/projects/project";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: ProjectType | null = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <Project project={project} />;
}

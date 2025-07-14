import Link from "next/link";
import Image from "next/image";

import type { Project } from "./types";
import { Column } from "@/components/shared";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative transition-all">
      <Link href={`/project/${project.slug}`} className="space-y-1">
        <div className="relative w-full overflow-hidden">
          {project.tagline && (
            <Badge
              className="bg-background/30 absolute bottom-0 z-10 m-2 backdrop-blur-sm"
              variant="outline"
            >
              {project.tagline}
            </Badge>
          )}
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:blur-[1px]"
          />
        </div>
        <Column.Heading>{project.title}</Column.Heading>
        <div className="relative">
          <Column.Body className="inset-0 truncate duration-300 @md:absolute @md:opacity-0 @md:group-hover:opacity-100">
            {project.description}
          </Column.Body>
          <Column.Body className="hidden truncate duration-300 @md:block @md:group-hover:opacity-0">
            {project.duration}
          </Column.Body>
        </div>
      </Link>
    </div>
  );
}

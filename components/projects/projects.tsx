import Link from "next/link";
import Image from "next/image";

import type { Project } from "./types";
import { Grid, Column } from "@/components/shared";
import { getAllProjects } from "./utils";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects: Project[] = getAllProjects();

  return (
    <Grid>
      <Grid.Content>
        {[0, 1, 2].map((columnIndex) => (
          <Column key={columnIndex}>
            {projects
              .filter((_, index) => index % 3 === columnIndex)
              .map((project) => (
                <div
                  key={`${project.slug}-${columnIndex}`}
                  className="group relative transition-all"
                >
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
              ))}
          </Column>
        ))}
      </Grid.Content>
    </Grid>
  );
}

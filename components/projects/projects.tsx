import Image from "next/image";

import type { Project } from "./types";
import { Column, ColumnBody, ColumnHeading } from "@/components/shared/column";
import { Grid, GridContainer } from "@/components/shared/grid";
import { getAllProjects } from "./utils";
import Link from "next/link";

export function Projects() {
  const projects: Project[] = getAllProjects();

  return (
    <GridContainer>
      <Grid>
        {[0, 1, 2].map((columnIndex) => (
          <Column key={columnIndex}>
            {projects
              .filter((_, index) => index % 3 === columnIndex)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </Column>
        ))}
      </Grid>
    </GridContainer>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative space-y-1 transition-colors">
      <Link href={`/project/${project.slug}`}>
        <div className="relative w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full transition-all ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:blur-[1px]"
          />
        </div>
        <ColumnHeading>{project.title}</ColumnHeading>
        <ColumnBody className="truncate">{project.description}</ColumnBody>
      </Link>
    </div>
  );
}

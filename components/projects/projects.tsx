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
                <Link href={`/project/${project.slug}`} key={project.slug}>
                  <Project project={project} />
                </Link>
              ))}
          </Column>
        ))}
      </Grid>
    </GridContainer>
  );
}

function Project({ project }: { project: Project }) {
  return (
    <div className="relative space-y-1">
      <div className="relative w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <ColumnHeading>{project.title}</ColumnHeading>
      <ColumnBody className="truncate">{project.description}</ColumnBody>
    </div>
  );
}

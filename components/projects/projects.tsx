import type { Project } from "./types";
import { Grid, GridContainer, Column } from "@/components/shared";
import { ProjectCard } from "./projectCard";
import { getAllProjects } from "./utils";

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

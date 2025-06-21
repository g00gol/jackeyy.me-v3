import Image, { StaticImageData } from "next/image";

import { edhtop16, shima } from "@/assets/projects";
import { projectsData } from "@/content/projects";
import type { Project } from "@/assets/projects";
import { Column, ColumnBody, ColumnHeading } from "@/components/shared/column";
import { Grid, GridContainer } from "@/components/shared/grid";

const imageMap: Record<string, StaticImageData> = {
  edhtop16: edhtop16,
  shima: shima,
};

export function Projects() {
  return (
    <GridContainer>
      <Grid>
        {[0, 1, 2].map((columnIndex) => (
          <Column key={columnIndex}>
            {projectsData
              .filter((_, index) => index % 3 === columnIndex)
              .map((project) => (
                <Project key={project.id} project={project} />
              ))}
          </Column>
        ))}
      </Grid>
    </GridContainer>
  );
}

function Project({ project }: { project: Project }) {
  return (
    <div className="space-y-1">
      <Image
        src={imageMap[project.id] as StaticImageData}
        alt={project.title}
      />
      <ColumnHeading>{project.title}</ColumnHeading>
      <ColumnBody className="truncate">{project.description}</ColumnBody>
    </div>
  );
}

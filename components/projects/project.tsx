import Image from "next/image";

import type { Project as ProjectType } from "./types";
import { Grid, Column, Outlink } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { MDX } from "@/components/mdx";

interface ProjectProps {
  project: ProjectType;
}

export function Project({ project }: ProjectProps) {
  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </div>
      <Grid>
        <Grid.Content>
          <Column span={1}>
            <div className="top-24 space-y-4 @md:sticky">
              {project.content !== "" && (
                <>
                  <Column.Heading>{project.title}</Column.Heading>
                  <Column.Body>{project.description}</Column.Body>
                </>
              )}
              <ProjectInfo project={project} />
            </div>
          </Column>
          <Column span={2}>
            {project.content !== "" ? (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDX source={project.content} />
              </div>
            ) : (
              <>
                <Column.Heading>{project.title}</Column.Heading>
                <Column.Body>{project.description}</Column.Body>
              </>
            )}
          </Column>
        </Grid.Content>
      </Grid>
    </>
  );
}

function ProjectInfo({ project }: { project: ProjectType }) {
  return (
    <>
      <Column.Heading>Tech</Column.Heading>
      <Column.Body>{project.tech.join(", ")}</Column.Body>
      <Column.Heading>Duration</Column.Heading>
      <Column.Body>{project.duration}</Column.Body>
      <Column.Heading>URLs</Column.Heading>
      <Column.Body className="flex !space-y-0 space-x-2">
        {Object.entries(project.urls).map(([title, url]) => (
          <Button variant="outline" size="sm" key={title}>
            <Outlink variant="ghost" key={title} href={url}>
              {title}
            </Outlink>
          </Button>
        ))}
      </Column.Body>
    </>
  );
}

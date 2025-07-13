import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import type { Project as ProjectType } from "./types";
import { MDXComponents } from "@/components/mdx/mdxComponents";
import {
  Grid,
  GridContainer,
  Column,
  ColumnBody,
  ColumnHeading,
  Outlink,
} from "@/components/shared";
import { Button } from "@/components/ui/button";

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
      <GridContainer>
        <Grid>
          <Column span={1}>
            <div className="top-24 space-y-4 @md:sticky">
              {project.content !== "" && (
                <>
                  <ColumnHeading>{project.title}</ColumnHeading>
                  <ColumnBody>{project.description}</ColumnBody>
                </>
              )}
              <ProjectInfo project={project} />
            </div>
          </Column>
          <Column span={2}>
            {project.content !== "" ? (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXRemote
                  source={project.content}
                  components={MDXComponents}
                />
              </div>
            ) : (
              <>
                <ColumnHeading>{project.title}</ColumnHeading>
                <ColumnBody>{project.description}</ColumnBody>
              </>
            )}
          </Column>
        </Grid>
      </GridContainer>
    </>
  );
}

function ProjectInfo({ project }: { project: ProjectType }) {
  return (
    <>
      <ColumnHeading>Tech</ColumnHeading>
      <ColumnBody>{project.tech.join(", ")}</ColumnBody>
      <ColumnHeading>Duration</ColumnHeading>
      <ColumnBody>{project.duration}</ColumnBody>
      <ColumnHeading>URLs</ColumnHeading>
      <ColumnBody className="flex !space-y-0 space-x-2">
        {Object.entries(project.urls).map(([title, url]) => (
          <Button variant="outline" size="sm" key={title}>
            <Outlink key={title}>{title}</Outlink>
          </Button>
        ))}
      </ColumnBody>
    </>
  );
}

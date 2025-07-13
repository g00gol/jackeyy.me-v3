import { MapPin, SquareArrowOutUpRight } from "lucide-react";

import {
  Column,
  ColumnHeading,
  ColumnBody,
  Grid,
  GridContainer,
} from "@/components/shared";
import { BlogList } from "@/components/blog";
import { Button } from "../ui/button";

const SOCIALS = [
  {
    name: "github",
    href: "https://github.com/g00gol/",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/jackeyy/",
  },
];

export function Hero() {
  return (
    <GridContainer>
      <Grid>
        <Column span={2}>
          <ColumnHeading>Hello World!</ColumnHeading>
          <ColumnBody>
            <h1>I'm Jackey,</h1>
            <h1 className="">
              a software developer in&nbsp;
              <span className="text-secondary inline-flex items-center">
                <MapPin className="h-4 w-4" /> NYC&nbsp;
              </span>
              building way too many things. I graduated from Stevens Institute
              of Technology with a degree in Computer Science. If you'd like to
              work together, feel free to reach out!
            </h1>

            <div className="space-x-2 underline">
              {SOCIALS.map((social) => (
                <Button
                  className="cursor-pointer"
                  variant="outline"
                  size="sm"
                  key={social.name}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all"
                  >
                    {social.name} <SquareArrowOutUpRight className="inline" />
                  </a>
                </Button>
              ))}
            </div>
          </ColumnBody>
        </Column>
        <Column span={1}>
          <ColumnHeading>Recent Posts</ColumnHeading>
          <ColumnBody className="flex flex-col">
            <BlogList show={4} />
          </ColumnBody>
        </Column>
      </Grid>
    </GridContainer>
  );
}

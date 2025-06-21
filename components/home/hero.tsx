import { MapPin } from "lucide-react";

import {
  Column,
  ColumnHeading,
  ColumnBody,
  Grid,
  GridContainer,
} from "@/components/shared";
import { BlogList } from "@/components/blog";

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
            <h1>im jackey,</h1>
            <h1 className="">
              a software developer in&nbsp;
              <span className="text-secondary inline-flex items-center">
                <MapPin className="h-4 w-4" /> NYC&nbsp;
              </span>
              building waay too many things. i graduated from stevens institute
              of technology with a degree in computer science. if you'd like to
              work together, feel free to reach out!
            </h1>

            <p>listening on repeat: </p>

            <div className="space-x-2 underline">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </ColumnBody>
        </Column>
        <Column span={1}>
          <ColumnHeading>Recent Posts</ColumnHeading>
          <ColumnBody className="flex flex-col">
            <BlogList />
          </ColumnBody>
        </Column>
      </Grid>
    </GridContainer>
  );
}

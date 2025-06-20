import { MapPin } from "lucide-react";

import {
  Column,
  ColumnHeading,
  ColumnBody,
  Grid,
  GridContainer,
} from "@/components/shared";

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
        <Column span={1}>
          <ColumnHeading>Hello World!</ColumnHeading>
          <ColumnBody>
            <h1>im jackey,</h1>
            <h1 className="">
              a software developer in&nbsp;
              <span className="text-secondary inline-flex items-center">
                <MapPin className="h-4 w-4" /> NYC&nbsp;
              </span>
              building waay too many things.
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
        <Column span={2}>
          <ColumnHeading>Blog</ColumnHeading>
          <ColumnBody>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </ColumnBody>
        </Column>
      </Grid>
    </GridContainer>
  );
}

import { Column, Grid, GridContainer, Outlink } from "@/components/shared";
import { BlogList } from "@/components/blog";
import { Button } from "@/components/ui/button";

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
          <Column.Heading>Hello World!</Column.Heading>
          <Column.Body>
            <h1>I'm Jackey,</h1>
            <h1 className="">
              a software developer in NYC building way too many things. I
              graduated from Stevens Institute of Technology with a degree in
              Computer Science. If you'd like to work together, feel free to
              reach out!
            </h1>

            <div className="space-x-2 underline">
              {SOCIALS.map((social) => (
                <Button
                  className="cursor-pointer"
                  variant="outline"
                  size="sm"
                  key={social.name}
                >
                  <Outlink href={social.href}>{social.name}</Outlink>
                </Button>
              ))}
            </div>
          </Column.Body>
        </Column>
        <Column span={1}>
          <Column.Heading>Recent Posts</Column.Heading>
          <Column.Body className="flex flex-col">
            <BlogList show={4} />
          </Column.Body>
        </Column>
      </Grid>
    </GridContainer>
  );
}

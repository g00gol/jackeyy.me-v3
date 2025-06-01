import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroProps } from "./types";

const Hero = ({
  badge = "✨ portfolio source code on github",
  heading = "i build things i find cool.",
  description = "im a dev based in nyc and new grad cs from stevens institute of technology. i ",
  buttons = {
    primary: {
      text: "view projects",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "contact me",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: HeroProps) => {
  return (
    <section className="mx-4 py-32 md:mx-16">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline" asChild>
                <a href="www.google.com">
                  {badge}
                  <ArrowUpRight className="ml-2 size-4" />
                </a>
              </Badge>
            )}
            <h1 className="font-playfair my-6 text-4xl font-bold text-pretty lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };

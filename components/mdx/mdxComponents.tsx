import { MDXComponents } from "mdx/types";
import Image from "next/image";

import { Outlink } from "@/components/shared";
import { pre, code } from "@/components/mdx";

const mdxComponents: MDXComponents = {
  Outlink,
  pre,
  code,

  h1: ({ children }) => (
    <h1 className="font-foreground my-4 text-2xl font-semibold first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="my-2 text-xl font-semibold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="my-2 text-lg font-medium">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-4">{children}</p>,
  img: ({ src, alt }) => (
    <div className="relative my-4 w-full">
      <Image
        src={src || ""}
        alt={alt || ""}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full rounded-lg"
      />
    </div>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-primary text-muted-foreground my-4 border-l-4 pl-4 italic">
      {children}
    </blockquote>
  ),
};

export { mdxComponents as MDXComponents };

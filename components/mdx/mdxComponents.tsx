import { MDXComponents } from "mdx/types";
import Image from "next/image";

import { Outlink } from "@/components/shared";

const mdxComponents: MDXComponents = {
  Outlink,

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
  pre: ({ children }) => {
    const child = children?.props;
    const language = child?.className?.replace("hljs language-", "") || "text";
    return (
      <div className="relative mb-4">
        <div className="bg-muted/50 text-muted-foreground absolute top-3 right-3 z-10 rounded-md px-2 py-1 text-xs font-medium backdrop-blur-sm">
          {language}
        </div>

        <pre className="bg-card overflow-x-auto rounded-lg p-4 pt-12 text-sm">
          {children}
        </pre>
      </div>
    );
  },
  code: ({ children }) => (
    <code className="bg-card rounded px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  ),

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

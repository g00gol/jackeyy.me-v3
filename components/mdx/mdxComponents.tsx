import { MDXComponents } from "mdx/types";
import Image from "next/image";

const mdxComponents: MDXComponents = {
  // custom layout components
  
  // Custom headings
  h1: ({ children }) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold first:mt-0">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-6 mb-3 text-2xl font-semibold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-4 mb-2 text-xl font-medium">{children}</h3>
  ),

  // Custom paragraphs
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,

  // Custom lists
  ul: ({ children }) => (
    <ul className="mb-4 list-inside list-disc space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-inside list-decimal space-y-1">{children}</ol>
  ),

  // Custom links
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),

  // Custom code blocks
  pre: ({ children }) => (
    <pre className="bg-muted mb-4 overflow-x-auto rounded-lg p-4 text-sm">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  ),

  // Custom images
  img: ({ src, alt }) => (
    <div className="relative my-6 w-full">
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

  // Custom blockquotes
  blockquote: ({ children }) => (
    <blockquote className="border-primary text-muted-foreground my-4 border-l-4 pl-4 italic">
      {children}
    </blockquote>
  ),
};

export { mdxComponents as MDXComponents };

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

import { MDXComponents } from "@/components/mdx/mdxComponents";

type MDXProps = {
  source: string;
};

const OPTIONS = {
  mdxOptions: {
    rehypePlugins: [rehypeHighlight],
  },
};

const mdx = ({ source }: MDXProps) => {
  return (
    <MDXRemote source={source} components={MDXComponents} options={OPTIONS} />
  );
};

export { mdx as MDX };

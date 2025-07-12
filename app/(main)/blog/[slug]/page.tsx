import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import type { Post } from "@/components/blog/types";
import { getPostBySlug } from "@/components/blog/utils";
import { MDXComponents } from "@/components/mdx/mdxComponents";
import {
  Grid,
  GridContainer,
  Column,
  ColumnBody,
  ColumnHeading,
} from "@/components/shared";
import { Button } from "@/components/ui/button";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const postResult = getPostBySlug(slug);

  if (postResult instanceof Error || !postResult) {
    notFound();
  }

  const post: Post = postResult;

  return (
    <>
      <GridContainer>
        <Grid>
          <Column span={1}>
            <div className="sticky top-24 space-y-4">
              <PostInfo post={post} />
            </div>
          </Column>
          <Column span={2}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote source={post.content} components={MDXComponents} />
            </div>
          </Column>
        </Grid>
      </GridContainer>
    </>
  );
}

function PostInfo({ post }: { post: Post }) {
  return (
    <>
      <ColumnHeading>{post.title}</ColumnHeading>
      <ColumnBody>{post.description}</ColumnBody>

      <ColumnHeading>Author</ColumnHeading>
      <ColumnBody>{post.author}</ColumnBody>

      <ColumnHeading>Published</ColumnHeading>
      <ColumnBody>
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </ColumnBody>

      <ColumnHeading>Reading Time</ColumnHeading>
      <ColumnBody>{post.readingTime}</ColumnBody>

      {post.tags && post.tags.length > 0 && (
        <>
          <ColumnHeading>Tags</ColumnHeading>
          <ColumnBody className="flex flex-wrap gap-2 !space-y-0">
            {post.tags.map((tag) => (
              <Button variant="outline" size="sm" key={tag}>
                {tag}
              </Button>
            ))}
          </ColumnBody>
        </>
      )}
    </>
  );
}

import { notFound } from "next/navigation";

import type { Post } from "@/components/blog/types";
import { getPostBySlug } from "@/components/blog/utils";
import { Grid, Column } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { MDX } from "@/components/mdx";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postResult = getPostBySlug(slug);

  if (postResult instanceof Error || !postResult) {
    notFound();
  }

  const post: Post = postResult;

  return (
    <Grid>
      <Grid.Content>
        <PostInfo post={post} />
        <Column span={2}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDX source={post.content} />
          </div>
        </Column>
      </Grid.Content>
    </Grid>
  );
}

function PostInfo({ post }: { post: Post }) {
  return (
    <Column span={1}>
      <div className="top-24 space-y-4 @md:sticky">
        <Column.Heading>{post.title}</Column.Heading>
        <Column.Body>{post.description}</Column.Body>

        <Column.Heading>Author</Column.Heading>
        <Column.Body>{post.author}</Column.Body>

        <Column.Heading>Published</Column.Heading>
        <Column.Body>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Column.Body>

        <Column.Heading>Reading Time</Column.Heading>
        <Column.Body>{post.readingTime}</Column.Body>

        {post.tags && post.tags.length > 0 && (
          <>
            <Column.Heading>Tags</Column.Heading>
            <Column.Body className="flex flex-wrap gap-2 !space-y-0">
              {post.tags.map((tag) => (
                <Button variant="outline" size="sm" key={tag}>
                  {tag}
                </Button>
              ))}
            </Column.Body>
          </>
        )}
      </div>
    </Column>
  );
}

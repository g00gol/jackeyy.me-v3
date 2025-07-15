import Link from "next/link";

import { getAllPosts } from "@/components/blog";
import { Column } from "@/components/shared";

type BlogListProps = {
  show?: number | "all";
};

export function BlogList({ show = "all" }: BlogListProps) {
  let posts = getAllPosts();
  if (show !== "all") {
    posts = posts.slice(0, show);
  }

  if (!posts || posts.length === 0) {
    return <p className="text-muted-foreground">No blog posts available.</p>;
  }

  return (
    <Column>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="truncate font-bold">{post.title}</h2>
            <p className="text-muted-foreground truncate">{post.description}</p>
            <p className="text-muted-foreground truncate">
              {new Date(post.date).toLocaleDateString()} - {post.readingTime}
            </p>
          </Link>
        </div>
      ))}
    </Column>
  );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import type { Post, BlogFrontmatter } from "./types";

const BLOG_PATH = path.join(process.cwd(), "content/blog");

/**
 * Fetches all blog posts from the content directory.
 * @returns {Post[]} An array of blog posts sorted by date in descending order.
 */
export function getAllPosts(): Post[] {
  const files = fs.readdirSync(BLOG_PATH);

  const posts: Post[] = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(BLOG_PATH, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as BlogFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        author: frontmatter.author,
        tags: frontmatter.tags,
        published: frontmatter.published,
        readingTime: readingTime(content).text,
        content,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Fetches a blog post by its slug.
 * @param slug
 * @returns {Post | Error} The blog post if found and published, or an error if not found or not published.
 */
export function getPostBySlug(slug: string): Post | Error {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const frontmatter = data as BlogFrontmatter;

    if (!frontmatter.published) {
      throw new Error(`Post with slug "${slug}" is not published.`);
    }

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      author: frontmatter.author,
      tags: frontmatter.tags,
      published: frontmatter.published,
      readingTime: readingTime(content).text,
      content,
    };
  } catch {
    throw new Error(`Post with slug "${slug}" not found.`);
  }
}

/**
 * Fetches all blog posts that match a specific tag.
 * @param tag
 * @returns {Post[]} An array of blog posts that contain the specified tag.
 */
export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase()),
  );
}

/**
 *  Fetches all unique tags from all blog posts.
 * @returns {string[]} An array of unique tags from all blog posts, sorted alphabetically.
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return [...new Set(tags)].sort();
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import type { Post, PostFrontmatter } from "./types";

const BLOG_PATH = path.join(process.cwd(), "content/blog");

/**
 * fetches all blog posts from the content directory
 * @returns {Post[]} an array of blog posts sorted by date in descending order
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
      const frontmatter = data as PostFrontmatter;

      return {
        slug,
        ...frontmatter,
        readingTime: readingTime(content).text,
        content,
      };
    })
    .filter((post) => post.published);

  // TODO: add sorting

  return posts;
}

/**
 * fetches a blog post by its slug
 * @param slug
 * @returns {Post | Error} trhe blog post if found and published, or an error if not found or not published
 */
export function getPostBySlug(slug: string): Post | Error {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const frontmatter = data as PostFrontmatter;

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
 * fetches all blog posts that match a specific tag
 * @param tag
 * @returns {Post[]} an array of blog posts that contain the specified tag
 */
export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * fetches all unique tags from all blog posts
 * @returns {string[]} an array of unique tags from all blog posts, sorted alphabetically
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return [...new Set(tags)].sort();
}

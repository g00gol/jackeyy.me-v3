import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Project, ProjectFrontmatter } from "./types";

const PROJECT_PATH = path.join(process.cwd(), "content/projects");

/**
 * fetches all projects from the content directory
 * @returns {Project[]} an array of projects sorted by date in descending order
 */
export function getAllProjects(): Project[] {
  const files = fs.readdirSync(PROJECT_PATH);
  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(PROJECT_PATH, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as ProjectFrontmatter;

      frontmatter.thumbnail =
        frontmatter.thumbnail === ""
          ? "/projects/placeholder.png"
          : frontmatter.thumbnail;

      return {
        slug,
        ...frontmatter,
        content,
      };
    })
    .filter((project) => project.published);

  // TODO: add sorting

  return projects;
}

/**
 * fetches a single project by slug
 * @param slug - the project slug
 * @returns {Project | null} the project if found, null otherwise
 */
export function getProjectBySlug(slug: string): Project | null {
  try {
    const filePath = path.join(PROJECT_PATH, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const frontmatter = data as ProjectFrontmatter;

    frontmatter.thumbnail =
      frontmatter.thumbnail === ""
        ? "/projects/placeholder.png"
        : frontmatter.thumbnail;

    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    return null;
  }
}

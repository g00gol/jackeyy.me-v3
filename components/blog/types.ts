export type Post = {
  slug: string;
  content: string;
  readingTime: string;
} & PostFrontmatter;

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  published: boolean;
  image?: string;
};

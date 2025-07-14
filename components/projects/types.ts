export type ProjectFrontmatter = {
  title: string;
  tagline: string;
  description: string;
  duration: string;
  tech: string[];
  urls: {
    [key: string]: string;
  };
  thumbnail: string;
  published: boolean;
};

export type Project = {
  slug: string;
  content: string;
} & ProjectFrontmatter;

export { default as edhtop16 } from "./edhtop16.png";
export { default as shima } from "./shima.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  date: string;
  tech: string[];
  urls: {
    label: string;
    url: string;
  }[];
};

export const projectNames = ["edhtop16", "shima"] as const;

import type socialIcons from "@assets/socialIcons";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives?: boolean;
  editPost?: {
    url?: URL["href"];
    text?: string;
    appendFilePath?: boolean;
  };
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export interface Tag {
  name: string;
  icon: AstroComponentFactory;
}

export interface Project {
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
  repo: string;
  tags: Tag[];
}
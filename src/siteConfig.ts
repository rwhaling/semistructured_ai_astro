import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "semistructured.ai",
  description:
    "AI safety, controls, governance, and process",
  href: "https://www.semistructured.ai",
  author: "semistructured.ai",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  about: {
    path: "/about",
    label: "About",
  },
  // projects: {
  //   path: "/projects",
  //   label: "Projects",
  // },
};

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/richard-whaling-a2868010b/",
  },
  bluesky: {
    label: "Bluesky",
    href: "https://bsky.app/profile/r.whal.ing",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/rwhaling",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/r__whaling",
  },
};

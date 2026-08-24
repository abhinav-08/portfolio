/**
 * Site-wide identity, links and feature switches.
 * Change SITE_URL before deploying — it drives canonical, OG and sitemap URLs.
 */

export const SITE_URL = "https://abhinavtyagi.dev";

export const identity = {
  name: "Abhinav Tyagi",
  role: "Backend & Search Engineer",
  location: "Gurugram, India",
  coords: "28.4595° N, 77.0266° E",
  email: "abhinav.tyagi9816@gmail.com",
  phone: "+91 96343 54919",
  phoneHref: "+919634354919",
  instagram: "https://www.instagram.com/abhiinav.exe/",
  instagramHandle: "@abhiinav.exe",
  github: "https://github.com/abhinavtyagi08",
  linkedin: "https://www.linkedin.com/in/abhinavtyagi08",
  medium: "https://abhinavtyagi08.medium.com/",
  youtube: "https://www.youtube.com/@abhinavtyagi122",
  resume: "/assets/abhinav_tyagi_cv.pdf",
  resumeFilename: "Abhinav_Tyagi_CV.pdf",
} as const;

/** Visual switches from the design handoff's Configuration table. */
export const config = {
  backgroundMotion: true,
  filmGrain: true,
  openToWork: true,
  /**
   * Cards flagged `placeholder: true` in lib/content.ts are hidden while this
   * is false, and a section whose entries are ALL placeholders disappears
   * entirely. Flip to true only to preview the layout with dummy content —
   * never for a real deploy.
   */
  showPlaceholders: false,
} as const;

export const nav = [
  { label: "Search", href: "#search" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Lab", href: "#lab" },
  { label: "Writing", href: "#writing" },
  { label: "Hello", href: "#hello" },
] as const;

/**
 * Feeds both the hero social row and the footer link cluster.
 * The résumé is deliberately NOT listed here — it has its own CTA button in
 * the hero, and repeating it in both text rows was redundant.
 */
export const socials = [
  { label: "Instagram ↗", href: identity.instagram, accent: true, external: true },
  { label: "GitHub ↗", href: identity.github, accent: false, external: true },
  { label: "LinkedIn ↗", href: identity.linkedin, accent: false, external: true },
  { label: "Medium ↗", href: identity.medium, accent: false, external: true },
  { label: "YouTube ↗", href: identity.youtube, accent: false, external: true },
] as const;

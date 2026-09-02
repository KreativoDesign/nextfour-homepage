import { services, type Service } from "./nextfour-data";

export type FeaturedContentItem = {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  service: Service;
};

export const featuredContent: FeaturedContentItem[] = [
  {
    eyebrow: "Web Design & Development",
    title: "Make the first impression count.",
    description:
      "Custom digital experiences that feel effortless and convert with clarity.",
    action: "Explore web design",
    service: services[0],
  },
  {
    eyebrow: "Digital Marketing",
    title: "Turn attention into momentum.",
    description:
      "Data-informed campaigns designed to move audiences from attention to action.",
    action: "Explore marketing",
    service: services[2],
  },
  {
    eyebrow: "CRM Management Systems",
    title: "Keep every opportunity moving.",
    description:
      "Systems that track every prospect from first click to closed deal.",
    action: "Explore CRM systems",
    service: services[5],
  },
];

/**
 * NextFour design reminder: Precision Luminous Interface — dedicated service colors,
 * replaceable artwork URLs, and concise, outcome-led language drive the carousel.
 */
import type { LucideIcon } from "lucide-react";
import { Database, Megaphone, MonitorCog, Network, PenTool, Rocket } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  color: string;
  glow: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  route: string;
};

export const services: Service[] = [
  {
    title: "Web Design & Development",
    description: "Custom digital experiences that feel effortless and convert with clarity.",
    color: "#B8FF00",
    glow: "rgba(184, 255, 0, 0.3)",
    image: "/manus-storage/service-web-design_cf1ffdbd.webp",
    imageAlt: "Abstract electric-green laptop visualisation for web design and development",
    icon: MonitorCog,
    route: "/services/web-design",
  },
  {
    title: "Branding & Graphic Design",
    description: "Distinctive identity systems that make a lasting, recognisable impression.",
    color: "#C56CFF",
    glow: "rgba(197, 108, 255, 0.3)",
    image: "/manus-storage/service-branding_ec407a1e.webp",
    imageAlt: "Abstract ultraviolet creative brand-kit visualisation",
    icon: PenTool,
    route: "/services/branding",
  },
  {
    title: "Digital Marketing",
    description: "Data-informed campaigns designed to move audiences from attention to action.",
    color: "#20B8FF",
    glow: "rgba(32, 184, 255, 0.3)",
    image: "/manus-storage/service-marketing_3fca3444.webp",
    imageAlt: "Abstract cobalt-blue marketing megaphone visualisation",
    icon: Megaphone,
    route: "/services/marketing",
  },
  {
    title: "Business Technology",
    description: "Connected systems and automation that turn operational complexity into momentum.",
    color: "#FF8A24",
    glow: "rgba(255, 138, 36, 0.3)",
    image: "/manus-storage/service-business-technology_9d8340ee.webp",
    imageAlt: "Abstract warm-orange business technology infrastructure visualisation",
    icon: Network,
    route: "/services/business-technology",
  },
  {
    title: "Startup Support",
    description: "The strategic, creative, and technical foundations ambitious launches need.",
    color: "#F551B7",
    glow: "rgba(245, 81, 183, 0.32)",
    image: "/manus-storage/service-startup_ea8cca0e.webp",
    imageAlt: "Abstract neon-pink startup launch visualisation",
    icon: Rocket,
    route: "/services/startup-support",
  },
  {
    title: "CRM Management Systems",
    description: "Stop losing leads between the cracks. We implement and configure the systems that track every prospect from first click to closed deal.",
    color: "#20B8FF",
    glow: "rgba(32, 184, 255, 0.3)",
    image: "/manus-storage/service-crm_86218668.webp",
    imageAlt: "Abstract teal-cyan CRM dashboard and data pipeline visualisation",
    icon: Database,
    route: "/services/crm-management",
  },
];

export const navItems = ["Home", "About Us", "Services", "Our Work", "Blog", "Contact"];

export interface ServicePageQuickLink {
  label: string;
  href: `#${string}`;
}

export const servicePageQuickLinks = {
  webDesign: [
    { label: "How we work", href: "#service-overview" },
    { label: "Recent projects", href: "#recent-projects" },
    { label: "Design expertise", href: "#web-design-showcase" },
  ],
  marketing: [
    { label: "How we work", href: "#service-overview" },
    { label: "Marketing work", href: "#marketing-showcase" },
    { label: "View packages", href: "#marketing-packages" },
  ],
  branding: [
    { label: "How we work", href: "#service-overview" },
    { label: "Start your project", href: "#service-contact" },
  ],
  business: [
    { label: "How we work", href: "#service-overview" },
    { label: "Discuss your systems", href: "#service-contact" },
  ],
  startup: [
    { label: "How we help", href: "#service-overview" },
    { label: "Plan your launch", href: "#service-contact" },
  ],
  crm: [
    { label: "Explore supported platforms", href: "#crm-platforms" },
    { label: "See Trinity CRM details", href: "#trinity-crm-details" },
    { label: "Discuss your CRM", href: "#service-contact" },
  ],
} as const satisfies Record<string, ReadonlyArray<ServicePageQuickLink>>;

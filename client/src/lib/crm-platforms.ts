export interface CrmPlatform {
  name: string;
  description: string;
  tooltip: string;
  src: string;
  alt: string;
}

export const crmPlatforms: CrmPlatform[] = [
  {
    name: "Salesforce",
    description: "Sales cloud configuration, reporting, and workflow automation.",
    tooltip: "We configure sales pipelines, lead routing, dashboards, and reporting workflows.",
    src: "/manus-storage/salesforce_ad175361.jpg",
    alt: "Salesforce logo",
  },
  {
    name: "HubSpot",
    description: "Connected marketing, sales, service, and automation systems.",
    tooltip: "We connect marketing, sales, service, and lifecycle automation in one customer platform.",
    src: "/manus-storage/hubspot_c2f01a43.svg",
    alt: "HubSpot logo",
  },
  {
    name: "Pipedrive",
    description: "Pipeline setup, deal stages, activities, and team visibility.",
    tooltip: "We structure deal stages, activities, automations, and team visibility around your sales process.",
    src: "/manus-storage/pipedrive_f71a9bd5.png",
    alt: "Pipedrive logo",
  },
];

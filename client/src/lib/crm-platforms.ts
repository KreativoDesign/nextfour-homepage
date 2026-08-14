export interface CrmPlatform {
  name: string;
  description: string;
  src: string;
  alt: string;
}

export const crmPlatforms: CrmPlatform[] = [
  {
    name: "Salesforce",
    description: "Sales cloud configuration, reporting, and workflow automation.",
    src: "/manus-storage/salesforce_ad175361.jpg",
    alt: "Salesforce logo",
  },
  {
    name: "HubSpot",
    description: "Connected marketing, sales, service, and automation systems.",
    src: "/manus-storage/hubspot_c2f01a43.svg",
    alt: "HubSpot logo",
  },
  {
    name: "Pipedrive",
    description: "Pipeline setup, deal stages, activities, and team visibility.",
    src: "/manus-storage/pipedrive_f71a9bd5.png",
    alt: "Pipedrive logo",
  },
];

export interface TrinityFeatureGroup {
  title: string;
  description: string;
  items: string[];
}

export const trinityFeatureGroups: TrinityFeatureGroup[] = [
  {
    title: "Core features",
    description:
      "A structured customer record that keeps the details your team needs together and easy to find.",
    items: [
      "Central customer database (contacts, billing & delivery details)",
      "Multiple contacts per customer (decision maker, site, billing)",
      "Customer tagging and categorisation",
      "Customer logo support for branded documents",
      "VAT / registration fields for compliance",
    ],
  },
  {
    title: "Customer intelligence",
    description:
      "Turn customer information into clearer prioritisation, value tracking, and account decisions.",
    items: [
      "Customer segmentation and ranking (BCG-style)",
      "Revenue / value tracking per customer",
      "Flag low-value / high-effort customers",
    ],
  },
];

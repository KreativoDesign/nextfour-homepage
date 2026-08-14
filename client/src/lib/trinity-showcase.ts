export interface TrinityScreenshot {
  src: string;
  alt: string;
  title: string;
  description: string;
  featured: boolean;
}

export interface TrinityDetail {
  value: "onboarding" | "integrations" | "support";
  title: string;
  content: string;
  points: string[];
  steps?: Array<{
    title: string;
    description: string;
  }>;
}

export const trinityScreenshots: TrinityScreenshot[] = [
  {
    src: "/manus-storage/trinity-dashboard-company_43ce5646.png",
    alt: "Trinity company dashboard showing revenue and payment reporting",
    title: "Company dashboard",
    description: "A single view of revenue, payments, and pipeline health.",
    featured: true,
  },
  {
    src: "/manus-storage/trinity-dashboard-pipeline_59bd78e2.png",
    alt: "Trinity pipeline board showing deals moving through sales stages",
    title: "Pipeline management",
    description: "Track deals from new lead through to completion.",
    featured: false,
  },
  {
    src: "/manus-storage/trinity-dashboard-overview_12d73664.png",
    alt: "Trinity dashboard overview with pipeline intelligence and open deals",
    title: "Pipeline intelligence",
    description: "See weighted value, open deals, and win-rate signals together.",
    featured: false,
  },
  {
    src: "/manus-storage/trinity-login-screen_abe5669d.png",
    alt: "Trinity login screen and product overview showing the all-in-one platform",
    title: "One platform",
    description: "A focused workspace for customer and operational management.",
    featured: false,
  },
];

export const trinityDetails: TrinityDetail[] = [
  {
    value: "onboarding",
    title: "Onboarding",
    content:
      "We start with a working session to map your customer records, sales stages, contacts, and reporting priorities. Trinity is then configured around those workflows before your team is guided through the day-to-day experience.",
    points: [
      "Workflow and data-mapping discovery",
      "Workspace configuration and role setup",
      "Guided team handover and adoption support",
    ],
    steps: [
      {
        title: "Discover",
        description: "Map your customer records, sales stages, contacts, and reporting priorities.",
      },
      {
        title: "Configure",
        description: "Shape the workspace, roles, fields, and workflows around how your team operates.",
      },
      {
        title: "Launch",
        description: "Guide your team through Trinity with practical handover and adoption support.",
      },
      {
        title: "Optimise",
        description: "Review usage, reporting, and refinements as your business grows.",
      },
    ],
  },
  {
    value: "integrations",
    title: "Integrations",
    content:
      "Trinity can sit alongside the operational tools your business already uses. We identify the hand-offs that matter—lead capture, customer records, job delivery, invoicing, and reporting—and plan the right connection or import path for each.",
    points: [
      "Existing-tool and data-flow review",
      "Import and migration planning",
      "Practical integration recommendations for your workflow",
    ],
  },
  {
    value: "support",
    title: "Support",
    content:
      "After launch, we can support user questions, process refinements, reporting changes, and ongoing optimisation as your team grows. The goal is a CRM that stays useful as the business evolves.",
    points: [
      "Post-launch guidance and troubleshooting",
      "Workflow and reporting refinements",
      "Ongoing optimisation as your team scales",
    ],
  },
];

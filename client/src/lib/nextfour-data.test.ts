import { describe, expect, it } from "vitest";
import {
  ChartNoAxesCombined,
  Database,
  Gem,
  PanelsTopLeft,
  Rocket,
  Workflow,
} from "lucide-react";
import { services } from "./nextfour-data";

describe("service icon system", () => {
  it("maps each service to a distinct premium symbol", () => {
    expect(services.map(service => service.icon)).toEqual([
      PanelsTopLeft,
      Gem,
      ChartNoAxesCombined,
      Workflow,
      Rocket,
      Database,
    ]);
  });

  it("keeps the service order aligned with the icon mapping", () => {
    expect(services.map(service => service.title)).toEqual([
      "Web Design & Development",
      "Branding & Graphic Design",
      "Digital Marketing",
      "Business Technology",
      "Startup Support",
      "CRM Management Systems",
    ]);
  });
});

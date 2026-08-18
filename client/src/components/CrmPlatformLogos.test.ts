import { describe, expect, it } from "vitest";
import { crmPlatforms } from "@/lib/crm-platforms";

describe("crmPlatforms", () => {
  it("includes the requested CRM systems with managed logo assets", () => {
    expect(crmPlatforms.map((platform) => platform.name)).toEqual([
      "Salesforce",
      "HubSpot",
      "Pipedrive",
    ]);

    for (const platform of crmPlatforms) {
      expect(platform.src).toMatch(/^\/manus-storage\/.+\.(svg|png|jpe?g)$/);
      expect(platform.alt).toBe(`${platform.name} logo`);
      expect(platform.description.length).toBeGreaterThan(20);
      expect(platform.tooltip.length).toBeGreaterThan(40);
    }
  });
});

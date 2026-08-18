import { describe, expect, it } from "vitest";
import { servicePageQuickLinks } from "./service-page-navigation";

describe("service page quick navigation", () => {
  it("defines accessible local anchors for all six service routes", () => {
    expect(Object.keys(servicePageQuickLinks)).toHaveLength(6);

    for (const links of Object.values(servicePageQuickLinks)) {
      expect(links.length).toBeGreaterThanOrEqual(2);
      expect(new Set(links.map((link) => link.href)).size).toBe(links.length);
      expect(links.every((link) => link.label.trim().length > 0)).toBe(true);
      expect(links.every((link) => link.href.startsWith("#"))).toBe(true);
    }
  });
});

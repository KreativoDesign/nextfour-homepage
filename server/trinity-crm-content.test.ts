import { describe, expect, it } from "vitest";
import { trinityFeatureGroups } from "../client/src/lib/trinity";

describe("Trinity CRM content", () => {
  it("contains the core feature and customer intelligence groups", () => {
    expect(trinityFeatureGroups.map((group) => group.title)).toEqual([
      "Core features",
      "Customer intelligence",
    ]);
  });

  it("preserves every Trinity CRM capability from the source content", () => {
    const items = trinityFeatureGroups.flatMap((group) => group.items);

    expect(items).toEqual([
      "Central customer database (contacts, billing & delivery details)",
      "Multiple contacts per customer (decision maker, site, billing)",
      "Customer tagging and categorisation",
      "Customer logo support for branded documents",
      "VAT / registration fields for compliance",
      "Customer segmentation and ranking (BCG-style)",
      "Revenue / value tracking per customer",
      "Flag low-value / high-effort customers",
    ]);
  });
});

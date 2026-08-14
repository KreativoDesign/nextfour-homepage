import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const pricingComponent = readFileSync(
  path.resolve(process.cwd(), "client/src/components/DigitalMarketingPricingTiers.tsx"),
  "utf8",
);

describe("Digital Marketing tier inclusion matrix", () => {
  it("keeps all four package tiers represented", () => {
    expect(pricingComponent).toContain('name: "FOUNDATION"');
    expect(pricingComponent).toContain('name: "MOMENTUM"');
    expect(pricingComponent).toContain('name: "ACCELERATE"');
    expect(pricingComponent).toContain('name: "GROWTH PARTNER"');
  });

  it("includes the reference package values for each tier matching the uploaded matrix", () => {
    const referenceValues = [
      'Monthly Social Posts", value: "8"',
      'Monthly Social Posts", value: "12"',
      'Monthly Social Posts", value: "16"',
      'Monthly Social Posts", value: "20+"',
      'SEO (Search Engine Optimisation)", value: "Basic"',
      'SEO (Search Engine Optimisation)", value: "Local SEO"',
      'SEO (Search Engine Optimisation)", value: "Advanced"',
      'SEO (Search Engine Optimisation)", value: "Enterprise"',
    ];

    for (const value of referenceValues) {
      expect(pricingComponent).toContain(value);
    }
  });

  it("accurately represents optional, checkmark, and dash offerings per tier as displayed in the comparison table", () => {
    expect(pricingComponent).toContain('label: "Meta Ads Management", value: "Optional"');
    expect(pricingComponent).toContain('label: "Google Ads Management", value: "Optional"');
    expect(pricingComponent).toContain('label: "CRM Integration", value: "Optional"');
    expect(pricingComponent).toContain('label: "Marketing Automation", value: "Optional"');
  });
});

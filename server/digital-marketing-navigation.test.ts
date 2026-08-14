import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const pricingComponent = readFileSync(
  path.resolve(process.cwd(), "client/src/components/DigitalMarketingPricingTiers.tsx"),
  "utf8",
);
const globalStyles = readFileSync(path.resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Digital Marketing package navigation refinements", () => {
  it("provides mobile-only anchors for features and pricing", () => {
    expect(pricingComponent).toContain('aria-label="Package section navigation"');
    expect(pricingComponent).toContain('href="#package-features"');
    expect(pricingComponent).toContain('href="#package-pricing"');
    expect(pricingComponent).toContain("md:hidden");
    expect(pricingComponent).toContain('id="package-features"');
    expect(pricingComponent).toContain('id="package-pricing"');
  });

  it("adds the accent glow class to every key-benefit icon", () => {
    expect(pricingComponent.match(/key-benefit-icon/g)?.length).toBe(4);
    expect(globalStyles).toContain(".key-benefit-icon:hover");
    expect(globalStyles).toContain("drop-shadow(0 0 8px currentColor)");
  });
});

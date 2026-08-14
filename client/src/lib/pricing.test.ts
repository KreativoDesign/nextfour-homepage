import { describe, expect, it } from "vitest";
import { getPricingLabel, shouldShowSetupFee } from "./pricing";

describe("pricing display helpers", () => {
  it("uses FROM by default and supports the Growth Partner CUSTOMIZE label", () => {
    expect(getPricingLabel()).toBe("FROM");
    expect(getPricingLabel("CUSTOMIZE")).toBe("CUSTOMIZE");
  });

  it("shows setup fees only when a tier provides one", () => {
    expect(shouldShowSetupFee("R2,500")).toBe(true);
    expect(shouldShowSetupFee(undefined)).toBe(false);
    expect(shouldShowSetupFee("")).toBe(false);
  });
});

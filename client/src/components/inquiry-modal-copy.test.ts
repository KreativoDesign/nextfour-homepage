import { describe, expect, it } from "vitest";
import {
  DEFAULT_INQUIRY_DESCRIPTION,
  DEFAULT_INQUIRY_MESSAGE_LABEL,
  DEFAULT_INQUIRY_MESSAGE_PLACEHOLDER,
  getInquiryModalCopy,
} from "./inquiry-modal-copy";

describe("getInquiryModalCopy", () => {
  it("preserves the existing defaults when no overrides are provided", () => {
    expect(getInquiryModalCopy({})).toEqual({
      description: DEFAULT_INQUIRY_DESCRIPTION,
      messageLabel: DEFAULT_INQUIRY_MESSAGE_LABEL,
      messagePlaceholder: DEFAULT_INQUIRY_MESSAGE_PLACEHOLDER,
    });
  });

  it("returns CRM-specific demo copy when overrides are provided", () => {
    expect(
      getInquiryModalCopy({
        description:
          "Tell us about your team and what you want to improve with Trinity CRM.",
        messageLabel: "What would you like to see in the demo? *",
        messagePlaceholder:
          "Share your team's workflow, integrations, or reporting goals...",
      })
    ).toEqual({
      description:
        "Tell us about your team and what you want to improve with Trinity CRM.",
      messageLabel: "What would you like to see in the demo? *",
      messagePlaceholder:
        "Share your team's workflow, integrations, or reporting goals...",
    });
  });
});

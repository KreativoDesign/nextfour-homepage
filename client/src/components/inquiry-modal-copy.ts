export const DEFAULT_INQUIRY_DESCRIPTION =
  "Tell us more about your needs and we'll get back to you shortly.";

export const DEFAULT_INQUIRY_MESSAGE_LABEL = "Tell us about your needs *";

export const DEFAULT_INQUIRY_MESSAGE_PLACEHOLDER =
  "Describe your marketing goals and any specific requirements...";

export interface InquiryModalCopyInput {
  description?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
}

export function getInquiryModalCopy({
  description,
  messageLabel,
  messagePlaceholder,
}: InquiryModalCopyInput) {
  return {
    description: description ?? DEFAULT_INQUIRY_DESCRIPTION,
    messageLabel: messageLabel ?? DEFAULT_INQUIRY_MESSAGE_LABEL,
    messagePlaceholder:
      messagePlaceholder ?? DEFAULT_INQUIRY_MESSAGE_PLACEHOLDER,
  };
}

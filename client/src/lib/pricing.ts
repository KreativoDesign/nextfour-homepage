export function getPricingLabel(priceLabel?: string) {
  return priceLabel ?? "FROM";
}

export function shouldShowSetupFee(setupFee?: string) {
  return Boolean(setupFee);
}

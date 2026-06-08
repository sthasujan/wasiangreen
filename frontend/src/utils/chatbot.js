export function getChatbotResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("where") || text.includes("location") || text.includes("harvey")) {
    return "WAsian Green Pty Ltd is based in Harvey, Australia.";
  }
  if (text.includes("wholesale") || text.includes("grocery") || text.includes("restaurant") || text.includes("market")) {
    return "Grocery stores, restaurants, weekend market retailers, wholesalers, and fruit or food buyers can use the Contact page to enquire.";
  }
  if (text.includes("register") || text.includes("interest") || text.includes("contact")) {
    return "You can register interest on the Contact page by adding your name, email, customer type, and message.";
  }
  if (text.includes("product") || text.includes("grow") || text.includes("pomelo")) {
    return "Pomelo is the confirmed product focus for this website prototype.";
  }
  return "Thanks for your question. I can help with pomelo, farm location, future customer enquiries, and Facebook updates.";
}

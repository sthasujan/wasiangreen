import { FACEBOOK_URL, FAQS, MORE_NAV_ITEMS, NAV_ITEMS, POMELO, SAMPLE_ENQUIRIES, SAMPLE_QUESTIONS } from "../data/siteData";

export function runPrototypeTests() {
  return [
    { name: "Only Pomelo is used as the product focus", pass: POMELO.name === "Pomelo" },
    { name: "Navbar remains simple", pass: NAV_ITEMS.length === 5 && MORE_NAV_ITEMS.some((item) => item.id === "admin") },
    { name: "Admin has sample enquiries and questions", pass: SAMPLE_ENQUIRIES.length > 0 && SAMPLE_QUESTIONS.length > 0 },
    { name: "Facebook link is configured", pass: FACEBOOK_URL.includes("facebook.com") },
    { name: "FAQ content is available", pass: FAQS.length >= 4 },
  ];
}

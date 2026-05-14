export const FACEBOOK_URL = "https://www.facebook.com/vttruyen64?mibextid=wwXIfr&mibextid=wwXIfr";

export const POMELO = {
  name: "Pomelo",
  heroImage: "/images/1000129907.jpg",
  fruitImage: "/images/1000129979.jpg",
  groveImage: "/images/1000129987.jpg",
  storyImage: "/images/1000130004.jpg",
  summary: "A fresh pomelo harvest story from Harvey, Australia — shaped by patient growing, farm care, and future supply conversations.",
  care: "The farm story begins with the land: soil preparation, tree care, water management, seasonal observation, and careful harvest planning.",
  availability: "Pomelo availability depends on harvest timing and farm readiness. Visitors can contact the farm to register future interest or ask questions.",
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "pomelo", label: "Pomelo" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const MORE_NAV_ITEMS = [
  { id: "customers", label: "Future Customers" },
  { id: "faqs", label: "FAQs" },
  { id: "admin", label: "Admin" },
];

export const CUSTOMER_SEGMENTS = [
  { title: "Grocery Stores", text: "A clear farm story and attractive pomelo imagery can help fresh produce displays feel more distinctive and trustworthy." },
  { title: "Restaurants", text: "Chefs and restaurant owners can enquire about future pomelo use for drinks, desserts, salads, and seasonal menu ideas." },
  { title: "Weekend Markets", text: "Market retailers can share the fruit’s local farm story with customers who value fresh, traceable produce." },
  { title: "Wholesalers", text: "Fruit buyers and wholesalers can register early interest for future supply discussions when the farm is ready." },
];

export const STORY_TIMELINE = [
  { year: "01", title: "The Land", text: "The story begins in Harvey, where the farm’s identity is shaped by place, climate, and agricultural care." },
  { year: "02", title: "The Grove", text: "Pomelo trees are monitored through the season with attention to growth, water, soil, and fruit development." },
  { year: "03", title: "The Harvest", text: "Harvest preparation focuses on readiness, visual quality, handling, and telling the story behind each fruit." },
  { year: "04", title: "The Connection", text: "The website helps future customers ask questions, follow updates, and connect directly with the farm." },
];

export const STORY_CHAPTERS = [
  { id: "beginning", label: "Chapter 01", title: "From Vietnam to a new farming journey", text: "WAsian Green’s story begins with a grower who brought memories of Vietnamese farming, family food traditions, and fresh tropical fruit into a new life in Australia.", image: "/images/story-01.jpg" },
  { id: "harvey", label: "Chapter 02", title: "Finding possibility in Harvey", text: "Harvey offers the space, climate, and farming environment to begin building something long-term around pomelo.", image: "/images/story-02.jpg" },
  { id: "pomelo", label: "Chapter 03", title: "Choosing pomelo as the first story", text: "Pomelo connects strongly with Asian food culture and family memories while giving Australian customers something fresh to discover.", image: "/images/story-03.jpg" },
  { id: "care", label: "Chapter 04", title: "Growing slowly, observing carefully", text: "The trees require everyday attention: checking leaves, branches, water, shade, fruit size, and fruit condition.", image: "/images/story-04.jpg" },
  { id: "harvest", label: "Chapter 05", title: "A harvest worth sharing", text: "Fruit on the tree, weight checks, and the first cut reveal the care that happened long before harvest day.", image: "/images/story-05.jpg" },
  { id: "future", label: "Chapter 06", title: "Building trust before selling", text: "The website gives buyers a way to learn about the farm and start a conversation about future supply.", image: "/images/story-06.jpg" },
];

export const STORY_GALLERY_IMAGES = Array.from({ length: 19 }, (_, index) => ({
  src: `/images/story-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `WAsian Green farm story image ${index + 1}`,
}));

export const HARVEST_CARDS = [
  { title: "In the Grove", eyebrow: "Tree care", image: POMELO.groveImage, text: "Pomelo trees are cared for through seasonal observation, water, and farm management." },
  { title: "Fruit on the Branch", eyebrow: "Growing stage", image: POMELO.fruitImage, text: "The fruit develops slowly, carrying the story of patience and careful preparation." },
  { title: "Preparing the Harvest", eyebrow: "Farm journey", image: POMELO.storyImage, text: "Photos and videos help visitors understand the process behind the product." },
];

export const SCROLL_STORY_STEPS = [
  { number: "01", eyebrow: "The land", title: "Every harvest starts with preparation.", text: "Before the pomelo reaches the table, the story begins with soil, water, shade, sunlight, and the rhythm of daily farm care.", image: POMELO.heroImage },
  { number: "02", eyebrow: "The grove", title: "The fruit grows slowly on the tree.", text: "Pomelo is given time to develop naturally. Visitors can follow the journey from tree care to harvest readiness.", image: POMELO.groveImage },
  { number: "03", eyebrow: "The harvest", title: "Each pomelo carries the story of care.", text: "The website presents the harvest as a visual story, helping customers understand where the fruit comes from and why the process matters.", image: POMELO.fruitImage },
];

export const FAQS = [
  { q: "What product is featured on this website?", a: "Pomelo is the confirmed product focus for this prototype." },
  { q: "Where is WAsian Green located?", a: "WAsian Green Pty Ltd is based in Harvey, Australia." },
  { q: "Can businesses enquire about future supply?", a: "Yes. Grocery stores, restaurants, weekend market retailers, wholesalers, and food buyers can use the contact form." },
  { q: "How can visitors follow updates?", a: "Visitors can follow the farm journey through the Facebook link on the website." },
];

export const FEATURED_GALLERY_IMAGES = [
  { src: "/images/gallery-01.jpg", fallback: POMELO.groveImage, label: "The Grove", title: "Pomelos growing under the leaves", text: "A close look at the fruit as it develops on the tree." },
  { src: "/images/gallery-02.jpg", fallback: POMELO.fruitImage, label: "The Fruit", title: "Fresh pomelo texture and size", text: "Large green pomelos showing the natural texture of the skin." },
  { src: "/images/gallery-03.jpg", fallback: POMELO.storyImage, label: "The Check", title: "Harvest preparation and weight check", text: "Simple farm checks help tell the story behind the fruit." },
  { src: "/images/gallery-04.jpg", fallback: POMELO.fruitImage, label: "Inside the Fruit", title: "Pomelo ready to share", text: "Fresh segments reveal the colour, texture, and eating experience." },
  { src: "/images/gallery-05.jpg", fallback: POMELO.heroImage, label: "The Land", title: "Where the journey begins", text: "The farm environment provides the foundation for the harvest story." },
];

export const FEATURED_GALLERY_VIDEOS = [
  { src: "/videos/video-01.mp4", label: "Farm Walkthrough", title: "A look around the growing area" },
  { src: "/videos/video-02.mp4", label: "Pomelo Tree", title: "Fruit developing on the tree" },
  { src: "/videos/video-03.mp4", label: "Harvest Update", title: "Behind the scenes from the farm" },
];

export const FARM_FEATURES = [
  { kicker: "Farm Care", title: "Growing with patience & purpose", image: "/images/gallery-01.jpg", fallback: POMELO.groveImage },
  { kicker: "Pomelo Journey", title: "From tree care to harvest", image: "/images/gallery-02.jpg", fallback: POMELO.fruitImage },
  { kicker: "Future Supply", title: "Connecting farm story & buyers", image: "/images/gallery-05.jpg", fallback: POMELO.heroImage },
];

export const SAMPLE_ENQUIRIES = [
  { id: 1, name: "Maria Chen", email: "maria@grocerystore.com", phone: "0400 111 222", customerType: "Grocery store", interestType: "Future pomelo supply", message: "We are interested in future pomelo availability for our fresh produce section.", date: "14 May 2026", status: "New" },
  { id: 2, name: "Daniel Nguyen", email: "daniel@restaurant.com", phone: "0400 333 444", customerType: "Restaurant", interestType: "Restaurant supply enquiry", message: "Please let us know when pomelo may become available for restaurant use.", date: "13 May 2026", status: "Reviewed" },
];

export const SAMPLE_QUESTIONS = [
  { id: 1, name: "Liam Brown", email: "liam@example.com", question: "Can weekend market retailers enquire about pomelo?", date: "14 May 2026", status: "New" },
  { id: 2, name: "Sofia Tran", email: "sofia@example.com", question: "Can I see more farm photos?", date: "13 May 2026", status: "Answered" },
];

export const CHATBOT_SUGGESTIONS = [
  "Where is the farm located?",
  "Can I register interest?",
  "What product do you grow?",
  "Can wholesalers enquire?",
];

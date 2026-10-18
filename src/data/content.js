// Verbatim copy from docs/source-audit/03-content.json unless noted.

export const homeIntro =
  "Podpadi Ubud is a hidden gem located in a serene and tranquil setting, offering breathtaking views of the majestic Mount Agung and the vibrant green rice fields.";

export const homeIntroMore =
  "Surrounded by nature, this peaceful retreat provides the perfect escape from the hustle and bustle of daily life.";

export const host = {
  heading: "Hello!",
  body: [
    "I’m Made, your host and the manager of Podpadi. Our goal is simple yet profound: to assure that our guests have a delightful and unforgettable experience while staying with us.",
    "We understand that a great stay is about more than just comfortable accommodations; it’s about creating lasting memories. We take great pride in our hospitality whether it's providing personalized recommendations or attending to your needs, we are here to make your visit unforgettable.",
  ],
};

// The stray closing quotation mark at the end of the original (08 B11) is removed.
export const story = {
  heading: "Our Story",
  body: [
    "We're a group of hospitality innovators with expertise in property management, architecture, and design. We've been leading the charge in creating the vision for PodPadi, and we're excited to bring it to life for you.",
    "Our dedicated team are here to ensure that you have the best possible experience, both in person and virtually. We are eagerly anticipating your arrival and committed to delivering exceptional customer service throughout your stay.",
  ],
};

export const contactIntro =
  "Step into a charming property situated in the tranquil and picturesque village of Katik Lantang, just a short 10-minute ride from Central Ubud. Surrounded by the breathtaking rice fields that Ubud is known for. Podpadi provides the ideal blend of comfort and seclusion for you and your loved ones.";

// Services page (/about on the original) — five tiles plus its meta description.
export const services = {
  note:
    "We offer a range of additional services to enhance your stay, including daily housekeeping, laundry, airport transfers, and tour guide services, all available for an additional fee.",
  items: ["Breakfast", "Daily housekeeping", "Pool & lounge", "Free WiFi, 250 Mbps", "Airport transfer"],
};

// See & Do page — five tiles plus its meta description.
export const seeDo = {
  note:
    "Only 2.5 km from Ubud Center for shopping, hiking at Campuhan Ridge, or simply strolling through the rice fields. Plus, water rafting activities are just a short distance away!",
  items: ["Breathtaking sunrise views", "2.5 km to central Ubud", "Rice field walks", "Rafting", "Yoga"],
};

// Nine gallery photographs. Captions are verbatim; the first aerial photo had none on the
// original site. The original order of slides 3–9 was not recorded, so this order groups the
// hammock, pool, breakfast and yoga photographs and alternates portrait and landscape frames.
export const gallery = [
  { id: "gallery-aerial-hammock", caption: "Unwind in our hammock by the main pool, where you can gaze out over the lush rice fields", alt: "Aerial view of a couple on the net hammock between the main pool and the rice field" },
  { id: "gallery-hammock-bliss", caption: "Find your bliss in our hammock by the main pool, perfectly positioned to overlook the picturesque rice fields", alt: "Two guests relaxing on the net hammock at the rice-field edge" },
  { id: "gallery-friends-pool", caption: "Sharing great moments with friends at the pool", alt: "Friends jumping into the main pool" },
  { id: "gallery-aerial-pool", caption: null, alt: "Aerial view of the main pool and palms running alongside the rice field" },
  { id: "gallery-friends-pool-area", caption: "Savoring fun times with friends by the pool area", alt: "Friends in the infinity pool with the rice fields and palms behind" },
  { id: "gallery-floating-breakfast", caption: "Enjoy a delightful breakfast experience at the Main Pool, where your meal floats alongside you", alt: "A couple sharing a floating breakfast tray at the edge of the main pool" },
  { id: "gallery-breakfast", caption: "Create an unforgettable breakfast experience with us", alt: "A guest at a breakfast spread laid out beside the rice field" },
  { id: "gallery-yoga-space", caption: "Find your calm in our yoga space", alt: "A guest in a seated yoga pose under a timber frame facing the fields" },
  { id: "gallery-yoga-shala", caption: "Embrace serenity in our yoga shala", alt: "A small group meditating in the open timber yoga shala" },
];

export const videos = [
  { src: "/media/pool-walk.mp4", poster: "video-pool-walk-poster", label: "A walk along the main pool", ratio: "1 / 1" },
  { src: "/media/hammock-deck.mp4", poster: "video-hammock-deck-poster", label: "The net hammocks on the pool deck", ratio: "4 / 5" },
];

// Fourteen five-star reviews transcribed word for word from the Airbnb screenshots on the
// original About page. Static content supplied with the demo — not a live feed.
export const reviews = [
  { name: "Shannon", date: "November 2024", text: "Incredible stay in Ubud, Made was a great host and it was a pleasure to stay - only wish we had longer." },
  { name: "Marco", date: "November 2024", text: "Such a beautiful property, everything was great and exactly as in the pictures. While the access road is about a minute walk only accessible by foot and motorcycles (common for rice paddy villas), it’s paved and they’re always happy to assist with your luggage. Close to a handful of restaurants and easily located when catching a grab/gojek. Terima kasih" },
  { name: "Lígia", date: "November 2024", text: "An unforgettable stay! The property is stunning, serene, and impeccably maintained. The staff went above and beyond with their efficiency and kindness. Three days felt far too short in this little slice of paradise!" },
  { name: "Callum", date: "November 2024", text: "We loved staying somewhere so quiet, calm and private, with a beautiful view but only a short ride into town." },
  { name: "Dahlia", date: "October 2024", text: "The hosts and workers were super nice and accommodating! Breakfast was very tasty as well. The villa itself is beautiful and very clean. The space around as well is nice. Not too far from everything either but still secluded away in its own spot ! Definitely would recommend if you’re looking for a villa in ubud!" },
  { name: "Lorena", date: "Early 2025 (approx.)", text: "We LOVED it here! We were for almost 4 months in Asia and this was without doubt, the best Airbnb where we stayed at.\nThe views from the pool are amazing and the staff is incredible (they are so attentive! Plus via phone we got all the information we needed from the appartment and things to do in Ubud + the owner replied really fast)\nThe Bungalow has charm and everything was so clean and beautiful! There’s nothing we can complain about.\nFor sure we will go back when we visit Ubud again :)." },
  { name: "Ryan", date: "January 2025", text: "We had a lovely time at Pod Padi and Made was very helpful arranging transport throughout our time. The villa has breakfast options in the morning." },
  // taste-skill-ignore: emoji is part of the verbatim guest review
  { name: "Kangozhayev", date: "January 2025", note: "Translated from Russian", text: "Chic place, thank you Made, everything was great😍😍😍" },
  { name: "Alan", date: "December 2024", text: "Perfect stay in a very peaceful part of Ubud away from the noise and business of the town. Super host. Proactive and helpful. Wouldn’t hesitate to return" },
  { name: "Mikala", date: "December 2024", text: "Beautiful location! The host Made was so nice and helpful. Will definitely be back :)" },
  { name: "Marina", date: "October 2024", text: "Friendly and communicative staff, clean and practical room, and lovely space! Great to have a private pool and also the shared pool with views to the rice fields" },
  { name: "Kasper", date: "October 2024", text: "Incredible resort\nStaff is so friendly and helpful\nThey made my girlfriends birthday a day to remember by decorating the pool with thousands of flowers.\nThank you so very much for a peaceful stay!\nWill be returning" },
  { name: "Pauline", date: "October 2024", note: "Translated from German", text: "Nice, stylish place with dedicated staff. Clean, well-maintained and simply chic. Very tasty breakfast and juices!" },
  { name: "Abhishek", date: "October 2024", note: "May continue beyond the original screenshot", text: "We stayed at different places during our trip to Bali and we're glad we had our longest stay here in Ubud. The property is gorgeous, serene and extremely well maintained. As soon as you enter the compound, you're greeted by a lovely swimming pool overlooking the lush green ricefields. BONUS TIP: Wake up by 6 and rush to the pool area to catch a lovely sunset view.\nBut really, the biggest highlight is the host - Made, one of the nicest and most helpful hosts we've met. The property is a bit tricky to locate when you arrive the first time but Made was in touch with us throughout, proactively reaching out to us to confirm if we need any help witj transport or directions. He remained available for any help we needed and ensured we have the most comfortable stay possible." },
];

// Experiences mosaic. Each item is either a photo tile (with a verbatim gallery caption) or a
// colour tile; descriptions come only from the original captions and meta descriptions.
export const experiences = {
  stay: [
    { label: "Breakfast", photo: "gallery-floating-breakfast", alt: "A couple sharing a floating breakfast tray at the edge of the main pool", text: "Enjoy a delightful breakfast experience at the Main Pool, where your meal floats alongside you" },
    { label: "Pool & lounge", photo: "gallery-hammock-bliss", alt: "Two guests relaxing on the net hammock at the rice-field edge", text: "Find your bliss in our hammock by the main pool, perfectly positioned to overlook the picturesque rice fields" },
    { label: "Daily housekeeping" },
    { label: "Free WiFi, 250 Mbps" },
    { label: "Airport transfer" },
  ],
  around: [
    { label: "Yoga", photo: "gallery-yoga-shala", alt: "Guests meditating in the open timber yoga shala", text: "Embrace serenity in our yoga shala" },
    { label: "Rice field walks", photo: "rice-field-walk", alt: "A walker on a path through the rice field in low sunlight", text: "Hiking at Campuhan Ridge, or simply strolling through the rice fields." },
    { label: "Breathtaking sunrise views" },
    { label: "2.5 km to central Ubud", text: "Only 2.5 km from Ubud Center for shopping." },
    { label: "Rafting", text: "Water rafting activities are just a short distance away." },
  ],
};

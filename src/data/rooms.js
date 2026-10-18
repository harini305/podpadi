// The four room types from the original booking widget (docs/source-audit/03-content.json).
// Titles, descriptions and amenities are verbatim. `label` is a short display name taken from
// words in each original title — the owner has not supplied short names yet (audit 08 Q4).
// `listing` holds figures exactly as the widget listed them; several are inconsistent (08 B2–B6),
// so the UI always presents them as "as listed", never as confirmed facts.

const rooms = [
  {
    slug: "private-retreat",
    label: "The Private Retreat",
    title:
      "Your Perfect Private Retreat Awaits – Ideal for Groups of Friends, Special Events, and Ultimate Relaxation, Comfortably Hosting 14 Guests",
    teaser: "The whole property: every villa and the main pool, for groups of up to 14.",
    description: [
      "The property features 4 One Bedroom Villas and a 3 Bedroom Family Villa, each equipped with its own private pool and ensuite bathrooms. With accommodations for up to 14 people, our space is ideal for groups, retreats, large families, and gatherings of friends. Whether you’re seeking a tranquil escape or a social gathering, our property offers the perfect setting for unforgettable memories.",
    ],
    // 45 m² was listed for this 7-bedroom option (08 B2) and is omitted as implausible.
    listing: { maxAdults: 14, bedrooms: 7, size: null },
    cover: "retreat-pool-deck",
    photos: [
      { id: "retreat-pool-deck", alt: "Pool deck with cushioned loungers beside the infinity pool and rice fields" },
      { id: "retreat-main-pool", alt: "The long main pool lined with daybeds and palms, the pavilion at its far end" },
      { id: "gallery-yoga-shala", alt: "Guests meditating in the open timber yoga shala" },
      { id: "gallery-aerial-pool", alt: "Aerial view of the main pool running alongside the rice field" },
      { id: "gallery-aerial-hammock", alt: "Aerial view of a couple on the net hammock between the pool and the rice field" },
    ],
    amenities: {
      Beds: ["King", "Twin", "Bedlinen", "Baby cot"],
      Bathroom: ["Private bathroom", "Bathroom with bathtub", "Bathroom with shower", "Bathroom with window", "Bidet", "Hairdryer", "Free toiletries"],
      "Kitchen & dining": ["Kitchenette", "Equipped kitchen", "Breakfast area", "Fridge", "Microwave oven"],
      Comfort: ["Individually controlled air conditioning", "Fan", "Wireless internet", "Seating area", "Desk", "Full-length mirror", "High ceiling", "Iron with ironing board", "Room safe", "Non-smoking"],
      Outlook: ["Mountain view", "Pool view", "Courtyard view", "Balcony"],
    },
  },
  {
    slug: "charming-boutique-villa",
    label: "Charming Boutique Villa",
    title: "Relax in a Charming Boutique Villa Nestled in Rice Fields, Featuring a Private Pool",
    teaser: "A one-bedroom villa with its own pool, bathtub and a king bed.",
    // The widget reused the whole-property paragraph here (08 B4); it is shown once on /stay instead.
    description: [],
    listing: { maxAdults: 2, bedrooms: null, size: 45 },
    cover: "villa-a-pool",
    photos: [
      { id: "villa-a-pool", alt: "Private plunge pool and timber deck in front of a one-bedroom villa" },
      { id: "villa-a-bedroom", alt: "King bed with blue cushions, doors open to the pool terrace" },
      { id: "villa-a-bedroom-2", alt: "Bedroom with woven wall baskets, open wardrobe rail and desk" },
      { id: "villa-bathtub", alt: "Sunken bathtub filled with flower petals beside a garden window" },
    ],
    amenities: {
      Beds: ["King", "Baby cot"],
      Bathroom: ["Private bathroom", "Bathroom with bathtub", "Bathroom with shower", "Bidet", "Hairdryer", "Free toiletries"],
      Comfort: ["Individually controlled air conditioning", "Fan", "Internet access", "Wireless internet", "Seating area", "Fridge", "Kettle", "Openable windows", "High ceiling", "Iron with ironing board", "Room safe", "Non-smoking"],
      Outlook: ["Pool view"],
    },
  },
  {
    slug: "boutique-villa-escape",
    label: "Boutique Villa Escape",
    title: "Escape to a Boutique Villa Surrounded by Rice Fields, Complete with Your Own Private Pool",
    teaser: "A one-bedroom villa for two, with balcony, minibar and private pool.",
    description: [
      "Escape to the ultimate luxury of a private villa with your own personal pool. Perfectly designed for twin sharing, our accommodations are tailored to cater to a maximum of 2 guests, ensuring a truly intimate and exclusive experience.",
    ],
    listing: { maxAdults: 2, bedrooms: null, size: 45 },
    cover: "villa-b-pool",
    photos: [
      { id: "villa-b-pool", alt: "Villa plunge pool framed by tall hedges, the bedroom pavilion behind" },
      { id: "villa-b-terrace", alt: "View from the bedroom doors to two woven chairs beside the pool" },
      { id: "villa-b-bedroom", alt: "King bed with a woven runner, the pool visible through open doors" },
      // Same photograph the original listing used for the Charming Boutique Villa (identical file).
      { id: "villa-bathtub", alt: "Sunken bathtub filled with flower petals beside a garden window" },
    ],
    amenities: {
      Beds: ["King"],
      Bathroom: ["Bathroom with bathtub", "Hairdryer"],
      Comfort: ["Centrally controlled air conditioning", "Wireless internet", "Cable TV", "Bedside telephone", "Minibar", "Seating area", "Room safe", "Non-smoking"],
      Outlook: ["Balcony"],
    },
  },
  {
    slug: "family-getaway",
    label: "Family Getaway",
    title: "Family Getaway A 3-Bedroom Villa with Private Pool, Lounge Area, and Kitchenette",
    teaser: "Three bedrooms, a lounge, a kitchenette and a private pool.",
    description: [
      "Escape to the ultimate luxury of a private villa with its own personal pool. Perfectly designed for twin sharing, our accommodations are tailored to cater to a maximum of 6 guests, ensuring a truly intimate and exclusive experience.",
    ],
    listing: { maxAdults: 6, bedrooms: 3, size: 200 },
    cover: "family-bedroom",
    photos: [
      { id: "family-bedroom", alt: "Bright bedroom with king bed, woven wall baskets and doors to the garden" },
      { id: "family-lounge", alt: "Open lounge with rattan chairs, kitchen counter and tall windows" },
      { id: "family-kitchen", alt: "Guests cooking at the kitchen counter under rattan pendant lamps" },
      { id: "family-bedroom-2", alt: "Second bedroom with king bed, ceiling fan and wall baskets" },
      { id: "family-pool-door", alt: "A guest stepping from the villa onto the deck of its private pool" },
      { id: "family-bedroom-3", alt: "Third bedroom with doors open to the pool and garden" },
      { id: "family-window-seat", alt: "Window seat with cushions looking out over the rice fields" },
      { id: "family-floating-tray", alt: "Two guests sharing a floating breakfast tray in the villa pool" },
    ],
    amenities: {
      Beds: ["King", "Twin"],
      Bathroom: ["Bathroom with shower", "Hairdryer"],
      Comfort: ["Centrally controlled air conditioning", "Wireless internet", "Cable TV", "Bedside telephone", "Minibar", "Seating area", "Room safe"],
      Outlook: ["Balcony"],
    },
  },
];

// Amenities held back because the audit flags them as likely booking-widget checkbox noise
// (08 B7) — restore them here if the owner confirms them.
export const heldBackAmenities = ["Pets allowed", "Iron for pants", "Hairdryer on request"];

// The paragraph the widget repeated across three rooms; shown once on /stay.
export const propertyDescription = rooms[0].description[0];

export function getRoom(slug) {
  return rooms.find((room) => room.slug === slug);
}

export function listingFacts(room) {
  const facts = [`Up to ${room.listing.maxAdults} adults`];
  if (room.listing.bedrooms) facts.push(`${room.listing.bedrooms} bedrooms`);
  if (room.listing.size) facts.push(`${room.listing.size} m²`);
  return facts;
}

export default rooms;

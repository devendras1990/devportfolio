export type Project = {
  id: number;
  title: string;
  category: string;
  url: string;
  description: string;
  designed: string[];
  tools: string[];
  filters: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "MediDental Pro",
    category: "Healthcare · UI/UX · Product Design",
    url: "https://medidentalpro.com/",
    description:
      "Designed the UI/UX and digital product experience for MediDental Pro, focusing on clear information architecture, intuitive navigation, service discovery and a professional healthcare visual language.",
    designed: ["UX Architecture", "UI Design", "Responsive Design", "CTA Structure", "Prototyping"],
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["Product Design", "UI/UX", "Healthcare"],
  },
  {
    id: 2,
    title: "Scott Stonebridge",
    category: "Personal Brand · Service Platform · UX/UI",
    url: "https://scottstonebridge.com/",
    description:
      "Designed a premium digital experience focused on service discovery, content hierarchy, trust-building and smoother user journeys, combining visual storytelling with clear navigation and CTA placement.",
    designed: ["UX Strategy", "Website UI", "User Journey", "Responsive Design", "Prototype"],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["UI/UX"],
  },
  {
    id: 3,
    title: "Redblu",
    category: "B2B · Exhibition · Digital Brand Experience",
    url: "https://www.redblugraphics.com/",
    description:
      "Designed a modern B2B digital experience that presents exhibition and modular stand services through stronger visual hierarchy, service discovery and a more engaging responsive experience.",
    designed: [
      "UX/UI",
      "Information Architecture",
      "Service Presentation",
      "Responsive Design",
      "Prototyping",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["UI/UX", "B2B"],
  },
  {
    id: 4,
    title: "Solmar Villas",
    category: "Travel · Villa Booking · Digital Experience",
    url: "https://www.solmarvillas.com/",
    description:
      "Designed a visually engaging villa discovery and booking experience focused on destination exploration, property discovery, structured information and a smoother travel-shopping journey.",
    designed: [
      "UX/UI",
      "Property Discovery",
      "Listing Experience",
      "Booking Journey",
      "Responsive Design",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["UI/UX", "Travel"],
  },
  {
    id: 5,
    title: "Crossroads Home Care",
    category: "Healthcare · Care Services · Responsive Web",
    url: "https://www.crossroads-caringforcarers.org/",
    description:
      "Designed a user-focused digital experience that makes important care information easier to discover through clearer navigation, structured content and accessible interface design.",
    designed: [
      "UX/UI",
      "Information Architecture",
      "Content Hierarchy",
      "Responsive Design",
      "Mobile UI",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI"],
    filters: ["UI/UX", "Healthcare"],
  },
  {
    id: 6,
    title: "SAL Marine",
    category: "Marine · E-commerce · Product Discovery",
    url: "https://shop.salmarine.com/",
    description:
      "Designed a product-focused e-commerce experience for SAL Marine, improving product discovery, category navigation and product presentation across desktop and mobile.",
    designed: [
      "E-commerce UX",
      "Product Listing",
      "Product Detail",
      "Navigation",
      "Filters",
      "Responsive UI",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["E-commerce", "Product Design", "UI/UX"],
  },
  {
    id: 7,
    title: "Gregg Wallace Health",
    category: "Health · Digital Product · Personal Brand",
    url: "https://greggwallace.health/",
    description:
      "Designed a modern health and wellness digital experience focused on content structure, personal branding, service discovery and clear user journeys.",
    designed: [
      "UX/UI",
      "Visual Design",
      "Content Architecture",
      "Service Presentation",
      "Responsive Design",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["Product Design", "UI/UX", "Healthcare"],
  },
  {
    id: 8,
    title: "Niche Jewellery",
    category: "Luxury E-commerce · Jewellery · Product Design",
    url: "https://www.nichejewellery.co.uk/",
    description:
      "Designed a premium jewellery shopping experience focused on product storytelling, visual hierarchy, collection discovery and elegant e-commerce interactions.",
    designed: [
      "E-commerce UX",
      "Product Listing",
      "Product Detail",
      "Collection Experience",
      "Responsive Design",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["E-commerce", "Product Design", "UI/UX"],
  },
  {
    id: 9,
    title: "Aircare Appliances",
    category: "E-commerce · Appliances · Product Discovery",
    url: "https://aircareappliances.co.uk/",
    description:
      "Designed a structured e-commerce experience that makes air-conditioning, heating and dehumidification products easier to browse, understand and explore.",
    designed: [
      "E-commerce UX",
      "Product Categories",
      "Product Listing",
      "Product Detail",
      "Navigation",
      "Responsive UI",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["E-commerce", "Product Design", "UI/UX"],
  },
  {
    id: 10,
    title: "Xford Eyewear",
    category: "Fashion E-commerce · Eyewear · Product Design",
    url: "https://xford.com/",
    description:
      "Designed a premium eyewear shopping experience combining strong product presentation, collection discovery, intuitive navigation and a smooth responsive shopping journey.",
    designed: [
      "E-commerce UX",
      "Product Discovery",
      "Collection Pages",
      "Product Cards",
      "Product Detail",
      "Mobile UX",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["E-commerce", "Product Design", "UI/UX"],
  },
  {
    id: 11,
    title: "Kukoon Rugs",
    category: "E-commerce · Home & Lifestyle · Product Design",
    url: "https://www.kukoonrugs.com/",
    description:
      "Designed an immersive home and lifestyle e-commerce experience focused on product discovery, category browsing, visual merchandising and a smoother shopping journey.",
    designed: [
      "E-commerce UX",
      "Product Listing",
      "Product Detail",
      "Filters",
      "Product Cards",
      "Mobile UI",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["E-commerce", "Product Design", "UI/UX"],
  },
  {
    id: 12,
    title: "Eevent",
    category: "Event Marketplace · Digital Product · Marketplace UX",
    url: "https://eevent.com.au/",
    description:
      "Designed a marketplace experience that helps users discover events and related services through structured categories, intuitive navigation and streamlined user journeys.",
    designed: [
      "Product UX",
      "Marketplace Architecture",
      "Event Discovery",
      "Search",
      "Categories",
      "Responsive UI",
    ],
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["Product Design", "UI/UX", "Marketplace", "Event"],
  },
  {
    id: 13,
    title: "Voldog Food",
    category: "Pet Food · E-commerce · Product Design",
    url: "https://www.voldogfood.com/",
    description:
      "Designed a product-led e-commerce experience focused on product discovery, category navigation, clear product communication and a simple path toward purchase.",
    designed: [
      "E-commerce UX",
      "Product Listing",
      "Product Detail",
      "Category Navigation",
      "Product Cards",
      "Mobile UX",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "ChatGPT", "Claude AI", "Lovable"],
    filters: ["E-commerce", "Product Design", "UI/UX"],
  },
];

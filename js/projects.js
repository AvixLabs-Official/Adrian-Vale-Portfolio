/**
 * ADRIAN VALE - Fictional Projects & Portfolio Data Model
 */

const PROJECTS_DATA = [
  {
    id: "proj-01",
    name: "VANTA",
    subtitle: "Re-imagining private wealth for the modern era.",
    category: "Fintech / Brand Strategy",
    year: "2024",
    layoutType: "horizontal-hero",
    client: "Vanta Capital London",
    services: ["Brand Identity", "Digital Strategy", "UI/UX System", "Motion Architecture"],
    description: "Vanta needed a brand transformation that felt less like traditional banking and more like an exclusive private member's club. We created a dark monochrome visual system accented with gold foil typography and a ultra-sleek iOS mobile web platform.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
    ],
    impact: "+140% Qualified Inquiries in Q1"
  },
  {
    id: "proj-02",
    name: "SORA",
    subtitle: "High-fashion e-commerce experience with interactive 3D runway previews.",
    category: "Fashion / Digital Experience",
    year: "2024",
    layoutType: "portrait-editorial",
    client: "Sora Paris",
    services: ["Art Direction", "WebGL Experience", "E-Commerce Architecture"],
    description: "Sora required a digital flagship store that captured the tactile elegance of their haute-couture garments. We crafted an editorial layout with fluid WebGL transitions and oversized typography.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    ],
    impact: "Nominated Awwwards Site of the Month"
  },
  {
    id: "proj-03",
    name: "MORROW",
    subtitle: "Sensory brand identity and digital booking engine for boutique alpine retreats.",
    category: "Hospitality / Brand Identity",
    year: "2023",
    layoutType: "asymmetric-grid",
    client: "Morrow Resorts Switzerland",
    services: ["Brand Strategy", "Signage & Print", "Direct Booking Platform"],
    description: "For Morrow's luxury chalets in the Swiss Alps, we developed a brand identity centered around silence, warmth, and timber textures. Includes bespoke print collateral and an intuitive direct reservation experience.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"
    ],
    impact: "88% Direct Bookings Achieved"
  },
  {
    id: "proj-04",
    name: "KAIRO",
    subtitle: "Modular design system and web application for an AI data intelligence platform.",
    category: "Technology / Product Design",
    year: "2023",
    layoutType: "full-width-visual",
    client: "Kairo Labs San Francisco",
    services: ["Design System", "Product Strategy", "Interactive Dashboard"],
    description: "Kairo translates complex neural network telemetry into intuitive visual dashboards. Adrian led the product design from ground-zero, establishing a scalable component library used by 50,000+ developers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
    ],
    impact: "$18M Series-A Secured"
  },
  {
    id: "proj-05",
    name: "ASTER",
    subtitle: "Global brand campaign celebrating sustainable architectural heritage.",
    category: "Culture / Campaign",
    year: "2022",
    layoutType: "split-editorial",
    client: "Aster Foundation Copenhagen",
    services: ["Campaign Direction", "Editorial Publication", "Exhibition Design"],
    description: "A multi-city exhibition and digital archive documenting circular architecture across Northern Europe. Features a hardcover monograph and interactive virtual tour.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    impact: "D&AD Graphite Pencil Winner"
  }
];

const EXPERTISE_DATA = [
  {
    num: "01",
    title: "BRAND STRATEGY",
    desc: "Uncovering core positioning, brand narrative, value propositions, and market differentiation for ambitious companies.",
    previewImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "CREATIVE DIRECTION",
    desc: "Guiding design vision, visual identity systems, art direction, photography, and cohesive brand storytelling across all touchpoints.",
    previewImg: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "UI / UX DESIGN",
    desc: "Designing intuitive, high-converting digital products, design systems, and WebGL-powered web interfaces.",
    previewImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "DIGITAL EXPERIENCES",
    desc: "Crafting memorable web applications, bespoke e-commerce platforms, and interactive digital portfolios with smooth animations.",
    previewImg: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "ART DIRECTION",
    desc: "Directing photography shoots, film campaigns, typographic layouts, and physical print collateral.",
    previewImg: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "06",
    title: "CAMPAIGNS",
    desc: "Concepting multi-channel launch campaigns, video commercials, and digital PR installations that command attention.",
    previewImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
  }
];

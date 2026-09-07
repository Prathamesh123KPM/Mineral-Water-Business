export interface SEOKeywordItem {
  name: string;
  category: string;
  tag?: string;
  link?: string;
  featured?: boolean;
}

export interface SEOKeywordCategory {
  title: string;
  description: string;
  iconName: string;
  keywords: SEOKeywordItem[];
}

export const SEO_KEYWORD_CATEGORIES: SEOKeywordCategory[] = [
  {
    title: "Turnkey Mineral Water Plants",
    description: "Complete plant design, civil layout, machinery fabrication & turnkey commissioning.",
    iconName: "Droplets",
    keywords: [
      { name: "Mineral Water Bottling Plant Price", category: "Turnkey", featured: true, link: "/products/mineral-water-plant" },
      { name: "Packaged Drinking Water Plant Setup", category: "Turnkey", featured: true, link: "/products/mineral-water-plant" },
      { name: "Mineral Water Machine Price in India", category: "Turnkey", featured: true, link: "/contact" },
      { name: "Small Scale Mineral Water Plant Report", category: "Turnkey", link: "/blog/mineral-water-plant-setup-cost-process-profit-2026" },
      { name: "Fully Automatic Mineral Water Plant", category: "Turnkey", featured: true, link: "/products/mineral-water-plant" },
      { name: "Mineral Water Plant Cost & ROI Calculator", category: "Turnkey", link: "/contact" },
      { name: "Turnkey Beverage Project Engineering", category: "Turnkey", link: "/services" },
      { name: "Mineral Water Plant Manufacturer in India", category: "Turnkey", featured: true, link: "/about" },
      { name: "Drinking Water Project Consultant", category: "Turnkey", link: "/services" },
    ]
  },
  {
    title: "Bottling & Packaging Automation",
    description: "High-speed monoblock rinsing, filling, capping, labeling & shrink packaging lines.",
    iconName: "Package",
    keywords: [
      { name: "Automatic Water Bottling Machine", category: "Machinery", featured: true, link: "/products/fully-automatic-rinser-filler-capper" },
      { name: "PET Bottle Rinsing Filling Capping (RFC)", category: "Machinery", featured: true, link: "/products/fully-automatic-rinser-filler-capper" },
      { name: "20 Litre Jar Washing & Filling Machine", category: "Machinery", link: "/products/20-litre-jar-filling-machine" },
      { name: "Automatic PET Bottle Blow Moulding Machine", category: "Machinery", featured: true, link: "/products/automatic-pet-bottle-blowing-machine" },
      { name: "Automatic Sticker & Shrink Labeling Machine", category: "Machinery", link: "/products/automatic-labeling-machine" },
      { name: "Automatic Bottle Shrink Wrapping Machine", category: "Machinery", link: "/products/automatic-shrink-wrapping-machine" },
      { name: "Semi Automatic Bottle Blowing Machine", category: "Machinery", link: "/products/semi-automatic-pet-bottle-blowing-machine" },
      { name: "High Speed Rotary Bottling Line 240 BPM", category: "Machinery", link: "/products/fully-automatic-rinser-filler-capper" },
    ]
  },
  {
    title: "Industrial RO & Water Treatment",
    description: "Heavy-duty commercial RO systems, multi-media filtration & sterilization skids.",
    iconName: "Settings",
    keywords: [
      { name: "Industrial RO Plant 1000 LPH to 20000 LPH", category: "Treatment", featured: true, link: "/products/industrial-ro-plant" },
      { name: "Commercial RO Water Treatment System", category: "Treatment", featured: true, link: "/products/ro-plant" },
      { name: "SS 316 Stainless Steel RO Filtration Unit", category: "Treatment", link: "/products/industrial-ro-plant" },
      { name: "Water Softener Plant & Demineralization (DM)", category: "Treatment", link: "/products/water-softener-plant" },
      { name: "Industrial UV Sterilizer & Ozone Generator", category: "Treatment", link: "/products/ro-plant" },
      { name: "Multi-Grade Sand & Activated Carbon Filters", category: "Treatment", link: "/products/industrial-ro-plant" },
      { name: "Micron Cartridge & Ultrafiltration (UF) System", category: "Treatment", link: "/products/ro-plant" },
      { name: "Turnkey Water Processing Plant India", category: "Treatment", link: "/services" },
    ]
  },
  {
    title: "Beverage & Soft Drink Plants",
    description: "End-to-end hot filling, syrup preparation, carbonation & soda bottling lines.",
    iconName: "Beer",
    keywords: [
      { name: "Fruit Juice Processing & Bottling Plant", category: "Beverage", featured: true, link: "/products/fruit-juice-plant" },
      { name: "Carbonated Soft Drink (CSD) Plant Setup", category: "Beverage", featured: true, link: "/products/carbonated-soft-drink-plant" },
      { name: "Soda Making Machine & CO2 Carbonator Skid", category: "Beverage", link: "/products/csd-carbonator" },
      { name: "Automatic Fruit Juice Filling Machine", category: "Beverage", link: "/products/fruit-juice-filling-machine" },
      { name: "Glass Bottle Water & Beverage Packaging Line", category: "Beverage", link: "/products/glass-bottling-plant" },
      { name: "Natural Mineral Water Processing Plant", category: "Beverage", link: "/products/natural-mineral-water-plant" },
      { name: "Energy Drink & Flavored Water Processing", category: "Beverage", link: "/products/carbonated-soft-drink-plant" },
    ]
  },
  {
    title: "BIS / ISI Certification & Consulting",
    description: "Complete technical advisory, government licensing, laboratory setup & testing standards.",
    iconName: "ShieldCheck",
    keywords: [
      { name: "ISI Mark BIS Certification for Water Plant", category: "Compliance", featured: true, link: "/blog/how-to-start-a-packaged-mineral-water-plant-in-india-2026" },
      { name: "IS 14543 Packaged Drinking Water Standards", category: "Compliance", link: "/blog/how-to-start-a-packaged-mineral-water-plant-in-india-2026" },
      { name: "IS 13428 Natural Mineral Water BIS License", category: "Compliance", link: "/blog/natural-and-alkaline-mineral-water-plant-cost-2026" },
      { name: "In-House Water Testing Laboratory Setup", category: "Compliance", featured: true, link: "/services" },
      { name: "FSSAI License & Water Business Compliance", category: "Compliance", link: "/contact" },
      { name: "Bankable Detailed Project Report (DPR)", category: "Compliance", link: "/contact" },
      { name: "Global Machinery Export & Commissioning", category: "Compliance", featured: true, link: "/projects" },
    ]
  }
];

export const ALL_SEO_KEYWORDS = SEO_KEYWORD_CATEGORIES.flatMap(cat => cat.keywords.map(k => k.name));

export const META_KEYWORDS_STRING = ALL_SEO_KEYWORDS.join(", ");

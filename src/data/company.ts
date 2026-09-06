const logo = { url: "/images/logo.jpg" };
const logoMark = { url: "/images/logo-mark.png" };
const irozone = { url: "/images/irozone.jpg" };
const calpaxD = { url: "/images/calpax-d.jpg" };
const metacid = { url: "/images/metacid.jpg" };
const melcin = { url: "/images/melcin.jpg" };
const mezethro = { url: "/images/mezethro.jpg" };
const flukazol = { url: "/images/flukazol.jpg" };
const megD = { url: "/images/meg-d.jpg" };
const megDBottle = { url: "/images/meg-d-bottle.jpg" };
const k3D = { url: "/images/k3-d.jpg" };
const ezibid = { url: "/images/ezibid.jpg" };
const zolik = { url: "/images/zolik.jpg" };
const omefit = { url: "/images/omefit.jpg" };
const cholD = { url: "/images/chol-d.jpg" };
const bmarkD = { url: "/images/bmark-d.jpg" };
const begnisium = { url: "/images/begnisium.jpg" };
const metD = { url: "/images/met-d.jpg" };
const conferenceRoom = { url: "/images/conference-room.jpg" };
const reception = { url: "/images/reception.jpg" };
const headOfSales = { url: "/images/head-of-sales.jpg" };
const chairman = { url: "/images/chairman.jpg" };
const regionalManager = { url: "/images/regional-manager.jpg" };

export const company = {
  name: "B·G Pharma Pakistan",
  shortName: "B·G Pharma",
  slogan: "Priority to Serve Humanity",
  positioning:
    "We are promoting time-tested, effective and economical medicines.",
  phone: "0319-6542988",
  phoneRaw: "+923196542988",
  phoneDisplayAlt: "03196542988",
  whatsapp: "923196542988",
  email: "bgpharmapakistan@gmail.com",
  address:
    "H #49-B, Near Jamia Rizvia Ghosia, Sheikh Colony, Faisalabad, Pakistan",
  addressLines: [
    "H #49-B, Near Jamia Rizvia Ghosia",
    "Sheikh Colony, Faisalabad",
    "Pakistan",
  ],
  coverage: "Punjab & Sindh",
  coverageNote:
    "Our representatives are working and serving humanity across Punjab & Sindh initially.",
} as const;

export const images = {
  logo: logo.url,
  logoMark: logoMark.url,
  conferenceRoom: conferenceRoom.url,
  reception: reception.url,
  headOfSales: headOfSales.url,
  chairman: chairman.url,
  regionalManager: regionalManager.url,
  megDBottle: megDBottle.url,
} as const;

export type ProductCategory =
  | "Nutrition & Bone Health"
  | "Anti-Infectives"
  | "Gastro Care"
  | "Paediatric Care"
  | "Injectables";

export type Product = {
  slug: string;
  name: string;
  molecule: string;
  price: string;
  category: ProductCategory;
  forms: string[];
  summary: string;
  image: string | null;
  gallery?: string[];
  formSeven?: boolean;
  facts?: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "irozone",
    price: "Price on request",
    name: "Irozone",
    molecule: "Iron as Ferrous Bisglycinate + Vitamins",
    category: "Nutrition & Bone Health",
    forms: ["Tablets (2x10)", "Syrup 120 ml"],
    summary:
      "Complete iron and vitamin support for red blood cell generation — available as iron syrup and tablets.",
    image: irozone.url,
    formSeven: true,
    facts: [
      { label: "Composition", value: "Iron as ferrous bisglycinate + vitamins" },
      { label: "Pack sizes", value: "Syrup 120 ml · Tablets 2x10" },
      { label: "Positioning", value: "For healthy blood & stronger you" },
    ],
  },
  {
    slug: "calpax-d",
    price: "Rs. 180 (syrup) · Rs. 395 (tablets)",
    name: "Calpax-D",
    molecule: "Calcium, Magnesium, Zinc, Vitamin D3 & Boron",
    category: "Nutrition & Bone Health",
    forms: ["Tablets (20s)", "Syrup 120 ml"],
    summary:
      "Complete care for strong bones and a healthy life, in a syrup for all ages and a boron-enriched tablet.",
    image: calpaxD.url,
    formSeven: true,
    facts: [
      {
        label: "Composition",
        value: "Calcium, Magnesium, Zinc, Vitamin D3 & Boron",
      },
      { label: "Syrup", value: "120 ml bottle · MRP 180 PKR" },
      { label: "Tablets", value: "20 tablets pack · MRP 395 PKR" },
    ],
  },
  {
    slug: "metacid",
    price: "Rs. 180",
    name: "Metacid",
    molecule: "Antacid + anti-gas formula",
    category: "Gastro Care",
    forms: ["Suspension 120 ml"],
    summary:
      "An effective sugar-free antacid and anti-gas suspension for quick, long-lasting relief from acidity and indigestion.",
    image: metacid.url,
    formSeven: true,
    facts: [
      {
        label: "Each 5 ml contains",
        value:
          "Ferric (III) Ammonium Citrate (BP) 83 mg · Menthol (USP) 0.4 mg · Zincate dihydrate (USP) 41 mg · Peppermint oil (USP) 5 mg · Sodium Bicarbonate (USP) 120 mg",
      },
      { label: "Pack", value: "120 ml suspension · MRP 180 PKR" },
      { label: "Note", value: "100% sugar free" },
    ],
  },
  {
    slug: "melcin",
    price: "Rs. 325 – Rs. 470",
    name: "Melcin",
    molecule: "Levofloxacin",
    category: "Anti-Infectives",
    forms: [
      "Tablets 250 mg",
      "Tablets 500 mg",
      "Suspension 125 mg/5 ml",
      "Suspension 250 mg/5 ml",
    ],
    summary:
      "A broad-spectrum fluoroquinolone antibiotic in tablets and oral suspension for adults and children.",
    image: melcin.url,
    facts: [
      { label: "Tablets", value: "250 mg (1x10) MRP 325 PKR · 500 mg (1x10) MRP 470 PKR" },
      {
        label: "Oral suspension",
        value: "125 mg/5 ml (60 ml) MRP 295 PKR · 250 mg/5 ml (60 ml) MRP 395 PKR",
      },
      { label: "Dosing", value: "Once or twice daily, as prescribed by the physician" },
    ],
  },
  {
    slug: "mezethro",
    price: "Rs. 320 (suspension)",
    name: "Mezethro",
    molecule: "Azithromycin",
    category: "Anti-Infectives",
    forms: ["Capsules 250 mg", "Tablets 250 mg", "Tablets 500 mg", "Suspension 200 mg/5 ml"],
    summary:
      "Azithromycin antibiotic range including taste-masked granules for oral suspension for children.",
    image: mezethro.url,
    facts: [
      {
        label: "Suspension",
        value: "200 mg/5 ml when reconstituted · 15 ml · MRP 320",
      },
      { label: "Solid forms", value: "Capsules 250 mg · Tablets 250 mg & 500 mg" },
      { label: "Class", value: "Antibiotic" },
    ],
  },
  {
    slug: "flukazol",
    price: "Rs. 245 – Rs. 285",
    name: "Flukazol",
    molecule: "Fluconazole",
    category: "Anti-Infectives",
    forms: ["Capsule 150 mg", "Dry syrup 50 mg/5 ml (35 ml)"],
    summary:
      "A triazole antifungal used to treat a wide range of fungal infections, for adults and children.",
    image: flukazol.url,
    facts: [
      { label: "Capsule", value: "150 mg (1x1) · MRP 245" },
      { label: "Dry syrup", value: "50 mg/5 ml · 35 ml (after reconstitution) · MRP 285" },
      { label: "Dosage", value: "As directed by the physician; complete the full course" },
    ],
  },
  {
    slug: "omefit",
    price: "Rs. 275 – Rs. 406",
    name: "Omefit",
    molecule: "Omeprazole",
    category: "Gastro Care",
    forms: ["Capsules 20 mg (pellets)", "Capsules 40 mg (pellets)"],
    summary:
      "Omeprazole in enteric-coated pellet capsules — a proton pump inhibitor for acidity, heartburn and gastric disorders.",
    image: omefit.url,
    facts: [
      { label: "20 mg", value: "1x7 capsules · MRP 275" },
      { label: "40 mg", value: "2x7 capsules · MRP 406" },
      { label: "Formulation", value: "Enteric-coated pellet capsules" },
    ],
  },
  {
    slug: "meg-d",
    price: "Rs. 1,395",
    name: "Meg-D",
    molecule: "Magnesium Glycinate 500 mg + Vitamin D3 + Vitamin K2",
    category: "Nutrition & Bone Health",
    forms: ["Film-coated tablets (30s)"],
    summary:
      "Magnesium glycinate with Vitamin D3 and K2 in a high-absorption film-coated tablet for sleep, nerve, muscle, bone and heart health.",
    image: megD.url,
    gallery: [megDBottle.url],
    formSeven: true,
    facts: [
      {
        label: "Each tablet contains",
        value:
          "Magnesium Glycinate 500 mg · Vitamin D3 (Cholecalciferol) 1000 I.U · Vitamin K2 (Menaquinone-7) 100 mcg",
      },
      { label: "Pack", value: "30 tablets · M.R.P Rs. 1395" },
      { label: "Dosage", value: "1 tablet daily after breakfast or as prescribed by the doctor" },
    ],
  },
  {
    slug: "k3-d",
    price: "Rs. 370",
    name: "K3-D",
    molecule: "Vitamin D3 200,000 IU + Vitamin K2 50 mcg",
    category: "Nutrition & Bone Health",
    forms: ["Softgel capsule"],
    summary:
      "A single softgel capsule combining high-potency Vitamin D3 with Vitamin K2 — a daily burst of sunshine.",
    image: k3D.url,
    facts: [
      { label: "Composition", value: "Vitamin D3 200000 IU + Vitamin K2 50 mcg" },
      { label: "Pack", value: "1 softgel capsule · MRP 370/- only" },
    ],
  },
  {
    slug: "met-d",
    price: "Rs. 360",
    name: "Met-D",
    molecule: "Vitamin D3 200,000 IU (Cholecalciferol) + Vitamin K2",
    category: "Nutrition & Bone Health",
    forms: ["Softgel capsule"],
    summary:
      "High-potency Vitamin D3 softgel capsule with Vitamin K2, for bone, heart, immunity, diabetic and maternal health.",
    image: metD.url,
    facts: [
      { label: "Composition", value: "Vitamin D 200000 I.U · Vitamin K2 200 mcg" },
      { label: "Pack", value: "1 softgel capsule · M.R.P 360 only" },
    ],
  },
  {
    slug: "begnisium",
    price: "Rs. 1,999",
    name: "Begnisium",
    molecule: "Magnesium Glycinate 500 mg",
    category: "Nutrition & Bone Health",
    forms: ["Tablets (30s)"],
    summary:
      "High-absorption magnesium glycinate tablets that are gentle on the stomach, for daily body and mind wellness.",
    image: begnisium.url,
    formSeven: true,
    facts: [
      { label: "Each tablet contains", value: "Magnesium (as Magnesium Glycinate) 500 mg" },
      { label: "Pack", value: "30 tablets · M.R.P 1999" },
      {
        label: "Recommended use",
        value:
          "1 tablet daily or as directed by the physician; best taken after meals with water. Suitable for adults & teens 12 years and above.",
      },
    ],
  },
  {
    slug: "zolik",
    price: "Rs. 450",
    name: "Zolik",
    molecule: "Vitamin D3 + Vitamin A + Vitamin K2",
    category: "Paediatric Care",
    forms: ["Oral liquid drops 10 ml"],
    summary:
      "A pleasant, banana-flavoured oral drop for children supporting bones, vision and healthy growth.",
    image: zolik.url,
    formSeven: true,
    facts: [
      {
        label: "Each ml contains",
        value: "Vitamin D3 (USP) 415 IU · Vitamin A (USP) 1550 IU · Vitamin K2 (USP) 10 mcg",
      },
      { label: "Pack", value: "10 ml oral drops · MRP 450" },
      { label: "Dosage", value: "One to two drops daily or as directed by the physician" },
    ],
  },
  {
    slug: "ezibid",
    price: "Price on request",
    name: "Ezibid",
    molecule: "Lactase Enzyme",
    category: "Paediatric Care",
    forms: ["Colic drops 10 ml"],
    summary:
      "Lactase enzyme drops for reduction of colic-associated crying resulting from transient lactase deficiency.",
    image: ezibid.url,
    formSeven: true,
    facts: [
      { label: "Each ml contains", value: "Lactase Enzyme (USP) 60 mg" },
      { label: "Pack", value: "10 ml drops" },
      {
        label: "Recommended use",
        value:
          "Add the required drops to milk or food before consumption; use as directed by the physician. Suitable to use from birth onwards.",
      },
    ],
  },
  {
    slug: "chol-d-injection",
    price: "Rs. 210",
    name: "Inj. Chol-D",
    molecule: "Cholecalciferol 200,000 I.U",
    category: "Injectables",
    forms: ["1 x 1 ml ampoule — Oral / I.M"],
    summary:
      "High-potency Vitamin D3 ampoule for oral or intramuscular use — strengthening bones, enriching lives.",
    image: cholD.url,
    facts: [
      { label: "Presentation", value: "1 x 1 ml ampoule for oral / I.M injection" },
      { label: "Potency", value: "Cholecalciferol 200,000 I.U (Vitamin D3)" },
      { label: "MRP", value: "Rs. 210/- only" },
      {
        label: "Storage",
        value:
          "Store below 30°C. Protect from light. Keep out of reach of children. To be used only on the prescription of a registered physician.",
      },
    ],
  },
  {
    slug: "bmark-d-injection",
    price: "Rs. 210",
    name: "Inj. B Mark-D",
    molecule: "Cholecalciferol 200,000 I.U (5 mg/ml)",
    category: "Injectables",
    forms: ["1 ampoule — Oral / I.M"],
    summary:
      "Vitamin D3 injection for oral or intramuscular administration — strength for bones, health for life.",
    image: bmarkD.url,
    facts: [
      {
        label: "Each 1 ml ampoule contains",
        value: "Cholecalciferol (Vitamin D3) 5 mg (200,000 IU)",
      },
      { label: "MRP", value: "Rs. 210/-" },
      {
        label: "Administration",
        value:
          "Injection (IM) as prescribed by the physician, usually 1 ampoule (200,000 IU) as a single dose; also suitable for oral administration as directed.",
      },
      {
        label: "Storage",
        value:
          "Store below 25°C. Protect from light. Keep out of reach of children. To be sold on the prescription of a registered medical practitioner only.",
      },
    ],
  },
];

export const categories: ProductCategory[] = [
  "Nutrition & Bone Health",
  "Anti-Infectives",
  "Gastro Care",
  "Paediatric Care",
  "Injectables",
];

export type TeamMember = {
  name: string;
  role: string;
  region?: string;
  phone?: string;
  phoneRaw?: string;
  image: string;
  lead?: boolean;
};

export const leadership: TeamMember = {
  name: "Chairman",
  role: "Chairman, Board of Directors",
  image: images.chairman,
  lead: true,
};

export const team: TeamMember[] = [
  {
    name: "Head of Marketing & Sales",
    role: "Head of Marketing & Sales",
    image: images.headOfSales,
  },
  {
    name: "Mr. Ali Raza Bajwa",
    role: "Regional Manager",
    region: "Punjab & Sindh",
    phone: "0306 8373570",
    phoneRaw: "+923068373570",
    image: images.regionalManager,
  },
];

export const ceoMessage = [
  "At B·G Pharma Pakistan, our slogan is not a tagline — it is the instruction we work by every single day: Priority to Serve Humanity.",
  "We build our portfolio around time-tested, effective and economical medicines, so that quality treatment stays within reach of an ordinary household. From iron and calcium therapy to antibiotics, antifungals, gastro care and paediatric drops, every product we introduce must earn its place by serving a real patient need.",
  "Our representatives are serving communities across Punjab and Sindh, and they carry the same responsibility we do — to deliver medicines people can trust, and to answer every doctor, pharmacist and distributor with honesty and care.",
];

export const chairmanVision = {
  statement:
    "To make quality medicine a right, not a privilege — building a Pakistani pharmaceutical company whose products are trusted by prescribers, affordable for every household and available in every town we serve.",
  points: [
    {
      title: "Quality without compromise",
      body: "Every molecule we introduce is manufactured to pharmacopoeial standards and released only after batch-level verification.",
    },
    {
      title: "Affordability as a duty",
      body: "Prices are set so that a complete course of treatment remains within reach of an ordinary family, not only the few.",
    },
    {
      title: "Nationwide reach",
      body: "From Punjab and Sindh today to a countrywide network tomorrow, so no patient is left behind because of geography.",
    },
    {
      title: "Ethical practice",
      body: "Honest communication with doctors, pharmacists and distributors — no claim we cannot stand behind.",
    },
  ],
} as const;

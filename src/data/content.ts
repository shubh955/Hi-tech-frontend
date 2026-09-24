import { HeroSlide, QuickLink, CapabilityStat, ProductItem, ApprovedLocation, ManufacturingFacility, ClientPartner } from '../types';
import hitachiEnergyLogo from '../assets/images/client-logo/hitachi-energy.jpg';
import siemensEnergyLogo from '../assets/images/client-logo/siemens-energy.png';
import toshibaLogo from '../assets/images/client-logo/Toshiba-Logo.png';
import wegLogo from '../assets/images/client-logo/weg.webp';
import prolecLogo from '../assets/images/client-logo/prolec-logo.png';
import deltaStarLogo from '../assets/images/client-logo/delta.png';

// Hero banner images
import heroRadiatorPlantRender from '../assets/images/Hi-Tech_Website_Images_Starter/1_Plants_and_facilities/new_radiator_plant_render.jpg';
import heroRadiatorsMildSteel from '../assets/images/Hi-Tech_Website_Images_Starter/2_Products_review_needed/radiators_mild_steel_REVIEW.jpg';
import heroPlasmaCutting from '../assets/images/Hi-Tech_Website_Images_Starter/3_Process_and_machinery/plasma_cutting_table.jpg';
import heroBendingMachine from '../assets/images/Hi-Tech_Website_Images_Starter/3_Process_and_machinery/bending_machine.jpg';

// Product card images
import productRadiatorsGalvanised from '../assets/images/Hi-Tech_Website_Images_Starter/2_Products_review_needed/radiators_galvanised_REVIEW.png';
import productTanksSprayPainting from '../assets/images/Hi-Tech_Website_Images_Starter/3_Process_and_machinery/spray_painting_workstation.jpg';
import productGalvanisingLaserCutting from '../assets/images/Hi-Tech_Website_Images_Starter/3_Process_and_machinery/laser_cutting_sheet.jpg';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-01',
    slideNumber: '01',
    headline: 'Powering the Global Grid',
    supportingText: 'Radiators and tanks for power and distribution transformers.',
    category: 'Global Grid',
    ctaText: 'Explore our products',
    targetSection: 'solutions',
    image: heroRadiatorPlantRender,
    colorHex: '#54B273'
  },
  {
    id: 'slide-02',
    slideNumber: '02',
    headline: 'Made in India Since 1989',
    supportingText: 'Supplying transformer manufacturers in more than 55 countries.',
    category: 'Since 1989',
    ctaText: 'About Hi-Tech',
    targetSection: 'about',
    image: heroRadiatorsMildSteel,
    colorHex: '#DAA520'
  },
  {
    id: 'slide-03',
    slideNumber: '03',
    headline: 'Galvanising Under One Roof',
    supportingText: 'In-house hot dip galvanising, a finish most manufacturers send outside.',
    category: 'Galvanising',
    ctaText: 'See galvanising',
    targetSection: 'product-card-galvanising',
    image: heroPlasmaCutting,
    colorHex: '#C2B280'
  },
  {
    id: 'slide-04',
    slideNumber: '04',
    headline: 'Built To Order, Every Time',
    supportingText: "Nothing is made for stock. Every radiator and tank is built to the customer's drawing.",
    category: 'Built to Order',
    ctaText: 'Send an enquiry',
    targetSection: 'enquiry',
    image: heroBendingMachine,
    colorHex: '#A26161'
  }
];

export const SECONDARY_PALETTE = {
  goldenrod: {
    name: 'Goldenrod',
    hex: '#DAA520',
    rgb: '218/165/32',
    cmyk: '15/35/100/0',
    symbolism: 'Clarity & Purity'
  },
  mediumSeaGreen: {
    name: 'Medium Sea Green',
    hex: '#54B273',
    rgb: '84/178/115',
    cmyk: '69/5/73/0',
    symbolism: 'Harmony & Balance'
  },
  dustyRose: {
    name: 'Dusty Rose',
    hex: '#A26161',
    rgb: '162/97/97',
    cmyk: '32/68/54/11',
    symbolism: 'Vibrancy & Creativity'
  },
  sage: {
    name: 'Sage',
    hex: '#C2B280',
    rgb: '194/178/128',
    cmyk: '26/25/57/0',
    symbolism: 'Warmth & Vitality'
  }
};

export const QUICK_LINKS: QuickLink[] = [
  {
    number: '01',
    title: 'Radiators',
    description: 'Fin type radiators for power and distribution transformers, built to the customer\'s drawing.',
    targetId: 'product-card-radiators',
    tag: 'Product',
    colorHex: '#DAA520', // Goldenrod
    colorName: 'Goldenrod',
    symbolism: 'Clarity & Purity'
  },
  {
    number: '02',
    title: 'Tanks',
    description: 'Corrugated, flat wall and pad mounted tanks, tested in house and packed for export.',
    targetId: 'product-card-tanks',
    tag: 'Product',
    colorHex: '#54B273', // Medium Sea Green
    colorName: 'Medium Sea Green',
    symbolism: 'Harmony & Balance'
  },
  {
    number: '03',
    title: 'Galvanising',
    description: 'In-house hot dip galvanising, so every finish is controlled under one roof.',
    targetId: 'product-card-galvanising',
    tag: 'In-House',
    colorHex: '#A26161', // Dusty Rose
    colorName: 'Dusty Rose',
    symbolism: 'Vibrancy & Precision'
  },
  {
    number: '04',
    title: 'Send an enquiry',
    description: 'Share your drawing and specifications, and our team will get back to you with a quote.',
    targetId: 'enquiry',
    tag: 'Contact',
    colorHex: '#C2B280', // Sage
    colorName: 'Sage',
    symbolism: 'Warmth & Vitality'
  }
];

export const CAPABILITY_STATS: CapabilityStat[] = [
  {
    value: new Date().getFullYear() - 1989, // 37 in 2026; stays current each year
    suffix: '',
    label: 'Years Since 1989',
    sublabel: 'Building transformer radiators and tanks since 1989',
    colorHex: '#DAA520', // Goldenrod
    colorName: 'Goldenrod'
  },
  {
    value: 55,
    suffix: '+',
    label: 'Countries Served',
    sublabel: 'Supplying transformer manufacturers and utilities worldwide',
    colorHex: '#54B273', // Medium Sea Green
    colorName: 'Medium Sea Green'
  },
  {
    value: 200,
    suffix: '+',
    label: 'Business Partners',
    sublabel: 'Long-standing relationships with OEMs and utilities',
    colorHex: '#A26161', // Dusty Rose
    colorName: 'Dusty Rose'
  },
  {
    value: 20000,
    suffix: ' sq m',
    label: 'Manufacturing Area',
    sublabel: 'Spread across five plants near Mumbai',
    colorHex: '#C2B280', // Sage
    colorName: 'Sage'
  }
];

// Second row of facts below the headline stats
export const CAPABILITY_FACTS: { title: string; detail: string }[] = [
  {
    title: '250+ Employees',
    detail: 'Across five plants'
  },
  {
    title: '1,200+ Workers & 100+ Inspectors',
    detail: 'Inspectors trained under the International Welding Engineer programme'
  },
  {
    title: 'ISO Certified',
    detail: 'ISO 9001, ISO 14001, ISO 45001 and ISO 3834-2'
  },
  {
    title: 'Three Star Export House',
    detail: 'Certified Three Star Export House'
  }
];

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    id: 'radiators',
    number: '01',
    name: 'RADIATORS',
    shortCopy: 'Fin type radiators for power and distribution transformers, in mild steel, hot dip galvanised and stainless steel, from 900 mm to 4500 mm long.',
    ctaText: 'View radiators',
    image: productRadiatorsGalvanised,
    colorHex: '#54B273', // Medium Sea Green
    features: [
      'Multi-flute element designs for optimal oil-to-air heat exchange',
      'Precision robotic seam-welding with zero distortion guarantee',
      'Internal chemical flushing and nitrogen-inert blanketing',
      'Tested to withstand pressure pulses exceeding international standards'
    ],
    applications: [
      'Power Transmission Transformers (up to 765 kV)',
      'Substation & Distribution Units',
      'Locomotive & Traction Transformers',
      'Renewable Energy Solar & Wind Farm Step-up Units'
    ],
    standards: ['DIN 42559', 'EN 50216-6', 'ISO 9001:2015', 'IEEE C57']
  },
  {
    id: 'tanks',
    number: '02',
    name: 'TANKS',
    shortCopy: 'Corrugated, mid power flat wall and pad mounted tanks, fabricated, painted and tested for transformer makers in India and abroad.',
    ctaText: 'View tanks',
    image: productTanksSprayPainting,
    colorHex: '#DAA520', // Goldenrod
    features: [
      'Heavy CNC plate-cutting, beveling, and automated submerged-arc welding',
      'Full vacuum and pressure retention testing protocols',
      'Integrated conservators, turrets, and customized pipework manifolds',
      'Comprehensive dimensional CMM verification and NDT checks'
    ],
    applications: [
      'Generator Step-Up (GSU) Transformers',
      'Autotransformers & Shunt Reactors',
      'Hermetically Sealed Distribution Units',
      'Special Industrial & Arc Furnace Transformers'
    ],
    standards: ['ASME Sec IX', 'AWS D1.1', 'ISO 3834-2', 'EN 1090']
  },
  {
    id: 'galvanising',
    number: '03',
    name: 'GALVANISING',
    shortCopy: 'In-house hot dip galvanising with a zinc bath of 5 m x 2.5 m x 2.5 m, running since 2018. A value added finish that many manufacturers cannot offer.',
    ctaText: 'See galvanising',
    image: productGalvanisingLaserCutting,
    colorHex: '#C2B280', // Sage
    features: [
      'High-purity Special High Grade (SHG) molten zinc bath application',
      'Automated multi-stage acid pickling, rinsing, and preheating flux cycle',
      'Uniform metallurgical bonding resisting hostile coastal salt fog',
      'Full compliance with global heavy-industry environmental benchmarks'
    ],
    applications: [
      'Offshore & Coastal Substation Infrastructure',
      'Heavy Industrial Hot-Dip Structural Coating',
      'Severe Atmosphere Power Distribution Equipment',
      'Transmission Line Hardware and Enclosures'
    ],
    standards: ['ISO 1461', 'ASTM A123', 'BS 729', 'IS 2629 / 4759']
  }
];

// `scale` compensates for the differing whitespace baked into each logo file,
// so every logo reads at a similar visual size inside the card
export const CLIENT_LOGOS: ClientPartner[] = [
  { name: 'Hitachi Energy', logo: hitachiEnergyLogo, scale: 1.6 },
  { name: 'Siemens Energy', logo: siemensEnergyLogo, scale: 1.6 },
  { name: 'Toshiba', logo: toshibaLogo, scale: 1.45 },
  { name: 'WEG', logo: wegLogo, scale: 1.8 },
  { name: 'Prolec', logo: prolecLogo, scale: 2.2 },
  { name: 'Delta Star', logo: deltaStarLogo, scale: 1.5 }
];

export const MANUFACTURING_FACILITIES: ManufacturingFacility[] = [
  {
    id: 'mfg-unit-1',
    unitNumber: '01',
    title: 'Unit I — Radiator Manufacturing & Roll Forming',
    location: 'Turbhe MIDC, Navi Mumbai',
    focus: 'Transformer Radiators & Precision Flute Profiling',
    capacity: '24,000 MT Annual Capacity',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2024/12/bulk-production-1.jpg',
    colorName: 'Goldenrod',
    colorHex: '#DAA520',
    rgb: '218/165/32',
    cmyk: '15/35/100/0',
    symbolism: 'Clarity & Purity',
    description: 'High-throughput automated radiator manufacturing facility equipped with multi-roll forming lines, high-speed robotic seam welders, automated fluting presses, and precision header pipe boring centers.',
    keyEquipment: [
      'Automated CNC Multi-Stage Roll Forming Lines',
      'Robotic Longitudinal & Header Seam Welders',
      'Nitrogen-Inert Blanketing & Chemical Degreasing Stations',
      'Helium Mass Spectrometer Leak Detection Chambers'
    ],
    certifications: ['DIN 42559', 'EN 50216-6', 'ISO 9001:2015']
  },
  {
    id: 'mfg-unit-2',
    unitNumber: '02',
    title: 'Unit II — Heavy Transformer Tank Fabrication',
    location: 'Thane-Belapur Corridor, Navi Mumbai',
    focus: 'Distribution & Power Transformer Tanks (up to 765 kV)',
    capacity: '7,200 MT Annual Capability',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2024/12/free-photo-of-a-welder-at-work.jpeg',
    colorName: 'Medium Sea Green',
    colorHex: '#54B273',
    rgb: '84/178/115',
    cmyk: '69/5/73/0',
    symbolism: 'Harmony & Balance',
    description: 'Specialized heavy-engineering plant engineered for structural transformer enclosure fabrication, CNC plasma bevel cutting, submerged arc gantry welding, and vacuum pressure retention testing.',
    keyEquipment: [
      'CNC Underwater High-Definition Plasma & Oxy-Fuel Cutting',
      'Dual-Wire Submerged Arc Welding (SAW) Gantries',
      'Deep Vacuum & Cyclic Hydrostatic Pressure Test Bays',
      'CMM 3D Laser Dimensional Verification Tracking'
    ],
    certifications: ['ASME Sec IX', 'AWS D1.1', 'ISO 3834-2']
  },
  {
    id: 'mfg-unit-3',
    unitNumber: '03',
    title: 'Unit III — Advanced Hot-Dip Galvanising Center',
    location: 'Taloja Industrial Estate, Raigad District',
    focus: 'Anti-Corrosion Metallurgical Coating for Harsh Environments',
    capacity: '36,000 MT Annual Throughput',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2025/03/Why_Hi-Tech_State_of_The_art_Hot_dip_Galvanization_Process.png',
    colorName: 'Dusty Rose',
    colorHex: '#A26161',
    rgb: '162/97/97',
    cmyk: '32/68/54/11',
    symbolism: 'Vibrancy & Creativity',
    description: 'State-of-the-art closed-loop galvanising installation featuring temperature-regulated Special High Grade (SHG 99.995%) molten zinc kettle, automated pre-treatment baths, and zero-effluent fume neutralization scrubbers.',
    keyEquipment: [
      'Automated Monorail Multi-Tank Acid Pickling & Flux System',
      'Digital Ceramic-Lined Molten Zinc Bath (13.5m Length)',
      'Closed-Loop Acid Fume Scrubber & Zero Liquid Discharge (ZLD)',
      'Electromagnetic Zinc Coating Thickness Guarantees (>100µm)'
    ],
    certifications: ['ISO 1461', 'ASTM A123', 'ISO 14001:2015']
  },
  {
    id: 'mfg-unit-4',
    unitNumber: '04',
    title: 'Unit IV — Advanced Metrology & Testing Laboratories',
    location: 'Central Technology Complex, Navi Mumbai',
    focus: 'NDT Level III, Thermal Simulation & Metallurgical Quality',
    capacity: '100% Quality Traceability Guarantee',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2024/12/Testing-validation.jpg',
    colorName: 'Sage',
    colorHex: '#C2B280',
    rgb: '194/178/128',
    cmyk: '26/25/57/0',
    symbolism: 'Warmth & Vitality',
    description: 'Dedicated quality assurance and metallurgical inspection hub conducting non-destructive examination, ultrasonic weld verification, spectrochemical zinc purity verification, and pressure fatigue cycling.',
    keyEquipment: [
      'Automated Helium Mass Spectrometry Leak Testing (10⁻⁸ mbar·l/s)',
      'Cyclic Hydrostatic Surge & Pulsation Test Rig',
      'Optical Emission Spectrometry (OES) Material Verifier',
      'Salt Spray Fog Corrosion Simulation Chamber (1500+ Hours)'
    ],
    certifications: ['NABL Accredited', 'ISO/IEC 17025 Compliant', 'ISO 45001']
  }
];

export const APPROVED_LOCATIONS: ApprovedLocation[] = [
  {
    id: 'loc-1',
    number: '01',
    name: 'Corporate Registered Office',
    type: 'Headquarters & Global Commercial Division',
    address: 'Maker Chambers V, Nariman Point',
    state: 'Mumbai, Maharashtra',
    pin: '400021',
    spec: 'Strategic Executive Governance & Global OEM Relations',
    colorHex: '#DAA520',
    colorName: 'Goldenrod',
    symbolism: 'Clarity & Purity'
  },
  {
    id: 'loc-2',
    number: '02',
    name: 'Manufacturing Facility — Unit I',
    type: 'Primary Radiator Production & Automated Roll Forming',
    address: 'Plot No. C-18, MIDC Industrial Area, Turbhe',
    state: 'Navi Mumbai, Maharashtra',
    pin: '400705',
    spec: '24,000 MT Annual Radiator Capacity | CNC Hydro-forming',
    colorHex: '#54B273',
    colorName: 'Medium Sea Green',
    symbolism: 'Harmony & Balance'
  },
  {
    id: 'loc-3',
    number: '03',
    name: 'Heavy Engineering Facility — Unit II',
    type: 'Transformer Tank Fabrication & Structural Works',
    address: 'MIDC Industrial Corridor, Thane-Belapur Road',
    state: 'Navi Mumbai, Maharashtra',
    pin: '400708',
    spec: '7,200 MT Annual Tank Capability | Vacuum Pressure Test Bays',
    colorHex: '#A26161',
    colorName: 'Dusty Rose',
    symbolism: 'Vibrancy & Creativity'
  },
  {
    id: 'loc-4',
    number: '04',
    name: 'Surface Treatment & Galvanising Plant',
    type: 'Hot-Dip Galvanising & Specialized Coating Center',
    address: 'Plot No. K-4, Taloja Industrial Estate, MIDC',
    state: 'Raigad District, Maharashtra',
    pin: '410208',
    spec: 'Automated Temperature-Controlled SHG Molten Zinc Baths',
    colorHex: '#C2B280',
    colorName: 'Sage',
    symbolism: 'Warmth & Vitality'
  }
];

// Main site menu — shared by the header and footer.
// Placeholder links: inner pages are not built yet, so items link to '#'.
export const NAV_LINKS: { label: string; href: string; sectionId?: string }[] = [
  { label: 'Home', href: '#', sectionId: 'hero' },
  { label: 'About Us', href: '#', sectionId: 'about' },
  { label: 'Products & Services', href: '#', sectionId: 'solutions' },
  { label: 'Our Clients', href: '#' },
  { label: 'Investor Relations', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Media', href: '#' },
  { label: 'CSR', href: '#' },
  { label: 'Contact Us', href: '#', sectionId: 'contact' },
];

// Official social pages. TODO: confirm and add any other official pages.
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/hi-tech-radiators-pvt-ltd/'
};

// US company — shown in its own section above the footer.
// TODO: replace url with the High Tech Power Products website; confirm the lead line wording.
export const US_COMPANY = {
  name: 'High Tech Power Products',
  leadLine: 'High Tech Power Products, our company in the United States, serves the North American market.',
  url: '#'
};

export const CORPORATE_INFO = {
  companyName: 'Hi-Tech Radiators Pvt. Ltd.',
  brandEntity: 'HTT Innovations',
  parentCompanyNote: 'A Hitech Radiators Pvt Ltd Company',
  tagline: 'Mastering Precision, Engineering Innovation',
  cin: 'U31200MH1989PTC054750',
  gstin: '27AAACH1033P1ZL',
  email: 'info@hitechradiators.com',
  // TODO: IT team is deciding between an automated phone menu and a virtual number
  telephone: 'To be confirmed',
  // TODO: domain being finalised
  website: 'To be confirmed',
  ceo: {
    name: 'Kartik Yatin Daftari',
    role: 'Managing Director and CEO',
    company: 'Hi-Tech Radiators Pvt. Ltd.',
    excerpt: 'India\'s growth rests on strong fundamentals: a young workforce, steady domestic demand and rising global competitiveness. Our role as business leaders goes beyond the usual numbers. It is to build sustainable, energised organisations that can make the most of that opportunity.'
  }
};

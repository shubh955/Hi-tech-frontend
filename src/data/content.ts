import { HeroSlide, QuickLink, CapabilityStat, ProductItem, ApprovedLocation, ManufacturingFacility, ClientPartner } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-01',
    slideNumber: '01',
    headline: 'Engineering Power Forward',
    supportingText: 'High-reliability thermal management systems and transformer cooling infrastructure engineered for the global energy transition.',
    category: 'THERMAL MANAGEMENT',
    ctaText: 'Explore Solutions',
    targetSection: 'solutions',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2024/11/main-power-plant-energy-ideas-energy-saving.jpg', // Official primary Hi-Tech Radiators power plant background banner
    technicalSpec: 'Design Life: 30+ Years | Leak-Proof Guarantee',
    colorHex: '#DAA520',
    colorName: 'Goldenrod',
    symbolism: 'Clarity & Purity'
  },
  {
    id: 'slide-02',
    slideNumber: '02',
    headline: 'Built for Transformer Performance',
    supportingText: 'Precision-formed radiator elements and header assemblies engineered to meet rigorous international utility specifications.',
    category: 'TRANSFORMER RADIATORS',
    ctaText: 'Discover Radiators',
    targetSection: 'solutions',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2025/03/high-voltage-1290375.jpg', // High-voltage electrical substation and transformer grid
    technicalSpec: 'Annual Capacity: 24,000 MT | DIN & EN Standard Compliance',
    colorHex: '#54B273',
    colorName: 'Medium Sea Green',
    symbolism: 'Harmony & Balance'
  },
  {
    id: 'slide-03',
    slideNumber: '03',
    headline: 'Precision That Powers Industry',
    supportingText: 'Heavy-duty transformer tank fabrication with automated robotic submerged-arc welding and helium leak testing.',
    category: 'STRUCTURAL TANKS',
    ctaText: 'View Capabilities',
    targetSection: 'capability',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2024/12/bulk-production-1.jpg', // Real Hi-Tech Radiators bulk production facility
    technicalSpec: 'Capability: Up to 765 kV Class Tanks | NDT Level III Inspected',
    colorHex: '#A26161',
    colorName: 'Dusty Rose',
    symbolism: 'Vibrancy & Creativity'
  },
  {
    id: 'slide-04',
    slideNumber: '04',
    headline: 'Engineered for Global Energy',
    supportingText: 'Advanced hot-dip galvanising delivering decades of marine and industrial atmospheric corrosion protection across 55+ nations.',
    category: 'SURFACE PROTECTION',
    ctaText: 'Galvanising Solutions',
    targetSection: 'solutions',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2025/03/Why_Hi-Tech_State_of_The_art_Hot_dip_Galvanization_Process.png', // Official Hi-Tech Radiators State-of-the-art Hot-dip Galvanization facility
    technicalSpec: 'ISO 1461 Compliant | 100+ Micron Zinc Layer Uniformity',
    colorHex: '#C2B280',
    colorName: 'Sage',
    symbolism: 'Warmth & Vitality'
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
    title: 'About Us',
    description: 'Over three decades of manufacturing mastery in power equipment',
    targetId: 'about',
    tag: 'Legacy',
    colorHex: '#DAA520', // Goldenrod
    colorName: 'Goldenrod',
    symbolism: 'Clarity & Purity'
  },
  {
    number: '02',
    title: 'Products',
    description: 'Engineered radiators, transformer tanks & precision galvanising',
    targetId: 'solutions',
    tag: 'Core Portfolio',
    colorHex: '#54B273', // Medium Sea Green
    colorName: 'Medium Sea Green',
    symbolism: 'Harmony & Balance'
  },
  {
    number: '03',
    title: 'Manufacturing Plants',
    description: '4 specialized facilities spanning 67,200+ MT annual production',
    targetId: 'manufacturing',
    tag: 'Global Plants',
    colorHex: '#A26161', // Dusty Rose
    colorName: 'Dusty Rose',
    symbolism: 'Vibrancy & Precision'
  },
  {
    number: '04',
    title: 'Sustainability',
    description: 'Eco-conscious manufacturing, energy efficiency & zinc recycling',
    targetId: 'sustainability',
    tag: 'Green Future',
    colorHex: '#C2B280', // Sage
    colorName: 'Sage',
    symbolism: 'Warmth & Vitality'
  }
];

export const CAPABILITY_STATS: CapabilityStat[] = [
  {
    value: 30,
    suffix: '+',
    label: 'Years of Industry Presence',
    sublabel: 'Continuous manufacturing excellence since 1989',
    colorHex: '#DAA520', // Goldenrod
    colorName: 'Goldenrod'
  },
  {
    value: 55,
    suffix: '+',
    label: 'Countries Served',
    sublabel: 'Exporting worldwide to premier power utilities',
    colorHex: '#54B273', // Medium Sea Green
    colorName: 'Medium Sea Green'
  },
  {
    value: 200,
    suffix: '+',
    label: 'Business Partners',
    sublabel: 'Global OEM relationships built over decades',
    colorHex: '#A26161', // Dusty Rose
    colorName: 'Dusty Rose'
  },
  {
    value: 20000,
    suffix: ' m²',
    label: 'Manufacturing Area',
    sublabel: 'State-of-the-art automated production facilities',
    colorHex: '#C2B280', // Sage
    colorName: 'Sage'
  },
  {
    value: 24000,
    suffix: ' MT',
    label: 'Radiator Annual Capability',
    sublabel: 'High-throughput automated forming lines',
    colorHex: '#159640', // Sustainable Green
    colorName: 'Sustainable Green'
  },
  {
    value: 7200,
    suffix: ' MT',
    label: 'Tank Operational Capability',
    sublabel: 'Heavy power transformer tank fabrication',
    colorHex: '#54B273', // Medium Sea Green
    colorName: 'Medium Sea Green'
  }
];

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    id: 'radiators',
    number: '01',
    name: 'RADIATORS',
    shortCopy: 'High-performance transformer radiators engineered for durability, efficiency and reliable thermal performance.',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2024/12/bulk-production-1.jpg',
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
    shortCopy: 'Precision-manufactured transformer tanks designed for demanding distribution and power applications.',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2024/12/free-photo-of-a-welder-at-work.jpeg',
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
    shortCopy: 'Hot-dip galvanising with automated 7-tank pre-treatment and a 7.5 m SHG zinc bath, delivering durable corrosion protection for harsh industrial and coastal environments.',
    image: 'https://www.hitechradiators.com/wp-content/uploads/2025/03/Why_Hi-Tech_State_of_The_art_Hot_dip_Galvanization_Process.png',
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

export const CLIENT_LOGOS: ClientPartner[] = [
  { name: 'ABB', division: 'Power Grids & Transmission Systems', verified: true },
  { name: 'HITACHI', division: 'Energy Infrastructure Division', verified: true },
  { name: 'SIEMENS', division: 'Energy & Transformer Technology', verified: true },
  { name: 'SCHNEIDER', division: 'Medium & High Voltage Solutions', verified: true },
  { name: 'GE VERNOVA', division: 'Grid Solutions & Electrification', verified: true },
  { name: 'TOSHIBA', division: 'Transmission & Distribution Systems', verified: true },
  { name: 'BHEL', division: 'Heavy Electricals Infrastructure', verified: true }
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

export const CORPORATE_INFO = {
  companyName: 'Hi-Tech Radiators Pvt. Ltd.',
  brandEntity: 'HTT Innovations',
  parentCompanyNote: 'A Hitech Radiators Pvt Ltd Company',
  tagline: 'Mastering Precision, Engineering Innovation',
  cin: 'U31200MH1989PTC054750',
  gstin: '27AAACH1033P1ZL',
  email: 'info@hitechradiators.com',
  telephone: '+91 (022) 2778 0888 / 2778 0999',
  ceo: {
    name: 'Mr. Kartik Yatin Daftari',
    role: 'MD & CEO',
    company: 'Hi-Tech Radiators Pvt. Ltd.',
    excerpt: 'At Hi-Tech Radiators, our engineering philosophy is built on absolute thermal precision, robust material integrity, and unwavering commitment to global power utilities. For over three decades, we have partnered with the world\'s premier transformer manufacturers to build high-reliability cooling systems that sustain the modern electrical grid.'
  }
};

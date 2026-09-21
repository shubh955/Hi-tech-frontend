export interface HeroSlide {
  id: string;
  slideNumber: string;
  headline: string;
  supportingText: string;
  category: string;
  ctaText: string;
  targetSection: string;
  image: string;
  technicalSpec: string;
  colorHex: string;
  colorName: string;
  symbolism: string;
}

export interface QuickLink {
  number: string;
  title: string;
  description: string;
  targetId: string;
  tag: string;
  colorHex: string;
  colorName: string;
  symbolism: string;
}

export interface CapabilityStat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  colorHex: string;
  colorName: string;
}

export interface ProductItem {
  id: string;
  number: string;
  name: string;
  shortCopy: string;
  image: string;
  colorHex: string;
  features: string[];
  applications: string[];
  standards: string[];
}

export interface ApprovedLocation {
  id: string;
  number: string;
  name: string;
  type: string;
  address: string;
  state: string;
  pin: string;
  spec: string;
  colorHex?: string;
  colorName?: string;
  symbolism?: string;
}

export interface ManufacturingFacility {
  id: string;
  unitNumber: string;
  title: string;
  location: string;
  focus: string;
  capacity: string;
  image: string;
  colorName: string;
  colorHex: string;
  rgb: string;
  cmyk: string;
  symbolism: string;
  description: string;
  keyEquipment: string[];
  certifications: string[];
}

export interface ClientPartner {
  name: string;
  division: string;
  verified: boolean;
}

export interface HeroSlide {
  id: string;
  slideNumber: string;
  headline: string;
  supportingText: string;
  /** Short label shown in the slide selector */
  category: string;
  ctaText: string;
  /** Section id to scroll to, or 'enquiry' to open the enquiry form */
  targetSection: string;
  image: string;
  colorHex: string;
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
  /** Label for the card's primary button */
  ctaText: string;
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
  /** Imported logo image URL */
  logo: string;
  /** Visual scale to offset whitespace in the logo file (default 1) */
  scale?: number;
}

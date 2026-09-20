export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "surveillance" | "access" | "networking" | "repair";
  imageUrl: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  equipment: string[];
  detailSlug?: string;
}

export interface ServiceDetailGroup {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  shortIntro: string;
  includedServices: string[];
  whatWeProvide: { title: string; desc: string }[];
  keyFeatures: string[];
  applications: string[];
  installationProcess: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  description: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  roleOrLocation: string;
  rating: number;
  date: string;
  serviceType: string;
  comment: string;
  verified: boolean;
}

export interface StrengthItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName?: string;
  badge?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  honeypot?: string;
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { COMPANY_INFO } from "@/data/companyData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mextech Security System & IT Solutions | CCTV, Security & IT Across India",
    template: "%s | Mextech Security System & IT Solutions",
  },
  description:
    "Professional CCTV, access control, fire alarms, networking, and IT solutions with Pan India service coverage. Primary local office in Delhi NCR. Deals with Hikvision, Honeywell, Prama, CP Plus and partner hardware.",
  keywords: [
    "CCTV installation in Gurgaon",
    "CCTV camera installation Gurgaon",
    "Security system Gurgaon",
    "Pan India CCTV service",
    "CCTV repair Gurgaon",
    "NVR DVR installation Gurugram",
    "Access control Gurgaon",
    "Biometric attendance system Gurugram",
    "Networking and WiFi solutions Gurgaon",
    "Fire alarm system Gurgaon",
    "Video door phone Gurgaon",
    "CCTV AMC maintenance Gurgaon",
  ],
  authors: [{ name: "MEXTECH SECURITY SYSTEM & IT SOLUTIONS" }],
  creator: "MEXTECH",
  publisher: "MEXTECH SECURITY SYSTEM & IT SOLUTIONS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mextechsecurity.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mextechsecurity.com",
    title: "Mextech Security System & IT Solutions | Pan India Service",
    description:
      "Reliable CCTV, Security & IT Solutions for homes, offices and businesses across India. Primary local office in Delhi NCR. 100% genuine products and dedicated after-sales support.",
    siteName: "Mextech Security System & IT Solutions",
    images: [
      {
        url: "/assets/main.jpg",
        width: 1200,
        height: 630,
        alt: "Mextech Security Systems & IT Solutions Gurugram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mextech Security System & IT Solutions | CCTV, Security & IT Across India",
    description: "Reliable CCTV, Security & IT Solutions with Pan India service coverage. Primary local office in Delhi NCR. Serving since 2022.",
    images: ["/assets/main.jpg"],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230284c7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/%3E%3Ccircle cx='12' cy='11' r='3' fill='%230284c7'/%3E%3C/svg%3E",
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurugram",
    "geo.position": "28.5085;77.0274",
    ICBM: "28.5085, 77.0274",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "MEXTECH SECURITY SYSTEM & IT SOLUTIONS",
  image: "/assets/main.jpg",
  description:
    "Professional security and IT solutions company based in Delhi NCR with Pan India service coverage. Specializing in CCTV surveillance, IP cameras, NVR/DVR repair, video door phones, fire alarms, biometric access control, networking and IT security.",
  foundingDate: COMPANY_INFO.established,
  telephone: [COMPANY_INFO.phoneRaw, COMPANY_INFO.phoneSecondaryRaw],
  email: COMPANY_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No-4, Om Vihar Road, Near Bikaner Sweets, Palam Vihar Extension",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    postalCode: "122017",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5085,
    longitude: 77.0274,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  priceRange: "₹₹",
  areaServed: ["IN", "India", "Delhi NCR", "Gurugram", "Gurgaon"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

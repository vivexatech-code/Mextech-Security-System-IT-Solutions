import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

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
    default: "Mextech Security System & IT Solutions | CCTV & Security in Gurugram",
    template: "%s | Mextech Security System & IT Solutions",
  },
  description:
    "Professional CCTV camera installation, access control, fire alarms, networking, and IT solutions in Gurugram, Haryana. Established 2021. Authorized CP Plus, Hikvision, Dahua hardware with same-day site surveys.",
  keywords: [
    "CCTV installation in Gurgaon",
    "CCTV camera installation Gurgaon",
    "Security system Gurgaon",
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
    title: "Mextech Security System & IT Solutions | Gurugram, Haryana",
    description:
      "Reliable CCTV, Security & IT Solutions for Homes, Offices & Businesses in Gurugram. 100% Genuine products, neat concealed cabling and dedicated after-sales support.",
    siteName: "Mextech Security System & IT Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mextech Security Systems & IT Solutions Gurugram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mextech Security System & IT Solutions | CCTV & Security Gurugram",
    description: "Reliable CCTV, Security & IT Solutions for Homes, Offices & Businesses in Gurugram. Established 2021.",
    images: ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"],
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
  image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
  description:
    "Professional security and IT solutions company based in Gurugram, Haryana. Established 2021. Specializing in CCTV surveillance, IP cameras, NVR/DVR repair, video door phones, fire alarms, biometric access control, networking and IT security.",
  foundingDate: "2021",
  telephone: "+918510929404",
  email: "mextech.ncr@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 23A / Palam Vihar Extension",
    addressLocality: "Gurugram",
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
  areaServed: ["Gurugram", "Gurgaon", "Manesar", "Delhi NCR", "Sohna", "Faridabad"],
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

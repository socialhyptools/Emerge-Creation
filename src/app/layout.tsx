import type { Metadata } from "next";
import { Inter, Poppins, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { OrganizationJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500"],
  variable: "--font-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Emerge Digital — Healthcare Marketing Agency Chennai | Tamil Nadu",
    template: "%s | Emerge Digital",
  },
  description:
    "Chennai's only digital marketing agency exclusively for hospitals, clinics & healthcare providers. Local SEO, Google Ads, Social Media & Reputation Management across Tamil Nadu.",
  keywords: [
    "healthcare digital marketing agency Chennai",
    "hospital marketing agency Tamil Nadu",
    "clinic SEO Chennai",
    "medical marketing agency",
    "Google Ads for hospitals",
    "healthcare social media marketing",
  ],
  authors: [{ name: "Emerge Digital" }],
  creator: "Emerge Digital",
  metadataBase: new URL("https://emergedigital.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://emergedigital.in",
    siteName: "Emerge Digital",
    title: "Emerge Digital — Healthcare Marketing Agency Chennai",
    description:
      "Tamil Nadu's only digital marketing agency for hospitals & clinics. OPD leads. Google rankings. Real ROI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emerge Digital Healthcare Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerge Digital — Healthcare Marketing Agency Chennai",
    description:
      "Tamil Nadu's only digital marketing agency for hospitals & clinics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${notoSansTamil.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optimize font display
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap", // Optimize font display
});

// Base URL for canonical links and absolute URLs
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://memphiscapital.co.ke";

// Enhanced metadata with comprehensive SEO
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Memphis Capital | Premium Financial Advisory & Capital Sourcing",
    template: "%s | Memphis Capital" // Template for nested pages
  },
  description: "Leading advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive sustainable growth across East Africa.",
  applicationName: "Memphis Capital",
  authors: [{ name: "Memphis Capital", url: baseUrl }],
  generator: "Next.js",
  keywords: [
    "Financial Advisory", 
    "Capital Sourcing", 
    "Business Strategy", 
    "Market Research", 
    "Investment", 
    "Transaction Advisory", 
    "East Africa", 
    "Kenya",
    "Deal Structuring",
    "Funding",
    "Financial Modelling"
  ],
  creator: "Memphis Capital",
  publisher: "Memphis Capital",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  category: "finance",
  
  // OpenGraph metadata for rich sharing on social media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Memphis Capital",
    title: "Memphis Capital | Premium Financial Advisory & Capital Sourcing",
    description: "Leading advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive sustainable growth across East Africa.",
    images: [
      {
        url: "/memphislogo.png", // Using your logo
        width: 1200,
        height: 630,
        alt: "Memphis Capital - Premium Financial Advisory",
        type: "image/png"
      }
    ],
  },
  
  // Twitter specific metadata
  twitter: {
    card: "summary_large_image",
    title: "Memphis Capital | Premium Financial Advisory Services",
    description: "Leading advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research across East Africa.",
    images: ["/memphislogo.png"], // Using your logo
    creator: "@memphiscapital",
    site: "@memphiscapital"
  },
  
  // Additional verification for search consoles (add your IDs if available)
  verification: {
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#D4AF37', // Gold color to match your brand
      },
    ],
  },
  
  // Web manifests and app configurations
  manifest: '/site.webmanifest',
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  
  // Alternate languages (uncomment and modify if you have multiple language versions)
  // alternates: {
  //   canonical: baseUrl,
  //   languages: {
  //     'en-US': `${baseUrl}/en-US`,
  //     'sw-KE': `${baseUrl}/sw-KE`,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <link rel="canonical" href={baseUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen bg-background font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Memphis Capital",
            "url": baseUrl,
            "logo": `${baseUrl}/memphislogo.png`,
            "sameAs": [
              "https://www.linkedin.com/company/memphis-capital",
              "https://twitter.com/memphiscapital"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254-733-900-225",
              "contactType": "customer service",
              "areaServed": "East Africa",
              "availableLanguage": ["English", "Swahili"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Western Heights",
              "addressLocality": "Westlands",
              "addressRegion": "Nairobi",
              "postalCode": "",
              "addressCountry": "KE"
            },
            "description": "Leading advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive sustainable growth across East Africa."
          })
        }} />
      </body>
    </html>
  );
}
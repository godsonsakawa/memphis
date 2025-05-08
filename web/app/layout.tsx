import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memphis Capital | Business Strategy & Capital Sourcing",
  description: "Advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive growth.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://memphiscapital.co.ke",
    siteName: "Memphis Capital",
    title: "Memphis Capital | Business Strategy & Capital Sourcing",
    description: "Advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive growth.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Memphis Capital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Memphis Capital | Business Strategy & Capital Sourcing",
    description: "Advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive growth.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
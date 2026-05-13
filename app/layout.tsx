import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { FloatingPanel } from "@/components/ui/FloatingPanel";
import { siteConfig } from "@/config/site";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="relative min-h-screen overflow-x-clip bg-background">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(85,124,250,0.16),_transparent_46%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.045)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]" />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <FloatingPanel />
        </div>
      </body>
    </html>
  );
}

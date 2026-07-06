import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AxiosProvider } from "@/providers/AxiosProvider";
import { OtpModalProvider } from "@/providers/OtpModalProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingPromoBanner } from "@/components/layout/FloatingPromoBanner";
import { WaitlistBanner } from "@/components/layout/WaitlistBanner";
import { StorageAccessGuard } from "@/components/layout/StorageAccessGuard";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "OpenMarket - Be Active. Be Visible. !!",
  description: "Join the movement to build a fair B2B marketplace where visibility is earned through activity, engagement, trust, and contribution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased bg-white`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white">
        <StorageAccessGuard />
        <AxiosProvider>
          <OtpModalProvider>
            <Header />
            {children}
            <FloatingPromoBanner />
            <WaitlistBanner />
            <Footer />
          </OtpModalProvider>
        </AxiosProvider>
      </body>
    </html>
  );
}

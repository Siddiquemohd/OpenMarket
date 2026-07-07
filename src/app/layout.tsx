import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
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

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${inter.variable} ${manrope.variable} h-full antialiased bg-white`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EX3N3VYPCM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EX3N3VYPCM');
          `}
        </Script>
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

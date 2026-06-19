import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AxiosProvider } from "@/providers/AxiosProvider";
import { OtpModalProvider } from "@/providers/OtpModalProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingPromoBanner } from "@/components/layout/FloatingPromoBanner";
import { siteConfig } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "OpenMarket - Where Fair Trade Matters",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-white`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white">
        <Script id="storage-access-guard" strategy="beforeInteractive">
          {`
            (function () {
              function createMemoryStorage() {
                var store = {};
                return {
                  getItem: function (key) {
                    key = String(key);
                    return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
                  },
                  setItem: function (key, value) {
                    store[String(key)] = String(value);
                  },
                  removeItem: function (key) {
                    delete store[String(key)];
                  },
                  clear: function () {
                    store = {};
                  },
                  key: function (index) {
                    return Object.keys(store)[index] || null;
                  },
                  get length() {
                    return Object.keys(store).length;
                  }
                };
              }

              function patchStorage(name) {
                try {
                  window[name].getItem("__openmarket_storage_test__");
                } catch (error) {
                  try {
                    Object.defineProperty(window, name, {
                      configurable: true,
                      value: createMemoryStorage()
                    });
                  } catch (_) {}
                }
              }

              patchStorage("sessionStorage");
              patchStorage("localStorage");
            })();
          `}
        </Script>
        <AxiosProvider>
          <OtpModalProvider>
            <Header />
            {children}
            <FloatingPromoBanner />
            <Footer />
          </OtpModalProvider>
        </AxiosProvider>
      </body>
    </html>
  );
}

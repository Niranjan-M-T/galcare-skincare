import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";

export const metadata: Metadata = {
  title: "Galcare Pharmaceuticals - High-End Skincare & Manufacturing",
  description: "Specializing in dermatology, skin care products, and 3rd party pharmaceutical manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased bg-white scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-white selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <PageLoader>
          <Navbar />
          <main className="flex-grow pt-32 overflow-hidden">
            {children}
          </main>
          <Footer />
        </PageLoader>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/layout/Footer";
import Navbarin from "@/components/layout/Navbar";
import { govPartnersImages } from "@/lib/constants";
import OurPartnersLogoSlider from "@/components/common/ourPartnersLogoSlider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ubiquity",
  description: "Skill India Mission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbarin />
        <div className="min-h-[500px]">
          {children}
        </div>
        <div className="mb-4 bg-gray-100 py-5 px-6">
          <OurPartnersLogoSlider
            title={"Government Partners"}
            images={govPartnersImages}
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}

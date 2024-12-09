import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giaic UI/IX Hackathon | Home",
  description: "Giaic UI/IX Hackathon made by Anas Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden md:flex bg-black py-4 px-8 flex-wrap text-white justify-between">
          <div className="flex gap-4 items-center">
            <a href="tel:+(225) 555-0118">(225) 555-0118</a>
            <a href="mailto:anasahmedd244@gmail.com">anasahmedd244@gmail.com</a>
          </div>
          <p>Follow Us and get a chance to win 80% off
          </p>
          <div className="flex gap-2 justify-between items-center">
            Follow Us : 
            <span><FaInstagram/></span>
            <span><FaYoutube/></span>
            <span><FaFacebook/></span>
            <span><FaTwitter/></span>
          </div>
        </div>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

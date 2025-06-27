"use client";
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <title>Design In Studio | Design your vision Shape your future</title>
        <meta name="description" content="Design In Studio offers graphic design, web development, UI/UX, AI Solutions, SEO, and digital marketing services." />
        <meta name="keywords" content="Design In Studio, graphic design, web development, UI/UX design, AI solutions, SEO, digital marketing" />
        
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}

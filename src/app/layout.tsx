import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}  ${poppins.variable} antialiased`}
      >
        <Header></Header>
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Hiarea Travel",
  description: "Travel UI/UX App For Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      <main 
      className="relative 
      overflow-hidden" >
      </main>
        {children}
        <Footer />
        </body>
    </html>
  );
}

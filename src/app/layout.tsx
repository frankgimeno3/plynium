import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/rootcomponents/Navbar";
import Footer from "./components/rootcomponents/Footer";
import { UIProvider } from "./components/context/UIContext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plynium",
  description: "Specialized news for professionals and industries worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UIProvider>
          <Navbar />
          <main className="min-h-screen bg-gray-100">
            {children}
          </main>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}

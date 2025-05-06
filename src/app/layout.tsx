import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/customComponents/Header";
import Footer from "@/components/customComponents/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ModeToggle } from "@/components/customComponents/ThemeToggler";
import { ThemeProvider } from "@/providers/ThemeProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filmzy",
  description:
    "Explore the latest films, view detailed movie info, and keep track of your favorites and watchlist with Filmzy — your go-to hub for movie discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#30273d] text-white`}
        >
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          <Header />
          <main className="min-h-screen relative">
            {children}
            <div className=" bottom-2 sticky w-full flex justify-end px-2.5">
              <ModeToggle />
            </div>
          </main>
          <Footer />
          {/* </ThemeProvider> */}
        </body>
      </ClerkProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/customComponents/Header";
import Footer from "@/components/customComponents/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ModeToggle } from "@/components/customComponents/ThemeToggler";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/ThemeProvider";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

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
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body
          className={`${geistSans.className}  antialiased bg-[#ad94d1] dark:bg-[#30273d] text-white`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen relative">
              {children}
              <div className=" bottom-2 sticky w-full flex justify-end px-2.5 z-100">
                <ModeToggle />
              </div>
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}

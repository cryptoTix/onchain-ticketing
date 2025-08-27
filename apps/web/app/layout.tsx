import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./contexts/Providers";
import Layout from "./components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const gilroy = localFont({
  src: "./fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "CryptoTix",
  description: "Ticketing for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} ${gilroy.variable}`}>
        <Providers>
          <Layout>{children}</Layout>
          {/* <footer className="px-10 py-6 flex justify-between items-center border-t border-gray-700">
            <h2 className="text-yellow-400 font-bold text-xl">CRYPTOTIX</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Contact For Partnership</button>
            <div className="flex gap-4">
              <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
              <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            </div>
          </footer> */}
        </Providers>
      </body>
    </html>
  );
}

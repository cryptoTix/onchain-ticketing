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
  title: "Kryptix | All-Time High",
  description: "Crypto Tickets",
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
        </Providers>
      </body>
    </html>
  );
}

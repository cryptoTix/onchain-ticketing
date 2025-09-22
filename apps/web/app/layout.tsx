import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./contexts/Providers";
import Layout from "./components/layout";
import { ToastNotification } from "./components/Toast/ToastNotification";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const gilroy = localFont({
  src: "./fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "KryptoTix",
  description: "Ticketing for everyone",
  icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  },
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
          <ToastNotification/>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

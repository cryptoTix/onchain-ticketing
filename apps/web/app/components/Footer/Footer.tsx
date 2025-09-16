"use client"
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { useRouter } from "next/navigation";
import React from "react";

export const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full mt-12 border-t border-white/20 pt-6">
      <div className="w-full flex flex-col gap-4 header-sm:gap-0 header-sm:flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <Image
            src={logo}
            width={246}
            height={146}
            alt="logo"
            className="mt-[6px] hover:brightness-75 hover:cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <a
          href="mailto:cryptotix2@gmail.com?subject=Partnership%20Inquiry"
          aria-label="Contact for partnership via email"
          className="flex items-center gap-x-1 py-2 px-4 text-white bg-blue-600 hover:bg-blue-500 rounded"
        >
          Contact for Partnership
        </a>

        <div className="text-sm text-white/80">
          © {new Date().getFullYear()} On-Chain Ticketing
        </div>
      </div>
    </div>
  );
};

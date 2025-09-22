"use client"
import Image from "next/image";
import logo from "../../assets/footerLogo.svg";
import { useRouter } from "next/navigation";
import React from "react";

export const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full mt-auto">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white/20 mt-10" />
      <div className="w-full flex flex-col gap-4 header-sm:gap-0 header-sm:flex-row justify-between items-center pt-6">
        <div className="flex flex-row gap-2">
        <Image src={logo} width={200} alt="logo"
            className="mt-[6px] hover:brightness-75 hover:cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <a
          href="mailto:cryptotix2@gmail.com?subject=Partnership%20Inquiry"
          aria-label="Contact for partnership via email"
          className="flex items-center gap-x-1 py-2 px-4 text-white bg-[#2A2A2A] hover:bg-blue-500 rounded"
        >
          Contact for Partnership
        </a>

        <div className="text-sm text-white/80">
          © {2025} Krypto Tix
        </div>
      </div>
    </div>
  );
};

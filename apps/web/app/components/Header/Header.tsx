"use client"
import Image from "next/image";
import logo from "../../assets/logoK.svg";
import { ConnectButton } from "../ConnectButton/ConnectButton";
import { usePathname, useRouter } from "next/navigation";
import { SelectCityCard } from "../LocationCard/LocationCard";

export const Header: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="w-full flex flex-col">
    <div className="w-full flex flex-col gap-4 header-sm:gap-0 header-sm:flex-row justify-between">
      <div className="flex flex-row gap-2">
        <Image src={logo} width={200} alt="logo" className="mt-[6px] hover:cursor-pointer" onClick={() => router.push("/")}/>
      </div>
      <div className="flex flex-col gap-4 header-sm:flex-row sm:gap-8 items-center">
        <SelectCityCard/>
        {<button
          className="flex items-center gap-x-1 py-2 px-4 text-white hover:brightness-75 rounded font-nunito font-bold border border-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => pathName.localeCompare("/order-history") == 0 ? window.location.reload() : router.push("/order-history") }
        >
          <Image
            src="/uil_bill.svg"
            alt="Order History"
            width={20}
            height={10}
          />
          Order History
        </button>}
        <ConnectButton />
      </div>
    </div>
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white/10 mt-2 sm:mt-5" />
    </div>
  );
};

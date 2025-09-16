"use client"
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { ConnectButton } from "../ConnectButton/ConnectButton";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { SelectCityCard } from "../LocationCard/LocationCard";

export const Header: React.FC = () => {
  const router = useRouter();
  const {isConnected} = useAccount()
  return (
    <div className="w-full flex flex-col gap-4 header-sm:gap-0 header-sm:flex-row hover:brightness-75 justify-between">
      <div className="flex flex-row gap-2">
        <Image src={logo} width={246} height={146} alt="logo" className="mt-[6px] hover:cursor-pointer" onClick={() => router.push("/")}/>
      </div>
      <div className="flex flex-col gap-4 header-sm:flex-row sm:gap-8 items-center">
        <SelectCityCard/>
        {isConnected ? <button
          className="flex items-center gap-x-1 py-2 px-4 text-white hover:brightness-75 rounded font-nunito font-bold border border-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => {
            // Add your navigation logic here
            router.push("/order-history");
          }}
        >
          <Image
            src="/uil_bill.svg"
            alt="Order History"
            width={20}
            height={10}
          />
          Order History
        </button> : <div/>}
        <ConnectButton />
      </div>
    </div>
  );
};

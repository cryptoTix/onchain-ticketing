import Image from "next/image";
import logo from "../../assets/logo.svg";
import { ConnectButton } from "../ConnectButton/ConnectButton";

export const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4 header-sm:gap-0 header-sm:flex-row items-center justify-between">
      <div className="flex flex-row gap-2">
        <Image src={logo} width={46} height={46} alt="logo" className="mt-[6px]" />
        <h1 className="text-black font-spline text-3xl font-light">
          Karak
        </h1>
      </div>
      <div className="flex flex-col gap-4 header-sm:flex-row sm:gap-8 items-center">
        <ConnectButton />
      </div>
    </div>
  );
};

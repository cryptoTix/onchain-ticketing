"use client";

import Image from "next/image";
import { DSSItem } from "../../types/types";
import { DSSLoadingCard } from "./DSSLoadingCard";
import dssFallbackImg from "../../assets/dss.svg";

interface Props {
  services: DSSItem[];
  isPending: boolean;
  isError: boolean;
}

export const DSSCards: React.FC<Props> = ({ services, isPending, isError }) => {
  if (isPending || isError) {
    return (
      <DSSLoadingCard />
    );
  }

  return (
    <div className="w-full grid grid-cols-1 grid-pool-sm:grid-cols-2 grid-pool-md:grid-cols-3 gap-4">
      {services.map((service, index) => (
        <div
          className="flex flex-col gap-4 border border-light-gray-border px-6 py-12 rounded-md"
          key={index}
        >
          <div className="flex gap-2 items-center mb-8">
            <Image src={services[0]?.img ?? dssFallbackImg} alt="" className="size-9" />
            <p className="text-xl font-semibold">{service.name}</p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <p className="text-base font-[700] font-nunito">OPERATORS</p>
              <p className="text-lg">{service.numOperators}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-base font-[700] font-nunito">NETWORKS</p>
              <div className="flex items-center">
                {service.networks.map((elem, index) => (
                  <Image
                    key={index}
                    src={elem}
                    alt="network"
                    className={`size-6 ${service.networks.length === 1 ? `-ml-0` : `-ml-2`} ${index === 0 ? "z-20" : index === 1 ? "z-10" : "z-0"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

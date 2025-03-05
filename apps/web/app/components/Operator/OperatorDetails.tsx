"use client";

// import Image from "next/image";
// import { DSSItem } from "../../types/types";
// import { DSSs } from "../DSS/DSSs";

// const dssItem: DSSItem = {
//   name: "Hypernative",
//   img: mkr,
//   alt: "hypernative",
//   numOperators: 123,
//   networks: [etherfi, blast, mkr],
//   numStakers: 123000,
//   rewards: "14%",
// };

// const dssArray: DSSItem[] = [dssItem, dssItem];

export const OperatorDetails: React.FC = () => {
  return (
    <div />
    // <div>
    //   <div className="flex flex-col items-start lg:flex-row gap-10 w-full mt-24">
    //     <div className="flex flex-col gap-10 md:w-9/12 lg:w-6/12">
    //       <div className="flex flex-row items-center gap-3">
    //         <Image
    //           src={mkr}
    //           width={55}
    //           height={55}
    //           alt="figment"
    //           className="rounded-full"
    //         />
    //         <h2 className="font-nunito text-light-black font-semibold text-xl sm:text-3xl tracking-wider">
    //           Figment
    //         </h2>
    //       </div>
    //       <div className="flex flex-col gap-1">
    //         <p className="text-light-black tracking-wider whitespace-pre-line">
    //           Figment is a decentralized staking pool protocol for Ethereum. The
    //           Rocket Pool ETH (rETH) token is a liquid staking token within the
    //           Rocket Pool protocol. The rETH token represents an amount of ETH
    //           that is being staked and rewarded within the Ethereum
    //           Proof-of-Stake.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="w-full lg:w-[40rem] grid grid-cols-1 sm:grid-cols-2 gap-3 ml-auto">
    //       <div className="flex flex-col gap-4 bg-white border border-light-gray-border rounded-md px-6 py-4">
    //         <p className="font-nunito font-[700] text-sm">TOTAL RESTAKED</p>
    //         <p className="text-xl font-semibold">$123.45k</p>
    //       </div>
    //       <div className="flex flex-col gap-4 bg-white border border-light-gray-border rounded-md px-6 py-4">
    //         <p className="font-nunito font-[700] text-sm">STAKERS</p>
    //         <p className="text-xl font-semibold">103</p>
    //       </div>
    //       <div className="flex flex-col gap-4 bg-white border border-light-gray-border rounded-md px-6 py-4">
    //         <p className="font-nunito font-[700] text-sm">NETWORKS</p>
    //         <div className="flex items-center ml-2">
    //           {[etherfi, blast, mkr].map((elem, index) => (
    //             <Image
    //               key={index}
    //               src={elem}
    //               alt="network"
    //               className={`size-8 -ml-2 ${index === 0 ? "z-20" : index === 1 ? "z-10" : "z-0"}`}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-4 bg-white border border-light-gray-border rounded-md px-6 py-4">
    //         <p className="font-nunito font-[700] text-sm">RESTAKED DIVERSITY</p>
    //         <p className="text-xl font-semibold">1.31%</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-16">
    //     <h2 className="text-lg mb-4">RESTAKED ASSETS</h2>
    //     <div className="w-full lg:w-10/12 grid grid-pool-sm:grid-cols-2 grid-pool-md:grid-cols-3 gap-2">
    //       <div className="bg-white border border-light-gray-border flex items-center justify-between rounded-md px-4 py-3">
    //         <div className="flex items-center gap-1">
    //           <Image src={mkr} alt="figment" className="rounded-full size-6" />
    //           <p>BTC</p>
    //         </div>
    //         <p>45.62k restaked</p>
    //       </div>
    //       <div className="bg-white border border-light-gray-border flex items-center justify-between rounded-md px-4 py-3">
    //         <div className="flex items-center gap-1">
    //           <Image src={mkr} alt="figment" className="rounded-full size-6" />
    //           <p>BTC</p>
    //         </div>
    //         <p>45.62k restaked</p>
    //       </div>
    //       <div className="bg-white border border-light-gray-border flex items-center justify-between rounded-md px-4 py-3">
    //         <div className="flex items-center gap-1">
    //           <Image src={mkr} alt="figment" className="rounded-full size-6" />
    //           <p>BTC</p>
    //         </div>
    //         <p>45.62k restaked</p>
    //       </div>
    //       <div className="bg-white border border-light-gray-border flex items-center justify-between rounded-md px-4 py-3">
    //         <div className="flex items-center gap-1">
    //           <Image src={mkr} alt="figment" className="rounded-full size-6" />
    //           <p>BTC</p>
    //         </div>
    //         <p>45.62k restaked</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-16">
    //     <h2 className="text-lg mb-4">SECURED SERVICES</h2>
    //     <DSSs services={dssArray} location="operator-details" />
    //   </div>
    // </div>
  );
};

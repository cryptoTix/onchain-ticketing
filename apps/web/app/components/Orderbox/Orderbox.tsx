"use client";

import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { Deposit } from "./Deposit";
import { Unstake } from "./Unstake";

export const Orderbox: React.FC = () => {
  const [tab, setTab] = useState<string>("Deposit");
  return (
    <div
      className={
        `bg-white shadow-xl rounded-md m-auto h-fit ${tab === "Deposit" ? `w-full sm:w-[32rem]` : `w-full md:w-[42rem]`}`
      }
    >
      <Tab.Group>
        <Tab.List className="w-full border border-primary-orange border-b-0.2 border-l-0 border-r-0 border-t-0">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                onClick={() => setTab("Deposit")}
                className={`${selected ? `bg-secondary-orange` : `transparent`} ${selected ? `text-primary-orange` : `text-primary-gray`} rounded-tr-md rounded-tl-md font-[500] text-2xl w-6/12 p-4 track-wide focus:outline-none`}
              >
                DEPOSIT
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                onClick={() => setTab("Unstake")}
                className={`${selected ? `bg-secondary-orange` : `transparent`} ${selected ? `text-primary-orange` : `text-primary-gray`} rounded-r-md font-[500] text-2xl w-6/12 p-4 track-wide focus:outline-none`}
              >
                UNSTAKE
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="px-5 py-8">
          <Tab.Panel>
            <Deposit />
          </Tab.Panel>
          <Tab.Panel>
            <Unstake />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

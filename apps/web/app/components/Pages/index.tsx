import { Tab } from "@headlessui/react";
import Image from "next/image";
import restakeDark from "../../assets/navbar/restake-dark.svg";
import restakeLight from "../../assets/navbar/restake-light.svg";
import portfolioDark from "../../assets/navbar/portfolio-dark.svg";
import portfolioLight from "../../assets/navbar/portfolio-light.svg";
import exploreDark from "../../assets/navbar/explore-dark.svg";
import exploreLight from "../../assets/navbar/explore-light.svg"
import { DSSs } from "../DSS/DSSs";
import { Operators } from "../Operator/Operators";
import { Portfolio } from "../Portfolio/Portfolio";
import { Orderbox } from "../Orderbox/Orderbox";
import { Tvl } from "../Tvl/Tvl";

export const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-12 w-full gap-12">
      <Tab.Group>
        <Tab.List className="w-[23rem] custom-sm:w-[24.5rem] flex items-center justify-center gap-2 py-[1px] bg-gray-100 border border-gray-50 rounded-full">
          <Tab className="outline-none">
            {({ selected }) => (
              <div
                className={`${selected ? `bg-white rounded-l-full rounded-r-full shadow-sm` : `transparent text-[#97989A]`} my-1 px-4 py-[1px] outline-none`}
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={selected ? restakeDark : restakeLight}
                    alt=""
                    className="size-4 custom-sm:size-5"
                  />
                  <p className="text-sm custom-sm:text-base">Restake</p>
                </div>
              </div>
            )}
          </Tab>
          <Tab className="outline-none">
            {({ selected }) => (
              <div
                className={`${selected ? `bg-white rounded-full shadow-sm` : `transparent text-[#97989A]`} my-1 px-4 py-[1px] outline-none`}
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={selected ? portfolioDark : portfolioLight}
                    alt=""
                    className="size-4 custom-sm:size-5"
                  />
                  <p className="text-sm custom-sm:text-base">Portfolio</p>
                </div>
              </div>
            )}
          </Tab>
          <Tab className="outline-none">
            {({ selected }) => (
              <div
                className={`${selected ? `bg-white rounded-full text-black shadow-sm` : `transparent text-[#97989A]`} my-1 px-4 py-[1px] outline-none`}
              >
                <div className="flex gap-[0.375rem] items-center">
                  <Image
                    src={selected ? exploreDark : exploreLight}
                    alt=""
                    className="size-4 custom-sm:size-5"
                  />
                  <p className="text-sm custom-sm:text-base">Explore</p>
                </div>
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="w-full">
          <Tab.Panel>
            <Orderbox />
          </Tab.Panel>
          <Tab.Panel>
            <Portfolio />
          </Tab.Panel>
          <Tab.Panel>
            <Operators />
            {/* <DSSs /> */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Tvl />
    </div>
  );
};

"use client";

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { DarkChevronDownIcon } from "../Shared/shared";
import { chainImageMap } from "../../constants/constants";
import { fetchChainName, getTokenImg } from "../../utils/helpers";

export type DropdownItem = {
  key: string;
  label: string;
  icon?: string;
};

interface DropdownCardProps {
  selectedItemVal : string;
  items : {itemImage : string, itemValue : string}[];
  onClickItem : (val : string) => void;
  isNetwork : boolean
}

export const DropdownCard: React.FC<DropdownCardProps> = ({
  selectedItemVal,
  items,
  onClickItem,
  isNetwork
}) => {
  return (
    <Menu>
      <Menu.Button 
        className={`w-full p-2 rounded border border-purple-700`}>
        <div className="flex gap-2 items-center">
          <Image
            src={isNetwork ? chainImageMap[parseInt(selectedItemVal)] : getTokenImg(selectedItemVal) ?? ""}
            alt={selectedItemVal ?? ""}
            className="size-6"
          />
          <p className="font-semibold text-base">
            {isNetwork ? fetchChainName(selectedItemVal) : selectedItemVal}
          </p>
          <div className="ml-auto">
            <DarkChevronDownIcon />
          </div>
        </div>
      </Menu.Button>
      <div className="relative w-full">
        {items.length > 0 && (
          <Menu.Items className="absolute w-full bg-indigo-300 rounded border border-black mt-[8px]">
            {items.map((item, index) => (
              (<Menu.Item key={index}>
                  <div
                    className={`${item.itemValue.localeCompare(selectedItemVal) == 0 && "bg-purple-100"} hover:bg-purple-100 hover:cursor-pointer rounded px-2 py-2`}
                    onClick={() => {
                      onClickItem(item.itemValue)
                    }}
                  >
                    <div className="flex space-x-1">
                      <Image
                        src={item.itemImage ?? ""}
                        alt={item.itemValue}
                        className="size-4 mt-1"
                      />
                      <p className="font-[500] text-base">
                      {isNetwork ? fetchChainName(item.itemValue) : item.itemValue}
                      </p>
                    </div>
                  </div>
                </Menu.Item>)
            ))}
          </Menu.Items>
        )}
      </div>
    </Menu>
  )

};
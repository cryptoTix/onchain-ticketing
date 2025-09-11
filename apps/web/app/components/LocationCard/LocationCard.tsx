import { Menu, Transition } from "@headlessui/react";
import React, { useEffect, useState, useMemo } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useCities } from "../../hooks/cities";
import { useLocationStore } from "../../store/location";
import { usePathname } from "next/navigation";

export const SelectCityCard: React.FC = () => {
  const [inputText, setInputText] = useState<string>("")
  const {location, setLocation} = useLocationStore()
  const { data : countries} = useCities()
  const pathName = usePathname();
  const isModifyDisabled = useMemo(() => !(pathName.localeCompare("/") == 0 || pathName.startsWith("/sellers")), [pathName])
  const filteredCountry = useMemo(
    () => {
      return countries ? 
      (countries).filter((c) => !inputText || c.cityName.toLowerCase().includes(inputText.toLowerCase())) : [];
    },
    [countries, inputText]
  );

  useEffect(() => {
    if (!location && countries && countries.length > 0) setLocation(countries[0].cityName)
  }, countries)

  return (
    <Menu as='div' className={"flex flex-col justify-start"}>
      <Menu.Button className={`inline-flex rounded p-2 space-x-2 ${!isModifyDisabled ? "hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75" : ""}`} disabled={isModifyDisabled}>
        <div className="flex items-center text-bold">
          {location || "Select city..."}
        </div>
        <HiLocationMarker size={20} />
      </Menu.Button>
      <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        {(
          <Menu.Items
          className="absolute divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div className="bg-indigo-300 border-b rounded-lg">
              <input
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value ? e.target.value.trim() : "")
                  console.log(inputText)}
                }
                onBlur={() => setInputText(null)}
                placeholder="Select city…"
                aria-label="Location"
                className="rounded border border-black px-2 py-1 bg-white text-black outline-none flex space-x-1 font-medium text-base"
              />
            </div>
            {/* Scrollable list */}
            <div className="max-h-64 overflow-y-auto">
              {(!filteredCountry || filteredCountry.length === 0) &&
                <div
                className={`${
                  'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <div className="flex space-x-1 font-medium text-base">
                    {"No matching city..."}
                  </div>
                </div>}
                {filteredCountry.map((country, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        setLocation(country.cityName);
                        setInputText(null);
                      }}
                    >
                      <div className="flex space-x-1">
                        <p className="font-medium text-base">{country.cityName}</p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
}

"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type LocationState = {
  location: string;
  setLocation: (loc: string) => void;
};

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      location: null,
      setLocation: (loc) => set({ location: loc }),
      
    }),
    { name: "app-location" } // key in localStorage
  )
);

type DisableLocationState = {
  isModifyDisabled : boolean;
  setIsModifyDisabled: (val : boolean) => void;
}
export const useDisableLocation = create<DisableLocationState>()(
  persist(
    (set) => ({
      isModifyDisabled: false,
      setIsModifyDisabled: (val) => set({ isModifyDisabled: val }),
    }),
    { name: "app-modifyLocation" } // key in localStorage
  )
)
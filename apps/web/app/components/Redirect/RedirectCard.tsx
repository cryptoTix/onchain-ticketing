import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useLocationStore } from "../../store/location";

export const RedirectCard : React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const location = searchParams.get("city");
  const pathName = usePathname();
  const { location : selectedLocation } = useLocationStore()
  useEffect(() => {
    if (selectedLocation && (!location || location.localeCompare(selectedLocation)!=0)) {
      router.replace(pathName + "?" + "city=" + selectedLocation)
    }
  }, [selectedLocation, searchParams])
  return <></>
}
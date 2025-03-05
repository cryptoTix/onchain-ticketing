import React, { useContext, useEffect, useState } from "react";
import { BLOCKED_COUNTRIES } from "../constants/constants";
import { Logger } from "../utils/logger";

export type BlockedUserContextValue = {
  isBlocked: boolean;
};
const BlockedUserContext = React.createContext<BlockedUserContextValue>({
  isBlocked: false,
});

export function useBlockedUser() {
  return useContext(BlockedUserContext);
}

export const BlockedUserProvider: React.FC<any> = ({ children }) => {
  const [userBlocked, setUserBlocked] = useState<BlockedUserContextValue>({
    isBlocked: false,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const userCountry = data.country_name as string;
        setUserBlocked({ isBlocked: BLOCKED_COUNTRIES.includes(userCountry) });
      } catch (err) {
        Logger.error("Error fetching user ip-related data:", err);
        setUserBlocked({ isBlocked: false });
      }
    };

    fetchUserData();
  }, []);

  return (
    <BlockedUserContext.Provider value={userBlocked}>
      {children}
    </BlockedUserContext.Provider>
  );
};

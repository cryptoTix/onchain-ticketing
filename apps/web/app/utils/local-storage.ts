import { Dispatch, SetStateAction, useEffect, useState } from "react";

// function getStorageValue<T>(key: string, defaultValue: T): T {
//   if (typeof window !== 'undefined') {
//     const saved = localStorage.getItem(key);
//     return saved && saved !== "undefined" ? JSON.parse(saved) as T : defaultValue;
//   }
//   return defaultValue;
// }

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>("" as T);

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved && saved !== "undefined") {
      setValue(JSON.parse(saved) as T);
    } else {
      setValue(defaultValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

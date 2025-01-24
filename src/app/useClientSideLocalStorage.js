"use client";

import { useEffect, useState } from "react";

function useClientSideLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        setValue(storedValue);
      } else {
        localStorage.setItem(key, defaultValue);
      }
    }
  }, [key, defaultValue]);

  return [value, setValue];
}

export default useClientSideLocalStorage;
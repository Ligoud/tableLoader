import React, { useCallback, useState } from "react";
//
export const packageContext = React.createContext();

export const usePackageContext = () => {
  //package size either small or large
  const [packageSize, setPackageSize] = useState("none");
  const setPackageContext = useCallback((size) => {
    setPackageSize(size);
  }, []);

  //returns value object for packageContext
  return {
    packageSize,
    setPackageContext,
  };
};

import React, { useCallback, useState } from "react";
//Для хранения размера получаемых с сервера данных
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

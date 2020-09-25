import React, { useState } from "react";

export const currentPageContext = React.createContext();

export const useCurrentPageContext = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };
  return {
    currentPage,
    updateCurrentPage,
  };
};

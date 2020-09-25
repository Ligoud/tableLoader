import React, { useState } from "react";

export const selectedRowContext = React.createContext();

export const useSelectedRowContext = () => {
  //selectedRow это объект, содержащий информацию о строке, на которую нажал пользователь
  const [selectedRow, setSelectedRow] = useState();

  //Устанавливает информацию для выбранной строки
  function updateSelectedRow(rowObject) {
    setSelectedRow(rowObject);
  }

  return {
    selectedRow,
    updateSelectedRow,
  };
};

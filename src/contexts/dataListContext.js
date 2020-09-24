import React, { useState } from "react";
import TableData from "../js/dataList";
//Для хранения объекта класса dataList
export const dataListContext = React.createContext();

//Создаю кастомный хук для обновления состояния экземляра класса dataList
export const useDataListContext = () => {
  const [dataList, setDataList] = useState();
  //Умнее решения не придумал
  const [updateForcer, setUpdateForcer] = useState({});

  const initDataList = (data) => {
    setDataList(new TableData(data));
  };
  //Обновляет updateForcer для того, чтобы произошел ререндер
  const forceToUpdate = () => {
    setUpdateForcer(new Date());
  };
  return {
    dataList,
    updateForcer,
    initDataList,
    forceToUpdate,
  };
};

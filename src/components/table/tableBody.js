import React, { useContext, useEffect, useState } from "react";
import { packageContext } from "../../contexts/packageContext";
import Fetcher from "../../js/fetch";
import TableRow from "./talbeRow";
import LoadingSpinner from "../loadingSpinner";
import { dataListContext } from "../../contexts/dataListContext";

//Здесь будет инициализирован наш класс для работы с загруженными данными

function TableBody() {
  const { packageSize } = useContext(packageContext);
  const { dataList, initDataList, updateForcer } = useContext(dataListContext);

  //if isLoaded === true - display data in table. else - show loading animation
  const [isLoaded, setLoadingState] = useState(false);
  const [renderedContent, setRenderedContent] = useState();
  //
  //
  useEffect(() => {
    //Запрашимваем данные с сервера при получении размера пакета
    if (packageSize !== "none") {
      function updateTable(data) {
        //Инициализируем наш класс для работы с данными
        initDataList(data);
        //Указываем то, что список нужно отрисовать
        setLoadingState(true);
      }
      Fetcher.loadData(packageSize, updateTable);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageSize]);
  //
  useEffect(() => {
    //Переформировывем то, что долнжо отображаться в таблице
    if (isLoaded) {
      //Формируем табилцу для отрисовки
      let rows = dataList.getPage(1);
      let jsxRows = [];
      rows.forEach((el) => {
        jsxRows.push(
          <TableRow
            element={el}
            key={`${el.id}.${el.firstName}.${el.secondName}`}
          />
        );
      });
      //Устанавливаем контент для отрисовки
      setRenderedContent(jsxRows);
    } else {
      //Устанавилваем спинер для рендера
      setRenderedContent(
        <React.Fragment>
          <tr className="table-body__table-row background--transparent">
            <td colSpan="5" align="center" className="pt-5">
              <LoadingSpinner />
            </td>
          </tr>
        </React.Fragment>
      );
    }
  }, [isLoaded, updateForcer]);

  return (
    <tbody
      className={`table-body ${isLoaded ? "" : "background--transparent"}`}
    >
      {renderedContent}
    </tbody>
  );
}

export default TableBody;

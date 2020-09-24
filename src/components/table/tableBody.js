import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { packageContext } from "../../contexts/packageContext";
import Fetcher from "../../js/fetch";
import TableData from "../../js/dataList";
import TableRow from "./talbeRow";

var dataList = {};

function TableBody() {
  const { packageSize } = useContext(packageContext);
  //if isLoaded === true - display data in table. else - show loading animation
  const [isLoaded, setLoadingState] = useState(false);
  const [renderedContent, setRenderedContent] = useState();
  //
  //
  useEffect(() => {
    //Запрашимваем данные с сервера при получении размера пакета
    if (packageSize !== "none") {
      function updateTable(data) {
        //Получаем данные для первой страницы
        dataList = new TableData(data);
        //Указываем то, что список нужно отрисовать
        setLoadingState(true);
      }
      Fetcher.loadData(packageSize, updateTable);
    }
  }, [packageSize]);
  //
  useEffect(() => {
    //Переформировывем то, что долнжо отображаться в таблице
    if (isLoaded) {
      let rows = dataList.getPage(1);
      let jsxTr = [];
      rows.forEach((el) => {
        jsxTr.push(
          <TableRow
            element={el}
            key={`${el.id}.${el.firstName}.${el.secondName}`}
          />
        );
      });

      setRenderedContent(jsxTr);
    } else {
      setRenderedContent(
        <React.Fragment>
          <tr className="table-body__table-row background--transparent">
            <td colSpan="5" align="center" className="pt-5">
              <Row>
                <Col xs={12}>
                  <Spinner animation="border" variant="dark" />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h5>Loading data</h5>
                </Col>
              </Row>
            </td>
          </tr>
        </React.Fragment>
      );
    }
  }, [isLoaded]);

  return (
    // <div className="table-body hideScrollBar">
    <tbody className="table-body__list">{renderedContent}</tbody>
    // </div>
  );
}

export default TableBody;

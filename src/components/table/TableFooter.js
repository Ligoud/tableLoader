import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { dataListContext } from "../../contexts/dataListContext";
import InputField from "../inputField";
import PaginationBar from "../paginationBar";

function TableFooter() {
  const { dataList, forceToUpdate } = useContext(dataListContext);
  //
  function filterTableByText(text) {
    if (dataList) {
      dataList.formSubSetByKeyword(text);
      forceToUpdate();
    }
  }
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <PaginationBar />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <InputField
            inputPlaceHolder="Содержимое поля"
            buttonName="Найти"
            sendHandler={filterTableByText}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default TableFooter;

import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { selectedRowContext } from "../contexts/selectedRowContext";

export default function RowInfo() {
  const { selectedRow } = useContext(selectedRowContext);

  //Отображение выбранного пользователя
  const infoField = selectedRow ? (
    <React.Fragment>
      <Row>
        <Col xs={{ span: 8, offset: 1 }}>
          <h4>
            Выбран пользователь:{" "}
            <b>{`${selectedRow.firstName} ${selectedRow.lastName}`}</b>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          Описание:
          <br />
          <textarea
            readOnly
            value={selectedRow.description}
            className="row-info-textarea"
          />
          <br />
          Адрес проживания: <b>{selectedRow.address.streetAddress}</b>
          <br />
          Город: <b>{selectedRow.address.city}</b>
          <br />
          Провинция: <b>{selectedRow.address.state}</b>
          <br />
          Индекс: <b>{selectedRow.address.zip}</b>
        </Col>
      </Row>
    </React.Fragment>
  ) : (
    ""
  );

  return <React.Fragment>{infoField}</React.Fragment>;
}

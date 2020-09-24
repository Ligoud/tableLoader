import React from "react";
import { Col, Row } from "react-bootstrap";

export default function rowInfo(props) {
  return (
    <React.Fragment>
      <Row>
        <Col xs={{ span: 8, offset: 1 }}>
          Выбран пользователь: <b>{`${props.firstName} ${props.lastName}`}</b>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          Описание:
          <br />
          <textarea readOnly>{props.description}</textarea>
          <br />
          Адрес проживания: <b>{props.address.streetAddress}</b>
          <br />
          Город: <b>{props.address.city}</b>
          <br />
          Провинция: <b>{props.address.state}</b>
          <br />
          Индекс: <b>{props.address.zip}</b>
        </Col>
      </Row>
    </React.Fragment>
  );
}

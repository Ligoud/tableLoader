import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import { packageContext } from "../contexts/packageContext";

function ModalWindow() {
  //
  const [isEnabled, setEnabledState] = useState(true);
  const { setPackageContext } = useContext(packageContext);
  //
  return ReactDOM.createPortal(
    isEnabled ? (
      <Container fluid className="custom-modal vh-100">
        <Row className="my-5">
          <Col xs={12} className="d-flex justify-content-center">
            <span>Выберите пакет данных для загрузки</span>
          </Col>
        </Row>
        <Row className="h-25 mt-5">
          {/* First Button */}
          <Col xs={{ span: 3, offset: 2 }}>
            <Button
              className="w-100 h-25"
              variant="outline-dark"
              onClick={() => {
                setPackageContext("small");
                setEnabledState(false);
              }}
            >
              Маленький список
            </Button>
          </Col>
          {/* Second Button */}
          <Col xs={{ span: 3, offset: 2 }}>
            <Button
              className="w-100 h-25"
              variant="outline-dark"
              onClick={() => {
                setPackageContext("large");
                setEnabledState(false);
              }}
            >
              Большой список
            </Button>
          </Col>
        </Row>
      </Container>
    ) : (
      ""
    ),
    document.getElementById("modal")
  );
}

export default ModalWindow;

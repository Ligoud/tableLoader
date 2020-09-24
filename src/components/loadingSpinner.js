import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default LoadingSpinner;

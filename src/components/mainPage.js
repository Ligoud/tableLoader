import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import TableHeader from "./table/tableHeader";
import TableBody from "./table/tableBody";
import TableFooter from "./table/TableFooter";

function MainPage() {
  //
  return (
    <Container fluid className="vh-100">
      <Row className="d-flex justify-content-center table-scroll hideScrollBar">
        <Col xs={10}>
          <Table hover>
            <TableHeader />
            <TableBody />
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <TableFooter />
        </Col>
      </Row>
      <hr></hr>
    </Container>
  );
}

export default MainPage;

import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import TableHeader from "./table/tableHeader";
import TableBody from "./table/tableBody";

function MainPage() {
  //
  return (
    <Container fluid className="vh-100">
      <Row className="d-flex justify-content-center">
        <Col xs={10}>
          <Table hover>
            <TableHeader />
            <TableBody />
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;

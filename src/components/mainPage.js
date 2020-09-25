import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import TableHeader from "./table/tableHeader";
import TableBody from "./table/tableBody";
import TableFooter from "./table/TableFooter";
import RowInfo from "./rowInfo";
import CustomForm from "./form";

function MainPage() {
  //
  return (
    <Container fluid className="vh-100">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <CustomForm />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center table-scroll hideScrollBar">
        <Col xs={10}>
          <Table hover>
            <TableHeader />
            <TableBody />
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <TableFooter />
        </Col>
      </Row>
      <hr></hr>
      <Row className="mb-5">
        <Col xs={{ span: 10, offset: 1 }}>
          <RowInfo />
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;

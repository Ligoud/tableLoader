import React, { useContext, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { dataListContext } from "../contexts/dataListContext";
import KeyFilter from "../js/filterPressedKeys";

const initiatlTextState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
export default function CustomForm() {
  const { dataList, forceToUpdate } = useContext(dataListContext);

  const [text, setText] = useState(initiatlTextState);

  //Обработчик нажатия на кнопку добавления строки
  function onAddRowHandler() {
    if (dataList) {
      let idVal = text.id,
        firstNameVal = text.firstName,
        lastNameVal = text.lastName,
        emailVal = text.email,
        phoneVal = text.phone;
      let passed = true;
      if (idVal.length === 0) passed = false;
      else if (firstNameVal.length === 0) passed = false;
      else if (lastNameVal.length === 0) passed = false;
      else if (emailVal.length === 0) passed = false;
      else if (phoneVal.length === 0) passed = false;
      if (passed) {
        dataList.addRow({
          id: idVal,
          firstName: firstNameVal,
          lastName: lastNameVal,
          email: emailVal,
          phone: phoneVal,
        });
        setText(initiatlTextState);
        forceToUpdate();
      } else {
        alert(
          "Для добавления строки в таблицу необходимо чтобы все поля были заполнены"
        );
      }
    }
  }

  //
  function inputHandler(event) {
    setText({
      ...text,
      [event.target.getAttribute("data-input-type")]: event.target.value,
    });
  }

  //
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          style={{ userSelect: "none", cursor: "pointer" }}
        >
          <h5>Добавить строку в таблицу</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Table>
              <thead className="form-table-header">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <Form.Control
                      type="text"
                      data-input-type="id"
                      value={text.id}
                      onKeyDown={KeyFilter.idInputKeyPressed}
                      onChange={inputHandler}
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="text"
                      data-input-type="firstName"
                      value={text.firstName}
                      onKeyDown={KeyFilter.NameInputKeyPressed}
                      onChange={inputHandler}
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="text"
                      data-input-type="lastName"
                      value={text.lastName}
                      onKeyDown={KeyFilter.NameInputKeyPressed}
                      onChange={inputHandler}
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="email"
                      data-input-type="email"
                      value={text.email}
                      onKeyDown={KeyFilter.emailInputKeyPressed}
                      onChange={inputHandler}
                    />
                  </th>
                  <th>
                    <Form.Control
                      type="text"
                      data-input-type="phone"
                      value={text.phone}
                      onKeyDown={KeyFilter.phoneInputKeyPressed}
                      onChange={inputHandler}
                    />
                  </th>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col xs={12}>
                <Button
                  variant="outline-success"
                  className="w-100"
                  onClick={onAddRowHandler}
                >
                  Добавить
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

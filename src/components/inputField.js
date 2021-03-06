import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export default function InputField(props) {
  const [text, setText] = useState("");

  function inputHandler(event) {
    event.persist();
    setText(event.target.value);
  }
  function keyPressed(event) {
    //Enter pressed
    if (event.keyCode === 13) {
      event.preventDefault();
      props.sendHandler(text.trim());
    }
  }
  function handleClick() {
    props.sendHandler(text.trim());
  }
  return (
    <React.Fragment>
      <InputGroup className="input-component mb-2 py-2">
        <FormControl
          className="input-component__input-field"
          type="text"
          placeholder={props.inputPlaceHolder}
          onChange={inputHandler}
          onKeyDown={keyPressed}
          value={text}
        />

        <InputGroup.Append
          className="input-component__input-button"
          onClick={handleClick}
        >
          <InputGroup.Text>{props.buttonName}</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </React.Fragment>
  );
}

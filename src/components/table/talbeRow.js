import React from "react";

export default function TableRow(props) {
  return (
    <tr>
      <td>{props.element.id}</td>
      <td>{props.element.firstName}</td>
      <td>{props.element.lastName}</td>
      <td>{props.element.email}</td>
      <td>{props.element.phone}</td>
    </tr>
  );
}

import React from "react";

export default function TableRow(props) {
  return (
    <tr className="table-body__table-row ">
      <th>{props.element.id}</th>
      <td>{props.element.firstName}</td>
      <td>{props.element.lastName}</td>
      <td>{props.element.email}</td>
      <td>{props.element.phone}</td>
    </tr>
  );
}

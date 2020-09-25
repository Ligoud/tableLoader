import React, { useContext } from "react";
import { dataListContext } from "../../contexts/dataListContext";
import { selectedRowContext } from "../../contexts/selectedRowContext";

export default function TableRow(props) {
  const { updateSelectedRow } = useContext(selectedRowContext);
  const { dataList } = useContext(dataListContext);

  function clickedOnRow(event) {
    const index = +event.currentTarget.getAttribute("data-row-index");
    updateSelectedRow(dataList.getInfoByIndex(index));
  }
  return (
    <tr
      className="table-body__table-row "
      onClick={clickedOnRow}
      data-row-index={props.rowIndex}
    >
      <th>{props.element.id}</th>
      <td>{props.element.firstName}</td>
      <td>{props.element.lastName}</td>
      <td>{props.element.email}</td>
      <td>{props.element.phone}</td>
    </tr>
  );
}

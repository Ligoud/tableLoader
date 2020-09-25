import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { currentPageContext } from "../contexts/currentPage";
import { dataListContext } from "../contexts/dataListContext";

export default function PaginationBar() {
  const { dataList, updateForcer } = useContext(dataListContext);
  const { currentPage, updateCurrentPage } = useContext(currentPageContext);
  const [paginationItems, setPaginationItems] = useState([]);
  //
  function onPaginationButtonClicked(event) {
    updateCurrentPage(+event.currentTarget.getAttribute("data-page-number"));
  }
  //
  //Формируем список кнопок для пагинации. Потом скипы надо добавить чтобы не росла строка.

  useEffect(() => {
    if (dataList) {
      let renderArray = [];
      for (let i = 0; i < dataList.getTotalPages(); i++) {
        renderArray.push(
          <Pagination.Item
            data-page-number={i + 1}
            key={i + 1}
            onClick={onPaginationButtonClicked}
            active={i + 1 === currentPage}
          >
            {i + 1}
          </Pagination.Item>
        );
      }
      setPaginationItems(renderArray);
    }
  }, [dataList, currentPage, updateForcer]);

  return <Pagination className="mt-1">{paginationItems}</Pagination>;
}

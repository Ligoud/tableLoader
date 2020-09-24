import React, { useContext } from "react";
import { dataListContext } from "../../contexts/dataListContext";
//
export default function TableHeader() {
  const { dataList, forceToUpdate } = useContext(dataListContext);

  function handleSort(ev) {
    //Проверка на то инициализирован ли объект или нет
    if (dataList) {
      let target = ev.currentTarget;
      let sortType = target.getAttribute("data-sort-type");
      let sortDirection = target.getAttribute("data-sort-direction");

      //Первая переменная - новое направление стрелочки. Второе - предыдущее направление стрелочки
      let modifierAdd = "up",
        modifierRemove = "left";
      //Проверяем как отсортирована таблица сейчас
      if (sortDirection === "none" || sortDirection === "desc") {
        //Меняем на asc значит ( т.е. стрелочка вниз будет)
        if (sortDirection === "desc") modifierRemove = "up";
        sortDirection = "asc";
        modifierAdd = "down";
      } else if (sortDirection === "asc") {
        //Меняем на desc значит ( т.е. стрелочка вверх будет)
        modifierRemove = "down";
        sortDirection = "desc";
      }
      //Меняем data- аттрибут у колонки
      target.setAttribute("data-sort-direction", sortDirection);
      //Меняем положение стрелочки
      target.classList.add(`triangle--${modifierAdd}`);

      target.classList.remove(`triangle--${modifierRemove}`);

      //Обновляем данные внутри класса. Возможно мутацию надо убрать. Не уверен как правильно
      dataList.sortListBy(sortType, sortDirection);
      //Сигнализируем табилце о том, что данные обновились
      forceToUpdate();
    }
  }
  return (
    <thead className="thead-dark table-header">
      <tr>
        <th>
          <div
            className="table-column-header triangle--left mx-0 px-0"
            data-sort-type="id"
            data-sort-direction="none"
            onClick={handleSort}
          >
            <span>ID</span>
          </div>
        </th>
        <th>
          <div
            className="table-column-header triangle--left mx-0 px-0"
            data-sort-type="firstName"
            data-sort-direction="none"
            onClick={handleSort}
          >
            <span>First Name</span>
          </div>
        </th>
        <th>
          <div
            className="table-column-header triangle--left mx-0 px-0"
            data-sort-type="lastName"
            data-sort-direction="none"
            onClick={handleSort}
          >
            <span>Last Name</span>
          </div>
        </th>
        <th>
          <div
            className="table-column-header triangle--left mx-0 px-0"
            data-sort-type="email"
            data-sort-direction="none"
            onClick={handleSort}
          >
            <span>Email</span>
          </div>
        </th>
        <th>
          <div
            className="table-column-header triangle--left mx-0 px-0"
            data-sort-type="phone"
            data-sort-direction="none"
            onClick={handleSort}
          >
            <span>Phone</span>
          </div>
        </th>
      </tr>
    </thead>
  );
}

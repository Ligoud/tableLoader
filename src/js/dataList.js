import Comparator from "./Comparator";

class TableData {
  //list - массив данных, получаемый с сервера
  constructor(list, maxRowsOnPage = 50) {
    this.list = list;
    this.rowsOnPage = maxRowsOnPage;
  }
  //Возвращает количество страниц для пагинации
  getPageCounts() {
    return Math.ceil(this.list.length / this.rowsOnPage);
  }
  //Возвращает данные страницы
  getPage(page) {
    //Вычисляем индексы начала и конца списка данных для страницы
    let startInd = this.rowsOnPage * (page - 1);
    //Конечный индекс не уменьшается на 1, так как он будет использован в методе .slice [)
    let endInd = this.rowsOnPage * page;
    //
    //Проверяем правую границу, чтобы не выйти за пределы массива
    if (endInd > this.list.length) endInd = this.list.length;
    //
    return this.list.slice(startInd, endInd);
  }
  //
  //Сортирует список по полю column. Direction asc/desc
  sortListBy(column, direction = "asc") {
    //Перевожу текстовый вариант в булев
    let asc = direction === "asc";
    //Для хранения кастомной функции для сортивроки
    let compFn;
    //column это поля списка
    switch (column) {
      case "id":
        compFn = asc ? Comparator.compareIdAsc : Comparator.compareIdDesc;
        break;
      case "firstName":
        compFn = asc
          ? Comparator.compareFirstNameAsc
          : Comparator.compareFirstNameDesc;
        break;
      case "lastName":
        compFn = asc
          ? Comparator.compareLastNameAsc
          : Comparator.compareLastNameDesc;
        break;
      case "email":
        compFn = asc ? Comparator.compareEmailAsc : Comparator.compareEmailDesc;
        break;
      case "phone":
        compFn = asc ? Comparator.comparePhoneAsc : Comparator.comparePhoneDesc;
        break;
      default:
        break;
    }
    //Сортируем ВЕСЬ список
    this.list = this.list.sort(compFn);
  }
}

export default TableData;

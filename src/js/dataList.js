import Comparator from "./Comparator";

class TableData {
  //list - массив данных, получаемый с сервера
  constructor(list, maxRowsOnPage = 50) {
    //Массив данных с сервера
    this.rawList = list;
    this.rowsOnPage = maxRowsOnPage;
    //Будет содержать изменённые данные
    this.formedList = this.rawList;
  }
  getList() {
    return this.formedList;
  }
  getInfoByIndex(index) {
    return this.formedList[index];
  }
  //Возвращает количество страниц для пагинации
  getTotalPages() {
    return Math.ceil(this.formedList.length / this.rowsOnPage);
  }
  //Возвращает данные страницы
  getPage(page) {
    //Вычисляем индексы начала и конца списка данных для страницы
    let startInd = this.rowsOnPage * (page - 1);
    //Конечный индекс не уменьшается на 1, так как он будет использован в методе .slice [)
    let endInd = this.rowsOnPage * page;
    //
    //Проверяем правую границу, чтобы не выйти за пределы массива
    if (endInd > this.formedList.length) endInd = this.formedList.length;
    //
    return this.formedList.slice(startInd, endInd);
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
    this.formedList.sort(compFn);
  }
  //По поиску выбираем множество
  formSubSetByKeyword(keyword) {
    keyword = keyword.toLowerCase();
    let newArr = [];
    this.rawList.forEach((el) => {
      let checker = false;
      for (let prop in el) {
        //Не учитываю адрес при проверки соответствия
        if (typeof el[prop] !== "object")
          if (el[prop].toString().toLowerCase().includes(keyword)) {
            checker = true;
          }
      }
      if (checker) newArr.push(el);
    });

    this.formedList = [...newArr];
  }
  //
  addRow(row) {
    let obj = {
      id: Number,
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
    };
    for (let prop in obj) {
      obj[prop] = row[prop];
    }
    obj.address = {};

    this.formedList.unshift(obj);
  }
}

export default TableData;

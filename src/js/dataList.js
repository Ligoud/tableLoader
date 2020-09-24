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
    let startInd = this.list.length * (page - 1);
    //Конечный индекс не уменьшается на 1, так как он будет использован в методе .slice [)
    let endInd = this.list.length * page;
    //
    return this.list.slice(startInd, endInd);
  }
}

export default TableData;

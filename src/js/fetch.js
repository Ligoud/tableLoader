export default class Fetcher {
  //Каждый метод возвращает промис
  //Получить с сервера уменьшенный объем данных
  static fetchLiteDataPack() {
    return fetch(
      "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    );
  }
  //Получить с сервера большой объем данных
  static fetchDataPack() {
    return fetch(
      "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    );
  }
  //Загружает данные с сервера и передает в колбек
  static loadData(type, callback) {
    let promise;
    switch (type) {
      case "small":
        promise = this.fetchLiteDataPack();
        break;
      case "large":
        promise = this.fetchDataPack();
        break;
      default:
        break;
    }
    promise
      .then((res) => res.json())
      .then((data) => {
        callback(data);
      });
  }
}

export default class KeyFilter {
  static idInputKeyPressed(event) {
    if (event.keyCode === 13) event.preventDefault();
    // console.log(event.keyCode);
    //Только цифры
    if (
      !(
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        (event.keyCode >= 97 && event.keyCode <= 105) ||
        event.keyCode === 8
      )
    )
      event.preventDefault();
  }
  static NameInputKeyPressed(event) {
    if (event.keyCode === 13) event.preventDefault();

    //Только латинские буквы
    if (
      !(
        (event.keyCode >= 65 && event.keyCode <= 90) ||
        (event.keyCode >= 97 && event.keyCode <= 122) ||
        event.keyCode === 8
      )
    )
      event.preventDefault();
  }
  static emailInputKeyPressed(event) {
    if (event.keyCode === 13) event.preventDefault();
  }
  static phoneInputKeyPressed(event) {
    if (event.keyCode === 13) event.preventDefault();
    //Только цифры, круглые скобки и дефисы
    if (
      !(
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        (event.keyCode >= 97 && event.keyCode <= 105) ||
        event.keyCode === 40 ||
        event.keyCode === 41 ||
        event.keyCode === 109 ||
        event.keyCode === 189 ||
        event.keyCode === 8
      )
    )
      event.preventDefault();
  }
}

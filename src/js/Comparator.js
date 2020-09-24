class Comparator {
  //Суффиксы: Asc - по возрастанию. Desc - по убыванию
  //Сравнение по id
  static compareIdAsc(first, second) {
    if (first.id < second.id) return -1;
    else if (first.id > second.id) return 1;
    else return 0;
  }
  static compareIdDesc(first, second) {
    if (first.id > second.id) return -1;
    else if (first.id < second.id) return 1;
    else return 0;
  }
  //Сравнение по first name
  static compareFirstNameAsc(first, second) {
    if (first.firstName < second.firstName) return -1;
    else if (first.firstName > second.firstName) return 1;
    else return 0;
  }
  static compareFirstNameDesc(first, second) {
    if (first.firstName > second.firstName) return -1;
    else if (first.firstName < second.firstName) return 1;
    else return 0;
  }
  //Сравнение по last name
  static compareLastNameAsc(first, second) {
    if (first.lastName < second.lastName) return -1;
    else if (first.lastName > second.lastName) return 1;
    else return 0;
  }
  static compareLastNameDesc(first, second) {
    if (first.lastName > second.lastName) return -1;
    else if (first.lastName < second.lastName) return 1;
    else return 0;
  }
  //Сравнение по email
  static compareEmailAsc(first, second) {
    if (first.email < second.email) return -1;
    else if (first.email > second.email) return 1;
    else return 0;
  }
  static compareEmailDesc(first, second) {
    if (first.email > second.email) return -1;
    else if (first.email < second.email) return 1;
    else return 0;
  }
  //Сравнение по phone
  static comparePhoneAsc(first, second) {
    if (first.phone < second.phone) return -1;
    else if (first.phone > second.phone) return 1;
    else return 0;
  }
  static comparePhoneDesc(first, second) {
    if (first.phone > second.phone) return -1;
    else if (first.phone < second.phone) return 1;
    else return 0;
  }
}

export default Comparator;

//Task1
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return Number(this.rate) * Number(this.days);
  }
}
let worker = new Worker("Иван", "Иванов", 10, 31);
let worker2 = new Worker("Kate", "Shirokova", 2, 5);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());

//Task4
class Validator {
  isEmail(txt) {
    let mailFormat = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    return txt.match(mailFormat) === null ? false : true;
  }
  isDomain(txt) {
    let domainFormat = /^(?!-)[A-Za-z0-9-]+([-.]{1}[a-z0-9]+)*.[A-Za-z]{2,6}$/;
    return txt.match(domainFormat) === null ? false : true;
  }
  isDate(txt) {
    let dateFormat = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
    return txt.match(dateFormat) === null ? false : true;
  }
  isPhone(txt) {
    let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return txt.match(phoneFormat) === null ? false : true;
  }
}
let valid = new Validator();
console.log(valid.isEmail("alisa@gmail.com"));
console.log(valid.isDomain("alisa.com"));
console.log(valid.isDate("12.05.2021"));
console.log(valid.isPhone("+7(910)123-45-67"));

class ValidatorStatic {
  static isEmail(txt) {
    let mailFormat = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    return txt.match(mailFormat) === null ? false : true;
  }
  static isDomain(txt) {
    let domainFormat = /^(?!-)[A-Za-z0-9-]+([-.]{1}[a-z0-9]+)*.[A-Za-z]{2,6}$/;
    return txt.match(domainFormat) === null ? false : true;
  }
  static isDate(txt) {
    let dateFormat = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
    return txt.match(dateFormat) === null ? false : true;
  }
  static isPhone(txt) {
    let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return txt.match(phoneFormat) === null ? false : true;
  }
}
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));

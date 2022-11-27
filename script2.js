//Task2
class Cat {
  constructor(nickname, name, contacts, breed, food, sex) {
    this.nickname = nickname;
    this.name - name;
    this.contacts = contacts;
    this.breed = breed;
    this.food = food;
    this.sex = sex;
  } 
}
function getValues() {
  
  let nickname = document.getElementById("name").value;
  let name = document.getElementById("fio").value;
  let contacts = document.getElementById("contact").value;

  let selectElement = document.querySelector("#breed");
  let breed = selectElement.options[selectElement.selectedIndex].text;

  let checkboxes = document.getElementsByName("source");
  let food = "";
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      food += checkboxes[i].value + "," + " ";
    }
  }

  let radio = document.getElementsByName("sex");
  let sex = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      sex += radio[i].value;
    }
  }
  let cat1 = new Cat(nickname, name, contacts, breed, food, sex);
  
}

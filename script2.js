function getValues() {
  let nickname = document.getElementById("name");
  let name = document.getElementById("fio");
  let contacts = document.getElementById("contact");

  let selectElement = document.querySelector("#breed");
  let output = selectElement.options[selectElement.selectedIndex].text;
  let checkboxes = document.getElementsByName("source");

  let result = "";

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result += checkboxes[i].value + "," + " ";
    }
  }
  let radio = document.getElementsByName("sex");
  let sex = "";

  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      sex += radio[i].value;
    }
  }
  
}

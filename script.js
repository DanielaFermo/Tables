function result() {
  var userNum = document.getElementById("txtNum");
  var valorSelect = document.getElementById("valorSelect");

  if (userNum.value.length == 0) {
    window.alert(`Please make sure to insert a valid number`);
  } else {
    var c = 1;
    var userNumber = Number(userNum.value);
    valorSelect.innerHTML=``
    while (c <= 10) {
      let addItem = document.createElement(`option`);
      addItem.text = `${c} x ${userNumber} = ${c * userNumber}`;
      valorSelect.appendChild(addItem);
      c++;
    }
  }
}

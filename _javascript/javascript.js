var tecla = 39;
var arr = [];
window.onload = function() {
  debugger;
  linha = document.querySelector(".cabeca").parentNode.id;
  coluna = document.querySelector(".cabeca").id;
  calda = document.querySelector(".calda").id;
  arr.push(this.document.querySelector(".calda"));
  arr.push(this.document.querySelector(".corpo"));
  arr.push(this.document.querySelector(".cabeca"));
  // caldaPnId = document.querySelector(".cabeca").parentNode.id;
};
function mover() {
  debugger;
  if (tecla == 39) {
    coluna++;
    arr.push(
      document.querySelector("tr:nth-child(" + linha + ") td:nth-child(" + coluna + ")")
    );
    arr[arr.length - 1].setAttribute("class", "cabeca dataCell");
    arr[arr.length - 2].setAttribute("class", "corpo dataCell");
    arr[1].setAttribute("class", "calda dataCell");

    arr[0].setAttribute("class", "dataCell");

    arr.shift();
  } else if (tecla == 40) {
    linha++;
    arr.push(
      document.querySelector(
        "tr:nth-child(" + linha + ") td:nth-child(" + coluna + ")"
      )
    );
    arr[arr.length - 1].setAttribute("class", "cabeca dataCell");
    arr[arr.length - 2].setAttribute("class", "corpo dataCell");
    arr[1].setAttribute("class", "calda dataCell");

    arr[0].setAttribute("class", "dataCell");

    arr.shift();
  } else if (tecla == 37) {
    coluna--;
    arr.push(
      document.querySelector(
        "tr:nth-child(" + linha + ") td:nth-child(" + coluna + ")"
      )
    );
    arr[arr.length - 1].setAttribute("class", "cabeca dataCell");
    arr[arr.length - 2].setAttribute("class", "corpo dataCell");
    arr[1].setAttribute("class", "calda dataCell");

    arr[0].setAttribute("class", "dataCell");

    arr.shift();
  } else if (tecla == 38) {
    linha--;
    arr.push(
      document.querySelector(
        "tr:nth-child(" + linha + ") td:nth-child(" + coluna + ")"
      )
    );
    arr[arr.length - 1].setAttribute("class", "cabeca dataCell");
    arr[arr.length - 2].setAttribute("class", "corpo dataCell");
    arr[1].setAttribute("class", "calda dataCell");

    arr[0].setAttribute("class", "dataCell");

    arr.shift();
  }

  // } else if () {

  // }
}

function teclas() {
  tecla = event.keyCode;
}

setInterval(mover, 200);

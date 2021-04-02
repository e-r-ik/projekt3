"use strict";

let gameCanvas = document.getElementById("game");
let arr = [];
let currentShipType = 0;
let startPos = -1;
let endPos = -1;
let operator = 1;

class Tile {
  constructor(element, classattribute, onclick, style, isBoat) {
    this.element = element;
    this.classattribute = classattribute;
    this.onclick = onclick;
    this.style = style;
    this.isBoat = isBoat;
  }
}

function drawGame() {
  let n = 2;
  let p = 0;
  for (let i = 0; i < 10; i++) {
    let o = 2;
    for (let j = 0; j < 10; j++) {
      arr[p] = new Tile(document.createElement("div"),
                        document.createAttribute("class"),
                        document.createAttribute("onclick"),
                        document.createAttribute("style"),
                        false);

      arr[p].classattribute.value = "tileStyle";
      arr[p].onclick.value = "clickedTile(" + p + ")";
      arr[p].style.value = "grid-row-start: " + n + "; grid-column-start: " + o + ";"

      gameCanvas.appendChild(arr[p].element);

      arr[p].element.setAttributeNode(arr[p].classattribute);
      arr[p].element.setAttributeNode(arr[p].onclick);
      arr[p].element.setAttributeNode(arr[p].style);
      o++;
      p++;
    }
    o = 0;
    n++;
  }
}

function currentship(n) {
  posReset();
  for (let i = 0; i < 4; i++) {
    document.getElementById(i).style.backgroundColor = "gray";
  }
  document.getElementById(n).style.backgroundColor = "red";
  currentShipType = n;
}

function clickedTile(n) {
  arr[n].element.style.borderColor = "red";
  if (startPos == -1) {
    startPos = n;
    return;
  }
  endPos = n;
  console.log(Number(String(startPos).charAt(0)), Number(String(endPos).charAt(0)),
              Number(String(startPos).charAt(1)), Number(String(endPos).charAt(1)));

  if (nthDigit(startPos, 1) > nthDigit(endPos, 1) || nthDigit(startPos, 0) > nthDigit(endPos, 0)) {
    operator = -1;
  }

  if (isLegalPlacement(0, 1) && operator == 1) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos + i);
    }
    posReset();
  }

  else if (isLegalPlacement(1, 0) && operator == 1) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos + i * 10 * operator);
    }
    posReset();
  }

  else if (isLegalPlacement(0, 1) && operator == -1) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos + i * operator);
    }
    posReset();
  }

  else if (isLegalPlacement(1, 0) && operator == -1) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos + i * 10 * operator);
    }
    posReset();
  }

  else {
    alert("Inte giltig skeppdesign testa igen");
    posReset();
  }

  operator = 1;
}

drawGame();

function nthDigit(n, o) {
  return Number(String(n).charAt(o));
}

function isLegalPlacement(n, o) {
  return nthDigit(endPos, n) === nthDigit(startPos, n) &&
         Math.abs(nthDigit(endPos, o) - nthDigit(startPos, o)) === currentShipType;
}

function changeTile(iteration) {
  arr[iteration].isBoat = true;
  arr[iteration].element.style.backgroundColor = "blue";

  console.log("många trevligt");
}

function posReset() {
  startPos = -1;
  endPos = -1;
}

"use strict";

let gameCanvas = document.getElementById("game");
let arr = [];
let currentShipType = 1;
let startPos = -1;
let endPos = -1;

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
  startPos = -1;
  endPos = -1;
  for (let i = 1; i < 5; i++) {
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
  switch (currentShipType) {
    case 1:
      if (startPos == endPos) {
        arr[n].isBoat = true;
        arr[n].element.style.backgroundColor = "blue";
        startPos = -1;
        endPos = -1;
      }
      else {
        alert("Inte giltig skeppdesign testa igen");
        startPos = -1;
        endPos = -1;
      }
      break;
    case 2:
      if (Math.abs(nthDigit(endPos, 1) - nthDigit(startPos, 1)) === 1 &&
          nthDigit(startPos, 0) === nthDigit(endPos, 0)) {
            arr[startPos].isBoat = true;
            arr[endPos].isBoat = true;
            arr[startPos].element.style.backgroundColor = "blue";
            arr[endPos].element.style.backgroundColor = "blue";
            startPos = -1;
            endPos = -1;
            console.log("många trevligt")
      }
      else if (Math.abs(nthDigit(endPos, 0) - nthDigit(startPos, 0)) === 1 &&
               nthDigit(startPos, 1) === nthDigit(endPos, 1)) {
                 arr[startPos].isBoat = true;
                 arr[endPos].isBoat = true;
                 arr[startPos].element.style.backgroundColor = "blue";
                 arr[endPos].element.style.backgroundColor = "blue";
                 startPos = -1;
                 endPos = -1;
                 console.log("många trevligt")
      }
      else {
        alert("Inte giltig skeppdesign testa igen");
        startPos = -1;
        endPos = -1;
      }
      break;
    case 3:

      break;
    case 4:

      break;
    default:
      alert("Du har lyckats breaka skiten grattis");
      break;
  }
}

drawGame();

function nthDigit(n, o) {
  return Number(String(n).charAt(o));
}

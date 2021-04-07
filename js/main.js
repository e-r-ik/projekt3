"use strict";

let gameCanvas = document.getElementById("game");
let menu = document.getElementById("menu");
let arr = [];
let enemyArr = [];
let currentShipType = 0;
let shipType1 = 4;
let shipType2 = 3;
let shipType3 = 2
let shipType4 = 1;
let startPos = -1;
let endPos = -1;
let direction = 1;

class Tile {
  constructor(element, classattribute, onclick, style, isBoat) {
    this.element = element;
    this.classattribute = classattribute;
    this.onclick = onclick;
    this.style = style;
    this.isBoat = isBoat;
  }
}

class enemyTile {
  constructor(isBoat) {
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

drawGame();

function createEnemyPlayingField() {
  if (shipType1 == 0 && shipType2 == 0 && shipType3 == 0 && shipType4 == 0) {
    reset(0);
    drawGame();
    createEnemyShips();
  }
  else {
    return;
  }
}

function reset(totalReset) {
  if (totalReset == 1) {
    arr = [];
    enemyArr = [];
    shipType1 = 4;
    shipType2 = 3;
    shipType3 = 2;
    shipType4 = 1;
    direction = 1;
  }
  while(gameCanvas.childNodes[2]) {
    gameCanvas.removeChild(gameCanvas.childNodes[2]);
  }
  posReset();
}

function clearField() {
  reset(1);
  drawGame();
}

function createEnemyShips() {
  for (let i = 0; i < 100; i++) {
    enemyArr[i] = new enemyTile(false);
  }
  
  for (let i = 0; i < 4; i++) {
    enemyArr[]
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
    direction = -1;
  }

  switch (currentShipType) {
    case 0:
      if (shipType1 > 0) {
        drawShips();
        shipType1--;
      }
      else {
        alert("Slut på denna skepptyp");
        posReset();
      }
        break;
    case 1:
      if (shipType2 > 0) {
        drawShips();
        shipType2--;
      }
      else {
        alert("Slut på denna skepptyp");
        posReset();
      }
      break;
    case 2:
      if (shipType3 > 0) {
        drawShips();
        shipType3--;
      }
      else {
        alert("Slut på denna skepptyp");
        posReset();
      }
      break;
    case 3:
      if (shipType4 > 0) {
        drawShips();
        shipType4--;
      }
      else {
        alert("Slut på denna skepptyp");
        posReset();
      }
      break;
    default:
      break;
  }

  direction = 1;
}

function drawShips() {
  if (startPos < 10 && endPos < 10) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos + i * direction);
    }
  }

  else if (isLegalPlacement(0, 1)) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos + i * direction);
    }
  }

  else if (isLegalPlacement(1, 0)) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos + i * 10 * direction);
    }
  }

  else {
    alert("Inte giltig skeppdesign testa igen");
  }
  posReset();
}

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

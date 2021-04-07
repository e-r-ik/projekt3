"use strict";

let gameCanvas = document.getElementById("game");
let menu = document.getElementById("menu");
let arr = [[],[],[],[],[],[],[],[],[],[]];
let enemyArr = [];
let currentShipType = 0;
let shipType1 = 4;
let shipType2 = 3;
let shipType3 = 2
let shipType4 = 1;
let startPos = [-1, -1];
let endPos = [-1, -1];
let direction = 1;

function showArr() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; i < 10; j++) {
      console.log(arr[i][j]);
    }
  }
}

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
  let p = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arr[i][j] = new Tile(document.createElement("div"),
                           document.createAttribute("class"),
                           document.createAttribute("onclick"),
                           document.createAttribute("style"),
                           false);

      arr[i][j].classattribute.value = "tileStyle";
      arr[i][j].onclick.value = "clickedTile(" + i + ", " + j + ")";
      arr[i][j].style.value = "grid-row-start: " + (i + 2) + "; grid-column-start: " + (j + 2) + ";"

      gameCanvas.appendChild(arr[i][j].element);

      arr[i][j].element.setAttributeNode(arr[i][j].classattribute);
      arr[i][j].element.setAttributeNode(arr[i][j].onclick);
      arr[i][j].element.setAttributeNode(arr[i][j].style);
      p++;
    }
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

}

function currentship(n) {
  posReset();
  for (let i = 0; i < 4; i++) {
    document.getElementById(i).style.backgroundColor = "gray";
  }
  document.getElementById(n).style.backgroundColor = "red";
  currentShipType = n;
}

function clickedTile(i, j) {
  arr[i][j].element.style.borderColor = "red";
  if (startPos[0] == -1) {
    startPos[0] = i;
    startPos[1] = j;
    return;
  }
  endPos[0] = i;
  endPos[1] = j;

  if (startPos[0] > endPos[0] || startPos[1] > endPos[1] ) {
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
  if (isLegalPlacement(0, 1)) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos + i * direction, startPos[1]);
    }
  }

  else if (isLegalPlacement(1, 0)) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos[0], startPos + i * direction);
    }
  }

  else {
    alert("Inte giltig skeppdesign testa igen");
  }
  posReset();
}

function isLegalPlacement(i, j) {
  return startPos[i] === endPos[i] && Math.abs(endPos[j] - startPos[j] === currentShipType);
}

function changeTile(i, j) {
  arr[i][j].isBoat = true;
  arr[i][j].element.style.backgroundColor = "blue";

  console.log("många trevligt");
}

function posReset() {
  startPos[0] = -1;
  startPos[1] = -1;
  endPos[0] = -1;
  endPos[1] = -1;
}

"use strict";

let gameCanvas = document.getElementById("game");
let menu = document.getElementById("menu");
let arr = new Array(10);
let enemyArr = new Array(10);
let currentShipType = 0;
let shipTypes = [4, 3, 2, 1];
let startPos = [-1, -1];
let endPos = [-1, -1];
let direction = 1;
let gamemode = 0;
let points = 21;
let pointsEnemy = 20;

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

function buildArrays() {
  for (let i = 0; i < 10; i++) {
    arr[i] = new Array(10);
    enemyArr[i] = new Array(10);
  }
}

buildArrays();

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

function fillEnemyArray() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      enemyArr[i][j] = new enemyTile(false);
    }
  }
}

fillEnemyArray();

function createEnemyPlayingField() {
  if (shipTypes[0] == 0 && shipTypes[1] == 0 && shipTypes[2] == 0 && shipTypes[3] == 0) {
    createEnemyShips();
    gamemode = 1;
  }
  else {
    alert("You need to use all your ships before starting to play!");
    return;
  }
}

function reset(totalReset) {
  if (totalReset == 1) {
    arr = new Array(10);
    enemyArr = new Array(10);
    gamemode = 0;
    shipTypes[0] = 4;
    shipTypes[1] = 3;
    shipTypes[2] = 2;
    shipTypes[3] = 1;
    direction = 1;
  }
  while(gameCanvas.childNodes[2]) {
    gameCanvas.removeChild(gameCanvas.childNodes[2]);
  }
  posReset();
}

function clearField() {
  reset(1);
  buildArrays();
  drawGame();
}

function returnRnd(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createEnemyShips() {
  let startPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];
  let endPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];

  for (let i = 0; i < 4; i++) {
    startPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];
    endPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];

    if (startPosEnemyShip[0] == endPosEnemyShip[0] &&
        startPosEnemyShip[1] + 3 == endPosEnemyShip[1] &&
        enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i].isBoat == false &&
        enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i] != undefined) {
      enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i].isBoat = true;
      points--;
    }
    else if (startPosEnemyShip[1] == endPosEnemyShip[1] &&
             startPosEnemyShip[0] + 3 == endPosEnemyShip[0] &&
             enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]].isBoat == false &&
             enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]] != undefined) {
      enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]].isBoat = true;
      points--;
    }
    else {
      i--;
    }
  }

  for (let i = 0; i < 2; i++) {

    for (let j = 0; j < 2; j++) {
      startPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];
      endPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];

      if (startPosEnemyShip[0] == endPosEnemyShip[0] &&
          startPosEnemyShip[1] + 2 == endPosEnemyShip[1] &&
          enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i].isBoat == false &&
          enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i] != undefined) {
        enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i].isBoat = true;
        points--;
      }
      else if (startPosEnemyShip[1] == endPosEnemyShip[1] &&
               startPosEnemyShip[0] + 2 == endPosEnemyShip[1] &&
               enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]].isBoat == false &&
               enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]] != undefined) {
        enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]].isBoat = true;
        points--;
      }
      else {
        j--;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      startPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];
      endPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];

      if (startPosEnemyShip[0] == endPosEnemyShip[0] &&
          startPosEnemyShip[1] + 1 == endPosEnemyShip[1] &&
          enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i].isBoat == false &&
          enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i] != undefined) {
        enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1] + i].isBoat = true;
        points--;
      }
      else if (startPosEnemyShip[1] == endPosEnemyShip[1] &&
               startPosEnemyShip[0] + 1 == endPosEnemyShip[1] &&
               startPosEnemyShip[0] + 1 < 10 &&
               enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]].isBoat == false &&
               enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]] != undefined) {
        enemyArr[startPosEnemyShip[0] + i][startPosEnemyShip[1]].isBoat = true;
        points--;
      }
      else {
        j--;
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    startPosEnemyShip = [returnRnd(0, 9), returnRnd(0, 9)];

    if (enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1]].isBoat == false) {
      enemyArr[startPosEnemyShip[0]][startPosEnemyShip[1]].isBoat = true;
      points--;
    }
    else {
      i--;
    }
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

function clickedTile(i, j) {
  if (gamemode == 0) {
    arr[i][j].element.style.borderColor = "red";
    if (startPos[0] == -1) {
      startPos[0] = i;
      startPos[1] = j;
      console.log(startPos);
      return;
    }
    endPos[0] = i;
    endPos[1] = j;
    console.log(endPos);

    if (startPos[0] > endPos[0] || startPos[1] > endPos[1] ) {
      direction = -1;
    }

    switch (currentShipType) {
      case 0:
        if (shipTypes[0] > 0) {
          drawShips(0);
        }
        else {
          alert("Slut på denna skepptyp");
          posReset();
        }
          break;
      case 1:
        if (shipTypes[1] > 0) {
          drawShips(1);
        }
        else {
          alert("Slut på denna skepptyp");
          posReset();
        }
        break;
      case 2:
        if (shipTypes[2] > 0) {
          drawShips(2);
        }
        else {
          alert("Slut på denna skepptyp");
          posReset();
        }
        break;
      case 3:
        if (shipTypes[3] > 0) {
          drawShips(3);
        }
        else {
          alert("Slut på denna skepptyp");
          posReset();
        }
        break;
      default:
        break;
    }
    posReset();
    direction = 1;
  }
  else {
    if (enemyArr[i][j].isBoat == true) {
      enemyArr[i][j].isBoat = false;
      points--;
      alert("You hit an enemy ship! Only " + points + " tiles to go!")
    }
    else {
      alert("You missed your shot! Now the AI will take theirs.")
    }
    let tempY = returnRnd(0, 9);
    let tempX = returnRnd(0, 9);
    if (arr[tempY][tempX].isBoat == true) {
      pointsEnemy--;
      arr[tempY][tempX].isBoat = false;
      arr[tempY][tempX].element.style.background = "black";
      alert("The AI hit you!");
    }
    else {
      alert("The AI Missed! Your turn!")
    }
    if (points == 0) {
      alert("Congratulations you won!")
    }
    else if (pointsEnemy == 0) {
      alert("The enemy won!")
    }
  }
}

function drawShips(n) {
  if (isLegalPlacement(0, 1)) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos[0], startPos[1] + i * direction);
    }
    shipTypes[n]--;
  }

  else if (isLegalPlacement(1, 0)) {
    for (let i = 0; i <= currentShipType; i++) {
      changeTile(startPos[0] + i * direction, startPos[1]);
    }
    shipTypes[n]--;
  }

  else {
    alert("Inte giltig skeppdesign testa igen");
  }
  posReset();
}

function isLegalPlacement(i, j) {
  let alreadyOccupied = false;
  if (startPos[i] === endPos[i] && Math.abs(endPos[j] - startPos[j]) === currentShipType) {
    for (let k = 0; k < Math.abs(endPos[j] - startPos[j]); k++) {
      if (arr[startPos[i]][startPos[j] + k * direction].isBoat == true) {
        alreadyOccupied = true;
      }
    }
    return alreadyOccupied == false;
  }
  else {
    return false;
  }
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

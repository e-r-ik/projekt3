"use strict";

let gameCanvas = document.getElementById("game");
let arr2d = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let currentShipType = 1;

class Tile {
  constructor(element, classattribute, onclick, style, isBoat) {
    this.element = element;
    this.classattribute = classattribute;
    this.onclick = onclick;
    this.style = style;
    this.isboat = isBoat;
  }
}

function drawGame() {
let n = 2;
  for (let i = 0; i < arr2d.length; i++) {
    let o = 2;
    for (let j = 0; j < arr2d.length; j++) {

      arr2d[j][i] = new Tile(document.createElement("div"),
                             document.createAttribute("class"),
                             document.createAttribute("onclick"),
                             document.createAttribute("style"),
                             false);

      arr2d[j][i].classattribute.value = "tileStyle";
      arr2d[j][i].onclick.value = "clickedTile(" + ")";
      arr2d[j][i].style.value = "grid-row-start: " + n + "; grid-column-start: " + o;

      gameCanvas.appendChild(arr2d[j][i].element);

      arr2d[j][i].element.setAttributeNode(arr2d[j][i].classattribute);
      arr2d[j][i].element.setAttributeNode(arr2d[j][i].onclick);
      arr2d[j][i].element.setAttributeNode(arr2d[j][i].style);

      o++;
    }
    o = 2;
    n++;
  }
}

function currentship(n) {
  return n;
}

clickedTile(o, p) {
  arr2d[p][o].element.style.bordercolor = red;
}

drawGame();

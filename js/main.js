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

class Tile {
  constructor(element, style, onclick, isBoat) {
    this.element = element;
    this.style = style;
    this.onclick = onclick;
    this.isboat = isBoat;
  }
}

function drawGame() {
  for (let i = 0; i < arr2d.length; i++) {
    for (let j = 0; j < arr2d.length; j++) {

      arr2d[j][i] = new Tile(document.createElement("div"),
                             document.createAttribute("class"),
                             document.createAttribute("onclick"),
                             false);

      arr2d[j][i].style.value = "tileStyle";
      arr2d[j][i].onclick.value = "console.log('du tryckte')";

      gameCanvas.appendChild(arr2d[j][i].element);

      arr2d[j][i].element.setAttributeNode(arr2d[j][i].style);
      arr2d[j][i].element.setAttributeNode(arr2d[j][i].onclick);
    }
  }
}

drawGame();

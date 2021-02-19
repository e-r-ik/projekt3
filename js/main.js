"use strict";

let _gameCanvas = document.getElementById("game");
let _arr2d = [
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
  constructor(element, style, onclick) {
    this.element = element;
    this.style = style;
    this.onclick = onclick;
  }
}

function drawGame() {
  for (let i = 0; i < _arr2d.length; i++) {
    for (let j = 0; j < _arr2d.length; j++) {

      _arr2d[j][i] = new Tile(document.createElement("div"),
                              document.createAttribute("class"),
                              document.createAttribute("onclick"));

      _arr2d[j][i].style.value = "tileStyle";
      _arr2d[j][i].onclick.value = "console.log('du tryckte')";

      _gameCanvas.appendChild(_arr2d[j][i].element);

      _arr2d[j][i].element.setAttributeNode(_arr2d[j][i].style);
      _arr2d[j][i].element.setAttributeNode(_arr2d[j][i].onclick);
    }
  }
}

//fillArray();
drawGame();

"use strict";

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
  constructor(element, style, styleClass, onclick) {
    this.element = element;
    this.style = style;
    this.styleClass = styleClass;
    this.onclick = onclick;
  }
}

function startGame() {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      arr2d[i, j] = new Tile("div")
    }
  }
}

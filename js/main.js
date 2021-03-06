"use strict";

let gameCanvas = document.getElementById("game");
let arr = [];
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
  let otherShipTypes = document.querySelector("[shiptypecontainer]");
  otherShipTypes.forEach(element => style.backgroundColor = "gray");  
  document.getElementById(n).style.backgroundColor = "blue";
}

function clickedTile(n) {
  arr[n].element.style.borderColor = "red";
}

drawGame();

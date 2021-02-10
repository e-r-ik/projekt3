"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let arr2d = new Array(2);
document.addEventListener("click", GetHoverTile(event);

class Tile {
  constructor(xStart, yStart, xEnd, yEnd, number) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
  }
}

function GetHoverTile(event {
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d.length; j++) {
      let currentMouseX = event.clientX;
      let currentMouseY = event.clientY;
      if (arr2d[i, j].xStart <= currentMouseX && arr2d[i, j].xEnd >= currentMouseX &&
          arr2d[i, j].yStart <= currentMouseY && arr2d[i, j].yEnd >= currentMouseY) {
        alert("du tryckte på tile" + arr[i, j].number);
      }
    }
  }
}

function StartGame() {
  let n = 1;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arr2d[i, j] = new Tile(i * 100, j * 100, (i + 1) * 100, (j + 1) * 100);
      ctx.beginPath();
      ctx.rect(arr2d[i, j].xStart, arr2d[i, j].yStart, arr2d[i, j].xEnd, arr2d[i, j].yEnd, n);
      ctx.stroke();


      ctx.font = "30px Arial";
      ctx.fillText(n, j * 100, (i + 1) * 100);

      n++;
    }
  }
}

StartGame();

function Looper() {

}

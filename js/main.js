//SETUP//

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let arr2d = new Array(2);

class Tile {
  constructor(xStart, yStart, xEnd, yEnd) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
  }
}

function getMousePos(canvas, event) {
  let rect = canvas.getBoundClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function isInside(pos, rect) {
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}

canvas.addEventListener("click", function(evt) {
  let mousePos = getMousePos(canvas, evt);
    debugger;
  if (isInside(mousePos,)) {

  }
})

function Game() {
  let n = 1;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arr2d[i, j] = new Tile(i * 100, j * 100, (i + 1) * 100, (j + 1) * 100);
      ctx.beginPath();
      ctx.rect(arr2d[i, j].xStart, arr2d[i, j].yStart, arr2d[i, j].xEnd, arr2d[i, j].yEnd);
      ctx.stroke();


      ctx.font = "30px Arial";
      ctx.fillText(n, j * 100, (i + 1) * 100);

      n++;
    }
  }

}

Game();

//SETUP//

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let arr2d = new Array(2);

let n = 1;

for (let i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    ctx.moveTo(i * 100, (j - 1) * 100);
    ctx.lineTo((i + 1) * 100, (j - 1) * 100);
    ctx.moveTo(i * 100, (j - 1) * 100);
    ctx.lineTo(i * 100, j * 100);
    ctx.stroke();
    arr2d[i, j] = n;

    ctx.font = "30px Arial";
    ctx.fillText(arr2d[i, j], i * 100, j * 100);

    n++;
  }
}

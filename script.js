

let canvas = document.getElementById("canvas");

let canvasContext = canvas.getContext("2d");

let createRect = (x, y, width, height, color) => {
  canvas.Context.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
};

let allRains = [];
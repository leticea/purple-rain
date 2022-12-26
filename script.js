

let canvas = document.getElementById("canvas");

let canvasContext = canvas.getContext("2d");

let createRect = (x, y, width, height, color) => {
  canvas.Context.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
};

let allRains = [];

let defaultRainWidth = 2;
let defaultRainHeight = 15;

let maximumRainCount = 500;

let fps = 60; // frame per second

let gameLoop = () => {
  setInterval(show, 1000/fps);
};

let show = () => {
  update()
  draw()
};

let update = () => {

};

let draw = () => {

};

gameLoop();


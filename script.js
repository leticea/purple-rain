class Rain {
  constructor(width, height, direction, posX, posY, speed, color) {
    this.width = width;
    this.height = height;
    this.direction = direction;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.color = color;
  }

  move() {
    this.posX += Math.sin(this.direction * Math.PI/2) * this.speed;
    this.posY += Math.cos(this.direction * Math.PI/2) * this.speed;
  }

  draw() {
    canvasContext.rotate(-this.direction);
    canvasContext.fillStyle = this.color;
    canvasContext.fillRect(this.posX, this.posY, this.width, this.height);
    canvasContext.rotate(this.direction);
  }
}

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


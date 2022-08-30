var canvas;
var form, player;
var game;


function preload() 
{

}

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();
}

function draw() 
{
  background("green");
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}


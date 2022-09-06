var canvas;
var form, player;
var game;
var gameState = 0;
var tipoDeCampeonato = 0;



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

  if (gameState == 1) 
  {
    game.play();
  }

  if (gameState == 2) 
  {
    game.treino();
  }

  if(gameState == 3)
  {
    game.campeonatos();

    if(tipoDeCampeonato == 1) 
    {
      game.torneio();
    }
  }

  if(gameState == 4) 
  {
    game.perfil();
  }

}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}


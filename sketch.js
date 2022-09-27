var canvas;
var form, player;
var game;
var gameState = 0;
var tipoDeCampeonato = 0;
var cabelo;
var pele;
var olhoDir, olhoEsq;


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

    else if(tipoDeCampeonato == 2) 
    {
      game.torneioNac();
    }

    else if(tipoDeCampeonato == 3) 
    {
      game.torneioInternac();
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


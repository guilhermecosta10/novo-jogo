class Game 
{
  constructor() 
  {
    this.torneioClassico = createButton("Torneio Clássico");
  }

  //tela inicial de cadastro do jogador
  start() 
  {
    form = new Form();
    form.display();
    player = new Player();

  }

  //transição de telas
  handleElements()
  {
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //jogo começa
  play()
  {
    this.handleElements();
    
  
    //mostra os sprites
    drawSprites();

  }

  treino() 
  {
    background("red");
    this.handleElements();
  }

  campeonatos() 
  {
    background("blue");
    this.handleElements();
    this.torneioClassico.class("customButton");
    this.torneioClassico.position(100,200);
    this.detectTorneioClassico();
  }

  perfil() 
  {
    background("purple");
    this.handleElements();
  }

  detectTorneioClassico() 
  {
    this.torneioClassico.mousePressed(()=>{

      tipoDeCampeonato = 1;

    }) 
  }

  torneio() 
  {
    background("white");
  } 


}


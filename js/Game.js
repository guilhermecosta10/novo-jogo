class Game 
{
  constructor() 
  {

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

    form.hide();
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
}  
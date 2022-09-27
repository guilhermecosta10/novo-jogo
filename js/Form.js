class Form 
{
  constructor() 
  {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createElement("h1");
    this.greeting = createElement("h2");
    this.treino = createButton("Treinos");
    this.campeonatos = createButton("Campeonatos");
    this.perfil = createButton("Perfil");

  }

  telaInicial() 
  {
    this.titleImg.position(105,1);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);

    this.titleImg.class("leadersText");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");

    this.titleImg.html("Nome do Jogo");
  }

  
  hide() 
  {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.treino.hide();
    this.campeonatos.hide();
    this.perfil.hide();
  }

  display() 
  {
    this.telaInicial();
    this.detectPlayButton();
    this.detectTreinoButton();
    this.detectCampeonatoButton();
    this.detectPerfilButton();
  }

  detectPlayButton() 
  {
    this.playButton.mousePressed(()=>{

      this.input.hide();
      this.playButton.hide();
      var message = `Seja bem vindo, ${this.input.value()}</br> Escolha uma opção.`;
      this.greeting.html(message);
      player.name = this.input.value();
      this.modosDeJogo();
      gameState = 1;

      
    }) 
  }

  detectTreinoButton() 
  {
    this.treino.mousePressed(()=>{

      this.hide();
      gameState = 2;

    }) 
  }

  detectCampeonatoButton() 
  {
    this.campeonatos.mousePressed(()=>{

      this.hide();
      gameState = 3;

    })
  }

  detectPerfilButton() 
  {
    this.perfil.mousePressed(()=>{

      this.hide();
      gameState = 4;
    })
  }

  
  modosDeJogo() 
  {
    this.treino.position(width / 2 - 10, height / 2 - 300);
    this.campeonatos.position(width / 2 - 230, height / 2 - 300);
    this.perfil.position(width / 2 - 450, height / 2 - 300);

    this.treino.class("customButton");
    this.campeonatos.class("customButton");
    this.perfil.class("customButton");
  }


}

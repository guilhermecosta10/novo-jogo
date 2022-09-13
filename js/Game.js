class Game 
{
  constructor() 
  {
    this.torneioClassico = createButton("Torneio Clássico");
    this.torneioNacional = createButton("Torneio Nacional");
    this.torneioInternacional = createButton("Torneio Internacional");
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
    this.torneioNacional.class("customButton");
    this.torneioNacional.position(300,200);
    this.torneioInternacional.class("customButton");
    this.torneioInternacional.position(500,200);
    this.detectTorneioClassico();
    this.detectTorneioNacional();
    this.detectTorneioInternacional();
  }

  perfil() 
  {
    background("purple");
    this.handleElements();

    rect(50,375,300,375)

    pele = createSprite(200,600,200,150);
    pele.shapeColor = "#ee9f46"

    olhoDir = createSprite(225,500,30,30);
    olhoDir.shapeColor = "#6b3809"

    olhoEsq = createSprite(175,500,30,30);
    olhoEsq.shapeColor = "#6b3809"

    cabelo = createSprite(200,440,100,60);
    cabelo.shapeColor = "#180b02"




    drawSprites();
  }

  torneio() 
  {
    background("white");
  } 

  torneioNac() 
  {
    background("pink");
  }

  torneioInternac() 
  {
    background("orange");
  }


  detectTorneioClassico() 
  {
    this.torneioClassico.mousePressed(()=>{

      this.esconderBotoesTorneio();
      tipoDeCampeonato = 1;

    }) 
  }


  detectTorneioNacional() 
  {
    this.torneioNacional.mousePressed(()=>{

      this.esconderBotoesTorneio();
      tipoDeCampeonato = 2;

    })
  }


  detectTorneioInternacional() 
  {
    this.torneioInternacional.mousePressed(()=>{

     this.esconderBotoesTorneio();
     tipoDeCampeonato = 3;
      
    })
  }


  esconderBotoesTorneio() 
  {
    this.torneioClassico.hide();
    this.torneioNacional.hide();
    this.torneioInternacional.hide();
  }



} //chave da classe



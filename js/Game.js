class Game 
{
  constructor() 
  {
    this.torneioClassico = createButton("Torneio Clássico");
    this.torneioNacional = createButton("Torneio Nacional");
    this.torneioInternacional = createButton("Torneio Internacional");

    this.Pele = createElement("h3");
    this.Cabelo = createElement("h3")
    this.Olho = createElement("h3");

    this.p1 = createButton("");
    this.p2 = createButton("");
    this.p3 = createButton("");

    this.c1 = createButton("");
    this.c2 = createButton("");
    this.c3 = createButton("");

    this.o1 = createButton("");
    this.o2 = createButton("");
    this.o3 = createButton("");

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


    this.p1.position(600,350);
    this.p1.class("p1");

    this.p2.position(600,450);
    this.p2.class("p2");

    this.p3.position(600,550);
    this.p3.class("p3");



    this.c1.position(1040,350);
    this.c1.class("c1");

    this.c2.position(1040,450);
    this.c2.class("c2");

    this.c3.position(1040,550);
    this.c3.class("c3");



    this.o1.position(1530,350);
    this.o1.class("o1");

    this.o2.position(1530,450);
    this.o2.class("o2");

    this.o3.position(1530,550);
    this.o3.class("o3");



    this.Pele.position(600,150);
    this.Pele.class("leadersText");
    this.Pele.html("Pele");

    this.Cabelo.position(1000,150);
    this.Cabelo.class("leadersText");
    this.Cabelo.html("Cabelo")

    this.Olho.position(1500,150);
    this.Olho.class("leadersText");
    this.Olho.html("Olhos");

    this.detectPele(pele);

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

  detectPele(p) 
  {
    this.p1.mousePressed(()=>{

      console.log("apertou p1");
      p.shapeColor = "#e6b870";
    })

    this.p2.mousePressed(()=>{

      pele.shapeColor = "#503b0f";
    })

    this.p3.mousePressed(()=>{

      pele.shapeColor = "#180e02";
    })
 }


  esconderBotoesTorneio() 
  {
    this.torneioClassico.hide();
    this.torneioNacional.hide();
    this.torneioInternacional.hide();
  }



} //chave da classe



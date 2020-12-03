class Form{
    constructor(){
        this.title  = createElement("h1");
        this.title.html("Ping Pong Game");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");

    }
    
    yay(){
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }

    display(){


       this.input.position(400 ,  400);
       this.button.position(350,400);
       this.title.position(300, 100);
        this.button.mousePressed(()=>{

            
            this.button.hide();
            this.input.hide();
            this.greeting.html("Weclome " + this.input.value() + ".");
            this.greeting.position(280, 500);
            playerCount = playerCount + 1;
            
            player.countUpdate(playerCount);
            player.index = playerCount;
            player.name = this.input.value();
            player.update();

        })
    }
}
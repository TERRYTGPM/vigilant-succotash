var player1, player2;
var form, player, players;
var playerCount = 0;
var game, gameState = 0;
var bullet, allplayers;
var ball, position;

function setup(){
    createCanvas(800, 800);

    database = firebase.database();
    game = new Game();
    game.getstate();
    game.gamestart();

    if(gameState === 1){
      ball = createSprite(400, 400, 20, 20);

      clear(); 
      game.play();
      background(255,255,255);
      
      ball.velocityX = random(-9, 9);
      ball.velocityY = random(-9, 9);    

     console.log(ball.x);
     database.ref('/').update({
       x: ball.x,
       y: ball.y
     })
    }

}

function draw() {
  background(0,0,0);

     if (playerCount === 2) {
       game.gameStateUpdate(1);

     }
     if (gameState === 1) {



/*
       edges = creatEdgeSprites();
       ball.bounceOff(edges[0]);
       ball.bounceOff(edges[3]);
       ball.bounceOff(edges[2]);
       ball.bounceOff(edges[1]);
*/
       
     }
     if (gameState === 2) {
      
       game.end();
     }



drawSprites();
  }
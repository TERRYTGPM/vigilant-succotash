class Game{
    constructor(){

    }
    getstate(){
        var gamestateref = database.ref("gameState");
        gamestateref.on("value", function (data){
            gameState = data.val();
        })
    }

    gameStateUpdate(state){

        database.ref('/').update({
            gameState: state
        })
        
    }

    async gamestart(){
        if (gameState === 0){
            player = new Player();
            var playercountref = await database.ref('playerCount').once("value");
            if(playercountref.exists()){
                playerCount =  playercountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        player1 = createSprite(795, player.y, 10, 70);

        player2 = createSprite(5, player.y, 10, 70);

        players = [player1, player2];
    }
    play(){
        form.yay();


        
        Player.getPlayerInfo();

        var y = 400;
        var x = 10;
        var index = 0;


        for(var rocket in allplayers){


            index = index + 1;
           

            y = allplayers[rocket].y;

          


            players[index - 1].y = y;

            if(player.index === index){

                text(allplayers[rocket].name, x - 25 , y + 25);

                if(keyIsDown(UP_ARROW)){


                   
                   player.y = player.y - 10;
                    player.update();
                }
        
                if(keyIsDown(DOWN_ARROW)){


                    player.y = player.y + 10;
                    player.update();
                }



                drawSprites();
            }
        }



        if(frameCount % 24 === 0 && keyIsDown("space")){

            bullet = createSprite(10, 10, x, y);
            bullet.velocityX = -10;
            if(isTouching(bullet, player2)){

                player.health = player.health - 1;
                bullet.destroy();

            }
            if(player.health <= 0){
                gamestate = 2;
            }
        }
        
    }

    end(){
        console.log("YAY!!!!!!!!!!!! the game is done");
        text("THE GAMES HAVE CONCLUDED! THE WINNER OF THE 74TH HUNGER GAMES ARE KATNISS EVERDEEN AND PEETA MELLARK");
    }
}

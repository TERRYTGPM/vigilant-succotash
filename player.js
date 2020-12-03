class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.health = 5;
        this.y = 400;
        this.distance = 0;
    }

  getCount(){
    var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", (data)=>{
      playerCount = data.val();
    })
  }

  countUpdate(count){
    database.ref('/').update({
      playerCount: count 
      })
  }
        
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
    name: this.name,
    y: this.y,
    index: this.index,
    health: this.health,
    distance: this.distance
    });
  }
          
static getPlayerInfo(){
            var playerInfoRef = database.ref('players');
            playerInfoRef.on("value",(data)=>{
              allplayers = data.val();
            })
          }    

}
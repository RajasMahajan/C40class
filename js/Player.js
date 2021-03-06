class Player {
  constructor(){
   this.name=null;
    this.index=null;
    this.distance=0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    });
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
// creating players folder in 23 line
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  // static functions are used by the class only,object can't acsses it
  static getPlayerInfo(){
    var playerInfo = database.ref('players');
    playerInfo.on("value",(data)=>{
      allPlayers = data.val(); // val(); reads information present in data
    })
  }
}

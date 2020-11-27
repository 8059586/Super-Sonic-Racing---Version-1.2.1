class Player {
  constructor(){
    //Properties of the player
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  //reads playerCount from database
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //writes playerCount to the database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

//reads carsatend from database
  getCarsAtEnd(){
    var playerRef = database.ref('carsAtEnd');
    playerRef.on("value",(data)=>{
      this.rank = data.val();
    })
  }

//writes carsatend to the database
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd: rank
    });
  }

  //writes player name and player distance to the database
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //reads all player information from database
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}

class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameStateP = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameStateP === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car1.addImage(car1i);
    car2=createSprite(300,200);
    car2.addImage(car2i);
    car3=createSprite(500,200);
    car3.addImage(car3i);
    car4=createSprite(700,200);
    car4.addImage(car4i);
    cars=[car1,car2,car3,car4];
    console.log("start");
  }
  play(){
    form.hide();
    textSize(30);
    text("gameStart ",120,100);
    Player.getPlayerInfo(); // calling getPlayerInfo function from Player class
    if(allPlayers!==undefined){
     // var displayPosition=130;
     
      //  if(plr === "player"+player.index){
        //  fill("red");
        //}
      // / else{
       //   fill("black");
     //   }
        //displayPosition=displayPosition+20;
        //textSize(15);
        //text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition);
        background("#c68767");
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index=0;
        var x=0;
        var y;
        for(var plr in allPlayers){
          x=x+275;
          index=index+1;
          y=displayHeight-allPlayers[plr].distance;
          cars[index-1].x=x;
          cars[index-1].y=y;
          if(index===player.index){
            stroke(3);
            fill("blue");
            ellipse(x,y,70,70);
            cars[index-1].shapeColor="red";
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
            console.log(camera.position.x);
            console.log(camera.position.y);
          }
      }
    }
    if(keyDown("up")&&player.index!==null){
      player.distance=player.distance+50;
      player.update();
    }
    if(player.distance>4100){
      gameStateP=2;
    }
    drawSprites();
  }
  end(){
  console.log("gameEnded");
  }
}

var database;
var drawing=[];
var fedTime, lastFed


function setup(){
  database = firebase.database();
  feed=createButton("feed the dog")
  feed.position(200,200)
  feed.mousePressed(feedDog);

  addfood=createButton("Add food")
  addfood.position(200,300)
  addfood.mousePressed(addFoods);

  foodObj=createSprite(200,200,20,20)
}
 
function draw() {
  background(0); 
  fill(225,255,0)
  textSize(15)
  if(lastFed>=12){
    text("Last Feed :"+lastfeed%12+"PM",350,30)
  }
  else if (lastFed==0)
  {
    text("Last Feed :12AM",350,30)
  }
  else
  {
    text("Last Feed :"+lastFed+"AM",200,30)
  }

  if (mouseIsPressed){   

      var point={
      x:mouseX,
      y:mouseY
      }

      drawing.push(point)
    
  }
beginShape();
  stroke(255)
  strokeWeight(4)
  noFill()
   for ( var i = 0; i <drawing.length;i++){
   vertex(drawing[i].x,drawing[i].y)
}

endShape();
display();
 
  //drawSprites();
}

function feedDog(){
  feedDog.addImage(happyDog)

  foodObj.updatefoodstock(foodObj.getfoodstock()-1)
  database.ref("/").update({

    Food:foodObj.getfoodstock(),
    FeedTime:hour()
  })

}

function addFoods(){
  foodS++
  database.ref("/").update({
    Fod:foodS
  })
}





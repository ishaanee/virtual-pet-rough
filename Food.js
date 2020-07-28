class Food {
    constructor(x,y,width,height) {
    var foodStock 
    var lastFed 
    }
     food = Bodies.rectangle(x,y,width,height);
      
      bottleimage = loadImage("js/Milk.png");
     

display(){
X=80
y=100
 imageMode(CENTER)
 image(this.image,100,100,70,70)

 if (this.foodStock!=0){
     for (var i=0;i<this.foodStock;i++){
         if (i%10==0)
         x=80
         y=y+50
     }
     image(bottleimage,x,y,70,70)
     x=x+30
 }
fedTime=database.ref("FeedTime")
fedTime.on("value",function(data){
    lastFed=data.val();

});


}


}

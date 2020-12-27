 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var backgroundImg;
var engine,world
var score=0;
function preload() {
  //  getbackgroundImage()
}

function setup(){
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(400,680,800,20);
    ground2 = new Ground(340,480,250,20);
    ground3 = new Ground(650,350,250,20);

    box1 = new Box(255,465,40,40);
    box2 = new Box(285,465,40,40);
    box3 = new Box(310,465,40,40);
    box4 = new Box(350,465,40,40);
    box5 = new Box(400,465,40,40);
    box6 = new Box(440,465,40,40);

    box7 = new Box(268,430,40,40);
    box8 = new Box(300,430,40,40);
    box9 = new Box(340,430,40,40);
    box10 = new Box(380,430,40,40);
    box11 = new Box(420,430,40,40);

    box12 = new Box(280,400,40,40);
    box13 = new Box(320,400,40,40);
    box14 = new Box(360,400,40,40);
    box15 = new Box(400,400,40,40);

    box16 = new Box(295,370,40,40);
    box17 = new Box(335,370,40,40);
    box18 = new Box(375,370,40,40);

    box19 = new Box(320,340,40,40);
    box20 = new Box(350,340,40,40);
    
    box21 = new Box(335,310,40,40);
    

   

    poly1 = new Poly(100,200,40,40)

    sling1 = new Sling(poly1.body,{x:100,y:200});




    Engine.run(engine);
}
function draw(){
    //if(backgroundImg)
    background("blue")
    textSize(35)
    fill ("red")
    text("score"+score,width-300,100)
    Engine.update(engine);
     ground1.display();
     ground2.display();
     
     box1.display();
     box1.Score();
     box2.display();
     box2.Score();
     box3.display();
     box3.Score();
     box4.display();
     box4.Score();
     box5.display();
     box5.Score();
     box6.display();
     box6.Score();
     box7.display();
     box7.Score();
     box8.display();
     box8.Score();
     box9.display();
     box9.Score();
     box10.display();
     box10.Score();
     box11.display();
     box11.Score();
     box12.display();
     box12.Score();
     box13.display();
     box13.Score();
     box14.display();
     box14.Score();
     box15.display();
     box15.Score();
     box16.display();
     box16.Score();
     box17.display();
     box17.Score();
     box18.display();
     box18.Score();
     box19.display();
     box19.Score();
     box20.display();
     box20.Score();
     box21.display();
     box21.Score();
     poly1.display();
     sling1.display();
    
   
}

function mouseDragged(){
    Matter.Body.setPosition(poly1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling1.attach(poly1.body)
    }
}

async function getbackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/asia/tokyo")
    var responseJson=await response.json()
    var datetime=responseJson.datetime;
    var hour=datetime.slice(11,13);
    if(hour>=6&&hour<=19){
        bg="day.jpeg"
    }
        else{
            bg="night.jpg"
        }
    backgroundImg=loadImage(bg)

}
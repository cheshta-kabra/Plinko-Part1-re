const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine,world;

var ground;

var divisions=[];
var particles=[];
var plinkos=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(240,770,480,20);
    for(var k= 0; k <=width; k=k+90){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   }

    for(var j= 40;j <=width;j=j+50){
      plinkos.push(new Pinko(j,200));
   }
   
   for(var j= 15; j <=width-10; j=j+50){
     plinkos.push(new Pinko(j,105));
  }
  
  for(var j= 15; j <=width-10; j=j+40){
    plinkos.push(new Pinko(j,300));
 }
}

function draw() {
  background("blue"); 
  Engine.update(engine);
   if(frameCount%60 === 0){
     var rand=Math.round(random(0,width/2+10));
     var rand1=Math.round(random(width/2-10,0));
     console.log("true"+rand)
     var particle=new Particles(rand,rand1)
     console.log(particle)
      particles.push(particle);
   }
   for(var k= 0; k < divisions.length; k++){
     divisions[k].display();
   }
   for(var j= 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var v= 0; v < plinkos.length; v++){
    plinkos[v].display();
  }

   ground.display();
  
}
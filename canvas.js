var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var c = canvas.getContext('2d');


// for( var i=0; i <100; i++){

// c.beginPath();
// c.arc(Math.random() * innerWidth,Math.random()* innerHeight,10,0,Math.PI*2,false);
// c.strokeStyle = 'blue';
// c.stroke();

// }


// var pi = Math.PI;
// var radius = 15;
// var angle = 0;
 
 var radius = 15;

function Particle(x,y, angle,velocity){

this.x = x;
this.y = y;
this.angle = angle;
this.velocity = velocity;
var vx = (this.velocity)*(Math.cos(this.angle));
 var vy = (this.velocity)*(Math.sin(this.angle));

this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y ,radius,0,Math.PI*2,false);
    c.strokeStyle = 'black';
    
    c.stroke();

   }

   this.update = function(){

 

if(this.x + radius > innerWidth  || this.x  - radius < 0){
    	vx = -vx;
    }

    if(this.y  + radius > innerHeight || this.y - radius < 0){
    	vy = -vy;
    }
   

  this.x += vx;
   this.y += vy;

   this.draw();

   }

}


var particleArray = [];

for(var i =0; i < 100; i++){

 particleArray.push(new Particle( Math.random()* (innerWidth - radius*2) + radius , Math.random()* ( innerHeight - radius*2) + radius , Math.PI*Math.random(), 5 ))
 

}
function linearMotion(){

	requestAnimationFrame(linearMotion);
	c.clearRect(0,0,innerWidth,innerHeight);


for(var i = 0; i < particleArray.length; i++){

	particleArray[i].update();
}



    // angle = pi*Math.random();
    // var x = Math.random()*50;
    // var y = Math.random()*50;
    
    // c.beginPath();
    // c.arc(x, y ,radius,0,Math.PI*2,false);
    // c.strokeStyle = 'blue';
    // c.fill();
    // c.stroke();

    // vx =0.1*Math.cos(angle);
    // vy =0.1*Math.sin(angle);

   
    

}

linearMotion();


console.log(canvas);


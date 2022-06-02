var hour;
var minute;
var second;
var hangle;
var mangle;
var sangle;
var xh;
var xm;
var xs;
var yh;
var ym;
var ys;
var offset;
var xn;
var yn;
var ticks;
var amp;

function setup() {
  createCanvas(400,400);
  background(234, 144, 152);
  hour=hour();
  minute=minute();
  second=second();
  offset=width/2;
  frameRate(1);
}

function draw() {
  background(234, 144, 152);
  updateTime();
  timeToAngle();
  clockFace();
  ticks=0;
  for ( let j=0; j<=60; j++){
    amp=200.0;
    strokeWeight(2.5);
    xn = (cos(ticks) * amp + offset);
    yn = (sin(ticks) * amp + offset);
    line(width/2,height/2,xn,yn);
    ticks+=(6.283/60);
  }
  ticks=0;
  for ( let k=0; k<=60; k++){
    amp=185.0;
    strokeWeight(6);
    stroke(158, 177, 227);
    xn = (cos(ticks) * amp + offset);
    yn = (sin(ticks) * amp + offset);
    line(width/2,height/2,xn,yn);
    ticks+=(6.283/60);
  }
  stroke(0);
  ticks=0;
  for ( let j=0; j<=12; j++){
    amp=200.0;
    strokeWeight(2.5);
    xn = (cos(ticks) * amp + offset);
    yn = (sin(ticks) * amp + offset);
    line(width/2,height/2,xn,yn);
    ticks+=(6.283/12);
  }
  ticks=0;
  for ( let k=0; k<=12; k++){
    amp=170.0;
    strokeWeight(6);
    stroke(158, 177, 227);
    xn = (cos(ticks) * amp + offset);
    yn = (sin(ticks) * amp + offset);
    line(width/2,height/2,xn,yn);
    ticks+=(6.283/12);
  }
  stroke(0);
  strokeWeight(5);
  line(width/2,height/2,width/2,0);
  line(width/2,height/2,0,height/2);
  line(width/2,height/2,width/2,height);
  line(width/2,height/2,width,height/2);strokeWeight(5);
  stroke(158, 177, 227);
  line(width/2,height/2,width/2,30);
  line(width/2,height/2,30,height/2);
  line(width/2,height/2,width/2,height-30);
  line(width/2,height/2,width-30,height/2);
  stroke(0);
  strokeWeight(1);
  drawHand(100.0);
}

function timeToAngle(){
  sangle=radians((360*(second/60.0))-90);
  mangle=radians((360*(minute/60.0))-90)+(sangle/60);
  hangle=radians((360*(hour/12.0))-90)+(mangle/12);
}

function drawHand(float amplitute){
  amplitute=100.0;
  xh = (cos(hangle) * amplitute + offset);
  yh = (sin(hangle) * amplitute + offset);
  amplitute=150;
  xm = (cos(mangle) * amplitute + offset);
  ym = (sin(mangle) * amplitute + offset);
  amplitute=170;
  xs = (cos(sangle) * amplitute + offset);
  ys = (sin(sangle) * amplitute + offset);
  strokeWeight(4);
  line(xh,yh,width/2,height/2);
  strokeWeight(2);
  line(xm,ym,width/2,height/2);
  strokeWeight(1);
  stroke(255,0,0);
  line(xs,ys,width/2,height/2);
  stroke(0);
}

function clockFace(){
  fill(158, 177, 227);
  circle(200,200,400);
}

function updateTime(){
  hour=hour();
  minute=minute();
  second=second();
}

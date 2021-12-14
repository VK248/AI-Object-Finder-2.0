status="";
objects=[];
video="";
function preload(){
}

function draw(){
image(video,0,0,480,380);
if (status != ""){
objectDetector.detect(video,gotResult)
for(i=0; i < objects.length; i++)
{
    val=document.getElementById("yes").value;
fill("#800000");
noFill();
stroke("#800000");
percent=floor(objects[i].confidence*100);
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
text(objects[i].label+" "+percent+"%", objects[i].x + 15 , objects[i].y+15);
}
}
}

function setup(){
canvas=createCanvas(480,380);
video=createCapture(video);
canvas.center();
video.hide();
}

function modeloaded(){
video.loop();
video.volume(0);
video.speed(1);
console.log('When You Read This Message, You Will Smile :)')
}

function start(){
objectDetector=ml5.objectDetector("cocossd", modeloaded)
document.getElementById("start").style.backgroundColor="purple";
if(objects[i]==val){
    document.getElementById("status").innerHTML="Status:Object Detected";
    document.getElementById("object").innerHTML=val+"Found";
}
}

function gotResult(){
if(error){
console.log(error);
}
console.log(results)
objects=results;    
}

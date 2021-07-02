video="";
status="";
object=[];
function preload(){
    video=createVideo("video.mp4");
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video.hide();
}
function draw(){
   image(video,0,0,350,350);
   if( status !="" ){
       objectDetection.detect(video,gotResult);
       for(i=0;i<object.length;i++){
           document.getElementById("object").innerHTML="Object Detected";
           document.getElementById("detect").innerHTML="object Detected = "+object.length;
           fill("#00FFFF");
           persent=floor(object[i].confidence*100);
           text(object[i].label+" "+persent+"%",object[i].x+25,object[i].y+25);
           noFill();
           stroke("#00FFFF");
           rect(object[i].x-59,object[i].y,object[i].height,object[i].width+100)
       }
   }
}
function gotResult(error,results){
    if(error){
    console.log(error);
    }
    else{
        console.log(results);
        object=results;
    }
}
function start(){
    objectDetection=ml5.objectDetector("cocossd",model_laded());
    document.getElementById("object").innerHTML="Detecting Object..";
}
function model_laded(){
console.log("MODeL LOADEd!1@!");
status=true;
video.loop();
video.volume(0);
video.speed(1);
}
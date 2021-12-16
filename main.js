function preload(){

}
 function setup(){
     canvas= createCanvas(300,350);
     canvas.center();
    video=createCapture(VIDEO);
    video.size(300,350);
    video.center();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
 }

 function draw(){
    image(video,0,0,300,300);
 }
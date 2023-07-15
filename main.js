song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreleftwrist=0;
function preload(){
    song1=loadSound("harrypotter.mp3");
    song2=loadSound("peterpan.mp3");
}
function setup(){
    canvas=createCanvas(600 , 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}
function modelLoaded(){
    console.log("Posenet Is Initialized.");
}
function gotPoses(results){
    if(results.length>0){
  console.log(results);
  scoreleftwrist=results[0].pose.keypoints[9].score;
  console.log("scoreleftwrist=" + scoreleftwrist);
  leftwristx=results[0].pose.leftWrist.x;
  leftwristy=results[0].pose.leftWrist.y;
  console.log("leftwristx= " + leftwristx + "leftwristy= " + leftwristy);
  rightwristx=results[0].pose.rightWrist.x;
  rightwristy=results[0].pose.rightWrist.y;
  console.log("rightwristx= " + rightwristx + "rightwristy" + rightwristy);
    }
}
function draw(){
    image(video , 0 , 0 , 600 , 500);
    fill("#f25e5e");
    stroke("#050505");
    if(scoreleftwrist>0.2){
        song1.isPlaying();
     } else{
            song2.isPlaying();
        }
    } 
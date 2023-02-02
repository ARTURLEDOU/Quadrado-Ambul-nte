noseX = 0;
noseY = 0;
diferenca = 0;
pulso1X = 0;
pulso2X = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100,200)

    canvas = createCanvas(550, 500);
    canvas.position(800,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Tudo Pronto. Vamos");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    pulso1X = results[0].pose.rightWrist.x;
    pulso2X = results[0].pose.leftWrist.x;
    diferenca = floor(pulso2X - pulso1X);

}

}

function draw(){
    background('#8e2de2')
document.getElementById("quadrado").innerHTML = "Medidas = " + diferenca + " px";
fill('white')
stroke('')
square(noseX, noseY, diferenca);
}



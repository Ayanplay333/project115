https://teachablemachine.withgoogle.com/models/5FZL2UQvs/

function start()
{
navigator.mediaDevices.getUserMedia({
    audio:true
});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5FZL2UQvs/model.json',modelReady);
}
function modelReady()
{
classifier.classify(gotResult);
}
function gotResult(error,results)
{
if(error)
{
console.error(error);
}
else
{
    console.log(results);
    var r = Math.floor(Math.random()*255) + 1 ;
    var g = Math.floor(Math.random()*255) + 1 ;
    var b = Math.floor(Math.random()*255) + 1 ;
    document.getElementById("label").innerHTML = results[0].label;
    document.getElementById("accruacy").innerHTML = (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("label").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("accruacy").style.color = "rgb("+r+","+g+","+b+")";


    img1 = document.getElementById("Background noise");
    img2 = document.getElementById("Barking");
    img3 = document.getElementById("Meowing");
    
    if(results[0].label == "Background noise"){
img1.src = 'ear.png';

    }
    else if(results[0].label == "Barking"){
img1.src = 'dog.png';

    }
    else if(results[0].label == "Meowing"){
        img1.src = 'cat.png';
        
   

}
}
}
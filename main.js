function identify(){
    navigator.mediaDevices.getUserMedia({audio: true})
    mymodle = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cHL9imEOt/model.json",modelReady)
}
function modelReady(){
mymodle.classify(gotResults)
}

function gotResults(error,results){
if(error){console.log(error)}
else{
console.log(results)
document.getElementById("Sn").innerHTML= "I can Hear"+results[0].label
document.getElementById("acc").innerHTML= "Accuracy"+(results[0].confidence).toFixed(2)+" %"

b1 = document.getElementById("a4")
cat = document.getElementById("a1")
dog = document.getElementById("a2")
lion= document.getElementById("a3")

if(results[0].label=="Barking"){
    b1.src="ear img.jpg"
    cat.src="cat.jpg"
    dog.src="dog gif.gif"
    lion.src="lion img.jpg"
}
 else if(results[0].label=="Meowing"){
    b1.src="ear img.jpg"
    cat.src="cat"
    dog.src="cute-dog.png"
    lion.src="lion img.jpg"
}
 else if(results[0].label=="Roaring"){
    b1.src="ear img.jpg"
    cat.src="cat.jpg"
    dog.src="cute-dog.png"
    lion.src="lion gif.gif"
}
else{
    b1.src="bg.gif"
    cat.src="cat.jpg"
    dog.src="cute-dog.png"
    lion.src="lion img.jpg" 
}













}
}




















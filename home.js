var randonNumber1 =  Math.floor(Math.random() * 6)+1;

var randomDiceImage1 = "dice"+randonNumber1+".png";

var randomSourceImage1 = "asset/"+randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomSourceImage1);


var randonNumber2 =  Math.floor(Math.random() * 6)+1;

var randomDiceImage2 = "dice"+randonNumber2+".png";

var randomSourceImage2 = "asset/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomSourceImage2);

if(randonNumber1 < randonNumber2) {
    document.querySelector("h1").innerHTML="🚩Player1 Won!";
}
else if(randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML="🚩Player2 Won!";
}
else{
    document.querySelector("h1").innerHTML="😄Draw";
}
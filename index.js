var randomNumber1 = Math.floor(1+Math.random()*6);
var dice = "dice" + randomNumber1 + ".png";
var randomImage = "images/" + dice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImage);

var randomNumber2 = Math.floor(1+Math.random()*6);
var dice2 ="dice" + randomNumber2 + ".png";
var randomImage2= "images/"+ dice2;
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2)
{
  var h1= document.querySelector("h1");
  h1.innerHTML="🚩 Player 1 win";
}
else if(randomNumber2>randomNumber1)
{
    var h1= document.querySelector("h1");
    h1.innerHTML="Player2 win🚩";
}
else{
    var h1= document.querySelector("h1");
    h1.innerHTML="Draw! 👯‍♂️";
}
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // generating the random number 1 to 6
var randomImage = 'dice' + randomNumber1 +'.png';  // dice1.png -- dice2.png
var randomImageSource = 'images/' + randomImage;   // images/dice1.png like that it is generating the image source

var img1 = document.querySelectorAll('img')[0];   // for first img tag
img1.setAttribute("src", randomImageSource);

// for image 2
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

var img2 = document.querySelectorAll('img')[1]; // for the second img tag
img2.setAttribute('src', randomImageSource2);

// conditions for showing the result 
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = 'Player 1 Win!!';
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = 'Player 2 Win!!';
}
else if(randomNumber1 = randomNumber2){
    document.querySelector("h1").innerHTML = 'Game Draw!!';
}
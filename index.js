var yourName = prompt("What is your name?");
var crushName = prompt("What is your Crush's name?");
var randomNumber = Math.floor(Math.random() * 100) + 1;
if (randomNumber > 75) {
    alert("Hey " + yourName + "!, let me inform you that " + crushName + " really loves you, you might do well to stay very close. My advice though!");
}
else if (randomNumber <= 55) {
    alert("Hey " + yourName + "!, I think " + crushName + " is actually deceiving you, you might do well to find out what's really happening. what do you think? my advice though!");
}
else {
    alert("Hey " + yourName + "!, " + crushName + " only loves you a bit, you might do well to find out what's really happening. what do you think? my advice though!");
}

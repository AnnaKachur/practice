function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

var countdown = randomInt(1, 10);

console.log("./countdown");
console.log("Countdown:", countdown);

while (countdown >= 1) {
    if (countdown % 2 == 0) {
        console.log("Boop", countdown);
        countdown--; // boop
    } else {
        console.log("Beep", countdown);
        countdown--;// beep
    }
    
}
console.log ("BOOM!")


function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

console.log("double_down_countdown");

var countdown1 = randomInt(1, 5);
var countdown2 = randomInt(1, 5);
var countdown3 = randomInt(1, 5);

console.log("Countdowns [" + countdown1 + ", " + countdown2 + ", " + countdown3 + "]");

console.log("1. Countdown:", countdown1);

while (countdown1 >= 1) {
    if (countdown1 % 2 == 0) {
        console.log("Boop", countdown1);
        countdown1--; // boop
    } else {
        console.log("Beep", countdown1);
        countdown1--;// beep
    }
    
}
console.log ("BOOM!");

console.log("\n");

console.log("2. Countdown:", countdown2);

while (countdown2 >= 1) {
    if (countdown2 % 2 == 0) {
        console.log("Boop", countdown2);
        countdown2--; // boop
    } else {
        console.log("Beep", countdown2);
        countdown2--;// beep
    }
    
}
console.log ("BOOM!");

console.log("\n");

console.log("3. Countdown:", countdown3);

while (countdown3 >= 1) {
    if (countdown3 % 2 == 0) {
        console.log("Boop", countdown3);
        countdown3--; // boop
    } else {
        console.log("Beep", countdown3);
        countdown3--;// beep
    }
    
}
console.log ("BOOM!");

console.log("\n");

console.log("There is nothing left!");
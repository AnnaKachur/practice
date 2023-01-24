function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

var user_bet = randomInt(0, 50);
var roulette_number = randomInt(0, 36);

console.log("./roulette");
console.log("You bet on", user_bet);

if (user_bet === roulette_number) {
    console.log("Roulette number is", roulette_number);
    console.log("You won");
}
if (user_bet !== roulette_number && user_bet<= 36) {
    console.log("Roulette number is", roulette_number);
    console.log("You lose");
}
if (user_bet > 36 && user_bet<=50) {
    console.log("Error: unacceptable bet\nPlease, choose a number between 0 and 36 inclusive next time");
}
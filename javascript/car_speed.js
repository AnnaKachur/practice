function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

var car_speed = randomInt(0, 0);
console.log("./car_speed");
console.log("Car speed:", car_speed);

if (car_speed < 0) {
    console.log("Your car is broken\nPlease visit a repair shop");
}
if (car_speed === 0) {
    console.log("The speed is perfect");
}
if (car_speed > 0 && car_speed <= 50) {
    console.log("The speed is ok");
}
if (car_speed > 50 && car_speed !== 420) {
    console.log("The speed is too high\nPlease slow down");
}
if (car_speed === 420) {
    console.log("Nice!\nBut still too high");
}
function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

console.log("./sum");

var number_of_rows = randomInt(0, 10);
var number = randomInt(0, 100);

for (let i = 1; i <= number_of_rows; i++) {
    console.log(i + ". " + (number + randomInt(1, 100)));
}

//var sum = 
//console.log("The sum is", sum);
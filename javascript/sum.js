function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

console.log("./sum");

var number_of_rows = randomInt(0, 10);

var sum = 0;
for (let i = 1; i <= number_of_rows; i++) {
    var number = randomInt(1, 100);
    console.log(i + ". " + number);
    sum += number;
}

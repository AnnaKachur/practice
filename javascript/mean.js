function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

console.log("./mean");

var number_of_rows = randomInt(0, 10);
var sum = 0;

for (let i = 0; i < number_of_rows; i++) {
    var number = randomInt(0, 100);
    var row_index = i + 1;
    console.log(row_index + ". " + number);
    sum += number;
}

console.log("The mean is", sum / number_of_rows);

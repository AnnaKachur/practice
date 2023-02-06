function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

console.log("double_down_countdown_2");


var number_of_countdowns = randomInt(1, 5);
var number_of_rows = 0;

for (let i = 1; i <= number_of_countdowns; i++) {
    var row_index = randomInt(1, 5);
    console.log(i + ". Countdown:" + row_index);
        while (row_index >= 1) {
             if (row_index % 2 == 0) {
                 console.log("Boop", row_index);
                 row_index--; // boop
                 } else {
                    console.log("Beep", row_index);
                    row_index--;// beep
                }
                number_of_rows = number_of_rows +1;

        }
    console.log ("BOOM!");
    console.log("\n"); 
    
}

console.log("There is nothing left!");
console.log("Countdowns [" + number_of_rows + "]");
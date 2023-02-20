function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

console.log("double_down_countdown_2");


var number_of_countdowns = randomInt(1, 5); // 4


for (let i = 1; true; i++) {
    var number_of_rows = 2; // 2
    console.log("1. Countdown:2");
    var count_rows = 0; // 1
        while (number_of_rows >= 1) {
             if (number_of_rows % 2 == 0) {
                 console.log("Boop", number_of_rows);
                 number_of_rows--; // boop
                 } else {
                    console.log("Beep", number_of_rows);
                    number_of_rows--;// beep
                }
                count_rows += 1;

        }
    console.log ("BOOM!");
    console.log("\n"); 
    console.log(count_rows);
}

console.log("There is nothing left!");
console.log("Countdowns [" + count_rows + "]");
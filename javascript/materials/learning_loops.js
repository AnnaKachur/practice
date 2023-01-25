// Loops
function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

// while loop
var counter = randomInt(2, 5)

while (counter >= 0) {
    console.log("counter is", counter);
    counter--;
}

console.log("countdown finished!");

// do while loop
var counter2 = randomInt(-5, 5)

do {
    console.log("counter2 is", counter2);
    counter2--;
} while (counter2 >= 0);

// for loop
// for ( create counter ; condition ; increment) 

for (var i = 0; i < 10; i++) {
    // code

    console.log("BART IS ON DETENTION!", i)
    
    // code
}


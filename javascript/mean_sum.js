function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

console.log("Mean Sum");

var number_of_rows = randomInt(0, 10);
var sum_odd = 0;
var sum_even = 0;
var counter = 0;

for (let i = 0; i < number_of_rows; i++) {
    var number = randomInt(0, 100);
    var row_index = i + 1;
    console.log(row_index + ". " + number);
     if (number %2 !== 0) { 
        sum_odd += number;
    } else {
        sum_even += number;
        if (sum_even != 0);{
           counter = counter + 1; 
        }
        
     }
}
console.log("The sum of odd numbers is " + sum_odd);
console.log("The mean of even numbers is " + sum_even / counter);
//    
    
// }
//     console.log("The mean of even numbers is " + sum / number_of_rows);
//     console.log("The sum of odd numbers is " + sum);


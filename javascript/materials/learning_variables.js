var age = 29;

console.log("My age is " + age);

// You found a magic pen that spawns a dollar each time you hit a table

var hits_per_second = 4;
var seconds_in_hour = 60 * 60;
var hits_per_hour = hits_per_second * seconds_in_hour; 
var hits_per_day = hits_per_hour * 2;

var earnings = hits_per_day * 21;
console.log("Monthly earnings is ", earnings);

var taxes = earnings * 40 / 100;
console.log("Taxes to pay is ", taxes);

var earning_after_taxes = earnings - taxes;
console.log("Earning after taxes is " + earning_after_taxes);

var royalties = earning_after_taxes * 0.05;
console.log("Royalty is ", royalties);


var total_price = 0;

var grapes_price = 2;
total_price = total_price + grapes_price;

var cheese_price = 3.5;
total_price = total_price + cheese_price;

var icecream_price = 6.75;
total_price += icecream_price;

var coca_cola_price = 2;
total_price += coca_cola_price;

console.log("To checkout: " + total_price + "$");



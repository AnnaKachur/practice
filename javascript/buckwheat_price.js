function userInput() {return Math.floor(Math.random() * 100);} // do not touch or change this line!!!

var buckwheat_price_per_kilo = 49.5;
var user_money = userInput();
var number_of_kilos = user_money / buckwheat_price_per_kilo; // the number of kilos a user can buy with the money paid

console.log("./buckwheat_price");
console.log("The price of buckwheat is", buckwheat_price_per_kilo, "uah");
console.log("Your money", user_money);
console.log("You will get", number_of_kilos.toFixed(2), "kg of buckwheat");
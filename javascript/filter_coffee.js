function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

var coffee_grams = randomInt(15, 45);
var water_ml = randomInt(250, 750);
var min_proportion = 16;
var max_proportion = 17.5;

console.log("./coffee_proportion");
console.log("Enter the coffee proportions:");
console.log("Blend coffee amount", coffee_grams);
console.log("Clean water amount", water_ml);

if (water_ml >= coffee_grams * min_proportion && water_ml <= coffee_grams * max_proportion) {
    console.log("The coffee is just right");
} else if (water_ml > coffee_grams * max_proportion) {
    console.log("The coffee is too watery");
} else if (water_ml < coffee_grams * min_proportion) {
    console.log("The coffee is too strong");
}
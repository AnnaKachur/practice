// Conditionals
var my_age = 17;
var drinking_age = 18;

console.log("my_age is", my_age);
console.log("my_age >= drinking_age ->", my_age >= drinking_age);
console.log("45 >= drinking_age ->", 45 >= drinking_age);

if (my_age >= drinking_age) {
    console.log("Here you go! Your alcohol!");
} else {
    console.log("Grow up!");
}

var meters_of_snow = 2;

console.log("Can I go for a walk in the snow?")
console.log("There are", meters_of_snow, "meters of snow!");
if (meters_of_snow <= 0) {
    console.log("There is no snow, so no snow walk for today!");
} else if (meters_of_snow >= 1) { 
    console.log("Woooow, that's too much snow, better stay home today!")
} else {
    console.log("Let's go for a walk!");
}


var weekday = 4;

console.log("weekday is", weekday);

switch (weekday) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("This day should not exist")
        break;
}

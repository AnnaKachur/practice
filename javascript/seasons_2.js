function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!

var month_index = randomInt(1, 12);

console.log("./seasons");
console.log("Month index is", month_index);

switch(month_index) {
    case 1: 
    console.log("It is January. Winter");
    break;
    case 2: 
    console.log("It is February. Winter");
    break;
    case 3: 
    console.log("It is March. Spring");
    break;
    case 4: 
    console.log("It is April. Spring");
    break;
    case 5: 
    console.log("It is May. Spring");
    break;
    case 6: 
    console.log("It is June. Summer");
    break;
    case 7: 
    console.log("It is July. Summer");
    break;
    case 8: 
    console.log("It is August. Summer");
    break;
    case 9: 
    console.log("It is September. Autumn");
    break;
    case 10: 
    console.log("It is Oktober. Autumn");
    break;
    case 11: 
    console.log("It is November. Autumn");
    break;
    case 12: 
    console.log("It is December. Winter");
    break;
}

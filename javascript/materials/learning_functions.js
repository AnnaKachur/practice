// functions

function printSeparator() {
    console.log('-'.repeat(40));
    console.log();
}

function sayHello() {
    console.log("Hello");
    
    // code
    // if
    // for
    // while
    // function
}

3 + (2 / (6 + (2 - 4)))

sayHello();
sayHello();
let result = sayHello();
console.log(result);

function celsiusToFarenheit(farenheit) {
    const celsius = (farenheit - 32) * 5 / 9;

    return celsius;
}

console.log("In the morning", celsiusToFarenheit(60) + "C");
console.log("During the day", celsiusToFarenheit(80) + "C");

printSeparator();

function sayTwoTimes(text) {
    console.log(text);
    console.log(text);
}

sayTwoTimes("Hello to Jerry!");

function add(number1, number2) {
    return number1 + number2;
}

let add_result = add(3, 5);
console.log("add result", add_result);
console.log("add result", add(3, 5));
console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("Sqaure root of 2 is " + Math.sqrt(2));

printSeparator();

function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

function showDrinkingStatus(age) {
    const drinking_age = 18;

    if (age >= drinking_age) {
        console.log("Here you go! Your alcohol!");
    } else {
        console.log("Grow up!");
    }
}

function greetAndShowDrinkingStatus(name, age) {
    greetPerson(name);
    showDrinkingStatus(age);
}

greetAndShowDrinkingStatus("Mike", 20);
greetAndShowDrinkingStatus("Abigail", 17);

printSeparator();

console.log('Width: 5, Height 4, Material: \'*\'');
console.log('*****');
console.log('*   *');
console.log('*   *');
console.log('*****');
console.log();

function printRectangle(width, height, material, fill) {
    console.log('Width: ' + width + ', Height ' + height + ', Material \'' + material + '\', Fill: \'' + fill + '\'');

    let top_line = '';
    for (let i = 0; i < width; i++) {
        top_line += material;
    }
    console.log(top_line);

    const inner_width = width - 2;
    let middle_line = '';


    middle_line += material;
    for (let i = 0; i < inner_width; i++) {
        middle_line += fill;
    }
    middle_line += material;

    const inner_height = height - 2;

    for (let i = 0; i < inner_height; i++) {
        console.log(middle_line);
    }

    const bottom_line = top_line;

    console.log(bottom_line);
    console.log();
}

printRectangle(5, 4, '*', ' ');
printRectangle(7, 7, '+', '*');
printRectangle(40, 5, '#', '.');
printRectangle(27, 9, '-', '@');

printSeparator();

// function remainder(number) {
//     const result = number 
// }

console.log("Example:")
console.log(`Number 7.599 consists of 7 and 0.599`);
console.log();

function retrieveIntegerPart(number) {
    const result = Math.floor(number);

    return result;
}

function retrieveRemainder(number) {
    const integer_part = retrieveIntegerPart(number);
    const remainder = number - integer_part;

    return remainder;
}

function printNumberParts(number) {
    const integer_part = retrieveIntegerPart(number);
    const remainder = retrieveRemainder(number);

    console.log(`Number ${number} consists of ${integer_part} and ${remainder}`);
    console.log();
}

printNumberParts(7.599);
printNumberParts(9.199);
printNumberParts(5.0);
printNumberParts(7.999999);







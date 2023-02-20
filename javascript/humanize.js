function assert(given, expected) {
    if (given === expected) {
        console.log('Passed')
    } else {
        console.log(`Failed: expected '${expected}' but was given '${given}'`);
    }
} 
// do not touch or change or add lines above!!!


// your code here down below

function positive_numbers (number) { 
    if (number === 0) {
        return "zero";
    } else if (number === 1) {
        return "one";
    } else if (number === 2) {
        return "two";
    } else if (number === 3) {
        return "three";
    } else if (number === 4) {
        return "four";
    } else {
        return "five";
    } 
}

function humanize(number) {
    if (number >= 0) {
        return positive_numbers(number);
    } else {
       let number_2 = number * -1; 
       return "minus " + positive_numbers(number_2);
    }
           
}

// returns number as text


// test cases

console.log("Tests:")
assert(humanize(-5), 'minus five');
assert(humanize(-4), 'minus four');
assert(humanize(-3), 'minus three');
assert(humanize(-2), 'minus two');
assert(humanize(-1), 'minus one');
assert(humanize(0), 'zero');
assert(humanize(1), 'one');
assert(humanize(2), 'two');
assert(humanize(3), 'three');
assert(humanize(4), 'four');
assert(humanize(5), 'five');

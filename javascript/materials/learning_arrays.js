// Arrays

var temperatures = [];

temperatures = [21, 18, 20, 23, 22, 22, 24];

console.log("temperatures", temperatures)
console.log("Number of temperatures", temperatures.length)
console.log("first temperature", temperatures[0]);
console.log("temperatures[1]", temperatures[1]);
console.log(temperatures[1], temperatures[4]);

var my_index = 2;
console.log(temperatures[my_index]);

temperatures[1] = temperatures[1] * -1; 

for (let i = 0; i < temperatures.length; i++) {
    console.log("Temperature", temperatures[i]);
}

var emails = ["anna_k@gmail.com", "oleksiy@outlook.com", "chupakabra@yahoo.com"];

for (let i = 0; i < emails.length; i++) {
    console.log(emails[i]);
}

console.log("Number of temperatures", temperatures.length)
console.log("Last element", temperatures[temperatures.length - 1])
function userInput() {return Math.floor(Math.random() * 100);} // do not touch or change this line!!!
var rose_price = userInput();
var quantity = userInput();
var bouquet_price = rose_price * quantity;

console.log("./bouquet_price");
console.log("Price per rose", rose_price);
console.log("Quantity", quantity);
console.log("Bouquet price is", bouquet_price);


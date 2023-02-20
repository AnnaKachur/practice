function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} // do not touch or change this line!!!


var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convert_hundreds(num) {
    if (num > 99) {
      return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
    } else {
      return convert_tens(num);
    }
  }
  
  function convert_tens(num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else {
      return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
  }
  
  function convert(num) {
    if (num == 0) return "zero";
    else return convert_hundreds(num);
  }

  function convert_tens_minus(num) {
    if (num < 0 && num > -10)
    return "minus " + ones[num * -1];
    else if (num <= -10 && num >= -20) return "minus " + teens[num * -1 + 10];
    else {
      return "minus " + tens[Math.floor(num * -1 / 10)] + " " + ones[num * -1 % 10];
    }
  }

  function convert_hundreds_minus(num) {
    if (num < -99) {
      return "minus " + ones[Math.floor(num * -1 / 100)] + " hundred " + convert_tens_minus(num * -1 % 100);
    } else {
      return convert_tens_minus(num * -1);
    }
  }
  
  function main(){
    var cases = randomInt(-100, 100);
      console.log(cases + ": " + convert(cases));
  }
  main();
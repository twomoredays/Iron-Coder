var string = "";

var fizz = function() {
  if (i % 3 === 0) {
    fizzbuzz(i);
  } else {
    buzz(i);
  }
};

var buzz = function () {
  if ((i % 5) === 0) {
    string += "Buzz ";
  } else {
    string += i + " ";
  }
};

var fizzbuzz = function () {
  if ((i % 5) === 0) {
    string += "FizzBuzz ";
  } else {
    string += "Fizz ";
  }
} 


for (i = 1; i <= 100; i++) {
  fizz(i);
};
console.log(string);
// ?While Loop
console.log("While loop");
var number = 1;
while (number < 11) {
  console.log(number);
  number++;
}

// ?While Loop Quiz
console.log("Even numbers");
var num = 132;
while (num <= 148) {
  console.log(num);
  num += 2;
}
console.log("Numbers divisible by 7");
var num1 = 25;
while (num1 <= 100) {
  if (num1 % 7 == 0) {
    console.log(num1);
  }
  num1++;
}

// ?For Loop
console.log("For loop");
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// ?For Loop Quiz
console.log("Odd numbers");
for (var i = 132; i <= 148; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log("Numbers divible by 5 and 7");
for (var i = 25; i <= 100; i++) {
  if ((i % 7 == 0) && (i % 5 == 0)) {
    console.log(i);
  }
}

// ?Continue and Break Statements
console.log('Continue statement');
for(var i = 1; i <= 10; i++){
  if(i % 2 !== 0){
    continue;
  }
  console.log(i)
}

console.log('Break statement');
for(var i =1; i <=10; i++){
  if(i % 2 == 0){
    console.log(i);
    break;
  }
}
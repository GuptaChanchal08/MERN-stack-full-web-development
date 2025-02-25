// ?Function Declaration
console.log("Function Declaration and Calling");
function sayHello() {
  console.log("Hello World");
}
sayHello();

// ?Example of a function to print few lines multiple times without using loops
console.log("Function to print lines multiple times");
function doSomething() {
  console.log("Hello World");
  console.log("Goodbye World");
  console.log("How are you?");
}
doSomething();
doSomething();
doSomething();
doSomething();

// ?Function with Arguments
console.log("Function with Arguments");
function sayHi(name) {
  console.log("Hi" + " " + name);
}
sayHi("Chanchal");
sayHi("Pooja");
sayHi("Bhavesh");

function cube(num) {
  console.log(num * num * num);
}
cube(8);
cube(16);

function bmi(length, weight) {
  console.log(weight / (length * length));
}
bmi(1.8, 35);

function checkUserInfo(email, password) {
  if (email == "abc.gmail.com" && password == 123) {
    console.log("LogIn successful");
  } else {
    console.log("LogIn unsuccessful");
  }
}
checkUserInfo("abc.gmail.com", 123);

// ?Function return keyword
console.log("Funstion return keyword");
function cube(num) {
  return num * num * num;
}
var number = cube(16);
console.log(number);

function cube1(num) {
  if (num === 25) {
    return;
  }
  return num * num * num;
}
var num1 = cube(25);
console.log("Another console: ", num1);

function calculateAge(birthYear) {
  return 2024 - birthYear;
}
var age = calculateAge(2004);
console.log("Age: ", age);

function enterCafe(Age) {
  if (Age < 18) {
    return "You cannot enter the cafe";
  }
  return "You can enter the cafe";
}
var cafe = enterCafe(20);
console.log(cafe);

// ?Function Expression
console.log('Function Expression');
var calculateAge = function (birthYear) {
  return 2024 - birthYear;
};
var age = calculateAge(2004);
console.log(age);

calculateAge = "John";
console.log(calculateAge);

// ?Function Quiz
console.log('Function Quiz');
function subtraction(x, y) {
  return x - y;
}
var res = subtraction(16, 8);
console.log(res);

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}
var odd = isOdd(25);
console.log(odd);

function addition(num) {
  var sum = 0;
  var i = 1;
  while (i <= num) {
    sum = sum + i;
    i++;
  }
  return sum;
}
var add = addition(10);
console.log(add);

// ?Function Scope
console.log('Function Scope');
function sayName(){
  var Name = 'Shloka';
  console.log(Name);
}
var Name = 'Lata';
console.log(Name);
sayName();

var Count = 16;
console.log(Count);
function writeCount(){
  console.log(Count);
}
writeCount();

function sayHi(){
  var myWord = 'Hi there';
  console.log('my Word');
  sayBye();

  function sayBye(){
    var yourWord = 'bye';
    console.log(yourWord);
  }
}
sayHi();

var sentence = 'Hello World';
function saySentence(){
  var sentence = 'bye bye';
  console.log(sentence);
}
console.log(sentence);
saySentence();

function writeNumber(){
  var x=16;
  console.log(x);
}
function doSomething(){
  console.log(x);
}
writeNumber();
doSomething();
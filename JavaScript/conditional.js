// ?Conditional Statement
console.log("Conditional Statement");
var grade;
grade = 92;

if (grade < 35) {
  console.log("You cannot go to next class.");
} else if (grade >= 35 && grade < 45) {
  console.log("You cannot got to next class but you can enter the exam.");
} else {
  console.log("You can go to next class.");
}

// ?Conditional Statement Quiz
console.log("Conditional Statement Quiz");
var age;
age = 20;

if (age < 18) {
  console.log("You cannot enter the cafe.");
} else if (age >= 18 && age < 23) {
  console.log("You can enter the cafe but cannot buy a drink");
} else {
  console.log("You can enter the cafe and can buy a drink");
}

// ?Ternary Operator
console.log("Ternary Operator");
var grade = 42;

grade < 45
  ? console.log("You cannot go to next class.")
  : console.log("You can go to next class.");

var result = grade < 35 ? "failure" : "success";
console.log(result);

if (grade < 35) {
  result = "failure";
} else {
  result = "success";
}

// ?Switch Case Statement
console.log("Switch Case Statement");
var day;
day = 6;

switch (day) {
  case 1:
    // (day === 1)
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Wrong Input. Enter value between 1-7");
}

var grade = 38;

switch (true) {
  // if(true === (grade < 35))
  case grade < 35:
    console.log("You cannot go to next class.");
    break;
  case grade >= 35 && grade < 45:
    console.log("You cannot got to next class but you can enter the exam.");
    break;
  default:
    console.log("You can go to next class.");
}

// ?Quiz 2
var gradeAlex = (90 + 80+ 95)/3;
var gradeSara = (89 + 76 + 98)/3;
var gradeNancy = (42 + 98 + 83)/3;
console.log('Alex average grade: ', gradeAlex);
console.log('Sara average grade: ', gradeSara);
console.log('Nancy average grade: ', gradeNancy);

if(gradeAlex > gradeSara && gradeAlex > gradeNancy){
  console.log('Alex has the highest grade ', gradeAlex);
}
else if(gradeSara > gradeAlex && gradeSara > gradeNancy){
  console.log('Sara has the highest grade ', gradeSara);
}
else if(gradeNancy > gradeAlex && gradeNancy > gradeSara){
  console.log('Nancy has the highest grade ', gradeNancy);
}
else{
  console.log('Maybe there is same average');
}
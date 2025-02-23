console.log('Hello from external script file');
console.log('How are you?')

// ?Variables
var personName = 'Chandni';
console.log(personName);

var isRegistered =  true;
console.log(isRegistered);

var schoolTeam = 'basketball';
var schoolNumber = 20;
console.log(schoolTeam);
console.log(schoolNumber);

var job;
console.log(job);

job = 'Student';
console.log(job);

// ?Type Conversion
console.log(personName + ' ' + schoolNumber);

var schoolName, hasCourse;
schoolName = 'Raheja';
hasCourse =  true;
console.log(schoolName + ' has 35 courses. Does it have any course? ' + hasCourse);

// ?Variable Mutation
schoolNumber = 'Twenty';
console.log(schoolNumber);

schoolTeam = 'Tennis';
console.log(schoolTeam);

// ?Alert
alert('Age');

// ?Prompt
var age = prompt('How old are you?');
console.log(personName + ' is ' + age + ' years old.');

// ?Basic Operators
var totalDistance, distanceSam, distanceRam;
totalDistance = 20;
distanceRam = totalDistance - 6;
console.log(distanceRam);
distanceSam =  totalDistance - 8;
console.log(distanceSam);

console.log('Addition ' + (2+5));
console.log('Subtraction ' + (2-5));
console.log('Multiplication ' + (2*5));
console.log('Division ' + (2/5));

// ?Logical Operators (&& , || , !)
var distanceToSchool, distanceToHome;
distanceToHome = 14;
distanceToSchool = 8;
var isCloser = distanceToHome < distanceToSchool;
console.log(!isCloser);

// ?Boolean Logic
var isLoggedIn = false;
var x = 16;
console.log(x=='16');
console.log(x==='16');
console.log(x!='12');
console.log(x!=='16');

// ?Logical Operators
console.log((10>7)&&(10==='10'));
console.log((10>8)||(8<5));
console.log(!(8!=='8'));
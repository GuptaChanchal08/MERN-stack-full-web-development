// ?Objects
console.log('Objects');
var schoolName = 'school';

var student = {
  name: 'Chanchal',
  age: 20,
  school: 'Raheja'
};

console.log(student['name']);
console.log(student.age);

console.log(student[schoolName]);

// ?Update data in objects
console.log('Update data in objects');
var Stud = {
  name: 'Pooja',
  age: 22,
  school: 'Cardinal'
};
Stud.age += 1;
Stud['school'] = 'Kirti';
console.log(Stud);

var student11 = {
  name: 'Bhavesh',
  age: 18,
  friends: ['Harsh', 'Akash', 'Sachin'],
  bestFriend: {
    firstName: 'Shubham',
    birthYear: 2006
  }
};
var bestFriendOfStudent11 = student11.bestFriend.firstName;
console.log(bestFriendOfStudent11);

var friend2 = student11.friends[1];
console.log(friend2);

// ?How to add property to objects
console.log('How to add property to objects');
var colors = {};
colors.orange = {code: 123};
console.log(colors.orange.code);

colors.black = {code: [4, 5 ,6]};
console.log(colors.black.code);
console.log(colors.black.code[2]);

// ?Complex data Structure
console.log('Complex data Structure');
var blogPost = [
  {
    title: 'Weather',
    content: 'It is rainy today',
    comments: [
      {
        name: 'Sita',
        lastName: 'Gupta'
      },
      {
        name: 'Lalit',
        lastName: 'Gupta'
      }
    ]
  },
  {
    title: 'Weather',
    content: 'I do not like the weather'
  }
];
console.log(blogPost[0].content);
console.log(blogPost[0].comments[1].name);

// ?Objects Quiz
console.log('Object Quiz');
var universities = [
  {
    name: 'MIT',
    hasGone: false,
    year: 2006,
  },
  {
    name: 'Raheja',
    hasGone: true,
    year: 2007,
  },
  {
    name: 'Kirti',
    hasGone: false,
    year: 2008,
  },
];

universities.forEach(function (university){
  if(university.hasGone === true){
    console.log(university.name + ' ' + university.year);
  }
  else{
    console.log(university.name);
  }
});

// ?Object Methods
console.log('Object Methods');
var Hello = {
  name: 'Siana',
  age: 25,
  hasGone: true,
  friends: ['Riya', 'Supriya'],
  say: function(){
    console.log('Hi Riya');
  }
};
Hello.say();

var Hi = {
  name: 'Rutuja',
  say: function(){
    console.log('Hi Rutuja');
  }
};
Hi.say();

// ?this Keyword
console.log('this Keyword');
console.log(this);

function addNumber(x,y){
  console.log(x + y);
  console.log(this);
}
addNumber(16,8);

var func = {
  name: 'Raj',
  year: 2004,
  sayHi: function(){
    console.log(this);
    console.log('Hi ' + this.name);

    function someFunc(){
      console.log(this);
    }
    someFunc();
  }
};
func.sayHi();
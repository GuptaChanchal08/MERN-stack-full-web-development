// ?Array
var students = ['Pravin', 'Pooja', 'Priya', 'Chanchal', 'Shweta', 'Vishnu', 'Bhavesh'];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

console.log('Mutate value');
students[0] = 'Aditi';
console.log(students);

console.log('Add a value');
students[7] = 'Aditi';
students[0] = 'Pravin';
console.log(students);

students[10] = 'Hanai';
console.log(students);

var commonData = ['John', 29, true, null];
console.log(commonData);
var length = commonData.length;
console.log('Length of array: ',length);

// ?Array Methods
console.log('Push');
var students = ['Pravin', 'Pooja', 'Priya', 'Chanchal', 'Shweta', 'Vishnu', 'Bhavesh'];
var length = students.push('Aditi')
console.log(length);

console.log('Pop');
var lastItem = students.pop();
console.log(lastItem);

console.log('Unshift');
var cats = ['cat1', 'cat2', 'cat3'];
cats.unshift('cat4');
console.log(cats);

console.log('Shift');
cats.shift();
console.log(cats);

console.log('indexOf');
console.log(students.indexOf('Chanchal'));

console.log('Slice Method');
var closeCousins = students.slice(1,5);
console.log(closeCousins);

// ?Array Quiz
console.log('Quiz 1')
var books = ['Harry Potter', 'Humger Games', 'Little Prince'];
console.log(books[books.length - 1]);

var films = [
  ['hobbit1', 'hobbit2', 'hobbit3'],
  ['matrix1', 'matrix2', 'matrix3'],
  ['godFather1', 'godFather2', 'godFather3']
]
console.log(films[2][2]);

// ?Array Iteration
console.log('Array Iteration');
console.log('Array Iteration with for loop');
var books = ['Harry Potter', 'Humger Games', 'Little Prince'];
for(var i = 0; i < books.length; i++){
  console.log(books[i]);
}

console.log('Array Iteration with forEach method');
books.forEach(function(book){
  console.log(book);
});

// ?Array Iteration Quiz
var arr = [];
for(var i = 0; i <= 20; i++){
  arr.push(i);
}
console.log(arr);

arr.forEach(function (num){
  if(num % 5 === 0){
    console.log(num);
  }
});
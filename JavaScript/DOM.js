// ?Select and Manipulate
console.log('Select and Manipulate');
var h1Element = document.querySelector('h1');
h1Element.style.color = 'blue';

var isYellow = false;
var bodyElement = document.querySelector('body');

setInterval(function(){
  if(isYellow){
    bodyElement.style.background = 'white';
  }
  else{
    bodyElement.style.background = 'yellow';
  }
  isYellow = !isYellow;
},1000);

// ?Select Methods
console.log('Select Methods');
console.log('Method 1: getElementByID');
var selectWithId = document.getElementById('Paragraph');
console.log(selectWithId);

console.log('Method 2: getElementsByClassName');
var selectWithClassName = document.getElementsByClassName('background');
console.log(selectWithClassName);

console.log('Method 3: getElementsByTagNName');
var selectWithTagName = document.getElementsByTagName('h1');
console.log(selectWithTagName);

console.log('Method 4: querySelector');
var selectWithQuery = document.querySelector('h1');
console.log(selectWithQuery);

var selectWithQueryId = document.querySelector('#Paragraph');
console.log(selectWithQueryId);

var selectWithClass = document.querySelector('.background');
console.log(selectWithClass);

console.log('Method 5: querySelectorAll')
var selectWithQuerySelectorAll = document.querySelectorAll('h1');
console.log(selectWithQuerySelectorAll);

// ?Manipulating Methods
console.log('Manipulating Methods');
console.log('Method 1: Change the style');
var divToManipulate = document.querySelector('.background');
// divToManipulate.style.height = '50px';
// divToManipulate.style.width = '400px';
// divToManipulate.style.backgroundColor = 'pink';
// divToManipulate.style.fontSize = '30px';
// divToManipulate.style.border = '5px solid black';

console.log('Method 2: add/ remove classes');
// divToManipulate.classList.add('addClass');
// divToManipulate.classList.remove('addClass');
divToManipulate.classList.toggle('addClass');
divToManipulate.classList.toggle('addClass');
divToManipulate.classList.toggle('addClass');

console.log('Method 3: Change the content of an element');
var paragraph = document.querySelector('#Paragraph');
console.log(paragraph.textContent);
// paragraph.textContent = 'Oak Academy is best';
console.log(paragraph.innerHTML);
paragraph.innerHTML = 'Oak academy is <strong>great</strong>!';

console.log('Attribute Manipulation');
var myLink = document.querySelector('a');
console.log(myLink.getAttribute('href'));
myLink.setAttribute('href', 'https://www.facebook.com/');
console.log(myLink.getAttribute('href'));
myLink.textContent = 'Go to facebook page';

var myImage = document.querySelector('img');
console.log(myImage.getAttribute('src'));
myImage.setAttribute('src', 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg');
console.log(myImage.getAttribute('src'));
// ?Event handlers
console.log('Select and add');
var button = document.querySelector('#btn');
var title = document.querySelector('#title');
button.addEventListener('click', function(){
  console.log('You clicked the button');
  title.style.backgroundColor = 'pink'
});

var listParent = document.querySelector('ul');
listParent.addEventListener('click',function(){
  console.log('You click the ul tag');
  listParent.style.backgroundColor = 'blue';
})

// ?Quiz
console.log('Quiz');
var listItems = document.querySelectorAll('li');
console.log('List Items: ', listItems);
for(var i = 0; i < listItems.length; i++){
  listItems[i].addEventListener('click',function(){
    this.style.color = 'white';
  })
}

// ?callback Function in JavaScript
console.log('callback function');
var paragraph = document.querySelector('#paragraph');
function toggleBackground(){
  paragraph.classList.toggle('toggleBackground');
}
paragraph.addEventListener('click',toggleBackground);
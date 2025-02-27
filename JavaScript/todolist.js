var todoListItems = document.querySelectorAll('.todoItem');
for (var i = 0; i < todoListItems.length; i++){
  todoListItems[i].addEventListener('mouseover',function(){
    this.style.backgroundColor = 'pink';
    this.style.color = 'black';
  })
  
  todoListItems[i].addEventListener('mouseout',function(){
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
  })

  todoListItems[i].addEventListener('click',function(){
    this.classList.add('okay');
  })
}
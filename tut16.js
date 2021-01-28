console.log('this is tut 16.js');
// let element = document.createElement('li');
// // set id and class name to create li element 
// element.className = 'sameClass';
// element.id = 'dId5';  
// element.setAttribute('title', 'mytitle'); 



// console.log(element);
























const hadi = document.createElement('li');

// set id  and name to creat new element;

hadi.className = 'sameClass';
hadi.id = 'dId' ;
hadi.setAttribute('placeHolder', 'this is my placeHolder');
console.log(hadi);







let element = document.createElement('li');
let text = document.createTextNode('this is my text node');
element.appendChild(text)
// set id  and name to creat new element;
element.className = 'sameClass';
element.id = 'dId5';
let ul = document.querySelector('ul.this');
 ul.appendChild(element);
 console.log(ul);
console.log(element);


let hami = document.createElement('li');
let someText = document.createTextNode('this is my new text node');
hami.appendChild(someText)

hami.className = 'sameClass';
hami.id = 'dId6';

let someUl = document.querySelector('ul.this');
someUl.appendChild(hami);
console.log(someUl);
console.log(hami);

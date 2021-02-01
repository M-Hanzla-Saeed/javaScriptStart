console.log('this is tut 16.js');
// let element = document.createElement('li');
// // set id and class name to create li element 
// element.className = 'sameClass';
// element.id = 'dId5';  
// element.setAttribute('title', 'mytitle'); 
// console.log(element);


























// const hadi = document.createElement('li');

// // set id  and name to creat new element;

// hadi.className = 'sameClass';
// hadi.id = 'dId' ;
// hadi.setAttribute('placeHolder', 'this is my placeHolder');
// console.log(hadi);







// let element = document.createElement('li');
// let text = document.createTextNode('this is my text node');
// element.appendChild(text)
// // set id  and name to creat new element;
// element.className = 'sameClass';
// element.id = 'dId5';
// let ul = document.querySelector('ul.this');
//  ul.appendChild(element);
//  console.log(ul);
// console.log(element);


// let hami = document.createElement('li');
// let someText = document.createTextNode('this is my new text node');
// hami.appendChild(someText)

// hami.className = 'sameClass';
// hami.id = 'dId6';

// let someUl = document.querySelector('ul.this');
// someUl.appendChild(hami);
// console.log(someUl);
// console.log(hami);  

let haddi = document.createElement('li');
// let textText = document.createTextNode('this is my text');
// haddi.appendChild(textText);

haddi.className = 'sameClass';
haddi.id = 'dId5';
haddi.innerText = 'hello this is me'
haddi.innerHTML = '<b>hello <i>this</i> is me'
let nameUl = document.querySelector('ul.this');
nameUl.appendChild(haddi);

console.log(nameUl);
console.log(haddi);


// replacing the elemnet;

let hammi = document.createElement('li');
let texxt = document.createTextNode('this is exrtra text node for replacing');
hammi.appendChild(texxt);

haddi.replaceWith(hammi);
// hammi.className = ('sameCalss');
// hammi.id = ('dId7');


let myUl = document.getElementById('myUl');
 myUl.replaceChild(hammi, document.getElementById('dId1'));

 myUl.removeChild(hammi, document.getElementById('dId5'));

3
// let check =  myUl.getElementById('this');
// console.log(check);




























// let replace = document.getElementById('myUl');
// myUl.replaceChild(practice, document.getElementById('dId1'));







console.log('this is tut 15.JS');
// children parent and traversing the DOM:
//play with javascript;

let my = document.querySelector('.class');
// my.style.color = "pink";
// console.log(my);
console.log(my.childNodes);
console.log(my.children);

 nodeName = my.childNodes[3].nodeName;
console.log(nodeName);

let some = document.querySelector('.class');
console.log(some.childNodes);
console.log(some.children);
console.log(some.children[1]);

console.log(some.firstChild);
console.log(some.lastChild);
console.log(some.lastElementChild);
console.log(some.childElementCount);

let kuch = document.querySelector('.hadi');
console.log
console.log(kuch.nextElementSibling)









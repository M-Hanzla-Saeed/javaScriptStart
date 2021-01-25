console.log('tut6.js');
const name ='Hanzla';
const greeting = 'Good Morning';
console.log(greeting + ' ' +  name);
//  '' space dalne ka tariqa.

// 2 string k jorne ko concatetination khte  hain.

let html;
html = "<h1>this is heading</h1>"
          + 
"<p>this is paragraph</p>"
// html=html.concat('this','some')  smj nai ai iski muje.

console.log(html);

// functions of string
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html.toUpperCase()[43]);
console.log(html.indexOf('heading'));
console.log(html.lastIndexOf('P'));
console.log(html.charAt(5));
console.log(html.endsWith('</p>'));
console.log(html.endsWith('</f>'));
console.log(html.includes('at'));
console.log(html.includes('is'));
console.log(html.substr(1,7));
console.log(html.slice(-13));
console.log(html.slice(1,8));
console.log(html.split(''));
console.log(html.replace('heading' , 'Hadi'));


//  Template Literals.

const Hamza = 'Apple';
const Hanzla = 'Banana';
 const myFamily = `Hello ${name}
 <p> It is my large brother </p>

 <p> you like ${Hamza} and 
 ${Hanzla}`;
 document.body.innerHTML = myFamily;


//  another template literals.

let hadi = 'hanzla'
let hami = 'hamza'
let brothers = ` bhai ${name}
<p> ${hami} is my large brother </p>

<p> ${hadi} small brother of ${hami}`;

document.body.innerHTML = brothers;






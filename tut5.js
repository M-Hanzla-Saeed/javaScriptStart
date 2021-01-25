
// type conversion.
console.log('tut5.js')

let myMarks= ("92");
console.log('data type is ' +     myMarks  + (  typeof   myMarks));

let myBoolean = true;
console.log(myBoolean + 'data type is ' + (typeof myBoolean));

let MyBoolean = String(true);
console.log(MyBoolean + 'data type is ' + (typeof MyBoolean));

let date= Number(new Date());
console.log(date +(typeof date));


let number= parseInt(3400/7);
console.log(number , (typeof number));

let no= parseFloat(3500/9);
console.log(no . toFixed(02), (typeof no));

// type coersion.

const myString = Number("17122000");
const myNumber = 17122000 ;
console.log( myString + myNumber);









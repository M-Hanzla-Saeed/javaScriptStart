console.log('tut7.JS');
// today learn  about arrays
// let marks = [12, 23, 34, 56, 67, 89];

 let fruits = ['orange' , 'apple' , 'banana'];

   let mixed = [ 'str' , ' 89' , [3,5]];

   let arr = new Array (23,123,21,'orange');
   arr[0] = "apple";

   console.log(arr);
//    console.log(mixed);
//    console.log(fruits);
//    console.log(marks.length);
//    console.log(Array.isArray(`marks`));

let phlaArry = arr[3];
console.log ('element:' , phlaArry);

let marks = [12, 23, 34, 56, 67, 89];
let vlaue = marks. indexOf(34);

console.log(vlaue);

// Mutating or Modifying arrays.
// last m arrry add krna. 
marks.push(123456789010);
console.log(marks);
// first m array add krna.
marks.unshift(1009);
console.log(marks);
// fisrt se remove krna k leay.
marks.shift();
console.log(marks);
// bch m se remove krne  k ly.
marks.splice(0,2);
console.log(marks);
// terteeb ultane k leay
marks.reverse();
console.log(marks);
// 2 arrays ko jorne k leay.
let marks2 = [2,4,5,6,7];
 marks = marks.concat(marks2);
console.log(marks);
marks.reverse();
console.log(marks);

// object

let myObj ={
     
    name: `hadi`,
    dateOfBirth:   `!7-Dec-2000`,
    marksInFsc: `850`,
    goal: `F&BEDeveloper`,
}
let online ={
     
    name: `hadi`,
    dateOfBirth:   `!7-Dec-2000`,
    marksInFsc: `850`,
    goal: `F&BEDeveloper`,
}
    console.log(myObj);

console.log(online);

















   





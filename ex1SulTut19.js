console.log(
  "this is tut 19 in which sulotion of tut 13 exerice # 1... webPage crawler in javaScript...!"
);

// you have to create a variable is a string containing the text which is a  link you are intrested in . you have to fetch all the links  from a given page which contians this text.

// var str = "facebook";
// var links = document.links;

// console.log(links);
// let href;
// Array.from(links).forEach(function (element) {
//   href = element.href;
//   if (href.includes(str)) {
//     console.log(href);
//   }
// });

let string = "instagram";
let thisPageLinks = document.links;
console.log(thisPageLinks);
let  href ; 
Array.from(thisPageLinks).forEach(function(value)
{
    href = value.href
    if(href.includes(string)){
        console.log(href)

    } });






















// create one array for each element in the array add thwe valye 100 to each items and update the element value.....!


let array = [20, 30, 40, 50, 60];

array.forEach(function(value, index) {
    console.log(value + 100 + '------------ ' + index );
})


let newArray = [20, 30, 40, 50, 60];

newArray.forEach(function( value, index , array) {
    console.log( array[index] + 100);
})

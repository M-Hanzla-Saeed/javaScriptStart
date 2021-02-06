console.log('this is tut 20');
// add a key value pair inside local storage...!
localStorage.setItem('Name1', 'HaaDii');
localStorage.setItem('Name2', 'HaaMii');

// add a key value pair inside sessional storage...!
sessionStorage.setItem('sName1', 'sHaaDii');
sessionStorage.setItem('sName2', 'sHaaMii');

// retrieve an item from local storage...!
let Name = localStorage.getItem('Name1');
console.log(Name);

// // for clear the sotrage entire local...!
// localStorage.clear();


// // for clear the sotrage entire session...!
// sessionStorage.clear();

let impArray = ['Adrak', 'pyaz', 'tamatar'];
localStorage.setItem('sabzi', 'impArray');
 
localStorage.setItem('sabzi', JSON.stringify(impArray));

sabziItem = JSON.parse(localStorage.getItem('sabzi'));
console.log(sabziItem);

let khasArray = ['pani','roti','salan','chye'];
localStorage.setItem('khana' , 'khasArray');

localStorage.setItem('khana', JSON.stringify(khasArray));

khanaaa = JSON.parse(localStorage.getItem('khana'));
console.log(khanaaa);



// again i'm repeat the same lec for practice::

localStorage.setItem('value', ' Burger=100');
let why = localStorage.getItem('value');
console.log(why);
// localStorage.clear();
// sessionStorage.clear();







let ARRAY = [12,13,14,15,16,17];
localStorage.setItem('numberArray', 'ARRAY');

localStorage.setItem('numberArray', JSON.stringify(ARRAY));

thisArray = JSON.parse(localStorage.getItem('numberArray'));
console.log(thisArray);


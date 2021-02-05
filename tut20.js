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


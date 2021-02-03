console.log('this is tut 18.js.....!');

// more on events;;;

let btn = document.getElementById('iid');
btn.addEventListener('click' , function1);

function function1(e) {
    console.log("thanks", e);
    e.preventDefault();
    
}

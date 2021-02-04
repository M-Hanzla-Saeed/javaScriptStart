console.log('this is tut 18.js.....!');

// more on events;;;

// let btn = document.getElementById('iid');
// btn.addEventListener('click' , function1);

// function function1(e) {
//     console.log("thanks", e);
//     e.preventDefault();
    
// }
// let bttn = document.getElementById('dId2');
// bttn.addEventListener('click', function5);

// function function5(e) {
//     console.log("love you" , e);
//     e.preventDefault();
// }

// let bbtn = document.getElementById('javaScript');
// //  bbtn.addEventListener('click', function6);
// // bbtn.addEventListener('ondblclick', function7);
// bbtn.addEventListener('mousedown', function8);
// //  function function6(e){
// //     console.log("thanks a lot dear....!", e);
// //      e.preventDefault();

// //  }
// // function function7(e){
// //     console.log("chup kr k beja..!", e);
// //     e.preventDefault();

// // }
// function function8(e){
//     console.log("its a moouse down event", e);
//     e.preventDefault();

// }


// document.querySelector('.body').addEventListener('mousemove',function(e) {
//      console.log(e.offsetX , e.offsetY);
//     document.body.background = `rgb  ($ { e.offsetX},
//         $ {e.offsetX}, $ {e.offsetX})`; 
//     console.log("you trigged mouse move...!");
 


    
// });

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})
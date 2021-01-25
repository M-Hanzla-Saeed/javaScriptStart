console.log("tut9.JavaScript by Harry");

//  today study about loops

// general loops   for loop while loop  do while loop

/* for(let i=50; i<61; i++)
 {
     console.log(i);
 }

let j=0;
while( j < 4) 
{  
    j++; 

    console.log(j);
}

let k=0;
do{
    console.log(k++);
 if(k===5){continue;}
}
while (k<10);

console.log('Done');


let array= [2, 4, 9, 6, 8];
array.forEach(function(element){
    console.log(element);
} );

let obj={
    name: "hadi",
    age: 78,
    type: " Dangerous programmer",
    ios: "Apple",}

    for ( let key in obj)
{
    console.log(`${key} of object is $ {obj[key]}`)

}*/

// for( k=0; k<10; k++)
// {
//     console.log(k+1);
//     if (k===5){ continue; }
// }

// let h  = 34;
// h -=1;
// // h ++;
// console.log(h);

// let L = 0;
// while (L<20)
// {
//     console.log(L);
//     L +=1;
// }

// let H = 0 ;
// do{
//     console.log(H-1)
//     H -=1;
// }
// while(H>-6);



let stuData = ['M Hanzla Saeed' , 'Muhammad Saeed', 'Age = 20 Y/O', 'd/o/b = 17-Dec-2000' , 'Study =  BSIT From GCUF' ];

stuData.forEach(function(Data, index, array){
    console.log(Data, index, array);
});

// stuData.forEach(function(hadiInfo){
//     console.log(hadiInfo);
// });

// let Data = {
//     name: "Hadi Saeed",
//     age: 20,
//     type: "dangerous coder",
//     os: "ubuntu"
// }
// for(let key in Data){
//     console.log(`The ${key} of Student is ${Data[key]}`)
// }

// console.log(`The ${key} of object is ${obj[key]}`)

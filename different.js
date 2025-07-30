
// Even Number

// Odd NUmber

// for(let i = 0; i< 20; i++){
//     if(i % 2 !==0){
//         console.log('This is and Odd Number:', i);
//     }
//     if( i % 2 ===0){      //Even Number
//         console.log('This is an Even Number:',i);
//     }
// }


// List of NUmber between 1 to 30 divisible by 5

// for( let i = 1; i <= 30; i++){
//     if( i % 5 === 0 ){
//         console.log(i);
//     }
// }

// for( let i = 1; i <= 30; i++){
//     if( i % 5 === 0 || i % 3 === 0){
//         console.log(i);
//     }
// }

// for( let i = 1; i <= 100; i++){
//     if( i % 5 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// }


let total = 0;
for (let i = 1; i < 20; i++){
    if( i % 3 === 0){
        console.log('Divisable by 3:', i);
        total = total + i;

    }
}
console.log('TOtal NUmber:', total);


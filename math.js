// const myNumber = -5;
// const  output = Math.abs(myNumber);

// const myNumber = 21.9999;
// // const output = Math.ceil(myNumber);
// // const output = Math.floor(myNumber)
// // const output = Math.round(myNumber)
// for (let i = 0; i <= 30; i++){
//     const output = Math.random() * 6;
//     const rouded = Math.round(output);
//     console.log(rouded);

// }

// jodi must akta number ber ber nah ashse 

const selected = [];
for (let i = 0; i <= 10; i++){
    const output = Math.random() * 100;
    const picked = Math.round(output);
    if(selected.indexOf(picked) == -1){
        selected.push(picked);
    }
    else{
        console.log(selected,picked);
    }

}
console.log(selected);

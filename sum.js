const number = [44, 23, 34, 32, 55, 5, 78];
let sum = 0;
for(let i = 0; i < number.length; i++){
    const element = number[i];
    sum = sum + element;
    // console.log(sum);
}

function arraynumber (number){
    let sum = 0;
    for(i = 0; i < number.length; i++){
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const arraytotal = arraynumber([55, 66, 50, 98, 100]);
console.log(arraytotal);
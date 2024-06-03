// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// 3rd = 2nd + 1st
// 4th = 3rd + 2nd
// 5th = 4th + 3rd
// 16th = 15th + 14th
// nth = (n-1)th + (n-2)th
// i th = (i-1) + (i-2)th

// function fibonacci (n){
//     if( n == 0){
//         return 0;
//     }
//     if ( n == 1){
//         return 1;
//     }

//     return fibonacci(n-1) + (n-2);
// }
// const fiboelement = fibonacci(6);
// console.log(fiboelement);

// fibo dhara r series 

function fibonacciseries(n){
    if( n == 0){
        return [0];
    }
    if (n == 1){
        return [0,1];
    }
    const fibo = fibonacciseries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const fiboseries = fibonacciseries(7);
console.log(fiboseries);

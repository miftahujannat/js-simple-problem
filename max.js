const business = 1450;
const minister = 558;
const army = 600;
// if (business > minister) {
//     console.log('business person er pola is bigger');

// }
// else {
//     console.log('minister er pola is bigger');
// }
// if (business > minister && business > army) {
//     console.log('business  is bigger');

// }
// else if(minister > business && minister >army){
//     console.log('minister  is bigger');

// }
// else{
//     console.log('army is bigger');
// }

var max = Math.max(business, minister, army);
// console.log('lagest is', max);

function findlargest(first,second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}
const largest = findlargest(335, 241);
console.log('largst is',largest)


function largestelement(number){
    let largest = 0;
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
// const ages = [22,55,77,23,12,90];
// const oldest = largestelement(ages);
// console.log('oldest',oldest);

// lowest number 


var array =[2,3,1,9,8];
var minvalue = array[0]; 
for (var i = 0; i < array.length; i++) {
    if(array[i]<minvalue)
    {
        minvalue = array[i];
    }

}
//   console.log(minvalue);


function lowarray(number){
    let lowest = 0;
    for(i = 0; i < number.length; i++){
        const element = number[i];
        if(lowest < element){
            lowest = element;
        }
    }
    return lowest;
}
const agearray = [1,2,3,3,4,5,67];
const lowest = lowarray(agearray);
console.log('lowest',lowest);
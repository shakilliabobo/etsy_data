// Problem #1
// Find the average `price` of all items in the `data` array.

let sum = 0;
//Sum of all items divided by the length of the array
for (let i = 0; i < data.length; i++){
 sum = sum + data[i].price;
}



// change this from null to be the final average price of all items.
const average = sum/data.length;

// Do not touch:
document.getElementById('answer-1').innerHTML = average

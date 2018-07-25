// Problem #3
// Create an array of items that cost between $14.00 and $18.00.

// You should use .filter to:
// 1. Update the array 'itemsBetween' using Array.filter to find which items.price property matches the criteria.
const itemsBetween = []


function findPrice(){
  for (i = 0; i < data.length; i++){
      if(data[i].price < 18 && data[i].price > 14){
        console.log(data[i].title)
      }
    }
}

//const costs = data.filter()
const costs = data.filter(findPrice);

console.log(costs);

// Resources:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Do not touch:
const itemsBetweenHtml = itemsBetween.map(function(item, index) {
  return '<div>' + [index + 1] + '. ' + item.title + '</div>'
}).join('')

document.getElementById('answer-3').innerHTML = itemsBetweenHtml

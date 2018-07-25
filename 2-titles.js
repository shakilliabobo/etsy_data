// Problem #2
// Create an array that contains only the `title` property of each item.

// You should use .map to:
// 1. Update the array 'itemsTitles' with Array.map to only return the `title` of each item.
const itemsTitles = []
const addingTitles = data.map(function(x){
  return x.title
});

itemsTitles.push(addingTitles);

console.log(itemsTitles)
// for (let i = 0; i < data.length; i++){
//   itemsTitles.push(data[i].title)
//   console.log(itemsTitles)
// }


// Resources:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Do not touch:
const itemsTitlesHtml = itemsTitles.map(function(item, index) {
  return '<div>' + [index + 1] + '. ' + item + '</div>'
}).join('')

document.getElementById('answer-2').innerHTML = itemsTitlesHtml

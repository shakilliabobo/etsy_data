// Problem #5
// Display a list of all items that are made of wood.

// You should use Array.filter() to create a new array called 'wood' that only contains items who's `materials` property includes()(hint hint) 'wood'.
const wood = data.filter(function(x){
  return x.materials.includes('wood');
});



// Resources:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


// Do not touch:
let woodHtmlStr = ''

for (let i = 0; i < wood.length; i++) {
  woodHtmlStr += '<div>' + [i + 1] + '. ' + wood[i].title + '</div>'
}

document.getElementById('answer-5').innerHTML = woodHtmlStr

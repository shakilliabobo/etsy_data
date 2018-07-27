// Problem #6
// How many items were made by their sellers?

// You should use Array.filter to create a new array called 'sellerMade' that only contains items that were created by the seller. (Look for the `who_made` property)
const sellerMade = data.filter(function(x){
  return x.who_made === "i_did";
});


// Resources:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Do not touch:
if (sellerMade.length) {
  document.getElementById('answer-6').innerHTML = sellerMade.length
}

// Problem #4
// Which item has a GBP currency code?

// 1. You should use the Array.find() method to find the only object in the array with a `currency_code` property of GBP
const gbpCurrency = {}


// Resources:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// Do not touch:
if (gbpCurrency.title) {
  document.getElementById('answer-4').innerHTML = gbpCurrency.title + 'is priced at: ' + gbpCurrency.price + ' GBP'
}
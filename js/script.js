'use strict'
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let button = document.querySelector('.button');
function countObj() {
    let i = 0;
    for(let key in quoteObj) {
        i++;
    }
    return i;
}
// console.log(countObj());
function getRandomNumber(min, max) {
    min = 1;
    max = countObj();
    let number = Math.random() * (max - min) + min;
    return number.toFixed();    
}
// console.log(getRandomNumber());
// console.log(quote.textContent);
// console.log(author.textContent);
// console.log(quoteObj[][0]);

button.onclick = function () {
    let i = getRandomNumber();
    quote.textContent = quoteObj[i][1];
    author.textContent= quoteObj[i][0];
}
   
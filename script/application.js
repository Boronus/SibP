console.log("LOL");

let palindromeInputElem = document.getElementById('palindrome_textarea');
let palindromeResultElem = document.getElementById('palindrome_result');
var filterRegExp = new RegExp(/[^0123456789А-ЯЁа-яёA-Za-z]/g);

let palindromeFilteredElem = document.getElementById('palindrome_filtered');

palindromeInputElem.addEventListener('input', checkPalindrome);

function checkPalindrome() {
    palindromeResultElem.innerText = returnAnswer(this.value);    
}

function returnAnswer(inputText) {
    if (!inputText) return 'Палиндром не введён';
    //let palindromeFiltered = filter(this.value)
    //palindromeFilteredElem.innerText = palindromeFiltered;
    return isPalindrome(filter(inputText)) ? 'Палиндром' : 'Не палиндром';    
}

function filter(str) {
    return str.toLowerCase()
        .replace( 'ё', 'е' )
        .replace( filterRegExp, '' );
}

function isPalindrome(str) {
    strReverse = str.split('').reverse().join('');
    return strReverse === str;
}
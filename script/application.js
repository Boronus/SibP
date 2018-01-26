let palindromeInputElem = document.getElementById('palindrome_textarea');
let palindromeResultElem = document.getElementById('palindrome_result');
let palindromeFilteredElem = document.getElementById('palindrome_filtered');

var filterRegExp = new RegExp(/[^0123456789А-ЯЁа-яёA-Za-z]/g);

palindromeInputElem.addEventListener('input', checkPalindrome);

function checkPalindrome() {
    palindromeResultElem.innerText = returnAnswer(this.value);
}

function returnAnswer(inputText) {
    if (!inputText) return 'Палиндром не введен';
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
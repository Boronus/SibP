console.log("LOL");

let palindromeInputElem = document.getElementById('palindrome_text');
let palindromeResultElem = document.getElementById('palindrome_result');
let palindromeFilteredElem = document.getElementById('palindrome_filtered');

palindromeInputElem.addEventListener('input', function (e) {
    let palindromeFiltered = this.value
        .toLowerCase()
        .replace( 'ё', 'е' )
        .replace( /[^0123456789А-ЯЁа-яёA-Za-z]/g, '' );
    palindromeFilteredElem.innerText = palindromeFiltered;
    palindromeResultElem.innerText = isPalindrome(palindromeFiltered) ? 'Палиндром' : 'Не палиндром';    
});

function filterRu() {

}

function isPalindrome(str) {
    strReverse = str.split('').reverse().join('');
    return strReverse == str;
}
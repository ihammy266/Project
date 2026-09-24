const input = document.querySelector('#checker');
 function reverseString (str) {
 return str.split("").reverse().join("")
 }
function checkWords() {
   const checkerValue = input.value;
   const reverse = reverseString(checkerValue);

   if (checkerValue === reverse) {
      alert('PALINDROME')
   } else {
      alert('NOT TODAY!')
   }
  
}

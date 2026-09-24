   const quote = [
    "Be yourself; everyone else is already taken. — Oscar Wilde",
   "The greatest glory in living lies not in never falling, but in rising every time we fall.— Nelson Mandela",
   "Your time is limited, so don't waste it living someone else's life.— Steve Jobs",
   "The secret to getting ahead is getting started. — Mark Twain"];
function generateQuote () {
    Math.random()
 document.querySelector('#quote').textContent = `${quote}`

}
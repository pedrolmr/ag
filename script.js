let quote = document.querySelector("h1");
let adviceNum = document.querySelector("p");
let dice = document.querySelector(".circle");

const quotes = [
    "Turn jeans inside out when washing them to help preserve their colour.",
    "When faced with a choice, do both.",
    "Have a firm handshake.",
    "Don't try and bump start a motorcycle on an icy road.",
    "When in doubt, just take the next small step."
]
let obj = {};
for(let i = 0; i < quotes.length; i++){
    obj[i+1] = quotes[i];
}
console.log(obj);

function getRandomQuote(){
        let quoteIndex = Math.floor(Math.random() * Object.keys(obj).length) + 1;
        let randomAdvice = obj[quoteIndex];
        console.log(quoteIndex, randomAdvice)

        adviceNum.innerHTML = `Advice #${quoteIndex}`;
        quote.innerHTML = `"${randomAdvice}"`;
}

dice.addEventListener("click", getRandomQuote);
getRandomQuote()
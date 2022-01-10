var newQuote = document.querySelector(".new-quote");
var authorName = document.querySelector(".author-name");
var quoteButton = document.querySelector(".quote-btn");

function getQuote(){
    fetch("https://quotes.stormconsultancy.co.uk/random.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        newQuote.innerText = `" ${data.quote}"`;
        authorName.innerText = `-${data.author}`;

    });
}

quoteButton.addEventListener("click", getQuote)


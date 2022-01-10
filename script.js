var newQuote = document.querySelector(".new-quote");
var authorName = document.querySelector(".author-name");
var quoteButton = document.querySelector(".quote-btn");

function getQuote(){
    fetch("https://type.fit/api/quotes")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        newQuote.innerText = `" ${randomElement(data).text}"`;
        authorName.innerText = `-${randomElement(data).author}`;
    });
}

function randomElement(data){
    arrayElement = data[Math.floor(Math.random() * data.length)];
    return arrayElement;
}

quoteButton.addEventListener("click", getQuote)


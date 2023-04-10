document.querySelector(".clickB").addEventListener("click", getQuote);

function getQuote() {
    const url = "https://api.kanye.rest";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector(".input").innerText = data.quote;
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

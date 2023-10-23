document.querySelector(".quoteSearch").addEventListener("click", getQuote)

function getQuote(){
    let selection = document.querySelector(".userInput").value
    let checkedValue = document.querySelector("input[name='anime']:checked").value
    console.log(checkedValue)

    if (checkedValue === "titleAnime"){
        fetch(`https://animechan.vercel.app/api/random/anime?title=${selection}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.querySelector(".animeQuote").innerText = `"${data.quote}" - ${data.character}`

            document.querySelector(".quotesec").classList.add("quoteBackground")

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    }
    else if (checkedValue === "characterAnime"){
        fetch(`https://animechan.vercel.app/api/random/character?name=${selection}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.querySelector(".animeQuote").innerText = `"${data.quote}" - ${data.character}`

            document.querySelector(".quotesec").classList.add("quoteBackground")
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }
    // document.querySelector("input[name='anime']").prop('checked',false)
    document.querySelector(".userInput").value = ""
   
}



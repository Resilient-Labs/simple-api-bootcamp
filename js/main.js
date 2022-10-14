document.querySelector("button").addEventListener("click", () => {

        let randomNum = Math.floor(Math.random() * 53)


        fetch(`https://thronesapi.com/api/v2/Characters/${randomNum}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

        document.querySelector("h1").innerText = data.fullName
        document.querySelector("h3").innerText = data.family
        document.querySelector("h4").innerText = data.title
        document.querySelector("img").src = data.imageUrl

        })
        .catch(err => {
            console.log(`error ${err}`)
    });
})


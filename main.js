document.getElementById("button").addEventListener("click", function(){


fetch("https://api.adviceslip.com/advice")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response.slip.advice)
        document.getElementById("quote").innerHTML = `${response.slip.advice}`
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})

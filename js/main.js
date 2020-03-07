let result = document.querySelector('button').addEventListener('click', () => {
      fetch("https://api.tronalddump.io/random/quote")
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
          document.querySelector('p').innerHTML = response.value
          console.log(response.value)
        })
        .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
        });

    })

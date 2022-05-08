document.querySelector('button').addEventListener('click', getMeat)

// https://baconipsum.com/json-api/

function getMeat() {
    let url= `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`

    //"?" after URL = starting query parameters


fetch(url) // utilizing the fetch method 
    .then(res => res.json()) // parse response as JSON - utilizing the "then" method
    .then(data => { 
      console.log(data)
      document.querySelector('h2').innerText=data[0]

    })
    .catch(err => { //preventative measure so when there is an error, it can be console logged to the person
        console.log(`error ${err}`)

})
}
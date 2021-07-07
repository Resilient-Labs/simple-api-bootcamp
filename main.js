const btn = document.querySelector("#pushForNews")

btn.addEventListener('click', ()=>{

  // const input = document.querySelector("input").value
  fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        const promises = []
        for(let i = 0; i < response.length; i++){
        const promise = fetch(`https://hacker-news.firebaseio.com/v0/item/${response[i]}.json`)
        .then(res => res.json())
        promises.push(promise)
      }
      // the data set that you get back from your request is a Promise
       return Promise.all(promises)
      })
      .then(stories => {
        for(let i = 0; i < stories.length; i++){
          if(stories[i].hasOwnProperty("url")){
            let item = (stories[i].title + " " + stories[i].url)
            let textNode = document.createTextNode(item)
            let ul = document.querySelector("#newsList")
            let li = document.createElement("li")
             li.appendChild(textNode)
             ul.appendChild(li)
          }
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
})

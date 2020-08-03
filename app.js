document.querySelector('button').addEventListener("click", (e) =>{
  e.preventDefault();
  let keyword = document.getElementById('keyword').value;

  fetch(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=popularity&apiKey=6da1ae963c204919afcda72b724907cf`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log('STATUS200:', response);

        document.querySelector("ul").innerHTML = `<li><a href= ${response.articles[0].url}> ${response.articles[0].title}</a></li>
        <li><a href= ${response.articles[1].url}> ${response.articles[1].title}</a></li>
        <li><a href= ${response.articles[2].url}> ${response.articles[2].title}</a></li>
        <li><a href= ${response.articles[3].url}> ${response.articles[3].title}</a></li>
        <li><a href= ${response.articles[4].url}> ${response.articles[4].title}</a></li>` ;
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
})

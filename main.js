
let words = 0

fetch(`https://api.quotable.io/quotes?author=Maya Angelou`, {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "PostmanRuntime/7.11.0",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "d6910d3b-cca6-44c3-8db8-9981774d5ab0,19967b97-e33a-4495-9550-611e8b5eea1f",
    "Host": "api.quotable.io",
    "accept-encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
  },
  "data": " "
})
.then(response => response.json())
.then(response => {
  words = response
})

document.querySelector('.button').addEventListener("click", (e) => {
  let i = Math.floor(Math.random()*9)
  if(i<8){
  let quote = words.results[i].content
  document.querySelector('#quote').innerHTML = quote;
  e.preventDefault();
}else{
  quote = "When people show you who they are, believe them."
  document.querySelector('#quote').innerHTML = quote;
  e.preventDefault();
}

});

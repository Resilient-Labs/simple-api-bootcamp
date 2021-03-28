document.querySelector('button').addEventListener('click', teamSearch);



function teamSearch() {

let url = `https://www.scorebat.com/video-api/v1/`
let team = document.getElementById('teamSearch').value.toLowerCase();


fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data);
  for(let i = 0; i < data.length; i++){
    if(data[i].side1.name.toLowerCase().indexOf(team)!== -1 || data[i].side2.name.toLowerCase().indexOf(team)!== -1){
      let result = document.createElement('li')
      result.innerHTML = `<h3>${data[i].title}</h3>` + `<a href="${data[i].url}"><img class="thumbnail" src="${data[i].thumbnail}"></a>`
      document.getElementById('results').appendChild(result);
      console.log(data[i]);
    }
  }
})
}

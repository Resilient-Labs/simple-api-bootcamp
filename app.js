
const btn = document.querySelector("button")
let input;
let info = document.querySelector('.info')

btn.addEventListener('click', ()=>{
input = document.querySelector("input").value
fetch(`http://dnd5eapi.co/api/classes/${input}`)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      response.proficiency_choices[0].from.forEach(function(x){
        let li = document.createElement("li");
        let text = document.createTextNode(x.name);
        li.appendChild(text);
        document.getElementById("make").appendChild(li);
      });
    })
    .catch(err =>{
      console.log(`error ${err}`)
      alert("sorry, no results for this search")
    });

})

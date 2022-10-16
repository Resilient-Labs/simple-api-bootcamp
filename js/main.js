document.querySelector('button').addEventListener('click', Technonomicon)

function Technonomicon() {
fetch(`https://programming-quotes-api.herokuapp.com/quotes/random`) 
.then(res => res.json())
.then(data => {
   console.log(data.en)

   document.querySelector('p').innerText = data.en
    } 

)

.catch(err => {
    console.log(`error${err}`)
})
}
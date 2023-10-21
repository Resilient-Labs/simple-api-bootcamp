// getting user input thru buttons
// after clicking buttons do something with that click event
// get api of baby names from url 
// create a li to show answers
//show it as a list in the unorginzed list 
document.querySelector('button').addEventListener('click',babyNames)
const selection = document.querySelector('#textD').value
const url = `https://api.api-ninjas.com/v1/babynames?gender=${selection}`  //${selection}
function babyNames(){
mode = 'cors'//??? hoste api allows
method = 'GET'
const headers = {
    headers:{
        'X-Api-Key': 'cKeJoFU1St6w3OKvQGZF5ND3wsj7bl5SOaloYeCf'
    }
   
}
fetch(url,headers)
.then(res => res.json())
.then(data =>{
    ul = document.querySelector('ul')
   
        li = document.createElement('li')
        li.innerText =`${data}`
        ul.appendChild(li)
        console.log(data)
   
    console.log(data)
})
}



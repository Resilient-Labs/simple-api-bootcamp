const getWord = document.getElementById('getRandom');
const bubble = document.getElementById('comment_bubble');
const firstPart = document.getElementById('question')
const displayJoke = document.getElementById('joke')



getWord.addEventListener('click',dictionary)


function dictionary() {
     bubble.classList.toggle('hidden')  
     postData(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist`) 
     .then(data => { 
        
          data.setup !== undefined ?  firstPart.innerText = 'firstpart' + data.setup :  firstPart.innerText = ''
          data.delivery === undefined ? displayJoke.innerText = data.joke : displayJoke.innerText = data.delivery
         
     })
     
}

async function postData(url) {
     const response = await fetch(url); 
     return response.json();
     }

     

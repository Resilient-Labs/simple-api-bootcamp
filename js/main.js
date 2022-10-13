document.querySelector('button').addEventListener('click', getMovie)

function getMovie(){
  // let film = document.querySelector('input').value
  let url = `https://ghibliapi.herokuapp.com/films`
  
  fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      data.forEach(element =>{
        
       let ul = document.querySelector('ul')
       const li = document.createElement('li')
       ul.appendChild(li)
       let h2 = document.createElement('h2')
       h2.innerText = element.title
       li.appendChild(h2)
       let h3 = document.createElement('h3')
       li.appendChild(h3)
       h3.innerText = element.release_date
       let img = document.createElement('img')
       li.appendChild(img)
       img.src = element.image
       let p = document.createElement('p')
       li.appendChild(p) 
       p.innerText = element.description

       
      
      } );
      // document.querySelector('img').src = data.image
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}






// cards https://protected-taiga-89091.herokuapp.com/api/card
// What type of cocktail?
document.querySelector('button').addEventListener('click', getDrinks);

function getDrinks(){
    //let drink = document.querySelector("input").value
    //console.log(drink);
    fetch(
        `https://api.thecatapi.com/v1/images/search`
        
      )
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data);
        //console.log(data.breeds);
       debugger
        //document.querySelector('#name').innerText=data.title;
        document.querySelector('img').src=data[0].url;
        
        //console.log(data.url)
        //document.querySelector('img').src=data;
      })  
      .catch((err) => {
        console.log(`error ${err}`);
      });      
}
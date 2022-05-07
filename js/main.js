

fetch("https://api.thecatapi.com/v1/images/search")                            
.then(res => res.json())   
.then(data => {      
console.log(data[0]) 
document.querySelector('img').classList.add("disp")
document.querySelector('img').src= data[0].url
// document.querySelector('h1').innerText= "Picture ID: " + data[0].id


})
.catch(err => {            
  console.log(`error ${err}`)   
});


// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php")                            

// .then(res => res.json())   
// .then(data => {      
// console.log(data) 
// // document.querySelector('img').src= data[0].url
// // document.querySelector('h1').innerText= "Picture ID: " + data[0].id
// })
// .catch(err => {            
//   console.log(`error ${err}`)   
// });
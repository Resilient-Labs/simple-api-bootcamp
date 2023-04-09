let btn = document.querySelector("button") 
let pic = document.querySelector("img") 
let url = `https://dog.ceo/api/breeds/image/random`
btn.addEventListener("click", getDogPhoto) 

function getDogPhoto (){ 

    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data.message)  
        pic.src=data.message
}) 

} 


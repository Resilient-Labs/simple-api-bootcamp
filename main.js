// The purpose of this simple API is to have a user input an artist name and return said artist's discography

document.querySelector("button").addEventListener("click", getDisco)

function getDisco(){
let artist = document.getElementById("artist").value

    
    const url = `https://api.discogs.com/database/search?token=QIMaPKKoNghzSLXIvyKcAAlazlPtvdIWOOrFutAA&format=album&artist=${artist}`
// 
 fetch(url)
    .then(res => res.json())
    .then(data =>{
        // addData(data.[0].year)
        // console.log(data)
        
      data.results.forEach(item =>{
        console.log(item.title)
        const albums = item.title
        const listNode = document.getElementById("myList")
        const liNode = document.createElement("li")
        const textNode = document.createTextNode(albums)
        liNode.appendChild(textNode)
        listNode.appendChild(liNode)
      })
       
    })

}

document.querySelector('button').addEventListener('click', catPics)
let pic = document.querySelector('img')

let url = `https://api.thecatapi.com/v1/images/search?api_key=live_oS4BJwnxzgGPE6LubjifGzVJYbPuSauP6wd5kBP3TaK5kAonUFs4Ety3ryu2g1FG`

function catPics(){
fetch(url)
.then(res => res.json()) //get json
.then(data => {
    console.log(data[0].url)
    pic.src = data[0].url


})

}
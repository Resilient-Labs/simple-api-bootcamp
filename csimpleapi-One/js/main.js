// create simple api for pokemon tracker
document.querySelector('button').addEventListener('click', getPokemon)
function getPokemon(){
    let pokeman = document.querySelector('input').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeman}`)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        let newLi = document.createElement("li");
        let newBi = document.createElement("li");
        let newCi = document.createElement("li");
        let newKi = document.createElement("li");
        document.querySelector("ul").appendChild(newLi);
        document.querySelector("ul").appendChild(newBi);
        document.querySelector("ul").appendChild(newCi);
        document.querySelector("ul").appendChild(newKi);

        newBi.innerText = document.querySelector('li').innerText = `HP: ${data.stats[0].base_stat}`
        newLi.innerText = document.querySelector('li').innerText = `ATK: ${data.stats[1].base_stat}`
        newCi.innerText = document.querySelector('li').innerText = `DEF: ${data.stats[2].base_stat}`
        newKi.innerText = document.querySelector('li').innerText = `SPECIAL: ${data.moves[0].move.name}`
        document.querySelector('img').src = data.sprites.front_default
        // document.querySelector('li').innerText = `HP: ${data.stats[0].base_stat}`
        // document.querySelector('li').innerText = `ATK: ${data.stats[1].base_stat}`
        // document.querySelector('li').innerText = `DEF: ${data.stats[2].base_stat}`
        // console.log(data)
        // console.log()
        // document.querySelector('h2').innerText = data.game_indices[i].version.name
        // let newLi = document.createElement("li");
        // newLi.innerText = data.game_indices[i].version.name
        // newBi.innerText = data.game_indices[i].version.name  
        // document.querySelector("ul").appendChild(newLi);
        // document.querySelector("ul").appendChild(newBi);
    
    //let newLi = document.createElement("li");
   // newLi.innerText = data[i].city + ' | ' + data[i].zipcode + ' | ' + `${weatherData.main.temp}°Farenheight`
    //document.querySelector("ul").appendChild(newLi);
        })
        // document.querySelector('h2').innerText = data. Pokemon stats 
        // document.querySelector('h3').innerText = data. Pokemon regions 
        // document.querySelector('h1').innerText = data. Pokemon rarities
    }   
       

    
        // .catch(err => {
        //     console.log(`error ${err}`);
        //     };
        
document.querySelector('button').addEventListener('click', getInfo)




function getInfo (){
    let artist = document.querySelector('.artist').value
    let title = document.querySelector('.song').value
    
    

    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`

    fetch(url) 
        
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        
        console.log(data)
        console.log(data.lyrics)

        document.querySelector('h3').innerText = data.lyrics
        
       
        
        
        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        }); 
}
document.querySelector('button').addEventListener('click', getInfo)

function getInfo(){
    let url = `https://acnhapi.com/v1a/songs/`

        fetch(url)
            .then(res => res.json())
            //a fetch call will be responsed as an html
            // (res.json) takes the response and parses (translates) it to a json object
            //.json is a built in js method

            .then(data => {
                console.log(data)

                const source = document.querySelector('source')
                const audio = document.querySelector('audio')
                let ranNum =  data[Math.floor(Math.random() * data.length)]
                document.querySelector('h2').innerText = ranNum.name['name-USen']
                // accessing property in the object [''] (spaces or underscores) instead of using dot notation, you can use string with [] to use special characters. not an array!!!!!
                document.querySelector('img').src = ranNum.image_uri
                console.log(ranNum.name['name-USen'])
                source.src = ranNum.music_uri
                    console.log(source, ranNum.music_uri)
                    audio.load()
                    audio.autoplay = true;
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}
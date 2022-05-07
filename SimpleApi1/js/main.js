//Kayne West Quotes API - refresh to see a new quote! 
fetch("https://api.kanye.rest")
    .then(res => res.json()) 
    .then(data =>{
        console.log(data.quote)
        // returns the message property off object which is the link/image url. 
        document.querySelector('h3').innerText = data.quote
    })

    .catch(err =>{
        console.log(`error ${err}`)
    });


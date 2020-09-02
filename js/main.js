let button = document.querySelector("button");

// function catFacts () {
    button.addEventListener("click", ()=>{
        fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1`)
        .then(res => res.json()) 
        .then(data => {
        console.log(data.text)
       document.getElementById("facts").textContent = data.text;
     });
    });



    
    //  button.addEventListener("click", (event) =>{
    //     event.preventDefault()
    //   })
    //   .catch(err => console.log(err))
    
    // }


    // const catFacts = {
    //     fact: document.getElementById("facts"),
    //     button: document.querySelector("button"),
    //     fetchFact: () =>{
    //         fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1`)
    //         .then(res => res.json()) 
    //         .then(data => {
    //         console.log(data.text)
    //        document.getElementById("facts").textContent = data.text;
    //      });
        
    //      button.addEventListener("click", () =>{
    //         event.preventDefault()
    //       })
    //       .catch(err => console.log(err))
    //     } 
    //     }


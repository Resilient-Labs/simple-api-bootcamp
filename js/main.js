


// this is the connection to the dom
let frame = document.getElementsByClassName("frame")[0];
//this is the button that that lauches the function
document.querySelector("button").addEventListener('click', function(){
    //fetch is getting information from the api  and giving it to the .then()
    fetch("https://pixabay.com/api/videos/?key=13000638-fe42b990ed6a67874ef95068d&q=flower")
    // then is changing the responese to json and giving it to the next then
    .then(res => res.json())
    // this is where shit gets good, minipulating the response data in looping the
    .then(response =>{
        //console.log response to see what kind of information we were giving and to see where the data lies
        console.log(response);
        let hitsArray = response.hits;
        hitsArray.forEach(hit => {
            //putting url in a variable
            let urlCode = hit.videos.large.url;
            console.log(urlCode);
            //creats new iframe
            let container = document.createElement("iframe");
             // puts in the section
            frame.appendChild(container);
            //container is the new in frame putting ur into iframe
             container.src = hit.videos.large.url;
            //this is another way I know how it worked.
             console.log("success");
          

        });
    } )
})

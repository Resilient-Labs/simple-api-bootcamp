document.querySelector("input").value = "";
document.querySelector("h2").innerHTML = "";

function firstName(name){
    url = `https://api.agify.io?name=`

    if(!name){
        document.querySelector("h2").innerHTML = "";
        return false;
    }else if(name.includes(" ")){
        name = name.split(" ").shift();
        url += name;
        return(url);
    }else{
        url += name;
        return(url);
    }
}

document.querySelector("button").onclick = () => {
    fetch(firstName(document.querySelector("input").value))
        .then(response => response.json())
        .then(data => {
            if(!data.age){
                document.querySelector("h2").innerHTML = `Having issues with the search. Please try again`
            }else{
                document.querySelector("h2").innerHTML = `${data.name} is ${data.age}`
            }
        })
}

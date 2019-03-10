document.getElementById('submit').addEventListener('click', brew)

function brew(e) {
    e.preventDefault();
    let input = document.getElementById("input").value
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${input}`)
    .then(response => response.json())
    .then(res => {

        //looping through the list of brewerys and giving them a p element
        res.forEach(function(brewery){
            
            // making container for description and make it equal to p element forEach response
            let description = document.createElement('p')
            document.getElementsByTagName('body')[0].appendChild(description);

            description.innerHTML = description.innerHTML + brewery.name
        });
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
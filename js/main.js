const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('container');

let searchQuery = '';
const APP_ID = 'a5448ef8';
const APP_KEY = '1574f36637ac3d551a9764355d6812e0';


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchQuery = event.target.querySelector('input').value;
    console.log(searchQuery)
    fetchAPI()
});

async function fetchAPI (){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=6`;
    const reponse = await fetch(baseURL);
    const data = await reponse.json();
    generateResults(data.hits);
    console.log(data);
    
}

function generateResults(results){
    //container.classList.remove("initial"); can't seem to get this to work will troubleshoot
    let generatedResults = '';
    results.map(result => {
        generatedResults +=
        `
        <div class="item">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels: 'No Data Found'}</p>
        </div>
        `
    })
    searchResultDiv.innerHTML = generatedResults;
}
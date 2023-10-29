let apiKey= 'iy1ZP1/HmKxp48Nn8uMnmw==B2FPrStBCYkvT4lz'

document.querySelector('select').addEventListener("change", getExercise)

async function getExercise(){

    let muscleGroup = document.querySelector('select').value
    const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`, {
        method: 'GET',
        headers: {
        'X-Api-Key': 'iy1ZP1/HmKxp48Nn8uMnmw==B2FPrStBCYkvT4lz'
        }
    });

    const data = await response.json();

    for (let i = 1; i<= 3; i++){ //The for loop is to assure that we don't repeat the same exercises displayed among the three h2s
        let index = Math.round(Math.random() * (data.length-1)) //selects a random valid index in the array
        let exerciseName = data[index].name
        document.querySelector(`#workout${i}`).textContent = `${exerciseName}` //displays an exercise to each of the three h2s in the dom
        
         // The API has duplicates. Remove the selected exercise and its duplicates from the array
        let d = 0
        while (d < data.length){
            if (data[d].name === exerciseName){
                data.splice(d,1)
            } else{
                d++
            }
        }
    }

    document.querySelector('h3').textContent = 'Do 3 sets of 12'
}

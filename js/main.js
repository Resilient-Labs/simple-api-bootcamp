//user click on button, that button relay affirmation quote

document.querySelector('button').addEventListener('click',getAffirmation)

//create a function 
function getAffirmation(){
    fetch (`https://api.adviceslip.com/advice`)
    //for this case dont have use json since 
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.querySelector('h2').innerText=data.slip.advice
    })
    .catch(err =>{
        console.log(`error${err}`)
    })

}
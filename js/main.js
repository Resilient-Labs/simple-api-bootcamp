document.querySelector('.generate').addEventListener('click', chooseExpression)
document.querySelector('.submitBtn').addEventListener('click', submitAnswer)

function chooseExpression(){    
    if (document.querySelector('.answer').classList.contains('hidden') === false){
        document.querySelector('.answer').classList.toggle('hidden')
    }
    if (document.querySelector('.check').innerText !== ''){
        document.querySelector('.check').innerText = ''
    }
    document.querySelector('input').value = ''
    fetch('https://x-math.herokuapp.com/api/random')
    .then(res => res.json())
    .then(data =>{
        document.querySelector('h2').innerText = data.expression
        document.querySelector('.answer').innerText = data.answer
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function submitAnswer(){
    let attempt = document.querySelector('input').value
    let answer = document.querySelector('.answer').innerText
    if (attempt === answer){
        document.querySelector('.check').innerText = "Correct! Nice job!"
    } else{
        document.querySelector('.check').innerText = "Wrong! The correct answer is:"
        document.querySelector('.answer').classList.toggle('hidden')
    }
}
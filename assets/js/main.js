document.querySelector('#displayAnswer').style.display = 'none';
document.querySelector('button').addEventListener('click', 
() => {
    document.querySelector('#answer').style.display = 'none';
    document.querySelector('#displayAnswer').style.display = 'block';
    fetch('http://jservice.io/api/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('#question').innerText = data[0].question;
        document.querySelector('#answer').innerText = data[0].answer;
    })
    .catch(err => {
        console.error(err);
    });
})

document.querySelector('#displayAnswer').addEventListener('click', () => {
    document.querySelector('#answer').style.display = 'block'
})
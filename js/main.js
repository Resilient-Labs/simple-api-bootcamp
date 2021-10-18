//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', generateAct)

function generateAct(){
    document.querySelector('h2').innerText = 'Finding you an activity, this may take a few seconds...'
    const participants = document.querySelector('select').value
    fetch(`https://www.boredapi.com/api/activity`)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        if(participants <= response.participants){
            document.querySelector('h2').innerHTML = `Activity: ${response.activity}<br>Participants: ${response.participants}`
            return
        }else{
            generateAct()
        }
    })
    .catch(err => {
        console.error(err);
    });
}
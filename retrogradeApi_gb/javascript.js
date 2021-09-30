document.querySelector('button').addEventListener('click', search)

function search() {
	let dateEntered = document.querySelector('input').value
	const url = (`https://mercuryretrogradeapi.com?date=${dateEntered}`)

	fetch(url)
		.then(res => res.json())
		.then(data => {
            console.log(data)
			document.querySelector('#retrogradeAnswer').innerText = "Is " + dateEntered + " in retrograde?" + " " + data.is_retrograde
		})
		.catch(err => {
			alert("Error - couldn't find results, sorry!")
		})
}
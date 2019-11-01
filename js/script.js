const battleTagInput = document.querySelector("#battleTagInput")
const accountLookupButton = document.querySelector("#accountLookupButton")
const regionSelect = document.querySelector("#regionSelect");
const totalWinsCell = document.querySelector("#totalWins");

accountLookupButton.addEventListener('click', lookupAccount);

battleTagInput.addEventListener('keyup', event => {
    if(event.key === "Enter") {
        lookupAccount();
    }
})

function lookupAccount() {

    const account = battleTagInput.value;
    const region = regionSelect.options[regionSelect.selectedIndex].value;

    fetch(`https://ow-api.com/v1/stats/pc/${region}/${account.replace('#','-')}/profile`)
        .then(res => res.json())
        .then(response => {
            console.table(response);
            document.querySelector("#accountName").textContent = response.name;
            document.querySelector("#accountLevel").textContent = response.level;
            document.querySelector("#endorsementLevel").textContent = response.endorsement;
            if(region === "us") {
                totalWinsCell.textContent = response.quickPlayStats.games.won;
            } else {
                totalWinsCell.textContent = response.gamesWon;
            }
        })
        .catch(err => {
            alert("There was an error, or your account was not found. (Note that account names and IDs are case-sensitive");
        })

    battleTagInput.value = "";

}

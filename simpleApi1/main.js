document.querySelector("button").addEventListener("click", getRandomUser);

const url = "https://randomuser.me/api/";

function getRandomUser() {
    fetch(url)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            console.log(data);
            console.log(data.results[0]);
            console.log(data.results[0].cell);
            document.querySelector("#firstName").innerText =
                data.results[0].name.first;
            document.querySelector("#lastName").innerText = data.results[0].name.last;
            document.querySelector("#age").innerText = data.results[0].dob.age;
            document.querySelector("#city").innerText = data.results[0].location.city;
            document.querySelector("#state").innerText =
                data.results[0].location.state;
            document.querySelector("#country").innerText =
                data.results[0].location.country;
            document.querySelector("#emailMe").innerText = data.results[0].email;

            document.querySelector("#pic").src = data.results[0].picture.large;
        })
        .catch((err) => {
            console.log(`error ${err}`);
        });
}

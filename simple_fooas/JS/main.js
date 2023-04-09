document.querySelector("button").addEventListener("click", clickHere)
document.querySelector("#btn1").addEventListener("click", clickHereAgain)
document.querySelector("#btn2").addEventListener("click", clickHereOnceMore)

function clickHere() {
    const url = 'http://foaas.com/asshole/-'
    fetch(url, { headers: { 'Accept': 'text/plain' } }) //had to get help with thi code to target the different formatting of the data
        .then(res => res.text())
        .then(data => {
            const btn0 = document.querySelector("#btn0")
            document.querySelector("h2").innerText = data  //repeated a few times down below to remove vious buttons and text with each click
            btn0.classList.add('hidden');
            setTimeout(() => {
                const btn1 = document.querySelector("#btn1")
                btn1.classList.remove('hidden');
            }, 1500);

        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

function clickHereAgain() {
    const url = 'http://foaas.com/because/-'
    fetch(url, { headers: { 'Accept': 'text/plain' } })
        .then(res => res.text())
        .then(data => {
            document.querySelector("span").innerText = data
            document.querySelector("h2").innerText = ""
            const btn1 = document.querySelector("#btn1")
            btn1.classList.add('hidden');
            setTimeout(() => {
                const btn2 = document.querySelector("#btn2")
                btn2.classList.remove('hidden');
            }, 1500);
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function clickHereOnceMore() {
    const url = 'http://foaas.com/outside/Listen/Cheers!'
    fetch(url, { headers: { 'Accept': 'text/plain' } })
        .then(res => res.text())
        .then(data => {
            document.querySelector("p").innerText = data
            document.querySelector("span").innerText = ""
            const btn2 = document.querySelector("#btn2")
            btn2.classList.add('hidden');
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

document.querySelector('button').addEventListener('click', giveMeFood)
let input = document.querySelector('input')



function giveMeFood() {
    let url = `https://api.spoonacular.com/food/videos/search?apiKey=ce48a56d8bd7473aa1e610088c3463d1&query=${input.value}&number=25`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let video = document.querySelector('.video')
            let title = document.querySelector('.title')
            video.src = (`https://www.youtube.com/embed/${data.videos[0].youTubeId}`)
            title.innerText = data.videos[0].title

        })
}
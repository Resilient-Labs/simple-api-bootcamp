// GOAL: THE USER ENTERS A SYMBOL. THE USER INPUT WILL THEN BE SENT TO AN API AND RETRIEVE THE NEWS FOR THAT STOCK AND DISPLAY IT ON THE DOM
const key = 'V3C78FFP9I62IIYU'
let currentDate = new Date().toDateString() // get today's date
const chart = document.querySelector("#chart");
let options = {
    chart: {
    id: 'barChart',
    type: "candlestick",
    },
    series: [
    {
    data: [],
    },
    ],
    title: {
    text: "",
    align: "center",
    },
    xaxis: {
    type: "datetime",
    },
    yaxis: {
    tooltip: {
    enabled: true,
    },
    },
    };

const userInput = document.querySelector('#stockInput')
const headlinesContainer = document.querySelector('.headlines') // headlines container

document.querySelector('.submitBtn').addEventListener('click', getStockNews) // add event listener to submit button that will get stock news when clicked
document.querySelector('.todaysDate').innerHTML = `${currentDate} 🌤️` // display date in DOM

function getStockNews() {
    const symbol = userInput.value.toUpperCase()
    const newsUrl = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&sort=LATEST&limit=3&apikey=${key}`
    const chartURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${key}`
    userInput.value = '' // reset input value

    if (symbol) {
        if (document.querySelector('.right').classList.contains('hidden')) {
            document.querySelector('.right').classList.toggle('hidden')
        }
        
        fetch(chartURL)
        .then(chartRes => chartRes.json())
        .then(chartData => {
            if (chart.firstChild) {
                ApexCharts.exec('barChart', 'destroy')
                formatData(chartData)
                new ApexCharts(chart, options).render()
            } else {
                formatData(chartData)
                new ApexCharts(chart, options).render()
            }
        })
   
        // news api call
        fetch(newsUrl)
        .then(newsRes => newsRes.json()) // parse response as JSON
        .then(newsData => {
            // Clear existing articles by setting the innerHTML to an empty string
            headlinesContainer.innerHTML = ''
            headlinesContainer.appendChild(document.createElement('h2')).innerText = 'Top Headlines'
    
            // loop through the first three articles
            for (let i = 0; i < 3; i++) {
                createElement(newsData, i)
            }
        })
        
        .catch(err => {
            console.log(`error ${err}`)
        })
    }

}

function createElement(data, i) {
    // create new article element
    let article = document.querySelector('.headlines').appendChild(document.createElement('article'))
    article.classList.add('fade-in-image')

    // create article image
    let articleImage = article.appendChild(document.createElement('div'))
    let img = articleImage.appendChild(document.createElement('img'))
    articleImage.classList.add('articleImage')

    // create the h3 element for the article title
    let description = article.appendChild(document.createElement('div'))
    let title = description.appendChild(document.createElement('h3'))
    description.classList.add('description')

    // create new text for authors, summary, and article sentiment on the stock
    let articleDate = description.appendChild(document.createElement('p'))
    let authors = description.appendChild(document.createElement('p'))
    let summary = description.appendChild(document.createElement('p'))
    let sentiment = description.appendChild(document.createElement('p'))

    // get and break up date
    let date = data.feed[i].time_published
    let year = date.slice(0, 4)
    let month = date.slice(4,6)
    let day = date.slice(6,8)

    // get banner image
    let banner_image =  data.feed[i].banner_image

    // passing in values 
    // handle missing images
    if (banner_image == null) {
        img.src = "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
    } else {
        img.src = banner_image // pass in the image url to the article image src
    }

    title.innerHTML = `<a href="${data.feed[i].url}" target="_blank">${data.feed[i].title}</a>` // pass in the article url and article title to the h3 tag

    // pass in the article date, authors, summary, and article sentiment
    articleDate.innerHTML = `Published: ${month}-${day}-${year}`
    authors.innerHTML = `${data.feed[i].authors} | <a href="${data.feed[i].url}" target="_blank">${data.feed[i].source}</a>`
    summary.innerHTML = data.feed[i].summary
    sentiment.innerHTML = `Sentiment: ${data.feed[i].overall_sentiment_label}`
}

function formatData(chartData) {
    options.title.text = chartData["Meta Data"]["2. Symbol"];
    let solution = [];
    Object.entries(chartData["Time Series (Daily)"]).forEach(
    ([day, dailyPrices]) => {
    let obj = {};
    obj.x = new Date(day);
    let prices = [];
    prices.push(dailyPrices["1. open"]);
    prices.push(dailyPrices["2. high"]);
    prices.push(dailyPrices["3. low"]);
    prices.push(dailyPrices["4. close"]);
    obj.y = prices;
    solution.push(obj);
    }
    )
    options.series[0].data = solution.sort((a, b) => a.x - b.x);
}
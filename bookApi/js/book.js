//key: 7pXlGHowSgAlLjTgs5JoewF3pMSRFyDg
//https://api.nytimes.com/svc/books/v3/reviews.json
//reviews.json?author=Michelle+Obama
//reviews.json?isbn=9781524763138
//reviews.json?title=Becoming
//https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey

  fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=7pXlGHowSgAlLjTgs5JoewF3pMSRFyDg`)
      .then(res => res.json())
      .then(jsonRes => {
        console.log(jsonRes);
        let bookR = jsonRes.results
        document.getElementById("one").innerHTML = (`Book Author: ${bookR[0].book_author} Book Title: ${bookR[0].book_title} ${bookR[0].summary} NYT Review: ${bookR[0].url}`);
        document.getElementById("two").innerHTML = (`Book Author: ${bookR[1].book_author} Book Title: ${bookR[1].book_title} ${bookR[1].summary} NYT Review: ${bookR[1].url}`);
        document.getElementById("three").innerHTML = (`Book Author: ${bookR[2].book_author} Book Title: ${bookR[2].book_title} ${bookR[2].summary} NYT Review: ${bookR[2].url}`);
        document.getElementById("four").innerHTML = (`Book Author: ${bookR[3].book_author} Book Title: ${bookR[3].book_title} ${bookR[3].summary} NYT Review: ${bookR[3].url}`);
        document.getElementById("five").innerHTML = (`Book Author: ${bookR[4].book_author} Book Title: ${bookR[4].book_title} ${bookR[4].summary} NYT Review: ${bookR[4].url}`);
        document.getElementById("six").innerHTML = (`Book Author: ${bookR[5].book_author} Book Title: ${bookR[5].book_title} ${bookR[5].summary} NYT Review: ${bookR[5].url}`);
        document.getElementById("seven").innerHTML = (`Book Author: ${bookR[6].book_author} Book Title: ${bookR[6].book_title} ${bookR[6].summary} NYT Review: ${bookR[6].url}`);
        document.getElementById("eight").innerHTML = (`Book Author: ${bookR[7].book_author} Book Title: ${bookR[7].book_title} ${bookR[7].summary} NYT Review: ${bookR[7].url}`);
        document.getElementById("nine").innerHTML = (`Book Author: ${bookR[8].book_author} Book Title: ${bookR[8].book_title} ${bookR[8].summary} NYT Review: ${bookR[8].url}`);
        document.getElementById("ten").innerHTML = (`Book Author: ${bookR[9].book_author} Book Title: ${bookR[9].book_title} ${bookR[9].summary} NYT Review: ${bookR[9].url}`);
      })
      .catch(err => {
        console.log(`error ${err}`);
        alert("sorry, there are no results for your search");
      })


document.addEventListener("DOMContentLoaded", function () {
    const quoteTextElement = document.getElementById("quote-text");
    const authorElement = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote");
  
    // Function to fetch a random quote from the Forismatic API using JSONP
    function getQuote() {
      // Ensure each JSONP request is unique by adding a random parameter
      const randomParam = `jsonpCallback${Math.floor(Math.random() * 100000)}`;
      const apiUrl = `https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=${randomParam}`;
  
      // Create a JSONP script element
      const script = document.createElement("script");
      script.src = apiUrl;
  
      // Define the JSONP callback function
      window[randomParam] = function (data) {
        const quote = data.quoteText;
        const author = data.quoteAuthor || "Unknown";
  
        // add quote and author to html 
        quoteTextElement.textContent = quote;
        authorElement.textContent = `— ${author}`;
  
        // Remove the script element and callback function
        document.body.removeChild(script);
        delete window[randomParam];
      };
      document.body.appendChild(script);
    }
  
    //  quote fetch
    getQuote();
  
    // event listener click 
    newQuoteButton.addEventListener("click", getQuote);
  });
  
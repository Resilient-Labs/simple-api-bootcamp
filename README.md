# simple-api-gif

This is a simple app that returns 3 GIFs. The user inputs a word/phrase and clicks enter/on the button and 3 related GIFs are returned.

Link to Project: https://simple-gif-api.netlify.app

![Project Image](/pic/gif.png)


### How It's Made:

Tech used: HTML, CSS, JavaScript

This GIF app uses 1 API (giphy). It is made using an input, event listener, function, and fetch statement. First, the user enters a word/phrase as the input. Next, there is an event listener on the 'Get GIF' button/the enter key. When either is clicked, a function runs. Within the function is a fetch statement which contacts the API with the request. Finally, the GIFs are returned to the DOM.  


### Lesson Learned

I learned how to fetch data from an API. In this case, the API url needs a word/phrase parameter to fetch the GIFs. The word/phrase is retrieved from the input and inserted into the url through a template literal.  
 

###
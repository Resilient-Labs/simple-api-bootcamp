# 📊 Project: Simple API 1

This Recipe Search application will allow the user to enter in a food item and see a list of recipes containing that item.

## How It's Made:

**Tech Used:** HTML, JS, Edamam Recipe Search API

In the HTML I have a form containing the input and button to submit the user's food item of choice. I also have an empty unordered list in the HTML to display my recipes. Within the JS code, I added an event listener to the form, put the value from the input into a variable and used that variable in my api fetch. If the fetch is successful, then I take the json file within it and extract the recipe information I needed to display into the DOM.

<!-- ## Optimizations:
I'd like to style the application to make it visually appealing and also give the user more options for those who have allergies, or want a meal without a specific food item.  -->
## Lessons Learned:

This was a very fun project, I really grasped the format of json files and how to navigate through them and get the information I need. I learned a really cool function, .createElement() can literally create a new element into the dom however I use it. I learned that .map() is a method for arrays to create a new array, that .join('') puts arrays together into a string, I can put whatever I want into an object, including a fat arrow function.

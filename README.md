# 📊 Project: Simple NBA API 

### Goal: Display data returned from an api

This project is a simple NBA player search API where users can input the name of an NBA player and retrieve their position, team, height, and weight. 

![Screenshot of the NBA Player Search API] ((<img/nba api.png>) "NBA Player Search API Interface")

## How It's Made:
**Tech used:** HTML, CSS, JavaScript

I initiated the project with basic HTML to structure the interface where users can input the name of the player. For styling, CSS was used, making sure it's visually appealing. JavaScript played a significant role in this project as it's responsible for fetching data from the API and rendering the results on the web page. I implemented a search function that listens to user input, makes API calls, and then displays the data. Error handling was added to manage situations when a player's data might not be available.

## Optimizations:
I implemented caching for the recent searches so that repeated queries for the same player load instantaneously, enhancing the user experience.

## Lessons Learned:
Throughout this project, I learned the importance of optimizing API calls. Initially, I was making multiple calls which were unnecessary and hampered the speed. But after refactoring, I realized the potential of asynchronous operations and caching. 

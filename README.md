# burger

## Go To
* Visit : __https://psharif-burger-app.herokuapp.com/__ To see Heroku Deployed app.
* Visit : __https://github.com/psharif/burger__ to see GitHub Repo

## Notes About Running burger (if running locally skip if going to website)
* Enter npm i or npm install to install the necessary node packages for the app.
* __'express'__ was used for Routing, __'body-parser'__ _was used for parsing and sending data through routes
  __'mysql'__ was used for database actions.
* The Defualt Port written in the app is 8080. Connect using localhost: 8080, or change configuration on server.js. But the deployed app uses Heroku's environment Port on Heroku deployed version.

## Clicking On Devour It

![buger devour gif](/README_GIFS/devour.gif)

This will update a burgers __devoured BOOLEAN value__ from __false to true__. Or in __MySQL From 0 to 1__.
The burger will then display on the list of __Eaten__ burgers.

## Creating A Burger

![burger create gif](/README_GIFS/create.gif)

* Typing the name of a burger and then clicking the button labeled __"Make It"__ will create a new burger in the burgers_db.
* It will then reload the page and put the burger in the __Not-Eaten__ list.

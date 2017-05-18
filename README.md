# Project: Project Anima (Group Project)


## Description

* A text-based RPG based off solving puzzles to progress through the story and put together the 
pieces to identifying your origins.

* The player wins the game after they have successfully completed all the puzzle requirements. 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites/Installation

* Git Clone or Download project at: http://github.com/ajagnic/projectAnima.git


## Accessing the Mainframe

* On game start, player is displayed the message, "I ----, therefore I am".
The player is tasked with solving the riddle/thing and entering the correct phrase.  By doing this, the game begins,
"Booting up, initialization, failed....main functions.. currently offline."


## Game Overlay/Hub, Navigating the Mainframe

* Visual Pane (Top-Left)

* Motor Functionality Pane (Top-Middle)

* Security Authentication Pane (Top-Right)

* Security Key Pane (Bottom-Left)

* Harmonic Memory Drive (Bottom-Right)


## Specification

  Player clicks a single button, INPUT: button 1, OUTPUT: button 1.
  Player clicks multiple buttons, INPUT: button 1, button 2, OUTPUT: 1, 2.
  Player clicks a designated "correct button".  INPUT: button 1, OUTPUT: correct.
  Player clicks a non-designated "correct button." INPUT: Button 2, OUTPUT: Incorrect.
  Player clicks buttons to correctly/incorrectly answer a single puzzle question. i.e, 1 + 2 = ? INPUT: 3, OUTPUT: correct.
  Player clicks incorrect answer for designated puzzle. INPUT: Button 1, OUTPUT: Alert Message is displayed.
  

## Built With

* [jQuery](http://jquery.com/download/) - A JavaScript library for manipulating the DOM with ease.
* [Bootstrap](getbootstrap.com) - A front end framework for creating user interfaces.


## Coming Soon(Cool things that most likely  won't happen till v2.0.)

* Save Locations Occur after each puzzle.
* Matrix Background theme, on game start.
* Spin up a node.js server and have the game accessable.
* Using Cookies, allow the Player to save their game.


## Authors

* Roger Tobias (https://github.com/rogtobias)
* Adrian Agnic (https://github.com/ajagnic)
* Jared Luedtke (https://github.com/jluedtke)
* Ethan Luts (https://github.com/eluts15)


## Sick Feature

* Crash game if the Player's attempts result in a failure more than 5 times. 


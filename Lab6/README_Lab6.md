# Lab 6
This is my lab six folder which contains three js files. My yahtzee app is built using react and there are three primary components that serve roles in the gameplay of the game. React is based on modularity and reusable components. After defining all the components, the "return" statement will render all the components. This allows the return statement to be very simple and readable to understand the order in which the modules are compiled.

### App.js
App.js is the primary file that serves as the hub of the application. This file will manage the game's state, user interaction, scoring logic, and rendering of all other components.

### Scoreboard.js
Scoreboard.js is the component that will render the scoreboard, and the values associated with each type of score. The scores prop is an object that have two nested objects for the upper and lower sections of the traditional Yahtzee scorecard. Both sections loop through each key-value pair and displays those as individual scores for the corresponding value. 

### Gameboard.js
Gameboard.js is the component that will render the interactive gameboard which users will roll the dice on, and toggle hold on dice they select. This component contains multiple props such as the dice, held state, toggle dice hold, and roll function. The gameboard contains the dice assets and a Yahtzee's logo background. There is also an effect function that will give the dice a new position after a roll. This give a roll effect.

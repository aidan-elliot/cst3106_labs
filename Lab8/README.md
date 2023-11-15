# Lab 8

In this site, the main page contains a card with a die and a roll button. The card can also be flipped by clicking on the lower right corner. The html file uses jQuery for handling user interactions.

### Dice Rolling Functionality
- When the Roll button is clicked, this triggers a function that checks if the dice is currently rolling by using the isSpinning flag. If the dice is not rolling, it will begin the rolling animation.
- The spin-animation class is added to the dice image.
- When the animation reaches it's halfway point (500ms), a random number is generated to determine what die image to display next. 
- When the animation finished, the spin-animation class in taken off, and the isSpinning flag is made false.

### Dice Container Flip
- I also added a flip animation to the card. If the card is clicked in the bottom right corner, a condition is met, and the flipped class is toggled on the dice-container. 
- The class applies a CSS transform that flips the card. -*I found this animation in a library.

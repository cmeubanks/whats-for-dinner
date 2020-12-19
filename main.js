/* Global Variables */
var sideRadio = document.querySelector('.side');
var mainDishRadio = document.querySelector('.main-dish');
var dessertRadio = document.querySelector('.dessert');
var entireMealRadio = document.querySelector('entire-meal');
var letsCookButton = document.querySelector('.lets-cook');


/* Event Listeners */
sideRadio.addEventListener('click', grabSide);
mainDishRadio.addEventListener('click', grabMainDish);
dessertRadio.addEventListener('click', grabDessert);
letsCookButton.addEventListener('click', displayMeal);

/* Functions */
function mealRandomizer(array) {
  return Math.floor(Math.random() * array.length);
}

function grabSide() {
  var selectedSide = sides[mealRandomizer(sides)];
  return selectedSide;
}
function grabMainDish() {
  var selectedMainDish = mains[mealRandomizer(mains)];
  return selectedMainDish;
}
function grabDessert() {
  var selectedDessert = desserts[mealRandomizer(desserts)];
  return selectedDessert;
}
//displayMeal function, takes in conditional
//about above event listeners and displays respective
//meal type
//Questions: can I use .value to grab selected user radio button?
//if a value is grabbed, run true false statements to determine if the radio button
//function contains a value -try to add a parameter and variable if this doesn't work the first time
function displayMeal() {
  if (grabSide() == true) {
    return selectedSide;
  } else if (grabMainDish() == true) {
    return selectedMainDish;
  } else if (grabDessert() == true) {
    return selectedDessert;
  } else {
    return "You're not hungry?"
  }
}

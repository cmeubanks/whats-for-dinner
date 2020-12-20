/* Global Variables */
var sideRadio = document.querySelector('.side');
var mainDishRadio = document.querySelector('.main-dish');
var dessertRadio = document.querySelector('.dessert');
var entireMealRadio = document.querySelector('entire-meal');
var letsCookButton = document.querySelector('.lets-cook');
var selectedSide;
var selectedMainDish;
var selectedDessert;

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
  selectedSide = sides[mealRandomizer(sides)];
  return selectedSide;
}
function grabMainDish() {
  selectedMainDish = mains[mealRandomizer(mains)];
  return selectedMainDish;
}
function grabDessert() {
  selectedDessert = desserts[mealRandomizer(desserts)];
  return selectedDessert;
}
//displayMeal function, takes in conditional
//about above event listeners and displays respective
//meal type
//Questions: can I use .value to grab selected user radio button?
//if a value is grabbed, run true false statements to determine if the radio button
//function contains a value
//try to add a parameter and variable if this doesn't work the first time

function displayMeal() {
  if (sideRadio.checked) {
    return selectedSide;
  } else if (mainDishRadio.checked){
    return selectedMainDish;
  } else if (dessertRadio.checked){
    return selectedDessert;
  } else {
    return "You're not hungry?";
  }
}

//function displayMeal() {
  //if (selectedMainDish && selectedDessert === undefined) {
   //return selectedSide;
// } else if (selectedSide && selectedDessert === undefined) {
  // return selectedMainDish;
// } else if (selectedSide && selectedMainDish === undefined) {
  // return selectedDessert;
//  } else {
  //  return "You're not hungry?"
//  }
//}
//var foodToShow = displayMeal();

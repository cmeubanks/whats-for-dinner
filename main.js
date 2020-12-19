/* Global Variables */
var sideRadio = document.querySelector('.side');
var mainDishRadio = document.querySelector('.main-dish');
var dessertRadio = document.querySelector('.dessert');
var entireMealRadio = document.querySelector('entire-meal');
var letsCookButton = document.querySelector('lets-cook');


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
//mirror grab side for Main dish

//mirror grab side for dessert

//

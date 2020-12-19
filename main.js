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

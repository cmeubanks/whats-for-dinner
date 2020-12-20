/* Global Variables */
var sideRadio = document.querySelector('.side');
var mainDishRadio = document.querySelector('.main-dish');
var dessertRadio = document.querySelector('.dessert');
var entireMealRadio = document.querySelector('.entire-meal');
var letsCookButton = document.querySelector('.lets-cook');
var yourFoodSelection = document.querySelector('.your-food-selection');
var sectionTwo = document.querySelector('.sec-two');
var potImage = document.querySelector('#pot');
var selectedDish;


/* Event Listeners */
sideRadio.addEventListener('click', grabSide);
mainDishRadio.addEventListener('click', grabMainDish);
dessertRadio.addEventListener('click', grabDessert);
letsCookButton.addEventListener('click', displayMeal);


/* Functions */
function mealRandomizer(array) {
  return Math.floor(Math.random() * array.length);
};

function grabSide() {
  selectedDish = sides[mealRandomizer(sides)];
  return selectedDish;
};
function grabMainDish() {
  selectedDish = mains[mealRandomizer(mains)];
  return selectedDish;
};
function grabDessert() {
  selectedDish = desserts[mealRandomizer(desserts)];
  return selectedDish;
};


function displayMeal() {
  potImage.classList.add('hidden');

  if (sideRadio.checked) {
    return selectedDish;
  } else if (mainDishRadio.checked){
    return selectedDish;
  } else if (dessertRadio.checked){
    return selectedDish;
  } else {
    return "You're not hungry?";
  }

  yourFoodSelection.innerHTML = `
  <section class="food">
  <h3>You should make:</h3>
  <h4>${selectedDish}</h4>
  <button class="clear-button" type="button">CLEAR</button></section>
  `
};

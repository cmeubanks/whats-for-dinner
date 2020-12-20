/* Global Variables */
var sideRadio = document.querySelector('.side');
var mainDishRadio = document.querySelector('.main-dish');
var dessertRadio = document.querySelector('.dessert');
var entireMealRadio = document.querySelector('.entire-meal');
var letsCookButton = document.querySelector('.lets-cook');

var foodSelection = document.querySelector('.food-selection');
var yourMealChoice = document.querySelector('.your-meal-choice');
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
function switchView() {
potImage.classList.add('hidden');
foodSelection.classList.remove('hidden');

}

function displayMeal() {
//  potImage.classList.add('hidden');
switchView();

  if (sideRadio.checked) {
    return yourMealChoice.innerText = selectedDish;
  } else if (mainDishRadio.checked){
    return yourMealChoice.innerText = selectedDish;
  } else if (dessertRadio.checked){
    return yourMealChoice.innerText = selectedDish;
  } else {
    return yourMealChoice.innerText = "You're not hungry?";
  }
}

  //yourFoodSelection.innerHTML = `
  //<section class="food">
  //<h3>You should make:</h3>
  //<h4>${selectedDish}</h4>
  //<button class="clear-button" type="button">CLEAR</button></section>
//  `
//};

/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeRemaining) {
  if (timeRemaining === 0) return "Lasagna is done.";
  if (timeRemaining > 0) return "Not done, please wait.";
  return "You forgot to set the timer.";
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  return layers.reduce(
    (acc, layer) => {
      if (layer === "noodles") acc.noodles += 50;
      else if (layer === "sauce") acc.sauce += 0.2;
      return acc;
    },
    { noodles: 0, sauce: 0 }
  );
}

export function addSecretIngredient(friendsIngredients, myIngredients) {
  myIngredients.push(friendsIngredients[friendsIngredients.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let result = {};
  for (const ingredient in recipe) {
    result[ingredient] = recipe[ingredient] * (portions / 2);
  }
  return result;
}

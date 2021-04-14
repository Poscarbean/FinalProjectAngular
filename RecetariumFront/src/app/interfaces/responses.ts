import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

export interface ResponseIngredients {
  ingredients: Ingredient[];
}

export interface ResponseIngredient {
  ingredient: Ingredient;
}

export interface ResponseRecipes {
  recipes: Recipe[];
}

export interface ResponseRecipe {
  recipe: Recipe;
}

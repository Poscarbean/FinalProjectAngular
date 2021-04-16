import { Ingredient } from "./ingredient";

export interface Recipe {
  idRecipe?: number;
  recipeName: string;
  difficulty: number;
  timeRequired: string;
  description: string;
  instructions: string;
  image: string;
  ingredients: Ingredient[];
}

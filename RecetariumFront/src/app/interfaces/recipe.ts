import { Ingredient } from "./ingredient";

export interface Recipe {
  id_recipe?: number;
  recipeName: string;
  difficulty: number;
  timeRequired: string;
  description: string;
  instructions: string;
  image: string;
  ingredients: Ingredient[];
}

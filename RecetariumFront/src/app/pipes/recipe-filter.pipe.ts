import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

  transform(recipes: Recipe[], filtro: string): Recipe[] {
    return recipes.filter(
      r => r.recipeName.toLowerCase().includes(filtro.toLowerCase()) ||
          r.description.toLowerCase().includes(filtro.toLowerCase())
    );
  }

}

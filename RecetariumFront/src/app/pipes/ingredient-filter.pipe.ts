import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';

@Pipe({
  name: 'ingredientFilter'
})
export class IngredientFilterPipe implements PipeTransform {

  transform(ingredients: Ingredient[], filter: string): Ingredient[] {
    return ingredients.filter(i => i.ingredientName.toLowerCase().includes(filter.toLowerCase()));
  }

}

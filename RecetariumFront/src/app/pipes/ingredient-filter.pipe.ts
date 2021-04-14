import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientFilter'
})
export class IngredientFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

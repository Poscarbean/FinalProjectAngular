import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientResolver implements Resolve<Ingredient> {
  constructor(private ingredientService: IngredientService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient> {
    return this.ingredientService.getIngredient(+route.params.id);
  }
}

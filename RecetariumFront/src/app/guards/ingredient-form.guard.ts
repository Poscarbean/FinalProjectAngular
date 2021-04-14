import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';

@Injectable({
  providedIn: 'root'
})
export class IngredientFormGuard implements CanDeactivate<IngredientFormComponent> {
  canDeactivate(
    component: IngredientFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return (
      component.ingredientAdded ||
      component.formIngredient.pristine ||
      confirm('Si sales, los cambios no se guardarán ¿Quieres salir?')
    );
  }

}

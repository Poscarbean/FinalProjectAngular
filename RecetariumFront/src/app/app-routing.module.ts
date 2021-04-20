import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientFormGuard } from './guards/ingredient-form.guard';
import { HomeComponent } from './home/home.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientUpdateFormComponent } from './ingredient-update-form/ingredient-update-form.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';
import { RecipesFormComponent } from './recipes-form/recipes-form.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ingredients', component: IngredientListComponent },
  {
    path: 'ingredients/add',
    component: IngredientFormComponent,
    canDeactivate: [IngredientFormGuard]
  },
  { path: 'recipes/add', component: RecipesFormComponent },
  { path: 'recipes', component: RecipeShowComponent },
  { path: 'recipes/recipe/:id', component: RecipeDetailComponent },
  { path: 'ingredients/update/:id', component: IngredientUpdateFormComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

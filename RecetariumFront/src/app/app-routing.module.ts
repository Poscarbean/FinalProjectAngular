import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientFormGuard } from './guards/ingredient-form.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientUpdateFormComponent } from './ingredient-update-form/ingredient-update-form.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';
import { RecipesFormComponent } from './recipes-form/recipes-form.component';
import { RegisterComponent } from './register/register.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ingredients', component: IngredientListComponent, canActivate: [LoginGuard] },
  {
    path: 'ingredients/add',
    component: IngredientFormComponent,
    canDeactivate: [IngredientFormGuard]
  },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'recipes/add', component: RecipesFormComponent, canActivate: [LoginGuard] },
  { path: 'recipes', component: RecipeShowComponent, canActivate: [LoginGuard] },
  { path: 'recipes/recipe/:id', component: RecipeDetailComponent },
  { path: 'ingredients/update/:id', component: IngredientUpdateFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

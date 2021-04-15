import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-show',
  templateUrl: './recipe-show.component.html',
  styleUrls: ['./recipe-show.component.css']
})
export class RecipeShowComponent implements OnInit {
  title = 'Recetas'

  recipes: Recipe[] = [];
  search = '';

  constructor(
    private recipeService: RecipeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.recipeService.getAll().subscribe(
      recipes => this.recipes = recipes,
      error => console.error(error),
      () => console.log('Petición completada')
    );
  }

  orderDifficultyAsc(): void {
    this.recipes.sort((r1, r2) => r1.difficulty - r2.difficulty);
    this.recipes = [...this.recipes];
  }

  orderDifficultyDesc(): void {
    this.recipes.sort((r1, r2) => r2.difficulty - r1.difficulty);
    this.recipes = [...this.recipes];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes = [...this.recipes, recipe];
  }

  deleteRecipe(recipe: Recipe): void {
    this.recipes = this.recipes.filter(r => r !== recipe);
  }

  goAdd(): void {
    this.router.navigate(['recipes/addingredients']);
  }

}

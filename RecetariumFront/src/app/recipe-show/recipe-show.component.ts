import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-show',
  templateUrl: './recipe-show.component.html',
  styleUrls: ['./recipe-show.component.css']
})
export class RecipeShowComponent implements OnInit {
  title = 'Recetas'

  recipes!: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAll().subscribe(
      recipes => this.recipes = recipes,
      error => console.error(error),
      () => console.log('Petición completada')
    );
  }

  addRecipe(recipe: Recipe): void {
    this.recipes = [...this.recipes, recipe];
  }

  deleteRecipe(recipe: Recipe): void {
    this.recipes = this.recipes.filter(i => i !== recipe);
  }

}

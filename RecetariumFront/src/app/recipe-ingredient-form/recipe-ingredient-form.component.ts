import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'recipe-ingredient-form',
  templateUrl: './recipe-ingredient-form.component.html',
  styleUrls: ['./recipe-ingredient-form.component.css']
})
export class RecipeIngredientFormComponent implements OnInit {
  title = 'Lista de ingredientes';
  headers = {
    ingredientName: 'Nombre'
  };

  ingredients: Ingredient[] = [];
  recipeIngredients: Ingredient[] = [];
  search = '';

  constructor(
    private ingredientService: IngredientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ingredientService.getAll().subscribe(
      ingredients => this.ingredients = ingredients,
      error => console.error(error),
      () => console.log('Petición completada')
    );
  }

  addRecipeIngredient(ingredient: Ingredient): void {
    this.recipeIngredients = [...this.recipeIngredients, ingredient];
  }



}

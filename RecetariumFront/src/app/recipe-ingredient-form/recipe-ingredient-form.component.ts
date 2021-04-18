import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'recipe-ingredient-form',
  templateUrl: './recipe-ingredient-form.component.html',
  styleUrls: ['./recipe-ingredient-form.component.css']
})
export class RecipeIngredientFormComponent implements OnInit {
  tableTitle = 'Lista de ingredientes';
  headers = {
    ingredientName: 'Nombre'
  };

  avaliableIngredients: Ingredient[] = [];
  recipeIngredients: Ingredient[] = [];
  search = '';

  constructor(
    private title: Title,
    private ingredientService: IngredientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ingredientService.getAll().subscribe(
      ingredients => this.avaliableIngredients = ingredients,
      error => console.error(error),
      () => console.log('Petición completada')
    );
    this.title.setTitle('Recetario de la abuela | Nueva receta')
  }

  addRecipeIngredient(ingredient: Ingredient): void {
    this.recipeIngredients = [...this.recipeIngredients, ingredient];
  }

  deleteRecipeIngredient(recipeIngredient: Ingredient): void {
    this.recipeIngredients = this.recipeIngredients.filter(ri => ri !== recipeIngredient);
  }

}

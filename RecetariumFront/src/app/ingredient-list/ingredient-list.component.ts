import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  title = 'Lista de ingredientes';
  headers = {
    quantity: 'Cantidad',
    measure: 'Medida',
    name: 'Nombre'
  };

  ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe(
      ingredients => this.ingredients = ingredients,
      error => console.error(error),
      () => console.log('Petición completada')
    );
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients = [...this.ingredients, ingredient];
  }

  deleteIngredient(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter(i => i !== ingredient);
  }

}

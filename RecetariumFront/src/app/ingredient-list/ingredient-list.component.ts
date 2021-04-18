import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  tableTitle = 'Lista de ingredientes';
  headers = {
    ingredientName: 'Nombre'
  };

  ingredients: Ingredient[] = [];
  search = '';

  constructor(
    private title: Title,
    private ingredientService: IngredientService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.ingredientService.getAll().subscribe(
      ingredients => this.ingredients = ingredients,
      error => console.error(error),
      () => console.log('Petición completada')
    );
    this.title.setTitle('Recetario de la abuela | Ingredientes')
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients = [...this.ingredients, ingredient];
  }

  deleteIngredient(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter(i => i !== ingredient);
  }

}

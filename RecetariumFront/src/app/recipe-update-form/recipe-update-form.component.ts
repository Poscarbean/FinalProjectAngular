import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
import { Recipe } from '../interfaces/recipe';
import { IngredientService } from '../services/ingredient.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-update-form',
  templateUrl: './recipe-update-form.component.html',
  styleUrls: ['./recipe-update-form.component.css']
})
export class RecipeUpdateFormComponent implements OnInit {
  tableTitle = 'Lista de ingredientes';
  headers = {
    ingredientName: 'Nombre'
  };

  avaliableIngredients: Ingredient[] = [];
  recipeIngredients: Ingredient[] = [];
  search = '';

  newRecipe!: Recipe;
  recipeAdded = false;
  imageFile = '';
  @ViewChild('formRecipe') formRecipe!: NgForm;

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Recetarium Santiosquiano | Nueva receta')
    this.resetForm();
    this.ingredientService.getAll().subscribe(
      ingredients => this.avaliableIngredients = ingredients,
      error => console.log(error),
      () => console.log('Petición completada')
    );
  }

  resetForm(): void {
    this.newRecipe = {
      recipeName: '',
      difficulty: 0,
      timeRequired: '',
      description: '',
      instructions: '',
      image: '',
      ingredients: []
    };
  }

  loadImage(input: HTMLInputElement): void {
    if (!input.files) { return; }
    const file = input.files[0];
    const reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
      reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => { //Converted into Base64 event (async)
      this.newRecipe.image = reader.result as string;
    });
  }

  addRecipe(): void {
    this.newRecipe.recipeName = this.capitalizeFirstLetter(this.newRecipe.recipeName);
    this.newRecipe.description = this.capitalizeFirstLetter(this.newRecipe.description);
    this.newRecipe.instructions = this.capitalizeFirstLetter(this.newRecipe.instructions);

    this.newRecipe.ingredients = this.recipeIngredients;

    this.recipeService.addRecipe(this.newRecipe).subscribe(
      recipe => {
        this.recipeAdded = true;
        this.router.navigate(['/recipes']);
      },
      error => console.error(error)
    );
  }

  addRecipeIngredient(ingredient: Ingredient): void {
    this.recipeIngredients = [...this.recipeIngredients, ingredient];
  }

  deleteRecipeIngredient(recipeIngredient: Ingredient): void {
    this.recipeIngredients = this.recipeIngredients.filter(ri => ri !== recipeIngredient);
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}

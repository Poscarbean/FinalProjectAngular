import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  newIngredient!: Ingredient;
  ingredientAdded = false;
  @ViewChild('formIngredient') formIngredient!: NgForm;

  constructor(
    private ingredientService: IngredientService,
    private title: Title,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Recetarium Santiosquiano | Nuevo ingrediente')
    this.resetForm();
  }

  resetForm(): void {
    this.newIngredient = {
      ingredientName: ''
    };
  }

  addIngredient(): void {
    this.newIngredient.ingredientName = this.capitalizeFirstLetter(this.newIngredient.ingredientName);

    this.ingredientService.addIngredient(this.newIngredient).subscribe(
      ingredient => {
        this.ingredientAdded = true;
        this.router.navigate(['/ingredients']);
      },
      error => console.error(error)
    );
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}

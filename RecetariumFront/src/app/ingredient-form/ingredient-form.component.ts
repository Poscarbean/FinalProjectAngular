import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  @Output() insert = new EventEmitter<Ingredient>();

  newIngredient!: Ingredient;
  ingredientAdded = false;
  @ViewChild('formIngredient') formIngredient!: NgForm;

  constructor(
    private ingredientService: IngredientService,
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Recetarium Santiosquiano | Nuevo ingrediente')
    this.resetForm();
  }

  resetForm(): void {
    this.newIngredient = {
      name: '',
      quantity: 0,
      measure: ''
    };
  }

  addIngredient(): void {
    this.ingredientService.addIngredient(this.newIngredient).subscribe(
      ingredient => {
        this.ingredientAdded = true;
        this.insert.emit(ingredient);
        this.resetForm();
      },
      error => console.error(error)
    );
  }

}

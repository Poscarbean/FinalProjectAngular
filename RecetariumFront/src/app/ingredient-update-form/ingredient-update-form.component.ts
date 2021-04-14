import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'ingredient-update-form',
  templateUrl: './ingredient-update-form.component.html',
  styleUrls: ['./ingredient-update-form.component.css']
})
export class IngredientUpdateFormComponent implements OnInit {

  @Input() ingredient!: Ingredient;
  @Output() insert = new EventEmitter<Ingredient>();

  newIngredient!: Ingredient;
  ingredientAdded = false;
  @ViewChild('formIngredient') formIngredient!: NgForm;

  constructor(
    private ingredientService: IngredientService,
    private router: Router,
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Recetarium Santiosquiano | Editar ingrediente')
  }

  resetForm(): void {
    this.newIngredient = {
      name: '',
      quantity: 0,
      measure: ''
    };
  }

  updateIngredient(newIngredient: Ingredient) {
    const oldIngredient: Ingredient = this.ingredient;
    this.ingredient = newIngredient;
    this.ingredientService.updateIngredient(this.ingredient.idIngredient as number, newIngredient).subscribe({
      error: error => {
        this.ingredient = oldIngredient;
        console.error(error);
      }
    });
  }

  //this.router.navigate(['/ingredients'])

}

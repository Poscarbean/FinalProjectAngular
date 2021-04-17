import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'ingredient-update-form',
  templateUrl: './ingredient-update-form.component.html',
  styleUrls: ['./ingredient-update-form.component.css']
})
export class IngredientUpdateFormComponent implements OnInit {

  @Input() ingredient!: Ingredient;
  oldIngredient!: Ingredient;


  newIngredient!: Ingredient;
  ingredientAdded = false;
  @ViewChild('formIngredient') formIngredient!: NgForm;

  constructor(
    private ingredientService: IngredientService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.resetForm();
    const oldIngredient: Ingredient = this.ingredient;
    this.route.params.subscribe(
      (params) => {
        this.ingredientService.getIngredient(params.id).subscribe(
          ingredient => {
            this.ingredient = ingredient;
            this.title.setTitle('Recetario de la abuela | Editando' + ingredient.ingredientName)
          }
        );
      }
    );
  }

  resetForm(): void {
    this.newIngredient = {
      ingredientName: ''
    };
  }

  updateIngredient(oldIngredient: Ingredient, newIngredient: Ingredient) {
    console.log(this.ingredient);
    this.ingredient = newIngredient;
    this.ingredientService.updateIngredient(this.newIngredient.idIngredient as number, newIngredient).subscribe({
      error: error => {
        this.ingredient = oldIngredient;
        console.error(error);
        this.router.navigate(['/ingredients'])

      }
    });
  }

}

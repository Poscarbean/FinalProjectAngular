import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'recipe-ingredient-item',
  templateUrl: './recipe-ingredient-item.component.html',
  styleUrls: ['./recipe-ingredient-item.component.css']
})
export class RecipeIngredientItemComponent implements OnInit {

  @Input() ingredient!: Ingredient;
  @Output() add = new EventEmitter;

  constructor(
    private ingredientService: IngredientService) { }

  ngOnInit(): void {
  }

  addRecipeIngredient() {
    this.ingredientService.getIngredient(this.ingredient.idIngredient as number).subscribe(
      () => this.add.emit()
    );
  }



}

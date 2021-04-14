import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent implements OnInit {

  @Input() ingredient!: Ingredient;
  @Output() delete = new EventEmitter<void>();

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
  }

  deleteIngredient() {
    this.ingredientService.deleteIngredient(this.ingredient.idIngredient as number).subscribe(
      () => this.delete.emit()
    );
  }

  /* updateIngredient(ingredientOld: Ingredient,ingredientUpdated: Ingredient): void {
    this.ingredients = this.ingredients.filter(i => i !== ingredientOld);
    this.ingredients = [...this.ingredients, ingredientUpdated];
  } */
}

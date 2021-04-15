import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private ingredientService: IngredientService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  deleteIngredient() {
    this.ingredientService.deleteIngredient(this.ingredient.idIngredient as number).subscribe(
      () => this.delete.emit()
    );
  }

  goChange() {
    this.router.navigate(['/ingredients/update/', this.ingredient.idIngredient]);
  }

  /* updateIngredient(ingredientOld: Ingredient,ingredientUpdated: Ingredient): void {
    this.ingredients = this.ingredients.filter(i => i !== ingredientOld);
    this.ingredients = [...this.ingredients, ingredientUpdated];
  } */
}

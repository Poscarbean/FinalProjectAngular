import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  @Output() delete = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id_recipe as number).subscribe(
      () => this.delete.emit()
    );
  }

}

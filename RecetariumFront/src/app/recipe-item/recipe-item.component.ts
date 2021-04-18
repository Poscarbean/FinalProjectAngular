import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private recipeService: RecipeService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.idRecipe as number).subscribe(
      () => this.delete.emit()
    );
  }

  goChange() {
    this.router.navigate(['/recipes/update/', this.recipe.idRecipe]);
  }

}

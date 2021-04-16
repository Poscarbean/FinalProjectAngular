import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recipeService.getRecipe(this.recipe.idRecipe as number).subscribe(
      recipe => this.recipe = recipe,
      error => console.error(error),
      () => console.log('Petición completada')
    );
  }

  goBack() {
    this.router.navigate(['/recipes']);
  }

}

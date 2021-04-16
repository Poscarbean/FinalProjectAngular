import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../interfaces/ingredient';
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
    private title: Title,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  this.route.params.subscribe(
    (params) => {
      this.recipeService.getRecipe(params.id).subscribe(
        recipe => {
          this.recipe = recipe;
          this.title.setTitle('Recetas Santiosquianas | ' + recipe.recipeName);
        },
        error => this.router.navigate(['/recipes'])
      );
    }
  );
  }

  goBack() {
    this.router.navigate(['/recipes']);
  }


}


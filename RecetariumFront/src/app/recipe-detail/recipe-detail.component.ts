import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/recipes']);
  }

}

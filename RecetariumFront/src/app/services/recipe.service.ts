import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Recipe } from '../interfaces/recipe';
import { ResponseRecipe, ResponseRecipes } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly URL = 'recipes';

  constructor(private http:HttpClient) { }

  getAll(): Observable<Recipe[]> {
    return this.http.get<ResponseRecipes>(`${this.URL}/all`).pipe(
      map(response => response.recipes),
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error getting ingredients. Status: ${error.status}. Message: ${error.message}`);
      })
    );
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<ResponseRecipe>(`${this.URL}/ingredient/${id}`).pipe(
      map(response => response.recipe)
    );
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<ResponseRecipe>(`${this.URL}/add`, recipe).pipe(
      map(response => response.recipe)
    );
  }

  updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.put<ResponseRecipe>(`${this.URL}/update/${id}`, recipe).pipe(
      map(response => response.recipe)
    );
  }

  deleteRecipe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/delete/${id}`);
  }
}

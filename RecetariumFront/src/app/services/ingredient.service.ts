import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient';
import { ResponseIngredient, ResponseIngredients } from '../interfaces/responses';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private readonly URL = 'ingredients';

  constructor(private http:HttpClient) { }

  getAll(): Observable<Ingredient[]> {
    return this.http.get<ResponseIngredients>(`${this.URL}/all`).pipe(
      map(response => response.ingredients),
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error getting ingredients. Status: ${error.status}. Message: ${error.message}`);
      })
    );
  }

  getIngredient(id: number): Observable<Ingredient> {
    return this.http.get<ResponseIngredient>(`${this.URL}/ingredient/${id}`).pipe(
      map(response => response.ingredient)
    );
  }

  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<ResponseIngredient>(`${this.URL}/add`, ingredient).pipe(
      map(response => response.ingredient)
    );
  }

  updateIngredient(id: number, ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<ResponseIngredient>(`${this.URL}/update/${id}`, ingredient).pipe(
      map(response => response.ingredient)
    );
  }

  deleteIngredient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/delete/${id}`);
  }
}

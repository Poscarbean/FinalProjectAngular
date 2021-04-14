import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { HomeComponent } from './home/home.component';
import { IngredientItemComponent } from './ingredient-item/ingredient-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { IngredientFilterPipe } from './pipes/ingredient-filter.pipe';
import { IngredientUpdateFormComponent } from './ingredient-update-form/ingredient-update-form.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDifficultyComponent } from './recipe-difficulty/recipe-difficulty.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientListComponent,
    HomeComponent,
    IngredientItemComponent,
    IngredientFormComponent,
    IngredientFilterPipe,
    IngredientUpdateFormComponent,
    RecipeShowComponent,
    RecipeItemComponent,
    RecipeDifficultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { RecipeFilterPipe } from './pipes/recipe-filter.pipe';
import { RecipesFormComponent } from './recipes-form/recipes-form.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeUpdateFormComponent } from './recipe-update-form/recipe-update-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';

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
    RecipeFilterPipe,
    RecipesFormComponent,
    RecipeDetailComponent,
    RecipeUpdateFormComponent,
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

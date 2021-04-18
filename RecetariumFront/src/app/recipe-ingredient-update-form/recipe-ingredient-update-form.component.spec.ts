import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientUpdateFormComponent } from './recipe-ingredient-update-form.component';

describe('RecipeIngredientUpdateFormComponent', () => {
  let component: RecipeIngredientUpdateFormComponent;
  let fixture: ComponentFixture<RecipeIngredientUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeIngredientUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

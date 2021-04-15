import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientItemComponent } from './recipe-ingredient-item.component';

describe('RecipeIngredientItemComponent', () => {
  let component: RecipeIngredientItemComponent;
  let fixture: ComponentFixture<RecipeIngredientItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeIngredientItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientUpdateFormComponent } from './ingredient-update-form.component';

describe('IngredientUpdateFormComponent', () => {
  let component: IngredientUpdateFormComponent;
  let fixture: ComponentFixture<IngredientUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

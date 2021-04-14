import { TestBed } from '@angular/core/testing';

import { IngredientFormGuard } from './ingredient-form.guard';

describe('IngredientFormGuard', () => {
  let guard: IngredientFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngredientFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

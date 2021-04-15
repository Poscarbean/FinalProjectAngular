import { TestBed } from '@angular/core/testing';

import { IngredientResolver } from './ingredient.resolver';

describe('IngredientResolver', () => {
  let resolver: IngredientResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IngredientResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeShowComponent } from './recipe-show.component';

describe('RecipeShowComponent', () => {
  let component: RecipeShowComponent;
  let fixture: ComponentFixture<RecipeShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDifficultyComponent } from './recipe-difficulty.component';

describe('RecipeDifficultyComponent', () => {
  let component: RecipeDifficultyComponent;
  let fixture: ComponentFixture<RecipeDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDifficultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

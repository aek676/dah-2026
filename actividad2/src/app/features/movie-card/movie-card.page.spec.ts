import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardPage } from './movie-card.page';

describe('MovieCardPage', () => {
  let component: MovieCardPage;
  let fixture: ComponentFixture<MovieCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

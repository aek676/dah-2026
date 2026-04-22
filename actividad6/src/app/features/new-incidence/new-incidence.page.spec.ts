import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewIncidencePage } from './new-incidence.page';

describe('NewIncidencePage', () => {
  let component: NewIncidencePage;
  let fixture: ComponentFixture<NewIncidencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

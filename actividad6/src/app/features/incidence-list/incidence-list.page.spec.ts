import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidenceListPage } from './incidence-list.page';

describe('IncidenceListPage', () => {
  let component: IncidenceListPage;
  let fixture: ComponentFixture<IncidenceListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ReservationsPage } from './reservations.page';

describe('ReservationsPage', () => {
  let component: ReservationsPage;
  let fixture: ComponentFixture<ReservationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 reservations in the list', () => {
    expect(component.reservations.length).toBe(5);
  });

  it('should display reservation items in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('ion-item');
    expect(items.length).toBe(5);
  });

  it('should display correct reservation client names', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const labels = compiled.querySelectorAll('ion-label h2');
    const names = Array.from(labels).map(label => label.textContent?.trim());
    expect(names).toEqual(['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie Wilson']);
  });
});
import { ReservationsPage } from '../../src/app/features/reservations/reservations.page';
import { provideRouter } from '@angular/router';
import { NavController } from '@ionic/angular/standalone';

describe('ReservationsPage Cypress Component Tests', () => {
  beforeEach(() => {
    cy.mount(ReservationsPage, {
      providers: [
        provideRouter([]),
        { provide: NavController, useValue: {} },
      ],
    });
  });

  it('should display 5 reservation items', () => {
    cy.get('ion-item').should('have.length', 5);
  });

  it('should display correct reservation client names', () => {
    cy.get('ion-label h2').eq(0).should('contain.text', 'John Doe');
    cy.get('ion-label h2').eq(1).should('contain.text', 'Jane Smith');
    cy.get('ion-label h2').eq(2).should('contain.text', 'Bob Johnson');
    cy.get('ion-label h2').eq(3).should('contain.text', 'Alice Brown');
    cy.get('ion-label h2').eq(4).should('contain.text', 'Charlie Wilson');
  });
});
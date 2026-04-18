import { ClientsPage } from '../../src/app/features/clients/clients.page';
import { provideRouter } from '@angular/router';

describe('ClientsPage Cypress Component Tests', () => {
  beforeEach(() => {
    cy.mount(ClientsPage, {
      providers: [provideRouter([])],
    });
  });

  it('should display 5 client items', () => {
    cy.get('ion-item').should('have.length', 5);
  });

  it('should display correct client names', () => {
    cy.get('ion-label h2').eq(0).should('contain.text', 'John Doe');
    cy.get('ion-label h2').eq(1).should('contain.text', 'Jane Smith');
    cy.get('ion-label h2').eq(2).should('contain.text', 'Bob Johnson');
    cy.get('ion-label h2').eq(3).should('contain.text', 'Alice Brown');
    cy.get('ion-label h2').eq(4).should('contain.text', 'Charlie Wilson');
  });
});
import { ProductsPage } from '../../src/app/features/products/products.page';
import { provideRouter } from '@angular/router';

describe('ProductsPage Cypress Component Tests', () => {
  beforeEach(() => {
    cy.mount(ProductsPage, {
      providers: [provideRouter([])],
    });
  });

  it('should display 5 product items', () => {
    cy.get('ion-item').should('have.length', 5);
  });

  it('should display correct product names', () => {
    cy.get('ion-label h2').eq(0).should('contain.text', 'Shampoo');
    cy.get('ion-label h2').eq(1).should('contain.text', 'Conditioner');
    cy.get('ion-label h2').eq(2).should('contain.text', 'Hair Oil');
    cy.get('ion-label h2').eq(3).should('contain.text', 'Face Mask');
    cy.get('ion-label h2').eq(4).should('contain.text', 'Body Lotion');
  });

  it('should display a logout button with text "Cerrar Sesión"', () => {
    cy.get('ion-button.logout-btn').should('contain.text', 'Cerrar Sesión');
  });
});
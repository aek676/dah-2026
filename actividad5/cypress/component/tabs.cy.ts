import { TabsPage } from '../../src/app/features/tabs/tabs.page';
import { provideRouter } from '@angular/router';

describe('TabsPage Cypress Component Tests', () => {
  beforeEach(() => {
    cy.mount(TabsPage, {
      providers: [provideRouter([])],
    });
  });

  it('should display correct text for tab 1 (Clients)', () => {
    cy.get('ion-tab-button[tab="tab1"] ion-label').should('contain.text', 'Clients');
  });

  it('should display correct icon for tab 1 (Clients)', () => {
    cy.get('ion-tab-button[tab="tab1"] ion-icon').should('have.attr', 'name', 'people');
  });

  it('should display correct text for tab 2 (Reservations)', () => {
    cy.get('ion-tab-button[tab="tab2"] ion-label').should('contain.text', 'Reservations');
  });

  it('should display correct icon for tab 2 (Reservations)', () => {
    cy.get('ion-tab-button[tab="tab2"] ion-icon').should('have.attr', 'name', 'calendar');
  });

  it('should display correct text for tab 3 (Products)', () => {
    cy.get('ion-tab-button[tab="tab3"] ion-label').should('contain.text', 'Products');
  });

  it('should display correct icon for tab 3 (Products)', () => {
    cy.get('ion-tab-button[tab="tab3"] ion-icon').should('have.attr', 'name', 'cube');
  });
});
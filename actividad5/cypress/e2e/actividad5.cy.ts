describe('Actividad 5 E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/tabs/tab1');
  });

  it('should verify client detail access and client ID display', () => {
    cy.url().should('include', '/tabs/tab1');
    cy.get('ion-item').first().click();
    cy.url().should('include', '/tabs/client/');
    cy.get('.detail-container h2').should('contain.text', 'Cliente ID:');
  });

  it('should verify client back button works when accessed via tabs', () => {
    cy.get('ion-item').first().click();
    cy.url().should('include', '/tabs/client/');
    cy.wait(500);
    cy.get('ion-back-button').filter(':visible').first().click({ force: true });
    cy.url().should('include', '/tabs/tab1');
  });

  it('should verify client back button defaultHref when accessed directly', () => {
    cy.visit('/tabs/client/1');
    cy.get('.detail-container h2').should('contain.text', 'Cliente ID: 1');
    cy.get('ion-back-button').click();
    cy.url().should('include', '/tabs/tab1');
  });

  it('should verify new reservation page access and back button works via tabs', () => {
    cy.url().should('include', '/tabs/tab1');
    cy.get('ion-tab-button[tab="tab2"]').click();
    cy.url().should('include', '/tabs/tab2');
    cy.get('ion-button.create-btn').click();
    cy.url().should('include', '/tabs/reservations/create');
    cy.wait(500);
    cy.get('ion-back-button').filter(':visible').first().click({ force: true });
    cy.url().should('include', '/tabs/tab2');
  });

  it('should verify new reservation back button defaultHref when accessed directly', () => {
    cy.visit('/tabs/reservations/create');
    cy.get('ion-back-button').click();
    cy.url().should('include', '/tabs/tab2');
  });

  it('should verify Cerrar Sesión redirects to Login', () => {
    cy.get('ion-tab-button[tab="tab3"]').click();
    cy.url().should('include', '/tabs/tab3');
    cy.get('ion-button.logout-btn').click();
    cy.url().should('include', '/login');
  });
});
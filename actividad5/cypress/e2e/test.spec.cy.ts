describe('Home Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('the navigation to the new page sends the word', () => {
    cy.get('#item-input-text ion-input').invoke('val', '');
    cy.get('#item-input-text ion-input').type('test text');
    cy.get('#button-new-page').click();
    cy.get('#label-word').contains('test text');
  });
});

describe('Test weather application', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Search weather at London (no country code) will have multiple value', () => {
    cy.get('[data-cy="search-button"]').should('be.disabled');
    cy.get('[data-cy="standard"]').should('be.disabled');
    cy.get('[data-cy="location-field"]').click().clear().type('London');
    cy.get('[data-cy="search-button"]').should('be.enabled').click();
    cy.get('[data-cy="2643743"]').should('be.visible');
    cy.get('[data-cy="6058560"]').should('be.visible');
    cy.get('[data-cy="standard"]').should('be.enabled');
    cy.get('[data-cy="standard"]').click().then(() => {
      cy.get('[data-cy="Imperial"]').click();
    });
  });

  it('Search weather at London with country code GB will have only 1 value', () => {
    cy.get('[data-cy="search-button"]').should('be.disabled');
    cy.get('[data-cy="standard"]').should('be.disabled');
    cy.get('[data-cy="location-field"]').click().clear().type('London,GB');
    cy.get('[data-cy="search-button"]').should('be.enabled').click();
    cy.get('[data-cy="2643743"]').should('be.visible');
    cy.get('[data-cy="standard"]').should('be.enabled');
    cy.get('[data-cy="standard"]').click().then(() => {
      cy.get('[data-cy="Imperial"]').click();
    });
  });
})

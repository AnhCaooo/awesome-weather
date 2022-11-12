describe('Test weather application', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Search weather at London (no country code) will have multiple value', () => {
    cy.getAndCheckSearchButtonShouldBeDisabled();
    cy.getAndCheckSwitchUnitButtonShouldBeDisabled();
    cy.getAndTypeInLocationField('London');
    cy.checkEnabledAndClickSearchButton();
    // London-GB
    cy.getAndCheckWeatherCardId('2643743');
    // London-
    cy.getAndCheckWeatherCardId('6058560')
    cy.getAndCheckSwitchUnitButtonShouldBeEnabled();
    cy.getSwitchUnitButtonAndSwitchUnit('standard', 'imperial');
  });

  it('Search weather at London with country code GB will have only 1 value', () => {
    cy.getAndCheckSearchButtonShouldBeDisabled();
    cy.getAndCheckSwitchUnitButtonShouldBeDisabled();
    cy.getAndTypeInLocationField('London,GB');
    cy.checkEnabledAndClickSearchButton();
    // London-GB
    cy.getAndCheckWeatherCardId('2643743');
    cy.getAndCheckSwitchUnitButtonShouldBeEnabled();
    cy.getSwitchUnitButtonAndSwitchUnit('standard', 'imperial');
  });
})

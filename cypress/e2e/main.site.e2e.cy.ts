describe('Test weather application', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Search weather at London (no country code) will have multiple value', () => {
    cy.getAndCheckSearchButtonShouldBeDisabled();
    cy.getAndCheckSearchButtonShouldBeDisabled();
    cy.getTextNoWeathersAvailable();
    cy.getAndCheckSwitchUnitButtonShouldBeDisabled();
    cy.getAndTypeInLocationField('London');
    cy.checkEnabledAndClickSearchButton();
    // London-GB
    cy.getAndCheckWeatherCardId('2643743');
    // London-CA
    cy.getAndCheckWeatherCardId('6058560')
    cy.getAndCheckSwitchUnitButtonShouldBeEnabled();
    cy.getSwitchUnitButtonAndSwitchUnit('standard', 'imperial');
    cy.getAndCheckInfoTextShouldNotExist();
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
    cy.getAndCheckInfoTextShouldNotExist();
  });

  it('Search weather at unvailable location', () => {
    cy.getAndCheckSearchButtonShouldBeDisabled();
    cy.getAndCheckSwitchUnitButtonShouldBeDisabled();
    cy.getAndTypeInLocationField('cypressTesting');
    cy.checkEnabledAndClickSearchButton();
    cy.getTextNoWeathersAvailable();
  });

  it('switch unit button will be disabled when user does not click search button, and enabled when user clicks search button', () => {
    cy.getAndCheckSwitchUnitButtonShouldBeDisabled();
    cy.getAndCheckSearchButtonShouldBeDisabled();
    cy.getTextNoWeathersAvailable();
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London,GB');
    cy.checkEnabledAndClickSearchButton();
    cy.getAndCheckSwitchUnitButtonShouldBeEnabled();
  });

  it('search for weather in London,GB then change the unit', () => {
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London,GB');
    cy.checkEnabledAndClickSearchButton();
    cy.getSwitchUnitButtonAndSwitchUnit('standard', 'metric');
    cy.getAndCheckInfoTextShouldNotExist();
  });

  it('should get warning and cannot search when type less than 3 characters', () => {
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('Lo');
    cy.getAndClickHelpIcon();
    cy.getTheErrorTextWhenViolateTheInpuRegex();
    cy.getTextNoWeathersAvailable();
  });

  it('should get warning and cannot search when type blank space: London, GB', () => {
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London, GB');
    cy.getAndClickHelpIcon();
    cy.getTheErrorTextWhenViolateTheInpuRegex();
    cy.getTextNoWeathersAvailable();
  });

  it('should get warning and cannot search when type special characters', () => {
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London,GB?');
    cy.getAndClickHelpIcon();
    cy.getTheErrorTextWhenViolateTheInpuRegex();
    cy.getTextNoWeathersAvailable();
  });
})

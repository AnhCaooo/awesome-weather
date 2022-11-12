// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


declare namespace Cypress {
    interface Chainable<Subject = any> {
        getAndCheckSearchButtonShouldBeDisabled(): void;
        getAndCheckSwitchUnitButtonShouldBeDisabled(): void;
        getAndTypeInLocationField(location: string): void;
        checkEnabledAndClickSearchButton(): void;
        getAndCheckWeatherCardId(idCard: string): void;
        getAndCheckSwitchUnitButtonShouldBeEnabled(): void;
        getSwitchUnitButtonAndSwitchUnit(buttonName: string, selectionName: string): void;
        getAndCheckTheInputPlaceholder(placeholder: string): void;
    }
}

Cypress.Commands.add("getAndCheckSearchButtonShouldBeDisabled", () => {
    cy.get('[data-cy="search-button"]').should('be.disabled');
});

Cypress.Commands.add("getAndCheckSwitchUnitButtonShouldBeDisabled", () => {
    cy.get('[data-cy="standard"]').should('be.disabled');
});

Cypress.Commands.add("getAndTypeInLocationField", (location) => {
    cy.get('[data-cy="location-field"]').click().clear().type(location);
});

Cypress.Commands.add("checkEnabledAndClickSearchButton", () => {
    cy.get('[data-cy="search-button"]').should('be.enabled').click();

});

Cypress.Commands.add("getAndCheckWeatherCardId", (idCard) => {
    cy.get(`[data-cy="${idCard}"]`).should('be.visible');
});

Cypress.Commands.add("getAndCheckSwitchUnitButtonShouldBeEnabled", () => {
    cy.get('[data-cy="standard"]').should('be.enabled');
});

Cypress.Commands.add("getSwitchUnitButtonAndSwitchUnit", (buttonName, selectionName) => {
    cy.get(`[data-cy="${buttonName}"]`).click().then(() => {
        cy.get(`[data-cy="${selectionName}"]`).click();
    });
});

Cypress.Commands.add("getAndCheckTheInputPlaceholder", (placeholderText) => {
    cy.get('[data-cy="location-field"]').should('have.attr', 'placeholder', placeholderText);
});


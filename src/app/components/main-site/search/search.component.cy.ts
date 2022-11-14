import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { SearchComponent } from './search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { openWeatherApiKey } from '../../../../assets/config'

describe('SearchComponent', () => {

  beforeEach(() => {
    cy.mount(SearchComponent, {
      imports: [
        HttpClientModule, 
        MatMenuModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatIconModule],
    });
  });

  it('search for weather with the city name only: London will receive a response with 5 data of weathers', () => {
    cy.intercept(`http://api.openweathermap.org/data/2.5/find?q=London&appid=${openWeatherApiKey}`).as('getWeathers');
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London');
    cy.checkEnabledAndClickSearchButton();
    cy.wait('@getWeathers').then((interception?) => {
      assert.equal(interception?.response?.body.count, 5);
    });
  });

  it('search for weather with the city name and country code: London,GB will receive a response with 1 data only', () => {
    cy.intercept(`http://api.openweathermap.org/data/2.5/find?q=London,GB&appid=${openWeatherApiKey}`).as('getWeathers');
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London,GB');
    cy.checkEnabledAndClickSearchButton();
    cy.wait('@getWeathers').then((interception?) => {
      assert.equal(interception?.response?.body.count, 1);
    });
  });

  it('switch unit button will be disabled when user does not click search button, and enabled when user clicks search button', () => {
    cy.getAndCheckSwitchUnitButtonShouldBeDisabled();
    cy.getAndCheckSearchButtonShouldBeDisabled();
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
  });

  it('should get warning and cannot search when type less than 3 characters', () => {
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('Lo');
    cy.getTheErrorTextWhenViolateTheInpuRegex();
  });

  it('should get warning and cannot search when type blank space: London, GB', () => {
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London, GB');
    cy.getTheErrorTextWhenViolateTheInpuRegex()
  });

  it('should get warning and cannot search when type special characters', () => {
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London,GB?');
    cy.getTheErrorTextWhenViolateTheInpuRegex();
  });
});

# Awesome Weather

Angular web application that can be used for searching information about current weather conditions for a specific city.

## Description

The app can do:

- allow user to enter a city name, country code
  - user is only able to enter text characters and comma. No special characters, digits are allowed and the minimum length is 3.
  - in case a user enters a city name which is not unique and exist in multiple countries (ex: London), they will receive the info for clarify their selection. There is an instruction next to input field to guide how to enter a city name with country code
  - in case a user enters a city name that is not existed, the application will print 'No weathers available'.
- posibility to switch between standard unit (Kelvin, m/s), metric unit (Celcius, m/s) and imperial unit (Fahrenheit, mph)
- selected location and units will be stored in user's browser and prepopulated in the next time they visit (weather data in the specific unit will be similar with preivous access).
- unit test (component test) and e2e test are available. Both testing methods are using Cypress

## Preparations

Create and insert your API key to /src/assets/config.ts.

`export const openWeatherApiKey = '<YOUR_OPENWEATHER_API_KEY>';`

Install npm package before use this application.

`npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests and end-to-end tests with Cypress

Run `ng e2e` to execute the unit tests and end-to-end tests via [Cypress](https://www.cypress.io/). To use this command, you need to first add a package that implements end-to-end testing capabilities.

If you run `npx cypress open`, you need to execute command `ng serve` at the same time in order to execute the test.

### Unit tests

- Option 1: Use Cypress GUI

Open Cypress GUI by `ng e2e` or combine `npx cypress open` and `ng serve`, then select **Component Testing**

- Option 2: Use command line

`npx cypress --component`

### End-to-end tests

Open Cypress GUI by `ng e2e` or combine `npx cypress open` and `ng serve`, then select **E2E Testing**

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

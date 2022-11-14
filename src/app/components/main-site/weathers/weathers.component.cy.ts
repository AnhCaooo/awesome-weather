import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { WeathersComponent } from "./weathers.component";

describe('WeathersComponent', () => {
    beforeEach(() => {
        cy.mount(WeathersComponent, {
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

    it('mount weathersComponent and get initial text when there is no data', () => {
        cy.getTextNoWeathersAvailable();
    });

});

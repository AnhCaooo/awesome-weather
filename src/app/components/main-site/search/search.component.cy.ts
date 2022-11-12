import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { SearchComponent } from './search.component';


import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchComponent', () => {

  beforeEach(() => {
    cy.mount(SearchComponent, {
      imports: [HttpClientModule, 
                MatMenuModule,
                FormsModule,
                ReactiveFormsModule,
                MatCardModule],
    });
  });

  it('should mount searchComponet', () => {
    cy.getAndCheckTheInputPlaceholder('Helsinki');
    cy.getAndTypeInLocationField('London');
    cy.checkEnabledAndClickSearchButton();
  });
});

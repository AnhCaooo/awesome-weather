import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

// Components
import { AppComponent } from './app.component';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { SearchComponent } from './components/main-site/search/search.component';
import { AboutSiteComponent } from './components/about-site/about-site.component';
import { WeathersComponent } from './components/main-site/weathers/weathers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainSiteComponent,
    AboutSiteComponent,
    SearchComponent,
    WeathersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

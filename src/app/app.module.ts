import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './page/impressum/impressum.component';
import { DonateComponent } from './page/donate/donate.component';
import { PrivacyComponent } from './page/privacy/privacy.component';
import { DefaultHeaderComponent } from './header/default-header/default-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { HomeComponent } from './page/home/home.component';
import { EventsComponent } from './page/events/events.component';
import { VereinComponent } from './page/verein/verein.component';
import { DefaultComponent } from './footer/default/default.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    DonateComponent,
    PrivacyComponent,
    DefaultHeaderComponent,
    NotfoundComponent,
    HomeComponent,
    EventsComponent,
    VereinComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

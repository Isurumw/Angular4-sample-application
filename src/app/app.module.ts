import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";

import { AppComponent } from './app.component';
import { AppRoutes, AppRoutingProviders } from './app.routing';
import { RegistrationModule } from './modules/registration';
import { DashboardModule } from './modules/dashboard';
import { MaintenanceComponent, NotfoundComponent } from './shared';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    DashboardModule,
    AppRoutes,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
    })
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistrationRoutingProviders, RegistrationRoutes } from './registration.routing';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutes,
    SharedModule
  ],
  providers: [RegistrationRoutingProviders],
  declarations: [SigninComponent, SignupComponent]
})
export class RegistrationModule { }

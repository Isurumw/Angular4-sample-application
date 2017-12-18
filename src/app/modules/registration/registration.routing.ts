import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistrationConfig } from './registration.config';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + RegistrationConfig.SIGNIN,
    pathMatch: 'full'
  },
  { 
    path: RegistrationConfig.SIGNIN,
    component: SigninComponent ,
    data: { title: RegistrationConfig.SIGNIN_TITLE }
  },
  { path: RegistrationConfig.SIGNUP,
    component: SignupComponent,
    data: { title: RegistrationConfig.SIGNUP_TITLE }
  }
];

export const RegistrationRoutingProviders: any[] = [ ];
export const RegistrationRoutes = RouterModule.forChild(routes);

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardConfig } from './dashboard.config';

const routes: Routes = [
  { 
    path: DashboardConfig.HOME,
    component: HomeComponent,
    data: { title: DashboardConfig.HOME_TITLE } 
  }
];

export const DashboardRoutingProviders: any[] = [ ];
export const DashboardRoutes = RouterModule.forChild(routes);

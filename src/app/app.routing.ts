import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent, NotfoundComponent } from './shared';
import { AppConfig } from './app.config'

const routes: Routes = [
  {
      path: AppConfig.MAINTENANCE,
      component: MaintenanceComponent,
      data: { title: AppConfig.MAINTENANCE_TITLE }
  },
  {
      path: '**',
      component: NotfoundComponent,
      data: { title: AppConfig.NOTFOUND_TITLE }
  }
];

export const AppRoutingProviders: any[] = [ ];
export const AppRoutes = RouterModule.forRoot(routes);

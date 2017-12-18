import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DashboardRoutingProviders, DashboardRoutes } from './dashboard.routing';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DashboardRoutes,
    SharedModule
  ],
  providers: [DashboardRoutingProviders],
  declarations: [HomeComponent]
})
export class DashboardModule { }

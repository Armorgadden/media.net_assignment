import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveStockListComponent } from './components/live-stock-list/live-stock-list.component';

export const appRoutes: Routes  = [
  { path: 'live-stock', component: LiveStockListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/live-stock'}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

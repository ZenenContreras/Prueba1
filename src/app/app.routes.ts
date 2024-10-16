import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { RequestListComponent } from './pages/request-list/request-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'property/:id', component: PropertyDetailComponent },
  { path: 'requests', component: RequestListComponent },
];
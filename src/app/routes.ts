import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const RouteConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'

  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'home details'
  }
];

export default RouteConfig;

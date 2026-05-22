import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Notfound } from './pages/notfound/notfound';
import { Frontdesk } from './pages/frontdesk/frontdesk';

export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path:'frontdesk' , component:Frontdesk},
   { path:'login' , component:Login},
   { path:'**' , component:Notfound}
];

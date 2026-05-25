import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Notfound } from './pages/notfound/notfound';
import { Frontdesk } from './pages/frontdesk/frontdesk';
import { Nurses } from './pages/nurses/nurses';
import { Doctors } from './pages/doctors/doctors';

export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path:'frontdesk' , component:Frontdesk},
   { path:'nurse' , component:Nurses},
   { path:'doctor' , component:Doctors},
   { path:'login' , component:Login},
   { path:'**' , component:Notfound}
];

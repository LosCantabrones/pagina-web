
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { CarnavalesComponent } from './pages/carnavales/carnavales.component';
import { CharangaComponent } from './pages/charanga/charanga.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'carnavales', component: CarnavalesComponent },
  { path: 'charanga', component: CharangaComponent },
  { path: '**', component: NotFoundComponent }
];

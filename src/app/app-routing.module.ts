import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./modules/Landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/Login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/Register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'MapaDeHuellas',
    loadChildren: () =>
      import('./modules/MapaHuellas/mapa-huellas.module').then(
        (m) => m.MapaHuellasModule
      ),
  },
  {
    path: '**',
    redirectTo: '/landing',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

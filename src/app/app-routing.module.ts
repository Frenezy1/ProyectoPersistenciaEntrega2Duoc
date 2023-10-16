import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'bootuppage', //home
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'api-test',
    loadChildren: () => import('./api-test/api-test.module').then(m => m.ApiTestPageModule)
  },
  {
    path: 'bootuppage',
    loadChildren: () => import('./bootuppage/bootuppage.module').then( m => m.BootuppagePageModule)
  },
 
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'pagina-viaje',
    loadChildren: () => import('./pagina-viaje/pagina-viaje.module').then( m => m.PaginaViajePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPagePageModule)
  },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

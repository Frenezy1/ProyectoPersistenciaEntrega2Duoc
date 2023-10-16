import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaViajePage } from './pagina-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaViajePageRoutingModule {}

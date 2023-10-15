import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootuppagePage } from './bootuppage.page';

const routes: Routes = [
  {
    path: '',
    component: BootuppagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BootuppagePageRoutingModule {}

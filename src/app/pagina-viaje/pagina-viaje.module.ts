import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaViajePageRoutingModule } from './pagina-viaje-routing.module';

import { PaginaViajePage } from './pagina-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaViajePageRoutingModule
  ],
  declarations: [PaginaViajePage]
})
export class PaginaViajePageModule {}

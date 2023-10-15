import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BootuppagePageRoutingModule } from './bootuppage-routing.module';

import { BootuppagePage } from './bootuppage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BootuppagePageRoutingModule
  ],
  declarations: [BootuppagePage]
})
export class BootuppagePageModule {}

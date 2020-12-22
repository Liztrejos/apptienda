import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarclientePageRoutingModule } from './actualizarcliente-routing.module';

import { ActualizarclientePage } from './actualizarcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarclientePageRoutingModule
  ],
  declarations: [ActualizarclientePage]
})
export class ActualizarclientePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarproductoPageRoutingModule } from './actualizarproducto-routing.module';

import { ActualizarproductoPage } from './actualizarproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarproductoPageRoutingModule
  ],
  declarations: [ActualizarproductoPage]
})
export class ActualizarproductoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarclientePageRoutingModule } from './eliminarcliente-routing.module';

import { EliminarclientePage } from './eliminarcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarclientePageRoutingModule
  ],
  declarations: [EliminarclientePage]
})
export class EliminarclientePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarvendedoresPageRoutingModule } from './listarvendedores-routing.module';

import { ListarvendedoresPage } from './listarvendedores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarvendedoresPageRoutingModule
  ],
  declarations: [ListarvendedoresPage]
})
export class ListarvendedoresPageModule {}

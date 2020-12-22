import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarproveedoresPageRoutingModule } from './listarproveedores-routing.module';

import { ListarproveedoresPage } from './listarproveedores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarproveedoresPageRoutingModule
  ],
  declarations: [ListarproveedoresPage]
})
export class ListarproveedoresPageModule {}

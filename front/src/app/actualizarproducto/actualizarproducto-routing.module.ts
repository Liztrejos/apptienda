import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarproductoPage } from './actualizarproducto.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarproductoPageRoutingModule {}

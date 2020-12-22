import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarclientePage } from './actualizarcliente.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarclientePageRoutingModule {}

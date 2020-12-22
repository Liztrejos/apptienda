import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarclientePage } from './eliminarcliente.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarclientePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarproveedoresPage } from './listarproveedores.page';

const routes: Routes = [
  {
    path: '',
    component: ListarproveedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarproveedoresPageRoutingModule {}

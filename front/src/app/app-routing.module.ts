import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'crearcliente',
    loadChildren: () => import('./crearcliente/crearcliente.module').then( m => m.CrearclientePageModule)
  },
  {
    path: 'crearproducto',
    loadChildren: () => import('./crearproducto/crearproducto.module').then( m => m.CrearproductoPageModule)
  },
  {
    path: 'listarproducto',
    loadChildren: () => import('./listarproducto/listarproducto.module').then( m => m.ListarproductoPageModule)
  },  {
    path: 'eliminarcliente',
    loadChildren: () => import('./eliminarcliente/eliminarcliente.module').then( m => m.EliminarclientePageModule)
  },
  {
    path: 'eliminarproducto',
    loadChildren: () => import('./eliminarproducto/eliminarproducto.module').then( m => m.EliminarproductoPageModule)
  },
  {
    path: 'actualizarcliente',
    loadChildren: () => import('./actualizarcliente/actualizarcliente.module').then( m => m.ActualizarclientePageModule)
  },
  {
    path: 'actualizarproducto',
    loadChildren: () => import('./actualizarproducto/actualizarproducto.module').then( m => m.ActualizarproductoPageModule)
  },
  {
    path: 'listarvendedores',
    loadChildren: () => import('./listarvendedores/listarvendedores.module').then( m => m.ListarvendedoresPageModule)
  },
  {
    path: 'listarproveedores',
    loadChildren: () => import('./listarproveedores/listarproveedores.module').then( m => m.ListarproveedoresPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

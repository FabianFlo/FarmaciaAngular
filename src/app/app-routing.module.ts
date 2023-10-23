import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cliente-crear',
    loadChildren: () => import('./cliente/cliente-crear/cliente-crear.module').then( m => m.ClienteCrearPageModule)
  },
  {
    path: 'cliente-login',
    loadChildren: () => import('./cliente/cliente-login/cliente-login.module').then( m => m.ClienteLoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule), ...canActivate(()=> redirectUnauthorizedTo(['cliente-crear']))
  },
  {
    path: 'cliente-modificar',
    loadChildren: () => import('./cliente/cliente-modificar/cliente-modificar.module').then( m => m.ClienteModificarPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

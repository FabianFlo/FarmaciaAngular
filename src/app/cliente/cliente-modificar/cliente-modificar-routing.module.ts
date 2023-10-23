import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteModificarPage } from './cliente-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteModificarPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteDeletePage } from './cliente-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteDeletePageRoutingModule {}

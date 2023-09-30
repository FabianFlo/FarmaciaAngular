import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteLoginPage } from './cliente-login.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteLoginPageRoutingModule {}

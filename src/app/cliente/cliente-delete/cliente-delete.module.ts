import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDeletePageRoutingModule } from './cliente-delete-routing.module';

import { ClienteDeletePage } from './cliente-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDeletePageRoutingModule
  ],
  declarations: [ClienteDeletePage]
})
export class ClienteDeletePageModule {}

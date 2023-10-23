import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteModificarPageRoutingModule } from './cliente-modificar-routing.module';

import { ClienteModificarPage } from './cliente-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteModificarPageRoutingModule
  ],
  declarations: [ClienteModificarPage]
})
export class ClienteModificarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ClienteCrearPageRoutingModule } from './cliente-crear-routing.module';
import { ClienteCrearPage } from './cliente-crear.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteCrearPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClienteCrearPage]
})
export class ClienteCrearPageModule {}

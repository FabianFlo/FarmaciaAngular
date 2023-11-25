import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';
import { PokemonPage } from './pokemon.page';

import { MiServicioPokemonService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonPage],
  providers: [MiServicioPokemonService]
})
export class PokemonPageModule {}

import { Component, OnInit } from '@angular/core';
import { MiServicioPokemonService } from '../services/user.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  
})
export class PokemonPage implements OnInit {
  pokemon: any = null; // Propiedad para almacenar los datos del pokemon

  constructor(private miServicioPokemon: MiServicioPokemonService) { }

  ngOnInit() {
    this.obtenerPokemon('pikachu');
  }

  obtenerPokemon(nombre: string) {
    this.miServicioPokemon.obtenerPokemon(nombre).subscribe(pokemon => {
      this.pokemon = pokemon; // Almacenar los datos en la propiedad
      console.log(pokemon);
    });
  }
}

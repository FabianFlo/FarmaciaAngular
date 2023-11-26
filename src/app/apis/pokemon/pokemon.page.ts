import { Component, OnInit, ViewChild  } from '@angular/core';
import { MiServicioPokemonService } from '../../services/user.service';
import { NavController, IonContent  } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
})
export class PokemonPage implements OnInit {
  pokemon: any = null; // Propiedad para almacenar los datos del pokemon
  pokemonForm: FormGroup; // Nuevo formulario
  listaPokemon: any[] = []; // Propiedad para almacenar la lista de Pokémon
  nombrePokemon: string = ''; // Nueva propiedad para almacenar el nombre del Pokémon a buscar

  @ViewChild(IonContent) content!: IonContent;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(
    private miServicioPokemon: MiServicioPokemonService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    // Inicializa el formulario en el constructor
    this.pokemonForm = this.formBuilder.group({
      nombrePokemon: [''] // Puedes establecer valores predeterminados si lo deseas
    });
  }

  ngOnInit() {
    this.obtenerListaPokemon();
  }

  obtenerListaPokemon() {
    this.miServicioPokemon.obtenerListaPokemon().subscribe(lista => {
      this.listaPokemon = lista.results;

      // Para cada Pokémon, obtener las estadísticas
      this.listaPokemon.forEach(pokemon => {
        this.miServicioPokemon.obtenerEstadisticasPokemon(pokemon.url).subscribe(estadisticas => {
          pokemon.stats = estadisticas.stats;
        });
      });
    });
  }

  buscarPokemon() {
    const nombrePokemon = this.pokemonForm.value.nombrePokemon.toLowerCase();
  
    if (nombrePokemon.trim() !== '') {
      this.miServicioPokemon.obtenerPokemon(nombrePokemon).subscribe(pokemon => {
        console.log('URL de la imagen del Pokémon:', pokemon.sprites.front_default);
        this.pokemon = pokemon;
      });
    }
  }

  limpiarBusqueda() {
    this.nombrePokemon = '';
    this.pokemon = null;
  }

  getPokemonImage(url: string) {
  // Verificar si la URL es válida
  if (!url) {
    console.error('La URL del Pokémon está vacía.');
    return '';
  }

  // Obtener el nombre del Pokémon de la URL
  const parts = url.split('/');
  const nameIndex = parts.indexOf('pokemon') + 1;

  // Verificar si se obtuvo un nombre válido
  if (nameIndex > 0 && nameIndex < parts.length) {
    const name = parts[nameIndex];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${name}.png`;
  } else {
    console.error('No se pudo obtener el nombre del Pokémon desde la URL:', url);
    return '';
  }
}

  
  
}

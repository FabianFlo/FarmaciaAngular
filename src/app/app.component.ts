import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Productos', url: '/productos', icon: 'cart' },
    { title: 'Pokedex', url: '/pokemon', icon: 'tablet-portrait' },
    { title: 'Perfil', url: '/folder/favorites', icon: 'person' },
  ];
  constructor() {}
}



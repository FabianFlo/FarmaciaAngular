import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {
  productos: any[];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.firestore
      .collection('productos')
      .valueChanges()
      .subscribe((data) => {
        this.productos = data;
      });
  }

}

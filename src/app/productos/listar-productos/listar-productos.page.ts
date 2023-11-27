import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { doc, deleteDoc } from 'firebase/firestore';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {
  productos: any[];
  usuarioActual: any;

  constructor(private firestore: AngularFirestore,
      private auth: AngularFireAuth) { }

  ngOnInit() {
    this.obtenerProductos();
    this.obtenerUsuarioActual();
  }

  obtenerUsuarioActual() {
    this.auth.authState.subscribe((user) => {
      this.usuarioActual = user;
    });
  }

  obtenerProductos() {
    this.firestore
      .collection('productos')
      .valueChanges()
      .subscribe((data) => {
        this.productos = data;
      });
  }

  puedeEliminarProducto(producto: any): boolean {
    return this.usuarioActual && this.usuarioActual.email === 'si@si.si';
  }
  
  async eliminarProducto(id: string) {
    console.log('Intentando eliminar producto con ID:', id);
    // Asegúrate de verificar los permisos antes de eliminar
    if (this.usuarioActual && this.usuarioActual.email === 'si@si.si') {
      try {
        await this.firestore.collection('/productos').doc(id).delete();
        console.log('Producto eliminado exitosamente.');
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    } else {
      console.log('No tienes permisos para eliminar productos.');
    }
  }

}
 

  




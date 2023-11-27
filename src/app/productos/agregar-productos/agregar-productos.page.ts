import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {
  productoForm: FormGroup;

  constructor(private modalController: ModalController,
    private fb: FormBuilder, 
    private firestore: AngularFirestore) {
      this.productoForm = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        precio: ['', Validators.required],
        cantidad: ['', Validators.required],
      });
     }
     agregarProducto() {
      if (this.productoForm.valid) {
        this.firestore.collection('productos').add(this.productoForm.value);
        // Puedes agregar lógica adicional, como limpiar el formulario después de agregar
        this.productoForm.reset();
      }
    }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss();
  }

}

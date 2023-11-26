import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss();
  }

}

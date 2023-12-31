import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private modalCtrl: ModalController,) {}

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) return data;
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }

  // addProduct(product: Product): Promise<any> {
  //   return this.firestore.collection('productos').add(product);
  // }
  
}

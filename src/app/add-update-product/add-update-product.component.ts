import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss'],
})
export class AddUpdateProductComponent  implements OnInit {

  constructor(private prodServi: ProductoService) {}

  ngOnInit() {

  }

  dismissmModal(){
    this.prodServi.dismissModal()
  }



}

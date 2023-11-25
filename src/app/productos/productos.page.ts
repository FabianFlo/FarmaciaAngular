import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private prodServi: ProductoService) { }

  ngOnInit() {
  }
  dismissmModal(){
    this.prodServi.dismissModal()
  }

  
}

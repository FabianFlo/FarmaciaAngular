import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { ProductoService } from '../services/producto.service';
import { AgregarProductosPage } from '../productos/agregar-productos/agregar-productos.page';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
})
export class InicioPage implements OnInit {
  email: string | null = null;

  constructor(private userService: UserService, private router: Router,private prodServi: ProductoService) { }

  ngOnInit() {
    this.getUserEmail();
  }

  logout() {
    this.userService.logOut()
      .then(() => {
        this.router.navigate(['cliente-crear']);
      })
      .catch((error) => {
        console.log('Error al cerrar sesión:', error);
      });
  }

  async getUserEmail() {
    const user: User | null = await this.userService.getUserProfile();
    this.email = user?.email || null;
    console.log('Correo del usuario:', this.email);
  }
  
  addUpdateProduct(){
    this.prodServi.presentModal({
      component: AgregarProductosPage
    })
  }
}


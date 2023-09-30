import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
})
export class InicioPage implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onClick(){
    this.userService.logOut()
    .then(
      response => {
        this.router.navigate(['cliente-crear']);
      }
    )
    .catch(error => console.log(error));

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.page.html',

})
export class ClienteCrearPage implements OnInit {

  formReg: FormGroup;

  constructor(private userService: UserService,
              private router: Router,
              public alertController: AlertController
    ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    this.userService.register(this.formReg.value)
      .then(async response => {
        console.log(response);
        const alert = await this.alertController.create({
          header: 'Bienvenido',
          message: 'Disfruta de la App',
          buttons: ['OK']
        })
        await alert.present();
        this.router.navigate(['/cliente-login']);
      })
      .catch(async error => {
        console.error(error);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se ha podido crear la cuenta',
          buttons: ['OK']
        });

        await alert.present();
      });
  }

  ngOnInit() {
  }


}

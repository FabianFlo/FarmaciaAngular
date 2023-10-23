import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.page.html',
})
export class ClienteLoginPage implements OnInit {

  formlogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    public alertController: AlertController,
  ) {
    this.formlogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.userService
      .login(this.formlogin.value)
      .then(async (response) => {
        console.log(response);
        const alert = await this.alertController.create({
          header: 'Bienvenido',
          message: 'Que tenga un buen día',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['inicio']);
      })
      .catch(async (error) => {
        console.error(error);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se ha podido iniciar sesión',
          buttons: ['OK'],
        });
        await alert.present();
      });
  }

  onClick() {
    this.userService
      .loginGoogle()
      .then(async (response) => {
        console.log(response);
        const alert = await this.alertController.create({
          header: 'Bienvenido',
          message: 'Uy ulala señor Google',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['inicio']);
      })
      .catch((error) => console.log(error));
  }

  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Restablecer Contraseña',
      message: 'Ingrese su correo electrónico para restablecer la contraseña',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo Electrónico',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Enviar',
          handler: async (data) => {
            if (data.email) {
              try {
                await this.userService.resetPassword(data.email);
                const successAlert = await this.alertController.create({
                  header: 'Éxito',
                  message: 'Se ha enviado un correo para restablecer la contraseña.',
                  buttons: ['OK'],
                });
                await successAlert.present();
              } catch (error) {
                const errorAlert = await this.alertController.create({
                  header: 'Error',
                  message: 'No se pudo restablecer la contraseña. Verifique su correo electrónico.',
                  buttons: ['OK'],
                });
                await errorAlert.present();
              }
            }
          },
        },
      ],
    });

    await alert.present();
  }
}

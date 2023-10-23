import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.page.html',
  styleUrls: ['./cliente-delete.page.scss'],
})
export class ClienteDeletePage {
  userEmailToDelete: string = ''; // Propiedad para almacenar el correo electrónico

  constructor(private afAuth: AngularFireAuth, private alertController: AlertController) { }

  async deleteUserByEmail() {
    try {
      const userRecord = await this.afAuth.getUserByEmail(this.userEmailToDelete);
      const uid = userRecord.uid;
      await this.afAuth.deleteUser(uid);

      // Usuario eliminado con éxito, muestra una alerta
      this.presentSuccessAlert();
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);

      // Error al eliminar el usuario, muestra una alerta de error
      this.presentErrorAlert(error);
    }
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      subHeader: 'Usuario eliminado con éxito',
      message: 'El usuario ha sido eliminado con éxito.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentErrorAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Ocurrió un error',
      message: 'Error al eliminar el usuario: ' + error,
      buttons: ['OK']
    });

    await alert.present();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import { ListajugadoresPage } from '../listajugadores/listajugadores';

/**
 * Generated class for the IncidenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incidencias',
  templateUrl: 'incidencias.html',
})
export class IncidenciasPage {
  public jugadores: Array<object>;
  public incidencia: any = { };
  public jugador: object;
  public static id : number;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
   this.jugador=JugadoresProvider.seleccionado;
   console.log(this.jugador);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidenciasPage');
    this.jugadores = JugadoresProvider.getJugadores();
  }
  seleccionarJugador() {
    this.navCtrl.push(ListajugadoresPage);
  }

  enviarIncidencia() {
    if(IncidenciasPage.id === -1) {
      let alert = this.alertCtrl.create({
        title: 'Error al enviar incidencia',
        message: 'No se ha selecionado Jugador',
        buttons: [
          {
            text: 'Aceptar',
            role: 'OK'
          }
        ]
      });
      alert.present();
      console.log("jugador no encontrado");
      return false;
    }else if(this.incidencia.asunto==null){
      let alert = this.alertCtrl.create({
        title: 'Error al enviar incidencia',
        message: 'La incidencia debe conter un asusnto',
        buttons: [
          {
            text: 'Aceptar',
            role: 'OK'
          }
        ]
      });
      alert.present();
    }else if(this.incidencia.descripcion==null){
      let alert = this.alertCtrl.create({
        title: 'Error al enviar incidencia',
        message: 'La incidencia debe conter una descripción',
        buttons: [
          {
            text: 'Aceptar',
            role: 'OK'
          }
        ]
      });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: 'Subir incidencia',
        message: '¿Estas seguro de subir la incidencia?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Subir incidencia',
            role: 'destructive', // color rojo en iOS
            handler: () => {
              console.log(this.jugador);
              let asunto = this.incidencia.asunto;
              let descripcion = this.incidencia.descripcion;
              JugadoresProvider.guardarIncidencia(IncidenciasPage.id, asunto, descripcion, () => {
                let alert = this.alertCtrl.create({
                  title: 'Incidencia enviada',
                  message: 'La incidencia se ha enviado exitosamente!',
                  buttons: [
                    {
                      text: 'Aceptar',
                      role: 'OK'
                    }
                  ]
                });
                alert.present();
              });
            }
          }
        ]
      });
      alert.present();

  }
      // reiniciamos la vista
      this.navCtrl.setRoot(IncidenciasPage);
  }
}

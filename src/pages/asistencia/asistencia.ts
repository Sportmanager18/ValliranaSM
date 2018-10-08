import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {JugadoresProvider} from '../../providers/jugadores/jugadores';
import firebase from 'firebase';
/**
 * Generated class for the AsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistencia',
  templateUrl: 'asistencia.html',
})
export class AsistenciaPage {
  public jugadores: Array<object>;
  public id:number;
  public asistencias:Array<boolean> =new Array(20);
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
    this.jugadores = JugadoresProvider.getJugadores();
    console.log(this.jugadores);
  }
  crearasistencia(jugador){
      this.id=this.jugadores.indexOf(jugador);
      console.log(jugador);
      this.asistencias[this.id]=jugador.value;
  }
  subirasistencia(){
    let alert = this.alertCtrl.create({
      title: 'Subir faltas',
      message: '¿Estas seguro de subir las faltas?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Subir faltas',
          role: 'destructive', // color rojo en iOS
          handler: () => {
            let fjugador=0;
    for(let cont=0;fjugador==0;cont++){
      console.log(this.asistencias[cont]);
      if(this.asistencias[cont] == true ){
        let date=new Date();
        let dd = date.getDate();
        let mm = (date.getMonth()+1);
        let yyyy = date.getFullYear();
        let fecha : string;
        fecha = yyyy + '-' + mm + '-' + dd;
        firebase.database().ref('/' + JugadoresProvider.categoria + '/Jugadores/' + cont +'/Asistencias/'+fecha).set({
            fecha
        }); 
      } 
      if(this.jugadores[cont+1]==null){
        fjugador=1;
      }
    }

    let alert = this.alertCtrl.create({
      title: 'Se han enviado las faltas de asistencia',
      message: 'Las faltas de asistencia se han enviado exitosamente!',
      buttons: [
        {
          text: 'Aceptar',
          role: 'OK'
        }
      ]
    });

    alert.present();
          }
        }
      ]
    });
    alert.present();
  }
}

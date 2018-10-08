import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import firebase from 'firebase';
/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {
  public jugadores:Array<any>;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
    this.jugadores = JugadoresProvider.getJugadores();
  }
  Subirdesc(){
    let date = new Date();
    let dd = date.getDate();
    let mm = (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    let fecha: string;
    fecha = yyyy + '-' + mm + '-' + dd;
    for(let cont=0;cont<this.jugadores.length;cont++){
      if(this.jugadores[cont].descripcion!=null && this.jugadores[cont].descripcion!=undefined){
    firebase.database().ref('/' + JugadoresProvider.categoria + '/Jugadores/' +  cont + '/Descripcion').set({
      descripcion: this.jugadores[cont].descripcion,
      fecha_mod:fecha
      });
      let alert = this.alertCtrl.create({
        title: 'Se han enviado las descripciones',
        message: 'Las descripciones se han enviado exitosamente!',
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
  }

}

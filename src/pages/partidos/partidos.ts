import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquiposProvider } from '../../providers/equipos/equipos';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import firebase from 'firebase';
import { SubirpartidoPage } from '../subirpartido/subirpartido';

/**
 * Generated class for the PartidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html',
})
export class PartidosPage {
  public clasi: Array<any>=[];
  public partidos: Array<object> = [];

  constructor(private alertCtrl: AlertController, private builder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidosPage');
    firebase.database().ref('/' + JugadoresProvider.categoria).on('value', (snapshot) => {
      this.clasi=[];
      snapshot.forEach((snap) => {
        this.clasi.push(snap.val());
        return false;
      });
    });
    this.cargarPartidos();
  }
  Subirpartido() {
    this.navCtrl.push(SubirpartidoPage);
  }
  Clasificacion(){
    location.assign(this.clasi[4]);
  }
  Calendario(){
    location.assign(this.clasi[3]);
  }
  cargarPartidos() {
    firebase.database().ref('/' + JugadoresProvider.categoria + '/Partidos').on('value', (snapshot) => {
      this.partidos = [];
      snapshot.forEach((snap) => {
        this.partidos.push(snap.val());
        return false;
      });
      console.log(this.partidos);
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import { IncidenciasPage } from '../incidencias/incidencias';
//import firebase from 'firebase';
/**
 * Generated class for the ListajugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listajugadores',
  templateUrl: 'listajugadores.html',
})
export class ListajugadoresPage {

  public jugadores: Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, /*private provider: JugadoresProvider*/) {
    this.jugadores = []; // inicializa el array
    //this.jugadores = provider.getAllJugadores();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListajugadoresPage');
    /*
    firebase.database().ref('/InfantilA/Jugadores').on('value', (snapshot) => {
      console.log(snapshot.val());
      this.jugadores = snapshot.val();
    });
    */
    this.jugadores = JugadoresProvider.getJugadores();
  }

  seleccionar(jugador) {
    JugadoresProvider.seleccionado = jugador;
    IncidenciasPage.id = this.jugadores.indexOf(jugador);
    this.navCtrl.pop();
  }

}

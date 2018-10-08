import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {JugadoresProvider} from '../../providers/jugadores/jugadores';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';
import { SubirpartidoPage } from '../subirpartido/subirpartido';

/**
 * Generated class for the ConvocadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convocado',
  templateUrl: 'convocado.html',
})
export class ConvocadoPage {
  private equipos: Array<any> = [];
  public static cjugadores: object;
  public static cequipo: object;
  public jugadores: Array<object> = [];
  public Equipos: FormGroup;
  public fmostrar:number=0;
  public static equipo : String;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController,private builder:FormBuilder, public navParams: NavParams) {
    this.Equipos = builder.group({
      Equipo: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvocadoPage');
    firebase.database().ref('/Equipos/').on('value', (snapshot) => {
      this.equipos = [];
      console.log(snapshot.val());
      snapshot.forEach((snap) => {
        this.equipos.push(snap.val());
        return false;
      });
      console.log(this.equipos);
    });
  }
  buscarjugadores(form){
    ConvocadoPage.cequipo=form.value.Equipo;
    firebase.database().ref('/' + form.value.Equipo + '/Jugadores/').on('value', (snapshot) => {
      this.jugadores = snapshot.val();
      console.log(this.jugadores);
      ConvocadoPage.equipo=form.value.Equipo;
    });
    document.getElementById("mostrar").style.display="block";
  }
  seleccionar(jugador){
    jugador.equipo= ConvocadoPage.equipo;
    jugador.id=this.jugadores.indexOf(jugador);
    if(jugador.Convocado.convocado<5){
    console.log(jugador);
    ConvocadoPage.cjugadores=jugador;
    console.log(jugador);
    this.navCtrl.pop();
    }else{
      let alert = this.alertCtrl.create({
        title: 'No se puede convocar',
        message: 'El Jugador ya ha sido convocado 5 veces',
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

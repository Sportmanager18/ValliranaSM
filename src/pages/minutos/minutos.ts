import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import { MyApp } from '../../app/app.component';
import firebase from 'firebase';
/**
 * Generated class for the MinutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minutos',
  templateUrl: 'minutos.html',
})
export class MinutosPage {

  public jugadores: Array<object>;
  public id: number;
  public minutos: Array<number> = new Array(25);
  public fecha: string;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinutosPage');
    this.jugadores = JugadoresProvider.getJugadores();
  }
  
  crearminuto(jugador) {
    this.id = this.jugadores.indexOf(jugador);
    this.minutos[this.id] = jugador.min;
  }

  subirminutos() {
    let alert = this.alertCtrl.create({
      title: 'Subir minutos',
      message: '¿Desea subir los minutos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Subir minutos',
          role: 'destructive', // color rojo en iOS
          handler: () => {
            let fjugador = 0;
            let ferror = 0;
            let tam;
            for(let cont2 = 0; fjugador == 0 && ferror==0; cont2++){
              if (this.minutos[cont2] == undefined || this.minutos[cont2] == null || this.minutos[cont2]== NaN ) {
                ferror=1;
              }
              this.minutos[cont2]=Math.floor(this.minutos[cont2]);
              if(this.minutos[cont2]>120){
                ferror=2;
              }
              if(this.minutos[cont2]<0){
                ferror=3;
              }
              if (this.jugadores[cont2 + 1] == null) {
                fjugador = 1;
                tam=cont2;
              }
            }

            if(ferror==0){ 
              for (let cont = 0; cont <= tam; cont++) {
                console.log(this.minutos[cont]);
                let date = new Date();
                let dd = date.getDate();
                let mm = (date.getMonth() + 1);
                let yyyy = date.getFullYear();
                this.fecha = yyyy + '-' + mm + '-' + dd;
                  firebase.database().ref('/' + JugadoresProvider.categoria + '/Jugadores/' + cont + '/Minutos/' + this.fecha).set({
                    fecha: this.fecha,
                    minutos: this.minutos[cont]
                  });
                }
              let alert = this.alertCtrl.create({
                title: 'Se han enviado los minutos',
                message: 'Los minutos se han enviado exitosamente!',
                buttons: [
                  {
                    text: 'Aceptar',
                    role: 'OK'
                  }
                ]
              });
              alert.present();
            }else if(ferror==1){
              let alert = this.alertCtrl.create({
                title: 'Error al enviar minutos',
                message: 'Uno o varios campos se encuentran vacios o incorrectos',
                buttons: [
                  {
                    text: 'Aceptar',
                    role: 'OK'
                  }
                ]
              });
              alert.present();
            }else if(ferror==2){
              let alert = this.alertCtrl.create({
                title: 'Error al enviar minutos',
                message: 'Uno o varios campos superan los 120 minutos',
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
                title: 'Error al enviar minutos',
                message: 'Uno o varios campos se encuentran por debajo de 0',
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
      ]
      });
    alert.present();
  }
}

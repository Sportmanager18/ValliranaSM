import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import { MyApp } from '../../app/app.component';
import firebase from 'firebase';
import { SubirpartidoPage } from '../subirpartido/subirpartido';
import { PartidosPage } from '../partidos/partidos';
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
  public minutost: Array<any>;
  public fecha: string;
  private convocado:Array<object>=new Array(25);
  private convocados:Array<object>;
  public noconvocados:Array<number> = new Array(25);
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinutosPage');
    this.cargarminutost();
    this.jugadores = JugadoresProvider.getJugadores();
    let cont2=0,cont3=0;
    for(let cont=0;cont<this.jugadores.length;cont++){
      if(SubirpartidoPage.convocados[cont]!=true){
        this.convocado[cont2]=this.jugadores[cont];
        cont2++;
      }else{
        this.noconvocados[cont3]=cont;
        cont3++;
      }
    }
    this.convocados=new Array(cont2-1);
    for(let cont=0;cont<cont2;cont++){this.convocados[cont]=this.convocado[cont];}
    console.log(this.convocados);
  }
  cargarminutost(){
    firebase.database().ref('/' + JugadoresProvider.categoria).on('value', (snapshot) => {
      snapshot.forEach((snap) => {
        this.minutost=snap.val();
        return false;
      });
    });
  }
  crearminuto(convocado) {
    this.id = this.convocados.indexOf(convocado);
    this.minutos[this.id] = convocado.min;
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
            var minutot :any =this.minutost;
            for(let cont2 = 0; fjugador == 0 && ferror==0; cont2++){
              if (this.minutos[cont2] == undefined || this.minutos[cont2] == null || this.minutos[cont2]== NaN ) {
                ferror=1;
              }
              this.minutos[cont2]=Math.floor(this.minutos[cont2]);
              if(this.minutos[cont2]>minutot){
                ferror=2;
              }
              if(this.minutos[cont2]<0){
                ferror=3;
              }
              if (this.convocados[cont2 + 1] == null) {
                fjugador = 1;
                tam=cont2;
              }
            }
            let date = new Date();
            let dd = date.getDate();
            let mm = (date.getMonth() + 1);
            let yyyy = date.getFullYear();
            this.fecha = yyyy + '-' + mm + '-' + dd;
            if(ferror==0){    
              for (let cont = 0; cont <= tam; cont++) {
                var fconvocados=true;
                for(let cont2=0;cont2<this.convocados.length;cont2++){
                  if(this.noconvocados[cont2]==cont){
                    fconvocados=false;
                  }
                }
                if(fconvocados){
                  firebase.database().ref('/' + JugadoresProvider.categoria + '/Jugadores/' + cont + '/Minutos/' + this.fecha).set({
                    fecha: this.fecha,
                    minutos: this.minutos[cont]
                  });
                }
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
              this.navCtrl.setRoot(PartidosPage);
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
                message: 'Uno o varios campos superan los '+ minutot +' minutos',
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquiposProvider } from '../../providers/equipos/equipos';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import firebase from 'firebase';

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

  public equipos: Array<object> = [];
  public partidos: Array<object> = [];
  public form: FormGroup;

  constructor(private alertCtrl: AlertController, private builder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.form = builder.group({
      equipoLocal: ['', Validators.required],
      equipoVisitante: ['', Validators.required],
      golesLocal: [0, Validators.required],
      golesVisitante: [0, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidosPage');
    let _interval = setInterval(() => {
      if(EquiposProvider.cargado) {
        clearInterval(_interval);
        this.equipos = EquiposProvider.getEquipos();
      }
      console.log(this.equipos);
    }, 100);
    this.cargarPartidos();
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

  subirPartido(form) {
    let alert = this.alertCtrl.create({
      title: 'Subir Partido',
      message: '¿Estas seguro de subir el partido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Subir Partido',
          role: 'destructive', // color rojo en iOS
          handler: () => {
            if(form.value.equipoLocal!="" && form.value.equipoVisitante!=""){
              if(form.value.golesLocal==""){
                form.value.golesLocal=0;
              }
              if(form.value.golesVisitante==""){
                form.value.golesVisitante=0;
              }
              form.value.golesVisitante=parseInt(form.value.golesVisitante);
              form.value.golesLocal=parseInt(form.value.golesLocal);
              let date=new Date();
                  let dd = date.getDate();
                  let mm = (date.getMonth()+1);
                  let yyyy = date.getFullYear();
                  let Fecha : string;
                  Fecha = yyyy + '-' + mm + '-' + dd;
              let partido = {
                Equipo1: form.value.equipoLocal,
                Equipo2: form.value.equipoVisitante,
                GEquipo1: form.value.golesLocal,
                GEquipo2: form.value.golesVisitante,
                fecha:Fecha
              };
              firebase.database().ref('/' + JugadoresProvider.categoria + '/Partidos/' +Fecha).set(partido);

              let alert = this.alertCtrl.create({
                title: 'Se ha subido el partido',
                message: 'El partido se ha subido exitosamente!',
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
                title: 'Error al subir el partido',
                message: 'No se han seleccionado equipos!',
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

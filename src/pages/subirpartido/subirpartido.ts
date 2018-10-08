import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquiposProvider } from '../../providers/equipos/equipos';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import firebase from 'firebase';
import { PartidosPage } from '../partidos/partidos';
import { MinutosPage } from '../minutos/minutos';
import { ConvocadoPage } from '../convocado/convocado';
/**
 * Generated class for the SubirpartidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subirpartido',
  templateUrl: 'subirpartido.html',
})
export class SubirpartidoPage {
  public jugadores: Array<object>;
  private jugadoresc:Array<any>=[];
  public cequipo:object;
  public equipos: Array<object> = [];
  public partidos: Array<object> = [];
  public form: FormGroup;
  public id:number;
  public extras:Array<object>;
  public static convocados:Array<any>= new Array(26);
  constructor(private alertCtrl: AlertController, private builder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.form = builder.group({
      equipoLocal: ['', Validators.required],
      equipoVisitante: ['', Validators.required],
      golesLocal: [0, Validators.required],
      golesVisitante: [0, Validators.required]
    });
  }
  ionViewDidLoad() {
    this.jugadores = JugadoresProvider.getJugadores();
    
    let _interval = setInterval(() => {
      if(EquiposProvider.cargado) {
        clearInterval(_interval);
        this.equipos = EquiposProvider.getEquipos();
      }
    }, 100);
    console.log('ionViewDidLoad SubirpartidoPage');
  }
  ionViewWillEnter(){
    if(this.jugadoresc[0]!=undefined){
    console.log(ConvocadoPage.cjugadores);
    this.jugadoresc.push(ConvocadoPage.cjugadores);
    console.log( this.jugadoresc);
    }else{
    console.log(ConvocadoPage.cjugadores);
    this.jugadoresc[0]=ConvocadoPage.cjugadores;
    console.log( this.jugadoresc);
    }
  }
  convocado(jugador){
    this.id=this.jugadores.indexOf(jugador);
    SubirpartidoPage.convocados[this.id]=jugador.value;
  }
  anadirconvocado(){
    this.navCtrl.push(ConvocadoPage);
  }
  Quitar_convocado(jugador){
    let jposicion=this.jugadoresc.indexOf(jugador);
    if (jposicion > -1) {
      this.jugadoresc.splice(jposicion, 1);
   }
  }
  subirconvocados(){
    let alert = this.alertCtrl.create({
      title: 'Subir No Convocados',
      message: '¿Estas seguro de subir los no convocados?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Subir no convocados',
          role: 'destructive', // color rojo en iOS
          handler: () => {
    //Jugadores de otros equipos
    if (this.jugadoresc[0] != null && this.jugadoresc[0] != undefined){
        for(let cont=0;this.jugadoresc.length!=cont;cont++){
        this.jugadoresc[cont].Convocado.convocado=this.jugadoresc[cont].Convocado.convocado+1;
        console.log(this.jugadoresc[cont].equipo);
        firebase.database().ref('/' +this.jugadoresc[cont].equipo + '/Jugadores/' + this.jugadoresc[cont].id+'/Convocado').set({
            convocado:this.jugadoresc[cont].Convocado.convocado
        }); 
        }
    }
    //Jugadores del equipo
    let fjugador=0;
    for(let cont=0;fjugador==0;cont++){
      console.log(SubirpartidoPage.convocados[cont]);
      if(SubirpartidoPage.convocados[cont] == true ){
        let date=new Date();
        let dd = date.getDate();
        let mm = (date.getMonth()+1);
        let yyyy = date.getFullYear();
        let Fecha : string;
        Fecha = yyyy + '-' + mm + '-' + dd;
        firebase.database().ref('/' + JugadoresProvider.categoria + '/Jugadores/' + cont +'/Minutos/'+Fecha).set({
            convocado:"No",
            fecha:Fecha
        }); 
      } 
      if(this.jugadores[cont+1]==null){
        fjugador=1;
      }
    }

    let alert = this.alertCtrl.create({
      title: 'Se han enviado los no convocados',
      message: 'Los no convocados se han enviado exitosamente!',
      buttons: [
        {
          text: 'Aceptar',
          role: 'OK'
        }
      ]
    });

    alert.present();
    this.navCtrl.push(MinutosPage);
          }
        }
      ]
    });
    alert.present();
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
              this.navCtrl.setRoot(PartidosPage);
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

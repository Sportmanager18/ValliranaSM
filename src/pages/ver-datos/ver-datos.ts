import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';
import firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the VerDatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-datos',
  templateUrl: 'ver-datos.html',
})
export class VerDatosPage {
  public jugadores: Array<object>;
  public informacion: Array<object>;
  public partidos: Array<object>;
  public info: FormGroup;
  public id: number;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, private builder:FormBuilder, public navParams: NavParams) {
    this.info = builder.group({
      Jugador: ['', Validators.required],
      Tipo: ['', Validators.required]
    });
  }
cargarJugadores(){
  firebase.database().ref('/' + JugadoresProvider.categoria + '/Jugadores').on('value', (snapshot) => {
    this.jugadores = [];
    snapshot.forEach((snap) => {
      this.jugadores.push(snap.val());
      return false;
    });
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad VerDatosPage');
    this.cargarJugadores();
  }
  buscarinformacion(form){
    document.getElementById("informacion").className="";
    let cont,cont2;
    for(cont =0;cont<this.jugadores.length;cont++){
      if(form.value.Jugador==this.jugadores[cont].nombre){
        this.id=cont;
      }
    }
    firebase.database().ref('/' + JugadoresProvider.categoria + '/Jugadores/' + this.id + '/' +form.value.Tipo).on('value', (snapshot) => {
      this.informacion = [];
      snapshot.forEach((snap) => {
        this.informacion.push(snap.val());
        return false;
      });
    });
    if(this.informacion[0] != null || this.informacion[0] != undefined){
    document.getElementById("informacion").style.display="block";
    if(form.value.Tipo=="Asistencias"){
      document.getElementById("informacion").className="asistencia";
      document.getElementById("informacion").innerHTML="<span><H4>Faltas de asistencia :</H4> <H5>" + this.informacion[0].fecha + "</H5></span>";
      for(cont2 =1;cont2<this.informacion.length;cont2++){
        var node = document.createElement("H5");
        var textnode = document.createTextNode(this.informacion[cont2].fecha);
        node.appendChild(textnode);
        document.getElementById("informacion").appendChild(node);
      }
    }
    if(form.value.Tipo=="Minutos"){
      var partidos_f=[];
      firebase.database().ref('/' + JugadoresProvider.categoria + '/Partidos').on('value', (snapshot) => {
        this.partidos=[];
        snapshot.forEach((snap) => {
          this.partidos.push(snap.val());
          return false;
        });
      });
      cont2=0;
      for(cont=0;cont<this.partidos.length;cont++){
          if(this.partidos[cont].fecha==this.informacion[cont2].fecha){
              partidos_f[cont2]=this.partidos[cont];
              cont2++;
              if(this.informacion[cont2]==null){
                  cont=this.partidos.length;
              }
          }
      }
      if(cont2==this.informacion.length){
        document.getElementById("informacion").innerHTML="<h5>Partidos jugados : " + this.informacion.length +"</h5><br/>";
        for(cont2 =0;cont2<this.informacion.length;cont2++){
          var contenido=document.createElement("DIV");
          var a=document.createAttribute("class");
          a.value="minutos";
          contenido.setAttributeNode(a);
          var node = document.createElement("H5");
          var textnode = document.createTextNode(this.informacion[cont2].fecha);
          node.appendChild(textnode);
          contenido.appendChild(node);
          var tabla = document.createElement("TABLE");
          var a=document.createAttribute("width");
          a.value="100%";
          tabla.setAttributeNode(a);
          var tr = document.createElement("TR");
          var td = document.createElement("TD");
          var a=document.createAttribute("width");
          a.value="30%";
          td.setAttributeNode(a);
          var node = document.createElement("H6");
          var textnode = document.createTextNode(partidos_f[cont2].Equipo1);
          node.appendChild(textnode);
          td.appendChild(node);
          tr.appendChild(td);
          var td = document.createElement("TD");
          var a=document.createAttribute("width");
          a.value="30%";
          td.setAttributeNode(a);
          var node = document.createElement("H6");
          var textnode = document.createTextNode(partidos_f[cont2].GEquipo1+" VS "+partidos_f[cont2].GEquipo2);
          node.appendChild(textnode);
          td.appendChild(node);
          tr.appendChild(td);
          var td = document.createElement("TD");
          var a=document.createAttribute("width");
          a.value="30%";
          td.setAttributeNode(a);
          var node = document.createElement("H6");
          var textnode = document.createTextNode(partidos_f[cont2].Equipo2);
          node.appendChild(textnode);
          td.appendChild(node);
          tr.appendChild(td);
          tabla.appendChild(tr);
          contenido.appendChild(tabla);
          var node = document.createElement("SPAN");
          var textnode = document.createTextNode("Minutos jugados:" + this.informacion[cont2].minutos);
          node.appendChild(textnode);
          contenido.appendChild(node);
          document.getElementById("informacion").appendChild(contenido);
          var contenido = document.createElement("BR");
          var node = document.createElement("BR");
          contenido.appendChild(node);
          document.getElementById("informacion").appendChild(contenido);
        }
      }else{
        let alert = this.alertCtrl.create({
          title: 'Los datos solicitados no concuerdan',
          message: 'Pida ayuda al soporte tecnico!',
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
    if(form.value.Tipo=="Incidencias"){
      document.getElementById("informacion").innerHTML="<div class='incidencia'><h5>"+this.informacion[0].Fecha+"</h5><span>Asunto:" + this.informacion[0].Asunto + " </br></span><span>Incidencia:" + this.informacion[0].Incidencia + "</span></div><br/><br/>";
      for(cont2 =1;cont2<this.informacion.length;cont2++){
        var contenido=document.createElement("DIV");
        var a=document.createAttribute("class");
        a.value="incidencia";
        contenido.setAttributeNode(a);
        var node = document.createElement("H5");
        var textnode = document.createTextNode(this.informacion[cont2].Fecha);
        node.appendChild(textnode);
        contenido.appendChild(node);
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode("Asunto:" + this.informacion[cont2].Asunto);
        node.appendChild(textnode);
        contenido.appendChild(node);
        var node = document.createElement("BR");
        contenido.appendChild(node);
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode("Incidencia:" + this.informacion[cont2].Incidencia);
        node.appendChild(textnode);
        contenido.appendChild(node);
        document.getElementById("informacion").appendChild(contenido);
        var contenido = document.createElement("BR");
        var node = document.createElement("BR");
        contenido.appendChild(node);
        document.getElementById("informacion").appendChild(contenido);
      }
    }
    }else{
      let alert = this.alertCtrl.create({
        title: 'No hay datos que mostrar',
        message: 'Los datos solicitados no existen!',
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

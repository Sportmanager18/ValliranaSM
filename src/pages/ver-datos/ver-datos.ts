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
  public jugadores: Array<any>;
  public informacion: Array<any>;
  public partidos: Array<any>;
  public info: FormGroup;
  public datos: Array<number>; 
  public player: Array<any>; 
  public id: number;
  public nminutos:number=0;
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
    this.cargarminutos();
  }
  cargarminutos(){
  firebase.database().ref('/' + JugadoresProvider.categoria).on('value', (snapshot) => {
    this.datos=[];
    snapshot.forEach((snap) => {
      this.datos.push(snap.val());
      return false;
    });
  });
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
    if(this.informacion[0] != null && this.informacion[0] != undefined){
    document.getElementById("informacion").style.display="block";
    if(form.value.Tipo=="Asistencias"){
      firebase.database().ref('/' + JugadoresProvider.categoria + '/Partidos').on('value', (snapshot) => {
        this.partidos=[];
        snapshot.forEach((snap) => {
          this.partidos.push(snap.val());
          return false;
        });
      });
      var asistencias=this.datos[5]*this.partidos.length;
      document.getElementById("informacion").innerHTML="<H4>Faltas de asistencia: " + this.informacion.length + " / "+ asistencias+"</H4>";
      var contenido=document.createElement("DIV");
      var a=document.createAttribute("class");
      a.value="asistencia";
      contenido.setAttributeNode(a);
      var node = document.createElement("H4");
      var textnode = document.createTextNode("Fechas de faltas:");
      node.appendChild(textnode);
      contenido.appendChild(node);
      for(cont2 =0;cont2<this.informacion.length;cont2++){
        var node = document.createElement("H5");
        var textnode = document.createTextNode(this.informacion[cont2].fecha);
        node.appendChild(textnode);
        contenido.appendChild(node);
      }
      document.getElementById("informacion").appendChild(contenido);
    }else if(form.value.Tipo=="Minutos"){
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
        var minutos_t=0;
        var minutos_tj=0;
        this.nminutos=0;
        for(cont =0;cont<this.informacion.length;cont++){
            if(this.informacion[cont].minutos!=null && this.informacion[cont].minutos!=undefined){
                minutos_tj=minutos_tj+this.informacion[cont].minutos;
                this.nminutos++;
              }
            }
        minutos_t=this.datos[7];
        minutos_t=minutos_t*this.nminutos;
        document.getElementById("informacion").innerHTML="<h5>Partidos convocado : " + this.nminutos+' / '+this.partidos.length +"</h5>"+"<h5>Minutos totales : " + minutos_tj +" de "+minutos_t+"</h5><br/>";
        for(cont2 =0;cont2<this.informacion.length;cont2++){
          if(this.informacion[cont2].minutos!=null && this.informacion[cont2].minutos!=undefined){
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
            var textnode = document.createTextNode(partidos_f[cont2].GEquipo1+" - "+partidos_f[cont2].GEquipo2);
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
            var textnode = document.createTextNode( this.informacion[cont2].minutos+" Minutos jugados");
            node.appendChild(textnode);
            contenido.appendChild(node);
            document.getElementById("informacion").appendChild(contenido);
            var contenido = document.createElement("BR");
            var node = document.createElement("BR");
            contenido.appendChild(node);
            document.getElementById("informacion").appendChild(contenido);
          }
        }
        if(this.nminutos!=this.partidos.length ){
          var contenido=document.createElement("DIV");
          var a=document.createAttribute("class");
          a.value="asistencia";
          contenido.setAttributeNode(a);
          var node = document.createElement("H4");
          var textnode = document.createTextNode("Fechas de no convocados:");
          node.appendChild(textnode);
          contenido.appendChild(node);
          for(cont2 =0;cont2<this.informacion.length;cont2++){
            if(this.informacion[cont2].minutos==null || this.informacion[cont2].minutos==undefined){
              var node = document.createElement("H5");
              var textnode = document.createTextNode(this.informacion[cont2].fecha);
              node.appendChild(textnode);
              contenido.appendChild(node);
            }
          }
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
    }else if(form.value.Tipo=="Incidencias"){
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
    }else if(form.value.Tipo=="Descripcion"){
      firebase.database().ref('/' + JugadoresProvider.categoria + '/Jugadores/' + this.id).on('value', (snapshot) => {
        this.player = [];
        this.player=snapshot.val();
      });
      document.getElementById("informacion").innerHTML="<div class='descripcion' width='100%'><h3>Descripcion:</h3><h5>" + this.informacion[0] + " </br></h5><span>Ultima fecha:" + this.informacion[1] + "</span></div><br/><br/>";
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

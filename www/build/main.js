webpackJsonp([7],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider() {
    }
    AuthProvider.login = function (email, password, onError) {
        var _this = this;
        this.error = null; // ponemos a null para evitar guardar errores anteriores
        if (!this.isLogged) {
            // la sesion persistira hasta que se cierre sesion en el dispositivo
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().setPersistence(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.Auth.Persistence.LOCAL)
                .then(function () {
                return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
            })
                .catch(function (error) {
                // Handle Errors here.
                console.log(error);
                _this.error = error;
                if (typeof onError !== 'undefined') {
                    onError();
                }
            });
        }
    };
    AuthProvider.logout = function () {
        if (this.isLogged) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
        }
    };
    AuthProvider.onAuthChanged = function (callback) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isLogged = true;
                _this.currentUser = user;
            }
            else {
                _this.isLogged = false;
                _this.currentUser = null;
            }
            if (typeof callback !== 'undefined') {
                callback();
            }
        });
    };
    AuthProvider.isLogged = false;
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_jugadores_jugadores__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*
  Generated class for the EquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EquiposProvider = /** @class */ (function () {
    function EquiposProvider() {
    }
    EquiposProvider.fetch = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_1__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Equipos').on('value', function (snapshot) {
            _this.equipos = snapshot.val();
            _this.cargado = true;
            console.log(_this.equipos);
        });
    };
    EquiposProvider.getEquipos = function () {
        return this.equipos;
    };
    EquiposProvider.cargado = false;
    EquiposProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], EquiposProvider);
    return EquiposProvider;
}());

//# sourceMappingURL=equipos.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListajugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import firebase from 'firebase';
/**
 * Generated class for the ListajugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListajugadoresPage = /** @class */ (function () {
    function ListajugadoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugadores = []; // inicializa el array
        //this.jugadores = provider.getAllJugadores();
    }
    ListajugadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListajugadoresPage');
        /*
        firebase.database().ref('/InfantilA/Jugadores').on('value', (snapshot) => {
          console.log(snapshot.val());
          this.jugadores = snapshot.val();
        });
        */
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].getJugadores();
    };
    ListajugadoresPage.prototype.seleccionar = function (jugador) {
        __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].seleccionado = jugador;
        this.navCtrl.pop();
    };
    ListajugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listajugadores',template:/*ion-inline-start:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\listajugadores\listajugadores.html"*/'<!--\n\n  Generated template for the ListajugadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Lista de jugadores\n\n      <img src="assets/imgs/logosf.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let jugador of jugadores" (click)="seleccionar(jugador)">{{ jugador.nombre }}</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\listajugadores\listajugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListajugadoresPage);
    return ListajugadoresPage;
}());

//# sourceMappingURL=listajugadores.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AsistenciaPage = /** @class */ (function () {
    function AsistenciaPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.asistencias = new Array(20);
    }
    AsistenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsistenciaPage');
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].getJugadores();
    };
    AsistenciaPage.prototype.crearasistencia = function (jugador) {
        this.id = this.jugadores.indexOf(jugador);
        console.log(jugador);
        this.asistencias[this.id] = jugador.value;
    };
    AsistenciaPage.prototype.subirasistencia = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Subir faltas',
            message: '¿Estas seguro de subir las faltas?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Subir faltas',
                    role: 'destructive',
                    handler: function () {
                        var fjugador = 0;
                        for (var cont = 0; fjugador == 0; cont++) {
                            console.log(_this.asistencias[cont]);
                            if (_this.asistencias[cont] == true) {
                                var date = new Date();
                                var dd = date.getDate();
                                var mm = (date.getMonth() + 1);
                                var yyyy = date.getFullYear();
                                var fecha = void 0;
                                fecha = yyyy + '-' + mm + '-' + dd;
                                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Jugadores/' + cont + '/Asistencias/' + fecha).set({
                                    fecha: fecha
                                });
                            }
                            if (_this.jugadores[cont + 1] == null) {
                                fjugador = 1;
                            }
                        }
                        var alert = _this.alertCtrl.create({
                            title: 'Se han enviado las faltas de asistencia',
                            message: 'Las faltas de asistencia se han enviado exitosamente!',
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
            ]
        });
        alert.present();
    };
    AsistenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-asistencia',template:/*ion-inline-start:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\asistencia\asistencia.html"*/'<!--\n\n  Generated template for the AsistenciaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Asistencia\n\n    <img src="assets/imgs/logosf.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<h5>Marcar solo las faltas de asistencia</h5>\n\n<ion-list>\n\n  <ion-item *ngFor="let jugador of jugadores">\n\n    <ion-label>{{jugador.nombre}}</ion-label>\n\n    <ion-checkbox item-right value="false"  [(ngModel)]="jugador.value" (click)="crearasistencia(jugador)"></ion-checkbox>\n\n  </ion-item>  \n\n</ion-list> \n\n<button ion-button full (click)="subirasistencia()">Enviar Asistencia</button>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\asistencia\asistencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AsistenciaPage);
    return AsistenciaPage;
}());

//# sourceMappingURL=asistencia.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MinutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinutosPage = /** @class */ (function () {
    function MinutosPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.minutos = new Array(25);
    }
    MinutosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinutosPage');
        this.cargarminutot();
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].getJugadores();
    };
    MinutosPage.prototype.ionViewDidEnter = function () {
    };
    MinutosPage.prototype.cargarminutot = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria).on('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                _this.minutot = snap.val();
                return false;
            });
        });
    };
    MinutosPage.prototype.crearminuto = function (jugador) {
        this.id = this.jugadores.indexOf(jugador);
        this.minutos[this.id] = jugador.min;
    };
    MinutosPage.prototype.subirminutos = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Subir minutos',
            message: '¿Desea subir los minutos?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Subir minutos',
                    role: 'destructive',
                    handler: function () {
                        var fjugador = 0;
                        var ferror = 0;
                        var minutot = _this.minutot;
                        var tam;
                        for (var cont2 = 0; fjugador == 0 && ferror == 0; cont2++) {
                            if (_this.minutos[cont2] == undefined || _this.minutos[cont2] == null || _this.minutos[cont2] == NaN) {
                                ferror = 1;
                            }
                            _this.minutos[cont2] = Math.floor(_this.minutos[cont2]);
                            if (_this.minutos[cont2] > minutot) {
                                ferror = 2;
                            }
                            if (_this.minutos[cont2] < 0) {
                                ferror = 3;
                            }
                            if (_this.jugadores[cont2 + 1] == null) {
                                fjugador = 1;
                                tam = cont2;
                            }
                        }
                        if (ferror == 0) {
                            for (var cont = 0; cont <= tam; cont++) {
                                console.log(_this.minutos[cont]);
                                var date = new Date();
                                var dd = date.getDate();
                                var mm = (date.getMonth() + 1);
                                var yyyy = date.getFullYear();
                                _this.fecha = yyyy + '-' + mm + '-' + dd;
                                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Jugadores/' + cont + '/Minutos/' + _this.fecha).set({
                                    fecha: _this.fecha,
                                    minutos: _this.minutos[cont]
                                });
                            }
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Se han enviado los minutos',
                                message: 'Los minutos se han enviado exitosamente!',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        role: 'OK'
                                    }
                                ]
                            });
                            alert_1.present();
                        }
                        else if (ferror == 1) {
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Error al enviar minutos',
                                message: 'Uno o varios campos se encuentran vacios o incorrectos',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        role: 'OK'
                                    }
                                ]
                            });
                            alert_2.present();
                        }
                        else if (ferror == 2) {
                            var alert_3 = _this.alertCtrl.create({
                                title: 'Error al enviar minutos',
                                message: 'Uno o varios campos superan los ' + minutot + ' minutos',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        role: 'OK'
                                    }
                                ]
                            });
                            alert_3.present();
                        }
                        else {
                            var alert_4 = _this.alertCtrl.create({
                                title: 'Error al enviar minutos',
                                message: 'Uno o varios campos se encuentran por debajo de 0',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        role: 'OK'
                                    }
                                ]
                            });
                            alert_4.present();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    MinutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minutos',template:/*ion-inline-start:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\minutos\minutos.html"*/'<!--\n\n  Generated template for the MinutosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Minutos\n\n      <img src="assets/imgs/logosf.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item *ngFor="let jugador of jugadores">\n\n  <ion-label>{{ jugador.nombre }}</ion-label>\n\n  <ion-input ion-right type="number" [(ngModel)]="jugador.min" (change)="crearminuto(jugador)"></ion-input>\n\n</ion-item>\n\n<button ion-button full (click)="subirminutos()">Enviar Minutos</button>\n\n</ion-content>\n\n'/*ion-inline-end:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\minutos\minutos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MinutosPage);
    return MinutosPage;
}());

//# sourceMappingURL=minutos.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(menu, navCtrl, navParams, alertCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.todo = {};
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        // cuando estamos en esta pagina
        this.menu.swipeEnable(false); // desactiva el swipe del menu
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        //cuando salimos de esta pagina
        this.menu.swipeEnable(true); // activamos de nuevo el swipe del menu
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginFormListener = function () {
        var _this = this;
        var email = this.todo.email;
        var password = this.todo.password;
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */].login(email, password, function () {
            // si hay algun error durante el login se ejecutara esta funcion anonima
            if (__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */].error != null) {
                _this.showAlert(__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */].error.code, __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */].error.message);
            }
        });
    };
    LoginPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="form-container">\n\n    <img src="assets/imgs/logo.jpg" alt="logo-vallirana" />\n\n    <form (ngSubmit)="loginFormListener()">\n\n      <ion-list class="input-container">\n\n        <ion-item class="input-wrapper">\n\n          <ion-label floating>Correo Electronico</ion-label>\n\n          <ion-input [(ngModel)]="todo.email" type="email" name="email" required></ion-input>\n\n        </ion-item>\n\n        <ion-item class="input-wrapper">\n\n          <ion-label floating>Contraseña</ion-label>\n\n          <ion-input [(ngModel)]="todo.password" type="password" name="password" required></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <button ion-button type="submit" block>Iniciar Sesion</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listajugadores_listajugadores__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IncidenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncidenciasPage = /** @class */ (function () {
    function IncidenciasPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.incidencia = {};
    }
    IncidenciasPage_1 = IncidenciasPage;
    IncidenciasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncidenciasPage');
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].getJugadores();
    };
    IncidenciasPage.prototype.ionViewWillEnter = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].seleccionado != null) {
            this.jugador = __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].seleccionado;
            console.log(this.jugador);
        }
    };
    IncidenciasPage.prototype.seleccionarJugador = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listajugadores_listajugadores__["a" /* ListajugadoresPage */]);
    };
    IncidenciasPage.prototype.enviarIncidencia = function () {
        var _this = this;
        var id = this.jugadores.indexOf(this.jugador);
        if (id === -1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error al enviar incidencia',
                message: 'No se ha selecionado Jugador',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'OK'
                    }
                ]
            });
            alert_1.present();
            console.log("jugador no encontrado");
            __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].seleccionado = null;
            return false;
        }
        else if (this.incidencia.asunto == null) {
            var alert_2 = this.alertCtrl.create({
                title: 'Error al enviar incidencia',
                message: 'La incidencia debe conter un asusnto',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'OK'
                    }
                ]
            });
            alert_2.present();
        }
        else if (this.incidencia.descripcion == null) {
            var alert_3 = this.alertCtrl.create({
                title: 'Error al enviar incidencia',
                message: 'La incidencia debe conter una descripción',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'OK'
                    }
                ]
            });
            alert_3.present();
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: 'Subir incidencia',
                message: '¿Estas seguro de subir la incidencia?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Subir incidencia',
                        role: 'destructive',
                        handler: function () {
                            console.log(_this.jugador);
                            var asunto = _this.incidencia.asunto;
                            var descripcion = _this.incidencia.descripcion;
                            __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].guardarIncidencia(id, asunto, descripcion, function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Incidencia enviada',
                                    message: 'La incidencia se ha enviado exitosamente!',
                                    buttons: [
                                        {
                                            text: 'Aceptar',
                                            role: 'OK'
                                        }
                                    ]
                                });
                                alert.present();
                            });
                        }
                    }
                ]
            });
            alert_4.present();
        }
        // reiniciamos la vista
        this.navCtrl.setRoot(IncidenciasPage_1);
    };
    IncidenciasPage = IncidenciasPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incidencias',template:/*ion-inline-start:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\incidencias\incidencias.html"*/'<!--\n\n  Generated template for the IncidenciasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Incidencias\n\n      <img src="assets/imgs/logosf.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item (click)="seleccionarJugador()">Seleccionar jugador</button>\n\n  </ion-list>\n\n  <ion-item-divider color="primary" *ngIf="jugador != null">\n\n    Crear incidencia para: {{ jugador.nombre }}\n\n  </ion-item-divider>\n\n  <div class="form-container">\n\n    <form (ngSubmit)="enviarIncidencia()">\n\n      <ion-item class="input-wrapper">\n\n        <ion-label floating>Asunto</ion-label>\n\n        <ion-input [(ngModel)]="incidencia.asunto" type="text" name="asunto" required></ion-input>\n\n      </ion-item>\n\n      <ion-item class="input-wrapper">\n\n        <ion-label floating>Descripcion</ion-label>\n\n        <ion-textarea [(ngModel)]="incidencia.descripcion" name="descripcion" required></ion-textarea>\n\n      </ion-item>\n\n      <button ion-button type="submit">Enviar</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\incidencias\incidencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IncidenciasPage);
    return IncidenciasPage;
    var IncidenciasPage_1;
}());

//# sourceMappingURL=incidencias.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_equipos_equipos__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_jugadores_jugadores__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PartidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartidosPage = /** @class */ (function () {
    function PartidosPage(alertCtrl, builder, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.equipos = [];
        this.partidos = [];
        this.form = builder.group({
            equipoLocal: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            equipoVisitante: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            golesLocal: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            golesVisitante: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    PartidosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PartidosPage');
        var _interval = setInterval(function () {
            if (__WEBPACK_IMPORTED_MODULE_3__providers_equipos_equipos__["a" /* EquiposProvider */].cargado) {
                clearInterval(_interval);
                _this.equipos = __WEBPACK_IMPORTED_MODULE_3__providers_equipos_equipos__["a" /* EquiposProvider */].getEquipos();
            }
            console.log(_this.equipos);
        }, 100);
        this.cargarPartidos();
    };
    PartidosPage.prototype.cargarPartidos = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_4__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Partidos').on('value', function (snapshot) {
            _this.partidos = [];
            snapshot.forEach(function (snap) {
                _this.partidos.push(snap.val());
                return false;
            });
            console.log(_this.partidos);
        });
    };
    PartidosPage.prototype.subirPartido = function (form) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Subir Partido',
            message: '¿Estas seguro de subir el partido?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Subir Partido',
                    role: 'destructive',
                    handler: function () {
                        if (form.value.equipoLocal != "" && form.value.equipoVisitante != "") {
                            if (form.value.golesLocal == "") {
                                form.value.golesLocal = 0;
                            }
                            if (form.value.golesVisitante == "") {
                                form.value.golesVisitante = 0;
                            }
                            form.value.golesVisitante = parseInt(form.value.golesVisitante);
                            form.value.golesLocal = parseInt(form.value.golesLocal);
                            var date = new Date();
                            var dd = date.getDate();
                            var mm = (date.getMonth() + 1);
                            var yyyy = date.getFullYear();
                            var Fecha = void 0;
                            Fecha = yyyy + '-' + mm + '-' + dd;
                            var partido = {
                                Equipo1: form.value.equipoLocal,
                                Equipo2: form.value.equipoVisitante,
                                GEquipo1: form.value.golesLocal,
                                GEquipo2: form.value.golesVisitante,
                                fecha: Fecha
                            };
                            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_4__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Partidos/' + Fecha).set(partido);
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Se ha subido el partido',
                                message: 'El partido se ha subido exitosamente!',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        role: 'OK'
                                    }
                                ]
                            });
                            alert_1.present();
                        }
                        else {
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Error al subir el partido',
                                message: 'No se han seleccionado equipos!',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        role: 'OK'
                                    }
                                ]
                            });
                            alert_2.present();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    PartidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partidos',template:/*ion-inline-start:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\partidos\partidos.html"*/'<!--\n\n  Generated template for the AsistenciaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Partidos\n\n      <img src="assets/imgs/logosf.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  \n\n  <form [formGroup]="form" (ngSubmit)="subirPartido(form)">\n\n    <div class="nuevo-partido">\n\n      <div class="vs-container">\n\n        <ion-item>\n\n          <ion-label>Local</ion-label>\n\n          <ion-select formControlName="equipoLocal" name="equipoLocal" required>\n\n          <ion-option *ngFor="let equipo of equipos">{{ equipo.nombre }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <h1>VS</h1>\n\n        <ion-item>\n\n          <ion-label>Visitante</ion-label>\n\n          <ion-select formControlName="equipoVisitante" name="equipoVisitante" required>\n\n            <ion-option *ngFor="let equipo of equipos">{{ equipo.nombre }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n      <div class="partido-inputs">\n\n        <ion-input formControlName="golesLocal" name="golesLocal" type="number" value="0" required></ion-input>\n\n        <ion-input formControlName="golesVisitante" name="golesVisitante" type="number" value="0" required></ion-input>\n\n      </div>\n\n      <button ion-button type="submit">Subir partido</button>\n\n    </div>\n\n  </form>\n\n  <div width="100%"  class="partidos-container" *ngIf="partidos.length > 0" >\n\n    <h1>Mis partidos</h1>\n\n    <div class="partidos" width="100%" >\n\n      <table width="100%" align="center">\n\n        <ul>\n\n          <li class="partido" *ngFor="let partido of partidos">\n\n          <tr >\n\n            <td colspan="3" align="center" >\n\n              <h4>{{partido.fecha}}</h4>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td width="400px"> \n\n              <div class="local">\n\n                <span class="nombre-equipo">{{ partido.Equipo1 }}</span>\n\n              </div>\n\n            </td>\n\n            <td width="20%">\n\n              <div>{{ partido.GEquipo1 }} VS {{ partido.GEquipo2 }}</div>\n\n            </td>\n\n            <td width="40%">\n\n              <div class="visitante">\n\n                <span class="nombre-equipo">{{ partido.Equipo2 }}</span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          </li>\n\n        </ul>\n\n      </table>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\partidos\partidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PartidosPage);
    return PartidosPage;
}());

//# sourceMappingURL=partidos.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerDatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VerDatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerDatosPage = /** @class */ (function () {
    function VerDatosPage(alertCtrl, navCtrl, builder, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.builder = builder;
        this.navParams = navParams;
        this.info = builder.group({
            Jugador: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            Tipo: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    VerDatosPage.prototype.cargarJugadores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Jugadores').on('value', function (snapshot) {
            _this.jugadores = [];
            snapshot.forEach(function (snap) {
                _this.jugadores.push(snap.val());
                return false;
            });
        });
    };
    VerDatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerDatosPage');
        this.cargarJugadores();
        this.cargarminutos();
    };
    VerDatosPage.prototype.cargarminutos = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria).on('value', function (snapshot) {
            _this.datos = [];
            snapshot.forEach(function (snap) {
                _this.datos.push(snap.val());
                return false;
            });
        });
    };
    VerDatosPage.prototype.buscarinformacion = function (form) {
        var _this = this;
        document.getElementById("informacion").className = "";
        var cont, cont2;
        for (cont = 0; cont < this.jugadores.length; cont++) {
            if (form.value.Jugador == this.jugadores[cont].nombre) {
                this.id = cont;
            }
        }
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Jugadores/' + this.id + '/' + form.value.Tipo).on('value', function (snapshot) {
            _this.informacion = [];
            snapshot.forEach(function (snap) {
                _this.informacion.push(snap.val());
                return false;
            });
        });
        if (this.informacion[0] != null || this.informacion[0] != undefined) {
            document.getElementById("informacion").style.display = "block";
            if (form.value.Tipo == "Asistencias") {
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Partidos').on('value', function (snapshot) {
                    _this.partidos = [];
                    snapshot.forEach(function (snap) {
                        _this.partidos.push(snap.val());
                        return false;
                    });
                });
                var asistencias = this.datos[3] * this.partidos.length;
                document.getElementById("informacion").innerHTML = "<H4>Faltas de asistencia: " + this.informacion.length + " / " + asistencias + "</H4>";
                var contenido = document.createElement("DIV");
                var a = document.createAttribute("class");
                a.value = "asistencia";
                contenido.setAttributeNode(a);
                var node = document.createElement("H4");
                var textnode = document.createTextNode("Fechas de faltas:");
                node.appendChild(textnode);
                contenido.appendChild(node);
                for (cont2 = 0; cont2 < this.informacion.length; cont2++) {
                    var node = document.createElement("H5");
                    var textnode = document.createTextNode(this.informacion[cont2].fecha);
                    node.appendChild(textnode);
                    contenido.appendChild(node);
                }
                document.getElementById("informacion").appendChild(contenido);
            }
            if (form.value.Tipo == "Minutos") {
                var partidos_f = [];
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria + '/Partidos').on('value', function (snapshot) {
                    _this.partidos = [];
                    snapshot.forEach(function (snap) {
                        _this.partidos.push(snap.val());
                        return false;
                    });
                });
                cont2 = 0;
                for (cont = 0; cont < this.partidos.length; cont++) {
                    if (this.partidos[cont].fecha == this.informacion[cont2].fecha) {
                        partidos_f[cont2] = this.partidos[cont];
                        cont2++;
                        if (this.informacion[cont2] == null) {
                            cont = this.partidos.length;
                        }
                    }
                }
                if (cont2 == this.informacion.length) {
                    var minutos_t = 0;
                    var minutos_tj = 0;
                    for (cont = 0; cont < this.informacion.length; cont++) {
                        minutos_tj = minutos_tj + this.informacion[cont].minutos;
                    }
                    minutos_t = this.datos[4];
                    minutos_t = minutos_t * this.informacion.length;
                    document.getElementById("informacion").innerHTML = "<h5>Partidos jugados : " + this.informacion.length + "</h5>" + "<h5>Minutos totales : " + minutos_tj + " de " + minutos_t + "</h5><br/>";
                    for (cont2 = 0; cont2 < this.informacion.length; cont2++) {
                        var contenido = document.createElement("DIV");
                        var a = document.createAttribute("class");
                        a.value = "minutos";
                        contenido.setAttributeNode(a);
                        var node = document.createElement("H5");
                        var textnode = document.createTextNode(this.informacion[cont2].fecha);
                        node.appendChild(textnode);
                        contenido.appendChild(node);
                        var tabla = document.createElement("TABLE");
                        var a = document.createAttribute("width");
                        a.value = "100%";
                        tabla.setAttributeNode(a);
                        var tr = document.createElement("TR");
                        var td = document.createElement("TD");
                        var a = document.createAttribute("width");
                        a.value = "30%";
                        td.setAttributeNode(a);
                        var node = document.createElement("H6");
                        var textnode = document.createTextNode(partidos_f[cont2].Equipo1);
                        node.appendChild(textnode);
                        td.appendChild(node);
                        tr.appendChild(td);
                        var td = document.createElement("TD");
                        var a = document.createAttribute("width");
                        a.value = "30%";
                        td.setAttributeNode(a);
                        var node = document.createElement("H6");
                        var textnode = document.createTextNode(partidos_f[cont2].GEquipo1 + " VS " + partidos_f[cont2].GEquipo2);
                        node.appendChild(textnode);
                        td.appendChild(node);
                        tr.appendChild(td);
                        var td = document.createElement("TD");
                        var a = document.createAttribute("width");
                        a.value = "30%";
                        td.setAttributeNode(a);
                        var node = document.createElement("H6");
                        var textnode = document.createTextNode(partidos_f[cont2].Equipo2);
                        node.appendChild(textnode);
                        td.appendChild(node);
                        tr.appendChild(td);
                        tabla.appendChild(tr);
                        contenido.appendChild(tabla);
                        var node = document.createElement("SPAN");
                        var textnode = document.createTextNode(this.informacion[cont2].minutos + " Minutos jugados");
                        node.appendChild(textnode);
                        contenido.appendChild(node);
                        document.getElementById("informacion").appendChild(contenido);
                        var contenido = document.createElement("BR");
                        var node = document.createElement("BR");
                        contenido.appendChild(node);
                        document.getElementById("informacion").appendChild(contenido);
                    }
                }
                else {
                    var alert_1 = this.alertCtrl.create({
                        title: 'Los datos solicitados no concuerdan',
                        message: 'Pida ayuda al soporte tecnico!',
                        buttons: [
                            {
                                text: 'Aceptar',
                                role: 'OK'
                            }
                        ]
                    });
                    alert_1.present();
                }
            }
            if (form.value.Tipo == "Incidencias") {
                document.getElementById("informacion").innerHTML = "<div class='incidencia'><h5>" + this.informacion[0].Fecha + "</h5><span>Asunto:" + this.informacion[0].Asunto + " </br></span><span>Incidencia:" + this.informacion[0].Incidencia + "</span></div><br/><br/>";
                for (cont2 = 1; cont2 < this.informacion.length; cont2++) {
                    var contenido = document.createElement("DIV");
                    var a = document.createAttribute("class");
                    a.value = "incidencia";
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
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'No hay datos que mostrar',
                message: 'Los datos solicitados no existen!',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'OK'
                    }
                ]
            });
            alert_2.present();
        }
    };
    VerDatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-datos',template:/*ion-inline-start:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\ver-datos\ver-datos.html"*/'<!--\n  Generated template for the VerDatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ver datos\n    <img src="assets/imgs/logosf.png"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4>Para ver los datos seleccione un jugador y la informacion que quiere ver</h4>\n  <form [formGroup]="info" (ngSubmit)="buscarinformacion(info)">\n    <div class="info">\n      <ion-item>\n        <ion-select formControlName="Jugador"name="Jugador" required>\n          <ion-label >Seleccione jugador</ion-label>\n          <ion-option *ngFor="let jugador of jugadores" >{{ jugador.nombre }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="info">\n      <ion-item>\n        <ion-select formControlName="Tipo" name="Tipo" required>\n          <ion-label >Seleccione informacion</ion-label>\n          <ion-option>Incidencias</ion-option>\n          <ion-option>Asistencias</ion-option>\n          <ion-option>Minutos</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <button ion-button type="submit">Buscar</button>\n  </form>\n  <div id="informacion">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\pages\ver-datos\ver-datos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VerDatosPage);
    return VerDatosPage;
}());

//# sourceMappingURL=ver-datos.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/asistencia/asistencia.module": [
		446,
		6
	],
	"../pages/incidencias/incidencias.module": [
		449,
		5
	],
	"../pages/listajugadores/listajugadores.module": [
		445,
		4
	],
	"../pages/login/login.module": [
		448,
		3
	],
	"../pages/minutos/minutos.module": [
		447,
		2
	],
	"../pages/partidos/partidos.module": [
		450,
		1
	],
	"../pages/ver-datos/ver-datos.module": [
		451,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 201;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(309);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the JugadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JugadoresProvider = /** @class */ (function () {
    function JugadoresProvider() {
    }
    JugadoresProvider.fetch = function () {
        console.log(this.categoria);
        this.fetchJugadores();
    };
    JugadoresProvider.fetchJugadores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/' + this.categoria + '/Jugadores').on('value', function (snapshot) {
            _this.jugadores = snapshot.val();
            console.log(_this.jugadores);
        });
    };
    JugadoresProvider.getJugadores = function () {
        return this.jugadores;
    };
    JugadoresProvider.guardarIncidencia = function (id, _asunto, _descripcion, callback) {
        var date = new Date();
        var dd = date.getDate();
        var mm = (date.getMonth() + 1);
        var yyyy = date.getFullYear();
        var fecha;
        fecha = yyyy + '-' + mm + '-' + dd;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/' + this.categoria + '/Jugadores/' + id + '/Incidencias/' + fecha).set({
            Asunto: _asunto,
            Incidencia: _descripcion,
            Fecha: fecha
        })
            .then(function () {
            console.log("Incidencia enviada");
            if (typeof callback !== 'undefined') {
                console.log("Ejecutando instruciones opcionales...");
                callback();
            }
        });
    };
    JugadoresProvider.jugadores = [];
    JugadoresProvider.error = null;
    JugadoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JugadoresProvider);
    return JugadoresProvider;
}());

/**
 * asignaiones: {
 *  infantilA@pbvallirana.com: InfantilA
 * }
 */ 
//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_incidencias_incidencias__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_jugadores_jugadores__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listajugadores_listajugadores__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_partidos_partidos__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_minutos_minutos__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_asistencia_asistencia__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_equipos_equipos__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ver_datos_ver_datos__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_incidencias_incidencias__["a" /* IncidenciasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_listajugadores_listajugadores__["a" /* ListajugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_partidos_partidos__["a" /* PartidosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_minutos_minutos__["a" /* MinutosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_asistencia_asistencia__["a" /* AsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ver_datos_ver_datos__["a" /* VerDatosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/listajugadores/listajugadores.module#ListajugadoresPageModule', name: 'ListajugadoresPage', segment: 'listajugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asistencia/asistencia.module#AsistenciaPageModule', name: 'AsistenciaPage', segment: 'asistencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/minutos/minutos.module#MinutosPageModule', name: 'MinutosPage', segment: 'minutos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incidencias/incidencias.module#IncidenciasPageModule', name: 'IncidenciasPage', segment: 'incidencias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partidos/partidos.module#PartidosPageModule', name: 'PartidosPage', segment: 'partidos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-datos/ver-datos.module#VerDatosPageModule', name: 'VerDatosPage', segment: 'ver-datos', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_incidencias_incidencias__["a" /* IncidenciasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_listajugadores_listajugadores__["a" /* ListajugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_partidos_partidos__["a" /* PartidosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_minutos_minutos__["a" /* MinutosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_asistencia_asistencia__["a" /* AsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ver_datos_ver_datos__["a" /* VerDatosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_jugadores_jugadores__["a" /* JugadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_equipos_equipos__["a" /* EquiposProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_incidencias_incidencias__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_partidos_partidos__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_minutos_minutos__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_asistencia_asistencia__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_jugadores_jugadores__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_equipos_equipos__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ver_datos_ver_datos__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(alertCtrl, menuCtrl, platform, statusBar, splashScreen) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]; // pagina principal
        this.initializeApp();
        this.config = {
            apiKey: "AIzaSyD1GKHefLf-X6wZtqF9gnlMsSPWnzMKJ7U",
            authDomain: "pbvallirana-8648d.firebaseapp.com",
            databaseURL: "https://pbvallirana-8648d.firebaseio.com/",
            projectId: "pbvallirana-8648d",
            storageBucket: "pbvallirana-8648d.appspot.com",
            messagingSenderId: "494529543842"
        };
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: "football", title: 'Partidos', component: __WEBPACK_IMPORTED_MODULE_8__pages_partidos_partidos__["a" /* PartidosPage */] },
            { icon: "contacts", title: 'Asistencia', component: __WEBPACK_IMPORTED_MODULE_10__pages_asistencia_asistencia__["a" /* AsistenciaPage */] },
            { icon: "timer", title: 'Minutos', component: __WEBPACK_IMPORTED_MODULE_9__pages_minutos_minutos__["a" /* MinutosPage */] },
            { icon: "warning", title: 'Incidencias', component: __WEBPACK_IMPORTED_MODULE_5__pages_incidencias_incidencias__["a" /* IncidenciasPage */] },
            { icon: "eye", title: 'Ver datos', component: __WEBPACK_IMPORTED_MODULE_13__pages_ver_datos_ver_datos__["a" /* VerDatosPage */] }
        ];
        /*console.log('ionViewDidLoad ListajugadoresPage');
        firebase.database().ref('/InfantilA/Jugadores').on('value', (snapshot) => {
          console.log(snapshot.val());
          this.jugadores = snapshot.val();
        });
        this.ComprobacionAlert = this.alertCtrl.create({
          title: 'Comprobando sesion',
          subTitle: 'Estamos comprobando si hay alguna sesion iniciada en este dispositivo. Por favor espere.'
        });
        */
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // inicializamos el firebase con su configuracion
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(_this.config);
            // llamamos al listener de la autenticacion
            // para comprobar si el usuario esta logueado o no
            //this.ComprobacionAlert.present();
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */].onAuthChanged(function () {
                if (__WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */].isLogged) {
                    // cortamos en trozos el email a partir de '@'
                    var email = __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */].currentUser.email.split('@');
                    // pasamos el primer y ultimo caracter a mayuscula
                    _this.categoria = email[0].substring(0, 1).toUpperCase() + email[0].substring(1, email[0].length - 1) + email[0].substring(email[0].length - 1).toUpperCase();
                    // y lo guardamos en la propiedad estatica categoria de JugadoresProvider
                    __WEBPACK_IMPORTED_MODULE_11__providers_jugadores_jugadores__["a" /* JugadoresProvider */].categoria = _this.categoria;
                    // cargamos equipos
                    __WEBPACK_IMPORTED_MODULE_12__providers_equipos_equipos__["a" /* EquiposProvider */].fetch();
                    // cargamos los jugadores de la cuenta que ha iniciado sesion
                    __WEBPACK_IMPORTED_MODULE_11__providers_jugadores_jugadores__["a" /* JugadoresProvider */].fetch();
                    // si se ha logueado cambiamos la pagina a la pagina principal
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_partidos_partidos__["a" /* PartidosPage */]);
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cerrar sesion',
            message: '¿Estas seguro de cerrar sesion?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Cerrar sesion',
                    role: 'destructive',
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */].logout();
                        _this.menuCtrl.close();
                        _this.nav.setRoot(_this.rootPage);
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\app\app.html"*/'\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <img src="assets/imgs/logo.jpg" alt="avatarimg" />\n\n      <ion-title>{{ categoria }}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="{{ p.icon }}" item-start></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n      <button ion-item (click)="signOut()">\n\n        <ion-icon name="exit" item-start></ion-icon>\n\n        Cerrar sesion\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"A:\Jorge\Documents\Vallirana-git-hub\vallirana-app-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map
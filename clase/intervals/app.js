'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

// Emitira un el valor numerico que incrementara
// cada llamado y el numero es el espacio entre llamada en milisegundos
const source$ = Rx.Observable.interval(100)
// con la function take() le das un final 
.take(9);

source$.subscribe ( 
    x => console.log('Interval ' + x),
    err => console.log(err),
    completed => console.log("Terminó")
);
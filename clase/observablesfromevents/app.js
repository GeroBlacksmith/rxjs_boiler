'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');

const input = $('#input');

const output = $('#output');

// Creamos un observable le ponemos el simbolo $ 
// al final del nombre de la variable para indicar que es un observable
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

const moveStream$ = Rx.Observable.fromEvent(document,'mousemove')

// Para acceder a la información que observamos tenemos que subscribirnos
// a la variable con el signo $
btnStream$.subscribe(
    e => {
        console.log(e.target.innerHTML);
        
    },
    err => {
        console.log(err);
    },
    () => {
        console.log('completed');
    }
);

inputStream$.subscribe(
    e => {
        console.log(e.target.value);
        // output.append(e.target.value);
    },
    err => {
        console.log(err);
    },
    () => {
        console.log('completed');
    }
);

moveStream$.subscribe(
    e => {
       output.html('<h1>X: '+e.clientX+' Y: '+e.clientY+'</h1>');
    }
);

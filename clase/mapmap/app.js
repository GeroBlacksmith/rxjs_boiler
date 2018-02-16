'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source5$ = Rx.Observable.from (['Mishino','Kirara','Gina'])
.map(v => v.toUpperCase())
.map(v => 'Hola soy '+v);

source5$.subscribe(v=>console.log(v));
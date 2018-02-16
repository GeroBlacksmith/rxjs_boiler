'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source3$ = Rx.Observable.range(25,500);


source3$.subscribe ( 
    x => console.log('RANGE: '+x),
    err => console.log(err),
    completed => console.log("Terminó")
);
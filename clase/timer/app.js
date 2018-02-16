'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source2$ = Rx.Observable.timer(1000,100)
// con la function take() le das un final 
.take(5);

source2$.subscribe ( 
    x => console.log('Timer ' + x),
    err => console.log(err),
    completed => console.log("Terminó")
);
'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source8$=Rx.Observable.range(0,5).map(v=>'Source 1 '+v);
const source9$=Rx.Observable.interval(6,5).map(v=>'Source 2 '+v);

// concat va en orden serial y merge mete todo a la vez
Rx.Observable.concat(source8$,source9$)
.subscribe(
    x=>console.log(x)
);

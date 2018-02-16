'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source4$ = Rx.Observable.interval(1000)
.take(10)
.map(v => v*2);
source4$.subscribe(v=>console.log(v));

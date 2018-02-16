'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

Rx.Observable.interval(1500).merge(
    Rx.Observable.interval(500)
).take(10).subscribe(x=>console.log(x));
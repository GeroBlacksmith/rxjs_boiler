'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';





// NESTED SUBSCRIBER
// MAL
Rx.Observable.of('Hello').subscribe(
    x=>{
        Rx.Observable.of(x+' world!');
    }
)

// BIEN
Rx.Observable.of('Hello')
.mergeMap(
    v=>{
        return Rx.Observable.of(' world!');
    }

).subscribe(
    x=>console.log(x)
);

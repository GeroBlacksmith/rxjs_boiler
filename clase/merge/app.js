'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';



Rx.Observable.of( 'Hello' )
    .merge( Rx.Observable.of( 'Everyone' ) )
    .subscribe( x => console.log( x ) );

'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';


const source$ = new Rx.Observable(observer => {
    console.log('Creating Observable');
    observer.next('Hello world');
    observer.next('Another value');
    observer.error(new Error('Error: something went wrong'));
    setTimeout(
        () => {
            observer.next('yet another value')
            observer.complete();
        },
        3000);
});

source$
    .catch(err => Rx.Observable.of(err))
    .subscribe(x => {
        console.log(x);
    },
        err => {
            console.log(err);
        },
        complete => {
            console.log('complete');
        }
    );
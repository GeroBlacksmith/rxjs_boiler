'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

const pets =[
    
    {name:'Mishino'},{name:'Kirara'},{name:'Gina'}
];
const pet$=Rx.Observable.from(pets)
.pluck('name');
pet$.subscribe(x => console.log(x));